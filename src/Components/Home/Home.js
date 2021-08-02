import React from 'react'
import Input from '../Input/Input'



export default function Home(props) {
 
    const { age = 0 , name= 'Default', onChangeProfileName } = props
   
    const handleNameSubmit = (newName) => {
     
     onChangeProfileName(newName)
    
     }

    return (
         <div>
             <div className='home_content' >
                 <p className='home_info'>
                     <b>Name: </b>
                     {name}
                 </p>
                 <p>
                     <b>Age: </b>
                     {age}
                 </p>
             </div>

             <Input 
             lable='User name'
             placeholder='Your name'
             onSubmit={handleNameSubmit} />
         </div>
     )
}

