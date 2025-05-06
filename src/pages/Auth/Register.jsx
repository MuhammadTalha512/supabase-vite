// import { Button, Col, Form, Input, Row } from 'antd'
// import React, { useState } from 'react'
// import { supabase } from '../../config/supabase'
// const initialState = {firstName: "", lastName: "", email:"", password:"", confirmPassword:""}

// const Register = () => {

//     const [state, setState] = useState(initialState)

//     const [isProcessing, setIsProcessing] = useState(false)

//     const handleChange= e => setState(s =>({...s, [e.target.name]: e.target.value}))
    
//     const handleRegister = async()=>{
    
//         let {firstName, lastName, email, password, confirmPassword} = state
  
//          if(firstName.length < 3) return toastify('First Name must be at least 3 characters long','error') 
//          if(lastName.length < 3) return toastify('Last Name must be at least 3 characters long','error') 
//          if(!email) return toastify('Email is required','error')
//          if(!password) return toastify('Password is required','error')
//          if(!confirmPassword) return toastify("Confirm Password dosn't matched",'error')
         
//             const formData = {firstName, lastName, email}
   
//          setIsProcessing(true)

//          let { data, error } = await supabase.auth.signUp({ email, password })

//          if (error || !data || !data.user) {
//           window.toastify("Something went wrong while creating the user", 'error')
//          setIsProcessing(false)
//       } else{
//          createUser(formData, data.user)
//             console.log('data.user', data.user)
//          }   
//       }
      
//       const createUser = async(formData, user)=>{
         
//          const {id, created_at} = user
         
//          const userData ={...formData, id, createdAt: created_at}
         
//          const {data, error} = await supabase.from('users').insert([userData])
//          console.log('data', data)
         
//          if(error){
//             console.error(error)
//             window.toastify("Something went wrong while adding the user data", 'error')
//          }
//          setIsProcessing(false)
//       }

//   return (
//     <main className='auth'>
//      <div className="card p-3 p-md-4">
//         <h2 className='text-center text-primary py-3'>Register</h2>
//         <Form layout='vertical'>
//         <Row gutter={16}>
//         <Col span='12'>
//          <Form.Item label='First Name'>
//             <Input type='text' placeholder='please Enter your First Name' name='firstName' onClick={handleChange} />
//          </Form.Item>
//         </Col>
//         <Col span='12'>
//          <Form.Item label='Last Name'>
//             <Input type='text' placeholder='please Enter your First Name' name='lastName' onClick={handleChange} />
//          </Form.Item>
//         </Col>
//         <Col span='24'>
//          <Form.Item label='Email'>
//             <Input type='email' placeholder='please Enter your Email' name='email' onClick={handleChange} />
//          </Form.Item>
//         </Col>
//         <Col span='24'>
//          <Form.Item label='Password'>
//             <Input.Password placeholder='please Enter your Password' name='password' onClick={handleChange} />
//          </Form.Item>
//         </Col>
//         <Col span='24'>
//          <Form.Item label='Confirm Password'>
//             <Input.Password placeholder='please Enter your  password again' name='confirmPassword' onClick={handleChange} />
//          </Form.Item>
//         </Col>
//         <Col span='24'>
//             <Button type='primary' loading={isProcessing} block onClick={handleRegister} >Register</Button>
//         </Col>
//         </Row>

//         </Form>
//      </div>
//     </main>
//   )
// }

// export default Register


import { Button, Col, Form, Input, Row } from 'antd'
import React, { useState } from 'react'
import { supabase } from '../../config/supabase'

const initialState = {firstName: "",lastName: "",email: "",password: "",confirmPassword: ""}

const Register = () => {
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = e =>setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleRegister = async () => {
    let { firstName, lastName, email, password, confirmPassword } = state

    if (firstName.length < 3) return toastify('First Name must be at least 3 characters long', 'error')
    if (lastName.length < 3) return toastify('Last Name must be at least 3 characters long', 'error')
    if (!email) return toastify('Email is required', 'error')
    if (!password) return toastify('Password is required', 'error')
    if (!confirmPassword || confirmPassword !== password) {
      return toastify("Passwords do not match", 'error')
    }

    const formData = { firstName, lastName, email }


    console.log('formData', formData)
   
    const user1 = formData

    setIsProcessing(true)
     
    let { data, error } = await supabase.auth.signUp({ email, password })

    if (error || !data || !data.user) {
      window.toastify("Something went wrong while creating the user", 'error')
      // return
    }else{
      createUser({...user1, user: data.user})
      console.log('data', data)
    }
    
    setIsProcessing(false)

  }

  const createUser = async ({user1, user}) => {

    console.log('user', user)
    const { id, created_at } = user
    const userData = { ...formData, id, createdAt: created_at }

    const { data, error } = await supabase.from('users').insert([userData])

    if (error || !data || data.length === 0) {
      console.error(error)
      window.toastify("Something went wrong while adding the user data", 'error')
    }

    setIsProcessing(false)
  }

  return (
    <main className='auth'>
      <div className="card p-3 p-md-4">
        <h2 className='text-center text-primary py-3'>Register</h2>
        <Form layout='vertical'>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label='First Name'>
                <Input
                  type='text'
                  placeholder='Please enter your First Name'
                  name='firstName'
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Last Name'>
                <Input
                  type='text'
                  placeholder='Please enter your Last Name'
                  name='lastName'
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
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
              <Form.Item label='Confirm Password'>
                <Input.Password
                  placeholder='Please confirm your Password'
                  name='confirmPassword'
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
                onClick={handleRegister}
              >
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </main>
  )
}

export default Register
