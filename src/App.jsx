import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormTareas from './components/FormTareas';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Container className='my-4 mainPage'>
        <h1 className='text-center display-2'>Lista de Tareas</h1>
        <FormTareas />
      </Container>

      <Footer />
    </>
  )
}

export default App
