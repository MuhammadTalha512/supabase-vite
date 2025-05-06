import { Row } from 'antd'
import React from 'react'

const Copyright = () => {
  return (
    <footer className='py-2 bg-primary text-center text-white'>
     <div className="container">
    <Row>
     <p className='mb-0'>{new Date().getFullYear()} All rights reserved. </p>
    </Row>
    </div>   
    </footer>
  )
}

export default Copyright