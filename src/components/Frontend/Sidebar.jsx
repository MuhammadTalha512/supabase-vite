import React from 'react'
import { Flex, Menu } from 'antd'

import {FaLeaf,} from 'react-icons/fa6'
import {UserSwitchOutlined} from "@ant-design/icons";
const Sidebar = () => {
  return (
    <>
    <Flex align='center' justify='center'>
        <div className="logo">
          <FaLeaf />
        </div>
    </Flex>
    <Menu mode='inline'
     defaultSelectedKeys={['1']}
     className='menu-bar' 
     items={[{
       key:"1",
       icon: <UserSwitchOutlined />,
       label:"Dashboard"
    }]} />
    </>
  )
}

export default Sidebar