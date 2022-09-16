function Login(props) {
    return (
        <div className="h-full text-center pt-28">
            <p className="py-4 text-5xl font-bold">Secret</p>
            <div className="text-2xl">
                <p>Hi there, this is Secret, a</p>
                <p>Decentralized Messaging Platform</p>
                <p>Connect your Metamask Wallet to get started</p>
            </div>
            <button className="my-8 py-6 px-8 bg-black text-2xl text-white rounded-md" onClick={props.connectWallet}>
                Connect Wallet
            </button>
        </div>
    )
}

export default Login