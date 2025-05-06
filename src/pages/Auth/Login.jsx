import { Button, Col, Form, Input, Row } from 'antd'
import React, { useState } from 'react'
import { supabase } from '../../config/supabase'

const initialState = {email: "",password: ""}

const Login = () => {
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = e =>setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleLogin = async () => {
    let {  email, password } = state

    
    if (!email) return toastify('Email is required', 'error')
    if (!password) return toastify('Password is required', 'error')

    setIsProcessing(true)

    let { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      console.error(error)
      window.toastify("Something went wrong while login the user", 'error')
      setIsProcessing(false)
    }else{
      const {user, session} = data
      console.log('session', session)
      console.log('user', user)
      window.toastify("user login successfull", 'success')
    
    }


  }

  return (
    <main className='auth'>
      <div className="card p-3 p-md-4">
        <h2 className='text-center text-primary'>Login</h2>
        <Form layout='vertical'>
          <Row gutter={16}>           
            <Col span={24}>
              <Form.Item label='Email'>
                <Input
                  type='email'
                  placeholder='Please enter your Email'
                  name='email'
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label='Password'>
                <Input.Password
                  placeholder='Please enter your Password'
                  name='password'
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Button
                type='primary'
                loading={isProcessing}
                htmlType='submit'
                block
                onClick={handleLogin}
              >
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </main>
  )
}

export default Login