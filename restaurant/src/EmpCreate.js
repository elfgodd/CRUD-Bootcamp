import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmpCreate = () => {
  // State Variables
  const [idChange, setIdChange] = useState('')
  const [nameChange, setNameChange] = useState('')
  const [emailChange, setEmailChange] = useState('')
  const [itemsChange, setItemsChange] = useState('')
  const [activeChange, setActiveChange] = useState(true)
  const [validation, setValidation] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({
    //   idChange,
    //   nameChange,
    //   emailChange,
    //   phoneChange,
    //   activeChange,
    // })

    const empData = {
      id: idChange,
      name: nameChange,
      items: itemsChange,
      // phone: phoneChange,
      active: activeChange,
    }

    fetch('http://localhost:8000/menu', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(empData),
    })
      .then((res) => {
        alert('Saved Successfully.')
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div>
      <h1>Dish Create</h1>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
          <form className='container' onSubmit={handleSubmit}>
            <div className='card' style={{ textAlign: 'left' }}>
              <div className='card-title'>
                <h2>Dish Create</h2>
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>ID</label>
                      <input
                        value={idChange}
                        disabled='disabled'
                        className='form-control'
                      ></input>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Name</label>
                      <input
                        required
                        value={nameChange}
                        onMouseDown={(e) => setValidation(e.target.value)}
                        onChange={(e) => setNameChange(e.target.value)}
                        className='form-control'
                      ></input>
                      {nameChange.length == 0 && validation && (
                        <span className='text-danger'>Enter the name</span>
                      )}
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Items</label>
                      <input
                        required
                        value={itemsChange}
                        onChange={(e) => setItemsChange(e.target.value)}
                        className='form-control'
                      ></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        checked={activeChange}
                        onChange={(e) => setActiveChange(e.target.checked)}
                        className='form-check-input'
                      ></input>
                      <label className='form-check-label'>Is Active</label>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <button className='btn btn-success' type='submit'>
                        Save
                      </button>
                      <Link to='/' className='btn btn-danger'>
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmpCreate
