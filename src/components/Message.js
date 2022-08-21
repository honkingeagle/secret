function Message(props) {
    return (
        <div className="max-w-sm my-3 text-sm text-black font-semibold px-4 flex">
            <div className="">
                {/* <div className="flex justify-between">
                    <p className="text-purple-700 opacity-90">Stacey</p>
                </div> */}
                <div className="flex flex-col shadow-xl rounded-tr-3xl rounded-bl-3xl mt-3 bg-red-600 text-white p-6 opacity-70">
                    {props.message} 
                    <p className="mt-3 ml-auto text-[.7rem] font-semibold opacity-80">{props.time}</p>
                </div>
            </div>
        </div>
    )
}
export default Message