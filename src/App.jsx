import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Login from './components/Login'
import Alert from 'react-bootstrap/Alert';
import './App.css'

function App() {
  const [result, setResult] = useState({isShown : false, msg: '', variant: ''})
  
  return (
    <Container>
      <Login setResult={setResult} />
      { result.isShown ? <Alert key={result.variant} variant={result.variant}>{result.msg}</Alert> : null}
    </Container>
  )
}

export default App
