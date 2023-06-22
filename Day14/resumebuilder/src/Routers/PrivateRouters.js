import Otp from "../Page/Otp";
import Add from "../Page/Add";
import Resume from "../Page/Resume";
import Login from "../Page/Login";
export const PrivateRouter=[
    {
        path:'/Otp',
        component:<Otp/>
    },
    {
        path:'/Add',
        component:<Add/>
    },
    {
        path:'/Resume',
        component:<Resume/>
    },
    {
        path:'/',
        component:<Login/>
    },
]