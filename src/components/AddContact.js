import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

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
           console.log(value);
       

     const checkEmail = details.find((contact) =>contact.email === email && contact);
     const checkNumber = details.find((contact) =>contact.number === number && contact);

    if (!email || !name || !number) {
      return toast.warning('Please Fill all the fields', { position: toast.POSITION.BOTTOM_CENTER})

        if (checkEmail) {
      return toast.error("This email already exists!!");
                        }
      if (checkNumber) {
      return toast.error("This phone number already exists!!");
                        }
                                    }
  

    const details = useSelector((state)=>state);
    console.log(details)
  };
  }

    return (
       <div className="container">
            <div className="row">
                <h1 className="display-3 my-4 text-center">Add Contact</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form >
                        <div className="form-group">
                            <input type="text" placeholder="Name" class="form-control" 
                            onChange={Name}/><br />
                            <input type="text" placeholder="Email" class="form-control"
                            onChange={Email}/><br />
                            <input type="text" placeholder="Phone Number" class="form-control"
                            onChange={Phone}/><br />
                            <input type="submit" value="Add Employees" className="btn btn-block btn-dark"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ); 
}

export default AddContact
