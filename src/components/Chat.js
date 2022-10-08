import { useState } from "react"
import TextTile from "./TextTile"
import { PencilIcon} from '@heroicons/react/solid'
import AvailableChats from "./AvailableChats"
import { nanoid } from 'nanoid'
function Chat(props) {
    const [isPressed, setIsPressed] = useState(false)
    const styles = {
        display: props.textTileIsPressed ? 'hidden' : 'block',
        mode: props.mode ? 'text-black':'text-red-400',
    }
    const changeScreen = (value) => {
        setIsPressed(value)
    }
    
    //get latest message based on time
    // const messages = props.messages.map(message => {
    //     const recipient = message.from === props.profileName ? message.to : message.from
    //     const contactName = props.contacts.map(c => (
    //         c.contactAddress === recipient ? c.contactName : ''))
    //     return (<TextTile
    //         key={nanoid()}
    //         contactName={contactName[0]} 
    //         nameOfChat={recipient}
    //         message={message.message}
    //         time={message.createdAt}
    //         textTilePress={props.textTilePress}
    //     />)
    // })
    return (
        <div className={`text-[2rem] bg-red-50  h-screen
                ${styles.mode} ${styles.display} col-span-full md:block 
                md:col-start-1 md:col-end-6 lg:col-start-2 lg:col-end-6 px-3 pt-5 md:pb-2 h-full `}>
            {!isPressed && (<div>
                 <div className="flex justify-between items:center">
                    <p>Secret</p>
                    <button className="bg-red-400 py-1 px-2 text-[1.1rem] text-white rounded-md" onClick={props.logOut} disabled={props.disabled}>
                        LogOut
                    </button>
                 </div>
                <div className="text-[1rem] pt-5">
                    <div className="pb-10 flex items-center border-b-1 border-red-100">
                        <h4 className="">All Messages</h4>
                        <button className="ml-auto" onClick={() => setIsPressed(true)}>
                            <PencilIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="chat overflow-y-auto">
                        {/* <TextTile 
                            nameOfChat={"Stacey"}
                            message={"Hi😍"}
                            time={"11:45AM"}
                            isPressed={() => props.isPressed()}
                        />
                        <TextTile 
                            nameOfChat={"Lloyd"}
                            message={"Ayyee kiongozi😜"}
                            time={"9:00AM"}
                        />
                        <TextTile 
                            nameOfChat={"Brian"}
                            message={"Fiti✊🏾"}
                            time={"yesterday"}
                        /> */}
                        {/* {messages} */}
                    </div>
                </div>
            </div>) }
            {isPressed && (
                <AvailableChats
                    saveContact={props.saveContact}
                    isPressed={changeScreen}
                    contacts={props.contacts}
                    textTilePress={props.textTilePress}
                />
            )}
        </div>
    )
}
export default Chat