import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

const AddContact = () => {
    const initialvalue = {
        name:"",
        email:"",
        number:"",
      }
      const [value,setvalue] = useState(initialvalue);
      const Name = (e)=>{
        setvalue({...value,name:e.target.value});
      }
      const Email = (e)=>{
        setvalue({...value,email:e.target.value});
      }
      const Phone = (e)=>{
        setvalue({...value,number:e.target.value});
      }
      const handlesubmit=(e)=>{
           e.preventDefault();
          
       

     const checkEmail = details.find((contact) =>contact.email === value.email && contact);
     const checkNumber = details.find((contact) =>contact.number == value.number && contact);

    if (!value.email || !value.name || !value.number) {
      return toast.warning('Please Fill all the fields', { position: toast.POSITION.LEFT_CENTER})
    }
        if (checkEmail) {
      return toast.error("This email already exists!!");
                        }
      if (checkNumber) {
      return toast.error("This phone number already exists!!");
                        }
                        

                        const data={
                          id:details[details.length - 1].id + 1, 
                          name: value.name,
                          email: value.email,
                          number:value.number
                        }
                        dispatch({type:"ADD_CONTACT", payload:data})
                        //console.log(value);
                        console.log(data)
                        toast.success("User Added Successfuly!");
                        history.push('/')
                                    }
      const details = useSelector((state)=>state);
      const dispatch= useDispatch();
      const history = useHistory();
     ;
     
    return (
       <div className="container">
            <div className="row">
                <h1 className="display-3 my-4 text-center">Add Users</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handlesubmit} >
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control" 
                            onChange={Name}/><br />
                            <input type="text" placeholder="Email" className="form-control"
                            onChange={Email}/><br />
                            <input type="text" placeholder="Phone Number" className="form-control"
                            onChange={Phone}/><br />
                            <input type="submit" value="Add Users"  className="btn btn-block btn-dark"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ); 
}

export default AddContact
