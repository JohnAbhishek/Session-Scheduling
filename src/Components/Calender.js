import React from 'react'
import Cal from './Cal'

function Calender() {
  return (
    <div>
        <div class="container-fluid">
  <div class="row content">
  <div class="col-sm-9">
      <i class="fa-solid fa-book mt-2" style={{fontSize:'25px'}}></i><span className='pl-2'style={{fontSize:'20px'}}>PREEYA SREEKUMAR'S AVAILABLE SLOTS</span><br></br><span className='pl-4'>See the availability of the Selected tutor</span>
      <br></br>
      <Cal/>
    </div>
        
    <div class="col-sm-3 sidenav border border-white">
      <h4><i class="fa-solid fa-clock mt-2 "></i> Selected section(7/20)<i class="fa-solid fa-book mt-2" style={{fontSize:'25px',paddingLeft:'4px'}}></i> </h4><span>See all the selected session detailes</span>
      
        
      <ul><br></br>
          <p style={{fontSize:'30px'}}>MAY 2022</p>
          <hr></hr>
          <br></br>
          <p>21 MAY</p>
          <p className='' style={{backgroundColor:'red'}}>10.00Am-11.00AM</p>
          <p className='' style={{backgroundColor:'green'}}>11.00Am-12.00AM</p>
<br></br>
<p>23 MAY</p>
<p className='' style={{backgroundColor:'green'}}>10.00Am-11.00AM</p>
<br></br>
<p>24 MAY</p>
<p className='' style={{backgroundColor:'green'}}>10.00Am-11.00AM</p>
      </ul>
      <ul>
      <p style={{fontSize:'30px'}}>JUNE 2022</p>
<hr></hr>
<p>24 JUNE</p>
<p className='' style={{backgroundColor:'green'}}>10.00Am-11.00AM</p>

<p>27 JUNE</p>

<p className='' style={{backgroundColor:'green'}}>10.00Am-11.00AM</p>

      </ul>
      
    </div>
    <footer class="container-fluid text-right">
    <br></br>
  <button className='btn btn-light ' style={{padding:'10px',paddingLeft:'100px',paddingRight:'100px',color:'red',marginRight:'9px'}}>Cancel</button>
  <button className='btn btn-primary' style={{padding:'10px',paddingLeft:'100px',paddingRight:'100px',color:'white'}}>Request Selected Slots</button>
    
</footer>
   </div>
</div>
   
  </div>

    
  )
}

export default Calender