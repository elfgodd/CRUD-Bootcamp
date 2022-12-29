import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmpDetail = () => {
  const { empid } = useParams()

  const [empData, setEmpData] = useState({})

  useEffect(() => {
    fetch('http://localhost:8000/employee/' + empid)
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((resp) => {
        setEmpData(resp)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])
  return (
    <div className='card' style={{ textAlign: 'left' }}>
      <div className='card title'>
        <h2>Employee Detail</h2>
      </div>
      <div className='card-body'>
        {empData && (
          <div>
            <h2>
              The Employee name is: {empData.name}, id: ({empData.id})
            </h2>
            <h3>Contact Details</h3>
            <h5>Email is: {empData.email}</h5>
            <h5>Phone is: {empData.phone}</h5>
            <Link to='/' className='btn btn-danger'>
              Back to listing
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmpDetail
