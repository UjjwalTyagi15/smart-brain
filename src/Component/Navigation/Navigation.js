import React from "react";
import './Navigation.css';


const Navigation = ({route ,onroutechange}) => {
    if(route=== 'signin')
    {return (
        <nav >
            <p onClick={()=>onroutechange('register')} className="f3 link dim black underline pointer pa3">Register</p>
        </nav>
    );}
    else if(route === 'register'){
        return (
            <nav >
                <p onClick={()=>onroutechange('signin')} className="f3 link dim black underline pointer pa3 ">Sign In </p>
            </nav>
        );
    }
    else{
        return (
            <nav >
                <p onClick={()=>onroutechange('signout')} className="f3 link dim black underline pointer pa3 " >Sign Out </p>
            </nav>
        );
    }
}
export default Navigation;