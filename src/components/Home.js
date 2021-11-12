import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <div className="col-md-6 mx-auto">
                    <h1>Welcome To React Redux Contact Book</h1>
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
