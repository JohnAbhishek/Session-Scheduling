import React from 'react'
import{Link}from 'react-router-dom'
import{useState}from 'react'

function Navbar() {
  const[state,setState]=useState(false)
  const[states,setStates]=useState(false)
  return (
    <div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
      <nav class="navbar navbar-expand-lg">
        <i className="fa-solid fa-arrow-left pl-3" style={{color:'blue',marginTop:'0px',fontSize:'25px'}}></i>
        <h1 className='pt-10 p-2'style={{fontSize:'23px'}}>Session Scheduling</h1>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
    </div>
  </nav>
  </div>    
  </div>
  </div>
  <div className='row'>
    <div className='col-sm-6'>
    <span className='pl-5 '> FOR MATHEMATICS G10 CBSE </span>
    <span className=' rounded' style={{backgroundColor:'#ADD8E6'}}> 13 SESSIONS REMAINING </span>
    <span className=' rounded ml-1'style={{backgroundColor:'#50C878'}}> FLEXI </span>
    </div>
  </div>
  <br></br>
  
        <nav class="navbar navbar-dark ">
          <a  style={{backgroundColor:'#AAF0D1'}}></a>

          {!state?<p className='btn btn rounded-circle' style={{backgroundColor:'#AAF0D1'}} onClick={()=>{setState(true)}}>1</p>: <a className='btn btn rounded-circle' style={{backgroundColor:'#AAF0D1'}}><i className='fa-solid fa-check'></i></a>}
          {!states?<a className='btn btn rounded-circle' style={{backgroundColor:'#AAF0D1'}}  onClick={()=>{setStates(true)}}>2</a>:<a className='btn btn rounded-circle 'style={{backgroundColor:'#AAF0D1'}} ><i className='fa-solid fa-check'></i></a>}
          <a className='btn btn rounded-circle' style={{backgroundColor:'#AAF0D1'}}>3</a>
          <a className='btn btn rounded-circle' style={{backgroundColor:'#AAF0D1'}}>4</a>
          <a></a>
        </nav>
    
        <nav class="navbar navbar-dark ">
        <a href='hgh' className='disable'></a>        
        <p className='center' style={{fontSize:'15px'}}>SET PREFERENCE</p>
        <p className='center'  style={{fontSize:'15px'}}>CHOOSE TUTOR & SLOTS</p>          
        <p className='center' style={{fontSize:'15px'}}>CONFIRM REQUEST</p>
        <p className='center' style={{fontSize:'15px'}}>TUTOR APPROVAL</p>
        <a href='hgh' className='disable'></a>        
        </nav> 
        <br></br>
        <div className='container-fluid'>
          <div className='coloumn'>
            <div className='col-md-4'>
            <i className="fa-solid fa-address-card" style={{fontSize:'30px',paddingLeft:'10px',marginTop:'0px'}}></i>
       <span className='pl-4' style={{fontSize:'20px',marginTop:'0px'}}>3 MATCHES FOUND</span>
                <p className='' style={{marginTop:'0px',paddingLeft:'69px'}}>Choose a tutor to see their availability</p>
            
            </div>
          </div>
        </div>
       
            
           
            
            </div>
        
  )
}

export default Navbar