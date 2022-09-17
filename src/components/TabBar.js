import { SunIcon, MoonIcon } from '@heroicons/react/solid'
function TabBar(props) {

    const styles = {
        lightMode: {
            backGroundColor: props.mode ? 'bg-red-400':'bg-white',
            textColor: props.mode ? 'text-white': 'text-red-400',
        },
        darkMode: {
            backGroundColor: props.mode ? 'bg-white':'bg-red-400',
            textColor: props.mode ? 'text-red-400': 'text-white',
        }
        
    }
        
    return (
        <div className="h-screen bg-red-50 hidden md:flex flex-col md:col-start-1 md:col-end-3 font-bold items-center p-5 border-r-2 border-red-100">
            {/* <UserAddIcon className='w-14 hover:text-slate-400 cursor-pointer'/> */}
            <span>🔥</span>
            <div className='p-2 bg-red-400 mt-auto rounded-full items-center'>
                <div className={`rounded-full ${styles.lightMode.backGroundColor} px-2 py-3 cursor-pointer`}>
                    <SunIcon 
                     className={`h-10 w-10 my-1 ${styles.lightMode.textColor}`}
                     onClick={() => props.toggleMode(false)}
                    />
                </div>
                <div className={`rounded-full px-2 py-3 ${styles.darkMode.backGroundColor} cursor-pointer`}>
                    <MoonIcon 
                     className={`h-10 w-10 my-1 ${styles.darkMode.textColor}`}
                     onClick={() => props.toggleMode(true)}
                     />
                </div>
            </div>
        </div>
    )
}
export default TabBar