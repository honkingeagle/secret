import Message from './Message'
function TextArea(props) {
    return (
        <div className={`h-screen bg-red-50 ${props.mode ? 'text-black':'text-red-400'} col-start-5 col-end-10 border-x-2 border-red-100`}>
            <div className="flex items-center text-[1rem] px-6 py-5 border-b-1 border-red-100">
                <div className="bg-red-200 h-12 w-12 rounded-full"><img src="#" alt="" /></div>
                <div className="ml-3">
                    <p className="text-red-500 text-[1.5rem]">Lakeisha</p>
                </div>
            </div>
            <div className="chat overflow-y-auto flex flex-col h-3/4">
                <Message 
                    message={"Honey 😍"}
                    time={"11:45AM"}
                />
                 <Message 
                    message={"I saw a creative design that i want you to see😁"}
                    time={"11:47AM"}
                />
                <Message 
                    message={"Promise me you won't laugh😩"}
                    time={"11:47AM"}
                />
                <Message 
                    message={"Promise me you won't laugh😩"}
                    time={"11:47AM"}
                />
                <Message 
                    message={"Promise me you won't laugh😩"}
                    time={"11:47AM"}
                />
            </div>
            <div className="px-4 py-8">
                <div className="bg-red-200 h-10 w-10 rounded-full"><img src="#" alt="" /></div>
            </div>
        </div>
    )
}
export default TextArea