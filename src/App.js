import TabBar from './components/TabBar';
import Chat from '../src/components/Chat'
import TextArea from './components/TextArea';
import MoreInfo from './components/MoreInfo';
import {useState, useEffect, useReducer} from 'react'
import Gun from 'gun';
function App() {

  const [darkMode, setDarkMode] = useState(false)
  function toggleMode(mode) {
    setDarkMode(mode)
  }

  const gun = Gun({
    peers: [
      'http://localhost:5000/gun'
    ]
  })

  function reducer(state, message){
    return {
      messages: [message, ...state.messages]
    }
  }
  return (
    <div className="h-screen font-semibold overflow-hidden">
      <div className='h-full grid grid-cols-12'>
        <TabBar 
          mode={darkMode}
          toggleMode={toggleMode}
        />
        <Chat 
          mode={darkMode}
        />
        <TextArea 
          mode={darkMode}
        />
        <MoreInfo />
      </div>
    </div>
  );
}

export default App;
