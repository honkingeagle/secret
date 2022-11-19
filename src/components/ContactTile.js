import { ClipboardCheckIcon, ClipboardIcon } from "@heroicons/react/solid"
import { useState } from "react"

function ContactTile(props) {
    const [copied, IsCopied] = useState(false)
    const address = props.contact.contactAddress
    const name = props.contact.contactName

    const shortenedAddress = address.slice(0, 4)

    const copyAddressToClipboard = () => {
        navigator.clipboard.writeText(address)
        IsCopied(true)
        setTimeout(() => {
            IsCopied(false)
        }, 3000)
    }
    return (
        <div className=" text-slate-900 flex justify-between items-center py-4 text-[1.1rem] my-4">
            <div className="cursor-pointer" onClick={() => props.textTilePress(address, name)}>
                <p>{name}-{shortenedAddress}</p>
            </div>
            <div className="rounded-lg p-1 bg-red-100">
                <button  onClick={copyAddressToClipboard}>
                        {!copied && <ClipboardIcon className="h-6 w-6 text-red-500"/>}
                        {copied && <ClipboardCheckIcon className="h-6 w-6 text-red-500"/>}
                </button>
            </div>
        </div>
    )
}
export default ContactTile