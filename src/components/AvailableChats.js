import { ArrowSmLeftIcon, PlusIcon, XIcon } from "@heroicons/react/outline"
import { useState } from "react"
import ContactTile from "./ContactTile"
import Modal from "./Modal"

function AvailableChats(props) {
    const [modalIsOpen, setIsOpen] = useState(false)
    const contacts = props.contacts.map((contact, i) => (
        <ContactTile 
            key={i}
            messages={props.data[contact]}
            contact={contact}
            textTilePress={props.textTilePress}
        />
    ))
    return (
        <div className="w-full text-[1.4rem]">
            <div className="flex justify-between border-b-1 border-red-100 relative">
                <div className="flex items-center ">
                    <button onClick={() => props.isPressed(false)}><ArrowSmLeftIcon className='h-8 w-8 mr-3' /></button>
                    <p className="text-lg">Select Chat</p>
                </div>
                {!modalIsOpen && (<button onClick={() => setIsOpen(true)}>
                    <PlusIcon className="h-7 w-7"/></button>
                )}
                {modalIsOpen && (<button onClick={() => setIsOpen(false)}>
                    <XIcon className="h-7 w-7"/> 
                </button>)}
                {modalIsOpen && (
                <Modal
                  saveContact={props.saveContact}
                  profileName={props.profileName}
                  closeModal={() => setIsOpen(false)}
                />)}
            </div>
            {contacts}
        </div>
    )
}
export default AvailableChats