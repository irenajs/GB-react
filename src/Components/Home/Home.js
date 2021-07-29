import React from 'react'
import Input from '../Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../../store/actions'



function Home(props) {

    const dispatch = useDispatch()
    const { name, age } = useSelector((state) => state.profile)
   
const handleNameSubmit = (newName) => {
     
    console.log('call action with ', newName)
    
    dispatch(changeName(newName))


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

             <Input onSubmit={handleNameSubmit} />
         </div>
     )
}

 export default Home;