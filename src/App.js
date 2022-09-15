import TabBar from './components/TabBar';
import Chat from '../src/components/Chat'
import TextArea from './components/TextArea';
import MoreInfo from './components/MoreInfo';
import {useEffect, useState} from 'react'
function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [profileName, setProfileName] = useState('')
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log("Make sure you have metamask")
        return
      } else {
        console.log(`We have the ethereum object ${ethereum}`)
      }

      const accounts = await ethereum.request({ method: "eth_accounts"})

      if (accounts.length !== 0) {
        const account = accounts[0]
        console.log(`Found an authorized account: ${account}`)
        setProfileName(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error)
    }
  }

    function toggleMode(mode) {
      setDarkMode(mode)
    }

    useEffect(() => {
      checkIfWalletIsConnected()
    },[])

    const connectWallet = async () => {
      try {
        const { ethereum } = window

        if (!ethereum) {
          alert("Get Metamask")
          return
        }

        const accounts = await ethereum.request({method: "eth_requestAccounts"})

        console.log(`Connected ${accounts[0]}`)
        setProfileName(accounts[0])
      } catch (error) {

      }
    }
  return (
    <div className="h-screen font-semibold overflow-hidden">
      <div className='h-full grid grid-cols-12'>
        {profileName && (
          <>
            <TabBar 
              mode={darkMode}
              toggleMode={toggleMode}
            />
            <Chat 
              mode={darkMode}
            />
            <TextArea
              mode={darkMode}
              profileName={profileName}
            />
            <MoreInfo />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
