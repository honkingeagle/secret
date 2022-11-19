import { HiSun, HiMoon } from 'react-icons/hi'
import {BiLogOut} from 'react-icons/bi'

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
        <div className="h-screen bg-red-50 hidden 
                lg:flex flex-col lg:col-start-1 lg:col-end-2 
                font-bold items-center py-5 border-r-2 border-red-100">
            <button onClick={props.logOut}>
                <BiLogOut className='h-6 w-6 text-red-400' />
            </button>
            <div className='p-2 bg-red-400 mt-auto rounded-full items-center'>
                <div className={`rounded-full ${styles.lightMode.backGroundColor} px-2 py-3 cursor-pointer`}>
                    <HiSun 
                     className={`h-10 w-10 my-1 ${styles.lightMode.textColor}`}
                     onClick={() => props.toggleMode(false)}
                    />
                </div>
                <div className={`rounded-full px-2 py-3 ${styles.darkMode.backGroundColor} cursor-pointer`}>
                    <HiMoon 
                     className={`h-10 w-10 my-1 ${styles.darkMode.textColor}`}
                     onClick={() => props.toggleMode(true)}
                     />
                </div>
            </div>
        </div>
    )
}
export default TabBar