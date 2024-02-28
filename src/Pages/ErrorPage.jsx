import React from 'react'
import { Link } from 'react-router-dom';
import "./Error.css"

export default function ErrorPage() {
  return (
    <div className='ErrorPage'>
        <h1>404 Error Page not Found</h1>
        <Link to="/">Go to Home Page</Link>
    </div>
  )
}
