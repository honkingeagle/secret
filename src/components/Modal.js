import {useState} from 'react'
function Modal (props) {
    const [formData, setFormData] = useState({contactName: "", contactAddress: ""})


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
        console.log(formData)
        props.saveContact(formData)
        setFormData({contactName: "", contactAddress: ""})
        props.closeModal()
    }

     
    return (
        <div className="shadow-md text-[1.2rem] absolute top-9 right-0 bg-red-100 pt-3 font-normal">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex">
                     <label className="mx-2 text-red-600">Name</label>
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
                <label className="mx-2 text-red-600">Address</label>
                <input 
                    className={`focus:outline-none text-black py-2 px-1 my-2 mx-2`} 
                    type="text"
                    placeholder="0x123..."
                    name="contactAddress"
                    onChange={handleChange}
                    value={formData.contactAddress}
                    autoComplete="off"
                />
            <button className="bg-red-300 text-red-600 w-full py-5">SAVE</button>
            </form>
        </div>
    )
}
export default Modal