// import React from 'react'

// function Component(){
//   return(
//     <div>
//       <h1>Hello this is React</h1>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, tenetur! Sapiente suscipit expedita repellendus, accusantium a ut cumque praesentium possimus dolorum doloremque. Mollitia officiis voluptatum nobis natus sunt recusandae magnam.
//       Fuga illo ad quasi ullam ratione ex ipsa animi molestiae quae unde corporis nisi magnam, perspiciatis sint repudiandae. Fuga sit recusandae nesciunt optio corrupti animi ab pariatur blanditiis. Mollitia, repudiandae.
//       Id fuga culpa eveniet commodi nostrum blanditiis officia quos officiis consequuntur repellat facere distinctio odio eum iste, voluptatum vitae fugit autem iusto molestias expedita tempore ea ipsa illum numquam! Numquam.
//       Optio magni veniam libero laudantium quasi consequatur asperiores non natus sunt vel. Tempora sed repudiandae debitis doloribus! Incidunt aperiam, repudiandae dolore sed laborum, totam earum eius explicabo, obcaecati dicta cum!
//       Officia corrupti vel quasi error odio laborum velit reiciendis totam cumque saepe facilis explicabo animi, amet nam laboriosam debitis repellat, commodi tempore. Ratione veritatis asperiores dolores praesentium nemo sequi atque.
//       Reiciendis placeat veritatis explicabo maxime harum provident quisquam nihil obcaecati eveniet fugit consectetur atque doloremque quas magni earum reprehenderit necessitatibus ea sint, consequatur commodi natus dignissimos facere optio culpa. In.
//       Adipisci molestias hic quaerat recusandae molestiae error tempore nihil officiis! Eos, excepturi. Necessitatibus non ratione consequatur perferendis sequi, sint nam recusandae dolor hic, eos, laudantium nesciunt dolores dolore quaerat ab!
//       Deleniti laborum assumenda itaque soluta sit provident, eius quod debitis atque ea! Dolorem dolore exercitationem est cupiditate temporibus, ipsa obcaecati, necessitatibus placeat fugit sed recusandae rem iure repellat. Atque, expedita.
//       Aperiam pariatur dolorum quasi quibusdam iure qui enim esse exercitationem libero facilis maxime id error impedit fuga adipisci repellendus fugiat eaque repudiandae omnis numquam, doloremque magni? Minus, libero quidem! Consequatur.
//       Delectus, alias! Deserunt modi eius, id harum facere porro quasi perferendis vel. Omnis similique obcaecati, incidunt, ipsa deleniti porro molestias quod ullam, ea earum enim quaerat quam illum maxime facilis?</p>
//       <Component2/>  {/* component under components call*/}
//     </div>
//   )
// }

// function Component2(){
//   return(
//     <div>
//       <img src="https://imgs.search.brave.com/N9s8V6eiYDJdBSA2ipfv6pIenaAoWmCq8QgDEfyupPI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9Qb2tl/bW9uLVBpa2FjaHUu/cG5n" alt="" />
//     </div>
//   )
// }


// function App() {
//   return(
//     <>
//     <Component/>   {/*self closing tag or function call */}
//      {/* // { Components is a reusable piece of UI.
//           One components can contain others...} */}
//     </>
//   )
// }

// export default App



// props and state
// import React, { useState } from 'react'
// import Navbar from './Navbar'

// function App() {

//   /// state are call here
//   const [count, setCount] = useState(0);
//   //  console.log(setCount)

//   // state is update  0+1 = 1 , 2, 3, 4
//   function Increment(){
//     setCount(count+1)  // to update the state use this function for change the state
//   }

//   function Decrement(){
//     setCount(count -1)
//   }

//   function Reset(){
//     setCount(0)
//   }

//   return (
//     <>
//       {/* <Navbar  title="Nabar1" link="www.google.com" number ={23}/>
//       <Navbar />
//       <Navbar />
//       <Navbar /> */}

//       {/* state
//        */}
//        <h1>{count}</h1>
//        <button onClick={Increment}>Increment</button>
//        <button onClick={Decrement}>Decrement</button>
//        <button onClick={Reset}>Reset</button>
//     </>
//   )
// }

// export default App


// DataFlow

import React, { useState } from "react";
import Navbar from "./Navbar";
function App() {
  const [count, _setcount] = useState(0);
  // setcount;
  return (
    <>
      <Navbar data={count}/>
    </>
  )
}

export default App