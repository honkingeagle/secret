import TextTile from "./TextTile"
function Chat(props) {
    return (
        <div className={`text-[2rem] bg-red-50 ${props.mode ? 'text-black':'text-red-400'} col-span-full md:col-start-3 md:col-end px-3 pt-5 md:pb-2`}>
            Secret
            <div className="text-[1rem] h-full pt-5">
                <h4 className="pb-10 border-b-1 border-red-100">All Messages</h4>
                <div className="chat h-3/4 overflow-y-auto">
                    <TextTile 
                        nameOfChat={"Stacey"}
                        message={"Hi😍"}
                        time={"11:45AM"}
                    />
                    <TextTile 
                        nameOfChat={"Lloyd"}
                        message={"Ayyee kiongozi😜"}
                        time={"9:00AM"}
                    />
                    <TextTile 
                        nameOfChat={"Brian"}
                        message={"Fiti✊🏾"}
                        time={"yesterday"}
                    />
                </div>
            </div>
        </div>
    )
}
export default Chat