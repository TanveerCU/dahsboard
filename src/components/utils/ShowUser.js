import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import SystemUpdateAltRoundedIcon from '@material-ui/icons/SystemUpdateAltRounded';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    buttonColor: {
      backgroundColor: theme.palette.warning.main,
      color:"white",
      '&:hover':{
        backgroundColor: theme.palette.warning.light,
        color:"black",
      }
    },
  }));


function ShowUser() {
    const classes = useStyles();


    const clickHandle = (value)=>{
        if(value === 'show'){
            console.log("show clicked");
        }else if(value === 'del'){
            console.log("delete clicked");
        }else{
            console.log("update clicked");
        }
    }

    

    return (
        <div>
            <IconButton onClick={()=>{clickHandle("show")}}>
            <VisibilityIcon color="primary"/>
            </IconButton>
            <Button
            variant="contained"
            startIcon={<SystemUpdateAltRoundedIcon  />}
            className={classes.buttonColor}
            >
                Update
            </Button>
            <IconButton onClick={()=>{clickHandle("del")}}>
            <DeleteRoundedIcon color="secondary" />
            </IconButton>
        </div>
    )
}

export default ShowUser
