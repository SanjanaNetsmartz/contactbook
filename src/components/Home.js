import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {

    const Details = useSelector(state=>state);
    return (
        <div className="container">
            <div className="col-md-6 mx-auto">
            <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Details.length > 0 ? (
                Details.map((details, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{details.name}</td>
                    <td>{details.email}</td>
                    <td>{details.phone}</td>
                    <td>
                      <Link to={`/edit/${details.id}`} className="btn btn-sm btn-primary mr-1">
                        Edit
                      </Link>
                      <button type="button"
                        // onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
                </div>
            <div className="row">
                <div className="col-md-12 my-5 text left">
                    <Link to="/addcontact" className="btn btn-outline-dark">ADD CONTACT</Link>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home
