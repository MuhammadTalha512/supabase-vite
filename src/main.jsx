import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './config/global.jsx';
import '@ant-design/v5-patch-for-react-19';
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={{token: {colorPrimary: "#1d3557",}, components:{Button: {controlOutline:"0"}}}}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
)
