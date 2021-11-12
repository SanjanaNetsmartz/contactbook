import React from 'react'
import { Link, useParams } from 'react-router-dom'

const UpdateContact = () => {
    const {id} = useParams();
    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3 my-4 text-center">Update Contact</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control"/><br />
                            <input type="text" placeholder="Email" className="form-control"/><br />
                            <input type="text" placeholder="Phone Number" className="form-control"/><br />
                            <input type="submit" value="Update Employess" className="btn btn-dark"/>
                            <Link to="/" className="btn btn-danger ml-8">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateContact
