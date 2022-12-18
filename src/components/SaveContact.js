import {useState} from 'react'
import {  XIcon } from "@heroicons/react/outline"

function SaveContact (props) {
    const [formData, setFormData] = useState({contactName: ""})

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const newData = {
            ...formData,
            contactAddress: props.address,
        }
        props.saveContact(newData)
        
        setFormData({contactName: ""})        
    }

     
    return (
        <div className="shadow-md text-[1.2rem] absolute top-3 right-5 bg-red-100 pt-3 font-normal z-10">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex">
                     <label className="mx-2 text-red-600">Name</label>
                     <button type="button" onClick={props.closeModal} className='ml-auto'><XIcon className="h-7 w-7"/></button>
                </div>
                <input
                    className={`focus:outline-none text-black py-2 px-1 my-2 mx-2`} 
                    type="text"
                    placeholder="username"
                    name="contactName"
                    onChange={handleChange}
                    value={formData.contactName}
                    autoComplete="off"
                />
            <button type="submit" className="bg-red-300 text-red-600 w-full py-5">SAVE</button>
            </form>
        </div>
    )
}
export default SaveContact