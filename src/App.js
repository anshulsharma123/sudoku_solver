import './styles/App.scss';
import Banner from './components/Banner';
import Action from './components/Action';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className='App'>
            <Banner />
            <Action />
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
