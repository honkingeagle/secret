import {CheckIcon} from '@heroicons/react/solid'

export default function TextTile(props) {
    return (
        <div className="flex text-slate-800 cursor-pointer  py-4">
            <div className="bg-red-200 h-12 w-12 rounded-full"><img src="#" alt="" /></div>
                <div className="ml-4 ">
                    <span>{props.nameOfChat}</span>
                    <p className='opacity-70 font-semibold'>{props.message}</p>
                </div>
                <div className="flex flex-col ml-auto items-end justify-end">
                    <CheckIcon className='h-5 w-5 text-lime-600' />
                    <p className="text-sm font-semibold opacity-70">{props.time}</p>
                </div>
        </div>
    )
}