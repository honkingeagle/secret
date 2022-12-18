import { useEffect, useState } from 'react'
import Message from './Message'
import moment from 'moment'
import { HiOutlineArrowSmLeft, HiPaperAirplane } from 'react-icons/hi'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/adventurer'
import nochat from '../assets/nochat.png'
import {BsChatSquareTextFill} from 'react-icons/bs'
import { getDailyChats } from '../config/functions'
import SaveContact from './SaveContact'
function TextArea(props) {
    const [formData, setFormData] = useState({message: ""})
    const [modalIsOpen, setIsOpen] = useState(false)

    const svg = createAvatar(style, {
        seed: props.receipient,
        dataUri: true,
    })

    const address = props.receipient
    const shortenedAddress = address.slice(0,5)
    const styles = {
        display: props.textTileIsPressed ? 'block' : 'hidden',
        mode: props.mode ? 'text-black':'text-red-400',
    }

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
     function handleSubmit(event){
        event.preventDefault()
        props.save(address, formData)
        setFormData({message: ""})
    }

    useEffect(() => {
        if(props.textTileIsPressed){
            const obj = document.getElementById("chat")
            obj.scrollTop = obj.scrollHeight
        }
        
    },[props.data, props.textTileIsPressed])
    return (
        <div className={`h-screen overflow-hidden 
                    ${styles.display} col-span-full md:block bg-red-50 
                    ${styles.mode}
                    md:col-start-6 md:col-end-13 border-x-2 border-red-100`}>
            {!props.textTileIsPressed && (
            <div className="shape h-full flex flex-col items-center">
                <p className='mt-10 text-[2rem]'>Start Chatting</p>
                <div className='rounded-full mt-12 h-96 w-96 overflow-hidden '>
                    <img src={nochat} alt="#"/>
                </div>
                <p className='flex items-center mt-10 text-md'>
                    WE DON'T OWN YOUR DATA, ENJOY!
                <BsChatSquareTextFill className='ml-2 h-10 w-10'/>
                </p>
            </div>
            )}
            {props.textTileIsPressed && (
            <div className='h-full'>
                <div className={`flex items-center text-[1rem] 
                    md:pl-5 md:py-5 py-3 border-b-1 border-red-100 relative md:static`}>

                    <button className={`${styles.display} md:hidden`} onClick={props.isPressed}>
                            <HiOutlineArrowSmLeft className='h-8 w-8 mr-3'/>
                    </button>
                    <div className="h-14 w-14"><img src={props.profileImage} alt="" /></div>
                    
                    <p className="address text-red-500 text-[1.5rem]">
                        {`${props.receipientName ? `${props.receipientName} (${shortenedAddress})` : shortenedAddress}`} 
                    </p>
            
                    {props.receipientName ? ''
                    :<button onClick={() => setIsOpen(true)} 
                    className='ml-auto mr-5 border-dashed 
                        border-red-300 border-2 px-2 py-4 rounded-lg'>
                        SAVE CONTACT
                    </button>}
                    {modalIsOpen && (
                    <SaveContact
                        saveContact={props.saveContact}
                        address={address} 
                        setIsOpen={setIsOpen}
                        closeModal={() => setIsOpen(false)}
                    />)}

                </div>
                <div id="chat" className="chat w-full scroll-smooth text-black 
                overflow-y-auto bg-[length:60%] lg:bg-[length:30%] flex flex-col h-3/4">
                
              {            
                    getDailyChats(props.data[props.receipient]).map(msgGroup=>(
                            <div className='flex flex-col'>
                                <div className='mx-auto text-xl p-4 bg-red-200 shadow-lg my-14'>
                                    {moment(msgGroup.date,'DD/MM/YYYY').calendar(null, {
                                        sameDay: '[Today]',
                                        lastDay: '[Yesterday]',
                                        sameElse: 'MMM DD, YYYY'
                                        
                                    })}
                                </div>

                                {msgGroup.data.map((msg,i)=>(
                                    <Message 
                                        key={i}
                                        message={msg.message}
                                        time={moment(msg.createdAt).format('HH:mm')}
                                        ownerOfMessage={msg.from}
                                        profileName={props.profileName}
                                />
                                ))}
                                
                            </div>
                    ))
                    }
                </div>
                <div className="message bg-[length:60%] lg:bg-[length:30%] px-1 py-8 md:py-8 flex items-center sticky md:static">
                    <div className="h-6 w-6 mx-2"><img src={svg} alt="" /></div>
                    <form className="flex items-center w-full" onSubmit={handleSubmit}>
                        <input 
                            className={`shadow-sm rounded-full w-full px-5 py-4 text-black`}
                            type="text"
                            placeholder="Message"
                            name="message"
                            onChange={handleChange}
                            value={formData.message}
                            autoComplete="off"
                        />
                        <button><HiPaperAirplane className="h-8 w-8 mx-1"/></button>
                    </form>
                </div>
            </div>)}
        </div>
    )
}
export default TextArea