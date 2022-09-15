function Message(props) {
    const styles = {
        ownerOfMessage: {
            backgroundColor: props.ownerOfMessage === 'Tiras' ? 'bg-red-100' : 'bg-red-600',
            textColor: props.ownerOfMessage === 'Tiras' ? 'text-red-700' :'text-white',
            marginLeft: props.ownerOfMessage === 'Tiras' ? 'ml-auto' : 'ml-0',
            timeTextColor: props.ownerOfMessage === 'Tiras' ? 'text-slate-900' : 'text-black',
        }
    }
    return (
        <div className={`max-w-sm my-3 ${styles.ownerOfMessage.marginLeft} text-sm ${styles.ownerOfMessage.textColor} font-semibold px-10 flex`}>

            <div className={`flex flex-col shadow-xl rounded-tr-3xl rounded-bl-3xl mt-3 ${styles.ownerOfMessage.backgroundColor} p-6 opacity-70`}>
                {props.message} 
                <p className={`mt-3 ml-auto text-[.7rem] ${styles.ownerOfMessage.timeTextColor} font-semibold opacity-80`}>{props.time}</p>
            </div>
        </div>
    )
}
export default Message