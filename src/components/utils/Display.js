import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import { useState} from 'react';
import ShowDetail from './ShowDetail';



function Display(props) {
  const [toggle, settoggle] = useState(false);
  const [click, setclick] = useState(false);


    const clickHandle = ()=>{
        console.log(props.type);
        settoggle(!toggle);
        setclick(true);
    }

     

    return (
        <div>
            <IconButton onClick={clickHandle}>
            <VisibilityIcon color="secondary"/>
            </IconButton>
            <ShowDetail {...props} render={toggle} click={click}/>
        </div>
    )
}

export default Display
