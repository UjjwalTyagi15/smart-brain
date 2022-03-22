import React from "react";

const Rank =({user})=>{
 
    return (
    

    <div>
        <div className="white f3">
            {`${user.name.toUpperCase()},YOUR ENTRY COUNT IS:`}
        </div>
        <div className="white f2">
            {`#${user.entries}`}
        </div>
    </div>
)
}

export default Rank;