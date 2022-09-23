import { useState } from 'react'
import Message from './Message'
import {PaperAirplaneIcon, ArrowSmLeftIcon} from '@heroicons/react/outline'

function TextArea(props) {
    const [formData, setFormData] = useState({message: ""})
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
        console.log(formData)
        setFormData({message: ""})
    }

    
    return (
        <div className={`h-screen ${styles.display} col-span-full md:block bg-red-50 
                    ${styles.mode}
                    md:col-start-6 md:col-end-13 border-x-2 border-red-100`}>

            <div className={`flex items-center text-[1rem] 
                md:pl-5 py-5 border-b-1 border-red-100`}>

                <button className={`${styles.display} md:hidden`} onClick={props.isPressed}>
                        <ArrowSmLeftIcon className='h-8 w-8 mr-3'/>
                </button>
                <div className="bg-red-200 h-12 w-12 rounded-full"><img src="#" alt="" /></div>
                <div className="ml-3 flex">
                    <p className="text-red-500 text-[1.5rem]">Stacey</p>
                </div>

            </div>
            <div className="chat overflow-y-auto flex flex-col h-3/4">
                
                <Message 
                    message={"Honey 😍"}
                    time={"11:45AM"}
                    ownerOfMessage={''}
                />
                 <Message 
                    message={"I saw a creative design that i want you to see😁"}
                    time={"11:47AM"}
                    ownerOfMessage={''}
                />
                <Message 
                    message={"Show me😁"}
                    time={"11:47AM"}
                    ownerOfMessage={props.profileName}
                />
                <Message 
                    message={"Promise me you won't laugh😩"}
                    time={"11:47AM"}
                    ownerOfMessage={''}
                />
                <Message 
                    message={"pinky promise🤝"}
                    time={"11:47AM"}
                    ownerOfMessage={"Tiras"}
                />
                <Message 
                    message={"Promise me you won't laugh😩"}
                    time={"11:47AM"}
                    ownerOfMessage={''}
                />
            </div>
            <div className="px-1 py-8 flex items-center">
                <div className="bg-red-200 h-6 w-6 rounded-full mx-2"><img src="#" alt="" /></div>
                <form className="flex items-center w-full" onSubmit={handleSubmit}>
                    <input 
                        className={`shadow-sm rounded-full w-full px-5 py-4`}
                        type="text"
                        placeholder="Message"
                        name="message"
                        onChange={handleChange}
                        value={formData.value}
                    />
                    <button><PaperAirplaneIcon className="h-8 w-8 mx-1"/></button>
                </form>
            </div>
        </div>
    )
}
export default TextArea