import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
const Login = (props) => {

  const [show,setShow] =useState(false);
  const [content,setContent] = useState(true);
  const [Input,setInput] = useState("");
  const handleChange = (e)=>{
    setInput(e.target.value);
    if(Input.length >1){
      setShow(true);
      setContent(false)
    }
    else{
      setShow(false)
      setContent(true)
    }
  }
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
        <div className="mt-4 head_title">
        <h5> Modal heading</h5>
      </div>
         
        </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="mt-4 head_title ">
              <h5 className="mb-5" style={{ margin: "0px 60px" }}>
              {
                show?"Continue to Phone":"Login To Continue"
              }
                
              </h5>
            </div>
            <div className="text-center">
            {
              content?
              <div className=""> 
                <button className="btn btn_facebook btn-lg mb-3">
                Have a Facebook/Email account?
              </button>
              <p className="text-white">or</p> 
            
              </div>:null
            }
            
              <span className="text-white">+91 |</span>
              <input
                type="text"
                placeholder="Enter your mobile number" value={Input}
                className="login_input mb-5" onChange={handleChange} autoComplete="on"
              />
              {show ? <button className="btn btn_continue btn-lg mb-2 ">
                Continue 
              </button> : null }
                
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
