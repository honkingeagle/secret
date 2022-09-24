import TextArea from './components/TextArea';
import {useEffect, useReducer} from 'react'
import Login from './components/Login'
import TabBar from './components/TabBar'
import Chat from './components/Chat'
import {data} from './Data'

const ACTION_TYPE = {
  SETDARKMODE: 'setDarkMode',
  SETPROFILENAME: 'setProfileName',
  SETTEXTTILEPRESSED: 'setIsPressed'
}
const reducer = (state, action) => {
    switch(action.type){
      case ACTION_TYPE.SETDARKMODE: 
        return {...state, darkMode: !state.darkMode}
      case ACTION_TYPE.SETPROFILENAME:
        return {...state, profileName: action.payload.profileName}
      case ACTION_TYPE.SETTEXTTILEPRESSED:
        return {...state, textTileIsPressed: action.payload.pressed}
      default:
        return state
    }
}
const initialState = {
    darkMode: false,
    profileName: '',
    messages: [],
    textTileIsPressed: false
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
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

        dispatch({type:ACTION_TYPE.SETPROFILENAME, payload: {profileName: account}})

      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error)
    }
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
        dispatch({type:ACTION_TYPE.SETPROFILENAME, payload: {profileName: accounts[0]}})
      } catch (error) {

      }
    }
  return (
    <div className="max-h-screen tracking-wide overflow-hidden">
      {console.log(data)}
      {state.profileName && ( <div className='h-screen font-semibold grid grid-cols-12'>
        
          <>
            <TabBar 
              mode={state.darkMode}
              toggleMode={() => dispatch({type:ACTION_TYPE.SETDARKMODE})}
            />
            <Chat
              data={data} 
              mode={state.darkMode}
              textTileIsPressed={state.textTileIsPressed}
              isPressed={() => dispatch({type:ACTION_TYPE.SETTEXTTILEPRESSED, payload: {pressed: true}})}
            />
            <TextArea
              mode={state.darkMode}
              profileName={state.profileName}
              textTileIsPressed={state.textTileIsPressed}
              isPressed={() => dispatch({type:ACTION_TYPE.SETTEXTTILEPRESSED, payload: {pressed: false}})}
            />
          </>
        
      </div>
      )}
      {!state.profileName && (
        <Login 
          connectWallet={connectWallet}
        />
      )}
    </div>
  );
}

export default App;
