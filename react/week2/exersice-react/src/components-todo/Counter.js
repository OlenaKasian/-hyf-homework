import React, {useState} from 'react'


function Counter () {

    const [timer, settimer] = useState(0);

    setTimeout(() => {
        settimer(timer + 1)
    }, 1000)

    return (
        <div> 
            <p>You have used {timer} seconds on this site.</p>
        </div>
    )
    
}
export default Counter