import {CheckIcon} from '@heroicons/react/solid'

export default function TextTile(props) {
    const address = props.nameOfChat
    const shortenedAddress = address.slice(0, 4)
    return (
        <div className="flex text-slate-800 cursor-pointer  py-4" onClick={() => props.textTilePress(address, props.contactName)}>
            <div className="bg-red-200 h-12 w-12 rounded-full"><img src="#" alt="" /></div>
                <div className="ml-4 ">
                    <span>{`${props.contactName ? `${props.contactName}-` : ''}`}{shortenedAddress}</span>
                    {/* <span></span> */}
                    <p className='opacity-70 font-semibold'>{props.message}</p>
                </div>
                <div className="flex flex-col ml-auto items-end justify-end">
                    <p className="text-sm font-semibold opacity-70">{props.time}</p>
                    <CheckIcon className='h-4 w-4 text-lime-700' />
                </div>
        </div>
    )
}