import {StrictMode} from 'react'

import {createRoot} from 'react-dom/client'

import {App} from './App'
import {Slide, ToastContainer} from 'react-toastify'

import './styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App/>
        <ToastContainer
            autoClose={5000}
            closeOnClick
            draggable={false}
            hideProgressBar={false}
            newestOnTop={false}
            pauseOnFocusLoss={false}
            pauseOnHover
            position={'bottom-left'}
            rtl={false}
            theme={'dark'}
            transition={Slide}
        />
    </StrictMode>
)
