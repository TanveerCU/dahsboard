import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import { useEffect } from 'react';





export default function ShowDetail(props) {
  console.log(props);
  const [open, setOpen] = React.useState(false);


  useEffect(() => {
    if(props.click){setOpen(true);}
  }, [props.click,props.render]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle id="form-dialog-title" color="primary">
          <span className="text-blue-900 font-extrabold">
            {(props.type === 'u')?
            "User Info"
            :
            "Product Info"
            }
            </span> 
          <Divider />
        </DialogTitle>
        <DialogContent>
          <div className="flex space-x-5 items-center mb-3 ">
            <img src={props.img} alt="myimage" className="h-28 w-28 rounded-full " />
            <span className="text-lg font-bold text-blue-900">
            {(props.type === 'u')?
            `${props.first} ${props.last}`
            :
            props.title
            }
            </span>
          </div>
          <Divider />

          {
            (props.type=== 'u')?

            <>
            <div className="text-sm text-blue-500 mt-2 mb-1">Account Details</div>
            <div className="flex flex-col space-y-1 text-blue-900 text-lg mb-1 ">
            <div className="space-x-4">
              <span><i className="far fa-user"></i></span>
              <span>{`${props.first} ${props.last}`}</span>
            </div>
            <div className="space-x-4">
              <span><i className="far fa-calendar-minus"></i></span>
              <span>{props.create}</span>
            </div>

          </div>
          <Divider />
          
          <div className="text-sm text-blue-500 mt-2 mb-1">Contact Details</div>
          <div className="flex flex-col space-y-1 text-blue-900 text-lg mb-3 ">
            <div className="space-x-4">
              <span><i className="fas fa-mobile-alt"></i></span>
              <span>+880 1403899775</span>
            </div>
            <div className="space-x-4">
              <span><i className="far fa-envelope"></i></span>
              <span>{props.email}</span>
            </div>
            <div className="space-x-4">
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>{props.country}</span>
            </div>
          </div>
          </>
          :

          <>
          <div className="text-sm text-blue-500 mt-2 mb-1">Product Details</div>
          <div className="flex flex-col space-y-1 text-blue-900 text-lg mb-3 ">
            <div className="space-x-4">
              <span>Category: </span>
              <span>{props.cat}</span>
            </div>
          </div>
          </>

        }
          
        </DialogContent>

      </Dialog>
    </div>
  );
}
