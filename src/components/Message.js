function Message(props) {
    const styles = {
        ownerOfMessage: {
            backgroundColor: props.ownerOfMessage === props.profileName ? 'bg-red-100' : 'bg-red-600',
            textColor: props.ownerOfMessage === props.profileName ? 'text-red-700' :'text-white',
            marginLeft: props.ownerOfMessage === props.profileName ? 'ml-auto' : 'ml-0',
            timeTextColor: props.ownerOfMessage === props.profileName ? 'text-slate-900' : 'text-white',
        }
    }
    return (
        <div className={`max-w-[75%] md:max-w-sm my-3 ${styles.ownerOfMessage.marginLeft} text-m
                        ${styles.ownerOfMessage.textColor} font-semibold px-5 md:px-10 flex`}>

            <div className={`flex flex-col shadow-xl rounded-tr-3xl rounded-bl-3xl mt-3 
                            ${styles.ownerOfMessage.backgroundColor} px-2 py-4 opacity-70`}>
                    <div className="px-3">{props.message}</div> 
                <p className={`mt-3 ml-auto text-[.7rem] 
                    ${styles.ownerOfMessage.timeTextColor} font-semibold opacity-80`}>
                    {props.time}
                </p>
            </div>
        </div>
    )
}
export default Message