import moment from 'moment'
import {IoCheckmarkDone, IoCheckmark} from 'react-icons/io5'

export default function TextTile(props) {
    const address = props.contact
    const shortenedAddress = address.slice(0, 4)

    const getLatestMsg =(msgs = [])=>{
        return msgs.sort((a, b) => moment(b.createdAt).diff(a.createdAt))[0] || {}
    }

    // const [latest] = useState(props.messages.sort((a, b) => moment(b.createdAt).diff(a.createdAt))[0] || {})
    
    
    return (
        <div className="flex text-slate-800 cursor-pointer  py-4" onClick={() => props.isPressed(address)}>
            <div className="h-12 w-12"><img src={props.profileImage} alt="" /></div>
            <div className="ml-4 ">
                <span>{shortenedAddress}</span>
                <p className='opacity-70 font-semibold'>{getLatestMsg(props.messages).message}</p>
            </div>
            <div className="flex flex-col ml-auto items-end justify-end">
                <p className="text-sm font-semibold opacity-70">{moment(getLatestMsg(props.messages).createdAt).format('HH:mm')}</p>
                {props.isRead? <IoCheckmarkDone className='h-4 w-4 text-lime-700' />: <IoCheckmark className='h-4 w-4 text-lime-700' />}
            </div>
        </div>
    )
}