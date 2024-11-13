import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SignUp from './sign/SignUp'
import Login from './login/Login'
import Home from './Home/Home'
import Details from './Details'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
       <Route path="/Sign" element={<SignUp/>}></Route>
       <Route path="/Home" element={<Home/>}></Route>
       <Route path="/details" element={<Details/>}></Route>


      </Routes>
    </Router>
  )
}
export default App