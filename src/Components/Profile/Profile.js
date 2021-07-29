import React from 'react'
import { changeIsOnline} from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'


 export default function Profile() {
  const { isOnline, name, age } = useSelector((state) => state.profile)
  const dispatch = useDispatch();

  const handleChangeIsOnline = (event)=> {
    dispatch(changeIsOnline(event.target.cheked));

  };

  return (
      <div>
        <h4>User Info</h4>
        <p>
            <b>
                Name:
                {name}
            </b>
        </p>
        <p>
            <b>
                Age:
                {age}
            </b>
        </p>
       <FormControlLabel
            control = {
           <Checkbox
                checked={isOnline}
                onChange={handleChangeIsOnline}
                name='cheked'
           />
        }
        
       />
       <label>{<p>Is user online</p>}</label>
        
      </div>
  );
}

