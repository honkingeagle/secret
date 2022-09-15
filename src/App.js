import TabBar from './components/TabBar';
import Chat from '../src/components/Chat'
import TextArea from './components/TextArea';
import MoreInfo from './components/MoreInfo';
import {useState, useEffect, useReducer} from 'react'
import Gun from 'gun';
function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  function toggleMode(mode) {
    setDarkMode(mode)
  }

  const gun = Gun({
    peers: [
      'http://localhost:5000/gun'
    ]
  })

  const initialState = {
    messages: []
  }

  function reducer(state, message){
    return {
      messages: [message, ...state.messages]
    }
  }

  useEffect(() => {
    const messages = gun.get('messages')
    messages.map().on(m => {
      dispatch({
        name: m.name,
        message: m.message,
        createdAt: m.createdAt
      })
    })
  },[])

  function sendMessage(formData) {
    const messages = gun.get('messages')
    messages.set({
        name: 'Tiras',
        message: formData.message,
        createdAt: formData.createdAt
    })
 }
  return (
    <div className="h-screen font-semibold overflow-hidden">
      <div className='h-full grid grid-cols-12'>
        <TabBar 
          mode={darkMode}
          toggleMode={toggleMode}
        />
        <Chat
          chat={state} 
          mode={darkMode}
        />
        <TextArea
          chat={state} 
          mode={darkMode}
          sendMessage={sendMessage}
        />
        <MoreInfo />
      </div>
    </div>
  );
}

export default App;
