import TextTile from "./TextTile"
function Chat(props) {
    const styles = {
        display: props.textTileIsPressed ? 'hidden' : 'block',
        mode: props.mode ? 'text-black':'text-red-400'
    }
    
    return (
        <div className={`text-[2rem] bg-red-50 
                ${styles.mode} ${styles.display} col-span-full md:block 
                md:col-start-1 md:col-end-6 lg:col-start-2 lg:col-end-6 px-3 pt-5 md:pb-2`}>
            Secret
            <div className="text-[1rem] h-full pt-5">
                <h4 className="pb-10 border-b-1 border-red-100">All Messages</h4>
                <div className="chat h-3/4 overflow-y-auto">
                    {/* <TextTile 
                        nameOfChat={"Stacey"}
                        message={"Hi😍"}
                        time={"11:45AM"}
                    /> */}
                    <TextTile 
                        nameOfChat={"Lloyd"}
                        message={"Ayyee kiongozi😜"}
                        time={"9:00AM"}
                        isPressed={() => props.isPressed()}
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