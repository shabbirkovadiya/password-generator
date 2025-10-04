import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PasswordGenerator from './App.jsx'
import { Slide, ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordGenerator />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
  </StrictMode>,
)
