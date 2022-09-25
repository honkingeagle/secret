import { ArrowSmLeftIcon, PlusIcon } from "@heroicons/react/outline"

function AvailableChats(props) {
    return (
        <div className="text-[1.5rem]">
            <div className="flex justify-between">
                <div className="flex items-center ">
                    <button onClick={() => props.isPressed(false)}><ArrowSmLeftIcon className='h-8 w-8 mr-3' /></button>
                    <p>Chats</p>
                </div>
                <button><PlusIcon className="h-7 w-7"/></button>
            </div>
        </div>
    )
}
export default AvailableChats