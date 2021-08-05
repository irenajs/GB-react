import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { changeIsOnlineWithThunk} from '../../store/actions/actions'
import UserInfo from './UserInfo'
import Post from '../Post/Post'
import './style.css'



 export default function Profile() {
  const { name, age, isOnline } = useSelector((state) => state.profile)
  const dispatch = useDispatch();
  

  const handleIsOnlineChange = ((event)=> {
    dispatch(changeIsOnlineWithThunk(event.target.checked))
       
  });


  return (
    <div className='Profile_container'>
      
      <div className='user__info'>
      <div className='userPhoto'></div>
       
        <h4>User Info</h4>
        <UserInfo age={age} name={name} />
    
        <div className='user_online'>
        <div>
          <FormControlLabel
                control = {
              <Checkbox
                    checked={isOnline}
                    onChange={handleIsOnlineChange}
                    name='cheked'
                    color='primary'
              />
            }
            />
        </div>
        <div><label>{<p>User is online</p>}</label></div>    
        </div>
      
      </div>
      
          <div className='user__post'>
            <Post />
            <Post />
          </div>
          
         
          
    </div>
     
  );
}

