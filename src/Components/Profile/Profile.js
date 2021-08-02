import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { changeIsOnline} from '../../store/actions/actions'


 export default function Profile() {
  const { name, age, isOnline } = useSelector((state) => state.profile)
  const dispatch = useDispatch();
  

  const handleIsOnlineChange = ((event)=> {
    dispatch(changeIsOnline(event.target.checked))
       
  });


  return (
      <div>
        <h4>User Info</h4>
        <p>
            <b> Name: </b>
                {name}  
        </p>
        <p>
            <b>Age:</b>
             {age}
        </p>
        <div>
     </div>
       <FormControlLabel
            control = {
           <Checkbox
                checked={isOnline}
                onChange={handleIsOnlineChange}
                name='cheked'
           />
        }
        
       />
       <label>{<p>User is online</p>}</label>
        
      </div>
  );
}

