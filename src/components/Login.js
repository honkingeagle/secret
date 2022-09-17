function Login(props) {
    return (
        <div className="h-full text-center bg-red-50 pt-16">
            <p className="py-4 text-5xl font-bold">Secret</p>
            <div className="text-2xl">
                <p>Hi there, this is Secret</p>
                <p>a <strong>Decentralized Messaging Platform</strong></p>
                <p>Connect your METAMASK</p>
                <p> Wallet to get started...</p>
            </div>
            <button className="my-8 py-6 px-8 bg-black text-2xl text-white rounded-md" onClick={props.connectWallet}>
                Connect Wallet
            </button>
        </div>
    )
}

export default Login