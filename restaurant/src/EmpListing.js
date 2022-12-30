import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmpListing = () => {
  const [empData, setEmpData] = useState(null)
  const navigate = useNavigate()

  const LoadDetail = (id) => {
    navigate('/employee/detail/' + id)
  }

  const LoadEdit = (id) => {
    navigate('/employee/edit/' + id)
  }

  const RemoveFunc = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch('http://localhost:8000/menu/' + id, {
        method: 'DELETE',
      })
        .then((res) => {
          alert('Removed Successfully.')
          window.location.reload()
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  useEffect(() => {
    fetch('http://localhost:8000/menu')
      .then((res) => {
        return res.json()
      })
      .then((resp) => {
        setEmpData(resp)
      })
      .catch((err) => {
        setEmpData(err.message)
      })
  }, [])

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-title'>
          <h2>Restaurant Menu</h2>
        </div>
        <div className='card-body'>
          <div className='divbtn'>
            <Link to='employee/create' className='btn btn-success'>
              Add New (+)
            </Link>
          </div>
          <table className='table table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Items</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empData &&
                empData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.items}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadDetail(item.id)
                        }}
                        className='btn btn-primary'
                      >
                        Details
                      </a>
                      <a
                        onClick={() => {
                          LoadEdit(item.id)
                        }}
                        className='btn btn-success'
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          RemoveFunc(item.id)
                        }}
                        className='btn btn-danger'
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EmpListing
