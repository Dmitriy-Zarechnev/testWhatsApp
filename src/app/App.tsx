import {Slide, ToastContainer} from 'react-toastify'
import {Provider} from 'react-redux'
import {store} from '@/services/store'
import {Router} from '@/shared'

export function App() {
    return <Provider store={store}>
        <Router/>
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
    </Provider>
}