import TextTile from "./TextTile"
function Chat(props) {
    return (
        <div className={`text-[2rem] bg-red-50 ${props.mode ? 'text-black':'text-red-400'} col-start-2 col-end-5 px-7 py-5`}>
            Secret
            <div className="text-[1rem] h-full pt-5">
                <h4 className="pb-10 border-b-1 border-red-100">All Messages</h4>
                <div className="chat h-3/4 overflow-y-auto">
                    <TextTile 
                        nameOfChat={"EPL Fanatics"}
                        message={"Golazo🤯"}
                        time={"1:30PM"}
                    />
                    <TextTile 
                        nameOfChat={"EPL Fanatics"}
                        message={"Banaa"}
                        time={"1:30PM"}
                    />
                    <TextTile 
                        nameOfChat={"Tiras"}
                        message={"Afternoon"}
                        time={"12:00PM"}
                    />
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
                    <TextTile 
                        nameOfChat={"Faith"}
                        message={"Sawa😂"}
                        time={"yesterday"}
                    />
                    <TextTile 
                        nameOfChat={"Bachelor of Science"}
                        message={"Assignment.txt"}
                        time={"yesterday"}
                    />
                </div>
            </div>
        </div>
    )
}
export default Chat