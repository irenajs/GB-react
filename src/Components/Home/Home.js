import React from 'react'
import Input from '../Input/Input'
import UserInfo from '../Profile/UserInfo'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import './style.css'


export default function Home(props) {
 
    const { age = 0 , name= 'Default', onChangeProfileName } = props
   
    const handleNameSubmit = (newName) => {
     
     onChangeProfileName(newName)
    
     }

    return (
        <div className='Home_container' >
             
            <div className='user__info'>
               <div className='userPhoto'></div>
       
                <h4>User Info</h4>
                <UserInfo age={age} name={name} />
   
              <div className='user_online'>
                    <div>
                        <FormControlLabel
                            control = {
                                    <Checkbox
                                        //checked={isOnline}
                                        // onChange={handleIsOnlineChange}
                                        name='cheked'
                                        color='primary'
                                        />
                            }
                        />
                    </div>
                    <div><label>{<p>User is online</p>}</label></div>    
               </div>
            </div>
                <div className='home__input'>
                    <Input 
                    lable='User name'
                    placeholder='Your name'
                    onSubmit={handleNameSubmit} />
                 </div>   
    
        </div>
     )
}

