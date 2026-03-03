// import React from 'react'

// function Navbar(props) {
//     // console.log(props);

//     return (
//         <>
//             <h1>{props.title}</h1>
//             <h1>{props.link}</h1>
//             <h1>{props.number}</h1>
//         </>

//     )
// }

// export default Navbar


//  Destructuring

// import React from 'react'

// function Navbar(title, number, link) {
//     // making the key objects of object to direct access the main object keys

//     return (
//         <>
//             <h1>{title}</h1>
//             <h1>{link}</h1>
//             <h1>{number}</h1>
//         </>

//     )
// }

// export default Navbar



// DataFlow

import React from 'react'

function Navbar({data}){
    console.log(data);
    
    return(
        <div>
            <Button data={data}/>
        </div>
    )
}

function Button(data){
    return(
        <button>{data}</button>     
    )
}

export default Navbar