import TextArea from './components/TextArea';
import {useEffect, useReducer} from 'react'
import Login from './components/Login'
import TabBar from './components/TabBar'
import Chat from './components/Chat'
import Gun from 'gun'

const gun = Gun({
  peers: [
    "http://localhost:5000/gun"
  ],
})

const ACTION_TYPE = {
  SETDARKMODE: 'setDarkMode',
  SETPROFILENAME: 'setProfileName',
  SETTEXTTILEPRESSED: 'setIsPressed',
  SETMESSAGES: 'setAll'
}
const reducer = (state, action) => {
    switch(action.type){
      case ACTION_TYPE.SETDARKMODE: 
        return {...state, darkMode: !state.darkMode}
      case ACTION_TYPE.SETPROFILENAME:
        return {...state, profileName: action.payload.profileName}
      case ACTION_TYPE.SETTEXTTILEPRESSED:
        return {
          ...state, 
          textTileIsPressed: action.payload.pressed, 
          receipient: action.payload.receipient, 
          receipientName: action.payload.receipientName}
      // case ACTION_TYPE.SETMESSAGES:
      //   return {...state, messages: action.payload.messages}
      case ACTION_TYPE.SETMESSAGES:
        return {...state, messages: [action.payload.messages, ...state.messages]}
      case ACTION_TYPE.SETCONTACTS:
        return {...state, contacts: [action.payload.contacts, ...state.contacts]}
      default:
        return state
    }
}
const initialState = {
    darkMode: false,
    profileName: '',
    messages: [],
    contacts: [],
    textTileIsPressed: false,
    receipient: '',
    receipientName: ''
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
  useEffect(() => {
      if (state.profileName) {
      //   const contacts = gun.get(state.profileName).get('contacts')
      //   contacts.map(ct => ct).once( c => {
      //     dispatch({type: ACTION_TYPE.SETCONTACTS, payload: { contacts: {
      //       contactName: c.contactName,
      //       contactAddress:c.contactAddress
      //     }}})
      //   }
      // )
      //   const messages = gun.get('messages')
      //   // const msg = []


      //   messages.map().once(m => { 
      //     // msg.unshift(m)
      //     dispatch({type: ACTION_TYPE.SETMESSAGES, payload: { messages: {
      //       from: m.from,
      //       to: m.to,
      //       message: m.message,
      //       createdAt: m.createdAt
      //     }}})

      //   })
      //   // console.log(msg)
      //   // dispatch({type: ACTION_TYPE.SETMESSAGES, payload: { messages: msg}})

      
    }else {
      console.log("You are not logged in")
    }
      
  },[state.profileName])

  const saveMessage = (address, formData) => {
    // gun.get('messages').set({
    //   from: state.profileName,
    //   to: address,
    //   message: formData.message,
    //   createdAt: "12:45AM"
    // })
    console.log(formData)
  }

  const saveContact = (formData) => {
    // gun.get(state.profileName).get('contacts').set({
    //   contactName: formData.contactName,
    //   contactAddress: formData.contactAddress,
    // })
    console.log(formData)

  }

  const textTilePress = (address, name) => {
    // dispatch({type:ACTION_TYPE.SETTEXTTILEPRESSED, payload: {
    //   pressed: true, receipient: address, receipientName: name}})
    console.log('Text tile pressed')
  }
  return (
    <div className="max-h-screen tracking-wide overflow-hidden">
      {/* {console.log(state.contacts)} */}
      {/* {console.log(state.messages)} */}
      {/* {console.log(state.profileName)} */}
      {state.profileName && ( <div className='h-screen font-semibold grid grid-cols-12'>
        
          <>
            <TabBar 
              mode={state.darkMode}
              toggleMode={() => dispatch({type:ACTION_TYPE.SETDARKMODE})}
            />
            <Chat
              profileName={state.profileName}
              mode={state.darkMode}
              messages={state.messages}
              contacts={state.contacts}
              saveContact={saveContact}
              // logOut={logOut}
              textTileIsPressed={state.textTileIsPressed}
              textTilePress={textTilePress}
            />
            <TextArea
              mode={state.darkMode}
              profileName={state.profileName}
              receipient={state.receipient}
              receipientName={state.receipientName}
              saveMessage={saveMessage}
              textTileIsPressed={state.textTileIsPressed}
              isPressed={() => dispatch({type:ACTION_TYPE.SETTEXTTILEPRESSED, payload: {
                pressed: false, receipient: '', receipientName: ''}})}
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
