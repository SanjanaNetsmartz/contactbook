import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const UpdateContact = () => {

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

      const {id} = useParams();
      const Details =  useSelector(state=>state);
      const currentContact = Details.find(details=>details.id === parseInt(id)) //to filter the contacts here to get the particular detail for edit

      useEffect(()=>{
          if(currentContact){
              console.log(currentContact)
            setvalue({...value,name: currentContact.name,
            email: currentContact.email,
        number:currentContact.number});
            
          }
      }, [currentContact])                  //this useEffect will depend on the currentcontact
    
    
    console.log(id ,"IDDD")
    return (
        <div className="container">
            {
                currentContact ? (
                    <div className="row">
                <h1 className="display-3 my-4 text-center">Update User {id}</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Name" value={value.name}className="form-control" onChange={Name}/><br />
                            <input type="text" placeholder="Email"value={value.email} className="form-control" onChange={Email}/><br />
                            <input type="text" placeholder="Phone Number" value={value.number}className="form-control" onChange={Phone}/><br />
                            <input type="submit" value="Update User" className="btn btn-dark"/>
                            <Link to="/" className="btn btn-danger ml-8">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
                ) :(
                    <h1 className="display-3 my-5 text-center">User Details with id {id} is not available</h1>
                )
            }
            
        </div>
    )
}

export default UpdateContact



