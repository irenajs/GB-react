import React from 'react'
import Input from '../Components/Input'

function Home(props) {
   
const handleNameSubmit = (newName) => {
    console.log('call action with ', newName)

     }

    return (
         <div>
             <div className='home_content' >
                 <p className='home_info'>
                     <b>Name: </b>
                 </p>
                 <p>
                     <b>Age: </b>
                 </p>
             </div>

             <Input onSubmit={handleNameSubmit} />
         </div>
     )
}

 export default Home;