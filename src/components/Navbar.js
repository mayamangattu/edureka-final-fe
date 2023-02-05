import './Navbar.css';
import Modal from './Modal'
import Login from './Login'
import CreateAccount from './CreateAccount'
import { useNavigate } from "react-router-dom";
import {getLoggedOut} from './utilities'
const Navbar =(props)=>{
  const activeUser = localStorage.getItem('loggedInUsername')
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light" 
        style={{backgroundColor: '#eb2929'}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <label className="elogo">e!</label>
      </a>
      <button className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent" 
       aria-controls="navbarSupportedContent"
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        { activeUser? 
        <>
          <li className="nav-item">
          
               
                <span className="text-light">Hello {activeUser}, &nbsp;</span>  
                <button className="btn btn-outline-light" onClick={getLoggedOut}> Logout</button>
                </li>
               </> 
               :
               <>
          
          <li className="nav-item">
          <button className="btn btn-outline-light"  
                        data-bs-toggle="modal"
                        data-bs-target="#mdllogin" >Login</button>
          </li>
          </>
          }
          <li className="nav-item">
          <button className="btn btn-outline-light ms-1"
                        data-bs-toggle="modal"
                        data-bs-target="#mdlcreateacc">Create an account</button>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
  <Modal modalid="mdllogin" modaltitle="Login">
                            <Login/>
                         </Modal>

                        <Modal modalid="mdlcreateacc" modaltitle="Create Account">
                            <CreateAccount/>
                        </Modal>
  </>
  
  )
}

export default Navbar;