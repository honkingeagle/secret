function Login(props) {
    return (
        <div className="h-screen text-center bg-red-50 pt-16">
            <p className="py-4 text-5xl font-bold">Secret</p>
            <div className="text-2xl">
                <p>Connect your <strong>METAMASK</strong> Wallet</p>
                <p>to get started...</p>
            </div>
            <button className="my-8 py-6 px-8 bg-black text-2xl text-white rounded-md" onClick={props.connectWallet}>
                Connect Wallet
            </button>
        </div>
    )
}

export default Login