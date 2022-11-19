import { useEffect, useState } from 'react'
import Message from './Message'
import moment from 'moment'
import { HiOutlineArrowSmLeft, HiPaperAirplane } from 'react-icons/hi'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/adventurer'


function TextArea(props) {
    const [formData, setFormData] = useState({message: ""})
    let svg = createAvatar(style, {
        seed: 'custom-seed',
        dataUri: true,
        eyes: ['variant14'],
        skinColor: ['variant03'],
        hair: ['short06'],
        mouth: ['variant02']
        // ... and other options
    })

    const address = props.receipient
    const shortenedAddress = address.slice(0,4)
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
        console.log(`Address: ${address}`)
        setFormData({message: ""})
    }

    useEffect(() => {
        const obj = document.getElementById("chat")
        obj.scrollTop = obj.scrollHeight
    },[props.data])
    return (
        <div className={`h-screen overflow-hidden 
                    ${styles.display} col-span-full md:block bg-red-50 
                    ${styles.mode}
                    md:col-start-6 md:col-end-13 border-x-2 border-red-100`}>
            <div className={`flex items-center text-[1rem] 
                md:pl-5 md:py-5 py-3 border-b-1 border-red-100 sticky md:static`}>

                <button className={`${styles.display} md:hidden`} onClick={props.isPressed}>
                        <HiOutlineArrowSmLeft className='h-8 w-8 mr-3'/>
                </button>
                <div className="h-14 w-14"><img src={props.profileImage} alt="" /></div>
                <div className="ml-6 flex">
                    <p className="text-red-500 text-[1.5rem]">{`${props.receipientName ? `${props.receipientName}-` : ''}`}{shortenedAddress}</p>
                </div>

            </div>
            <div id="chat" className="chat scroll-smooth overflow-y-auto flex flex-col h-3/4">
                {Object.keys(props.data).includes(props.receipient) && props.data[props.receipient]
                .sort((a,b) => moment(a.createdAt).diff(b.createdAt)).map(msg=><Message 
                    message={msg.message}
                    time={moment(msg.createdAt).format('HH:mm')}
                    ownerOfMessage={msg.from}
                    profileName={props.profileName}
                /> )}
                
            </div>
            <div className="px-1 pt-3 md:py-6 flex items-center sticky md:static">
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
        </div>
    )
}
export default TextArea