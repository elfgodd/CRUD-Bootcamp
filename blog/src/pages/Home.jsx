import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Components imports
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        // console.log(data)
        setPosts(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  function truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + '....' : str
  }

  return (
    <>
      <Header />
      <div className='main-content'>
        <div className='container'>
          <div className='row'>
            {posts &&
              posts.map((post, index) => {
                return (
                  <div key={index} className='col-md-4 mb-4'>
                    <Link to=''>
                      <div className='card' style={{ height: '100%' }}>
                        <div className='card-body'>
                          <h5 className='card-title'>
                            {truncate(post.title, 30)}
                          </h5>
                          <p className='card-text'>
                            {truncate(post.body, 150)}
                          </p>
                        </div>
                        <div className='card-footer'>
                          <small className='text-muted'>
                            Last update 3 minutes ago
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
