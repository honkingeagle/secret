import { useState } from "react"
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {CgMenuRightAlt} from 'react-icons/cg'
import AvailableChats from "./AvailableChats"
import TextTile from "./TextTile"

function Chat(props) {
    const [isPressed, setIsPressed] = useState(false)

    const styles = {
        display: props.textTileIsPressed ? 'hidden' : 'block',
        mode: props.mode ? 'text-black' : 'text-red-400',
    }
    const changeScreen = (value) => {
        setIsPressed(value)
    }

return (
    <div className={`secretChat text-[2rem] bg-red-50  h-screen
                ${styles.mode} ${styles.display} col-span-full md:block 
                md:col-start-1 md:col-end-6 lg:col-start-2 lg:col-end-6 px-3 pt-5 md:pb-2 h-full `}>
        {!isPressed && (<div>
            <div className="flex justify-between items-center">
                <p>Secret</p>
                <button>
                    <CgMenuRightAlt className="h-6 w-6" />
                </button>
            </div>
            <div className="text-[1rem] pt-5">
                <div className="pb-10  flex items-center border-b-1 border-red-100">
                    <h4>All Messages</h4>
                    <button className="ml-auto" onClick={() => setIsPressed(true)}>
                        <BsFillPersonPlusFill className="h-6 w-6" />
                    </button>
                </div>
                <div className="chatter overflow-y-auto">
                    {
                        Object.keys(props.data).map((contact,i)=>(
                            <TextTile
                                key={i}
                                profileImage={props.profileImage} 
                                contact={contact}
                                contacts={props.contacts}
                                messages={props.data[contact]}
                                isPressed={props.textTilePress}
                            />
                        ))
                    }
                </div>
            </div>
        </div>)}
        {isPressed && (
            <AvailableChats
                saveContact={props.saveContact}
                profileName={props.profileName}
                data={props.data}
                isPressed={changeScreen}
                contacts={props.contacts}
                textTilePress={props.textTilePress}
            />
        )}
    </div>
)
}
export default Chat