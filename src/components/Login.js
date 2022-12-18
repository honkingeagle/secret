function Login(props) {
    
    return (
        <div className="h-screen text-center bg-red-50 pt-16">
            <p className="py-4 text-5xl font-bold text-red-400">
                Secret
            </p>
            
            <div className="text-2xl">
                <p>Connect your <strong className="text-red-400">METAMASK</strong> Wallet</p>
                <p>to get started...</p>
            </div>
            <button className="my-8 py-6 px-8 bg-red-400 text-2xl rounded-sm" onClick={props.connectWallet}>
                Connect Wallet
            </button>
            
        </div>
    )
}

export default Login