import TextArea from './components/TextArea';
import {useEffect, useReducer} from 'react'
import Login from './components/Login'
import TabBar from './components/TabBar'
import Chat from './components/Chat'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/adventurer'
import Gun from 'gun'
import moment from 'moment';

const gun = Gun({
  peers: [
    'http://localhost:3030/gun'
  ]
})

const ACTION_TYPE = {
  SETDARKMODE: 'setDarkMode',
  SETPROFILENAME: 'setProfileName',
  SETTEXTTILEPRESSED: 'setIsPressed',
  SETCONTACTS: 'setContacts',
  SETMESSAGES: 'setMessages'
}

const reducer = (state, action) => {
    switch(action.type){
      case ACTION_TYPE.SETDARKMODE: 
        return {...state, darkMode: !state.darkMode}
      case ACTION_TYPE.SETPROFILENAME:
        return {...state, profileName: action.payload.profileName}
      case ACTION_TYPE.SETCONTACTS:
        return {...state, contacts: [...state.contacts, action.payload.contacts]}
      case ACTION_TYPE.SETMESSAGES:
        return {...state, messages: [...state.messages, action.payload.messages]}
      case ACTION_TYPE.SETTEXTTILEPRESSED:
        return {
          ...state, 
          textTileIsPressed: action.payload.pressed, 
          receipient: action.payload.receipient, 
          receipientName: action.payload.receipientName
          }
      default:
        return state
    }
}
const initialState = {
    darkMode: false,
    profileName: '',
    textTileIsPressed: false,
    receipient: '',
    receipientName: '',
    contacts: [],
    messages: [],
    profileImage: ''
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  let svg = createAvatar(style, {
    seed: 'custom-seed',
    dataUri: true,
    eyes: ['variant14'],
    skinColor: ['variant03'],
    hair: ['long12'],
    mouth: ['variant02']
    // ... and other options
})
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
    const contacts = gun.get(state.profileName).get('contacts')
    contacts.map().once(c => {
      dispatch({type: ACTION_TYPE.SETCONTACTS, payload: { contacts: {
        contactName: c.contactName,
        contactAddress:c.contactAddress
      }}})
    }
  )
    const messages = gun.get('messages')

    messages.map().once(m => { 
      dispatch({type: ACTION_TYPE.SETMESSAGES, payload: { messages: {
        from: m.from.toLowerCase(),
        to: m.to.toLowerCase(),
        message: m.message,
        createdAt: m.createdAt
      }}})

    })
}else {
  console.log("You are not logged in")
}
// eslint-disable-next-line react-hooks/exhaustive-deps
},[state.profileName])


    const contacts = []
    state.messages.forEach(msg=>{
        if(msg.from === state.profileName){
            if(!contacts.includes(msg.to)){
                contacts.push(msg.to)
            }
        }else{
            if(!contacts.includes(msg.from)){
                contacts.push(msg.from)
            }
        }
    })


    const msgsTo={}
    contacts.forEach(contact=>{
        const myMsgs = []

        state.messages.forEach(msg=>{
            if(msg.from === contact||msg.to === contact){
                myMsgs.push({...msg, contact})
            }
        })

        msgsTo[contact] = myMsgs
      })
      
  
  const saveMessage = (address, formData) => {
    gun.get('messages').set({
      from: state.profileName,
      to: address,
      message: formData.message,
      createdAt: moment().toLocaleString()
    })
    console.log(formData)
  }

  const saveContact = (formData) => {
    gun.get(state.profileName).get('contacts').set({
      contactName: formData.contactName,
      contactAddress: formData.contactAddress,
    })
    console.log(formData)

  }

  const logOut = async () => {
    console.log("logged out")
    dispatch({type:ACTION_TYPE.SETPROFILENAME, payload: {profileName: ""}})
  }

  const textTilePress = (address, name) => {
    dispatch({type:ACTION_TYPE.SETTEXTTILEPRESSED, payload: {
      pressed: true, receipient: address, receipientName: name}})
  }
  console.log(state.messages)
  return (
    <div className="max-h-screen tracking-wide overflow-hidden">
      
      {state.profileName && ( <div className='h-screen font-semibold grid grid-cols-12'>
        
          <>
            <TabBar 
              mode={state.darkMode}
              logOut={logOut}
              toggleMode={() => dispatch({type:ACTION_TYPE.SETDARKMODE})}
            />
            <Chat
              profileName={state.profileName}
              mode={state.darkMode}
              profileImage={svg}
              data={msgsTo}
              saveContact={saveContact}
              contacts={state.contacts}
              textTileIsPressed={state.textTileIsPressed}
              textTilePress={textTilePress}
            />
            <TextArea
              mode={state.darkMode}
              profileName={state.profileName}
              data={msgsTo}
              save={saveMessage}
              profileImage={svg}
              receipient={state.receipient}
              receipientName={state.receipientName}
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
