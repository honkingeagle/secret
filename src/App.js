import TabBar from './components/TabBar';
import Chat from '../src/components/Chat'
import TextArea from './components/TextArea';
import MoreInfo from './components/MoreInfo';
import {useState} from 'react'
function App() {

  const [darkMode, setDarkMode] = useState(false)
  function toggleMode(mode) {
    setDarkMode(mode)
  }
  return (
    <div className="h-screen text-[2rem] font-bold overflow-hidden">
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
