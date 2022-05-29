import React from 'react'

function Cart() {
  return (
    <div className='container-fluid'>
       <div class="row">
            <div className="col-md-12 border border-primary" style={{backgroundColor:'white',height:'17rem'}}>
            <div class="row">

            <div className='col-md-3'style={{backgroundColor:'white'}}>
            <div class="card" style={{width: '20rem',marginTop:'40px'}}>
  <div class="card-body">
    <h5 class="card-title">Priya Sreekumar<span><i class="fa-solid fa-star p-1"></i></span>4.5</h5> 
    <p class="card-text">Bsc in Chemistry with 6 years of teaching experience</p>
    <a href="#" class="">View Profile</a>
  </div>
</div>
</div>
<div className='col-md-3' style={{backgroundColor:'white'}}>
            <div class="card" style={{width: '20rem',marginTop:'40px'}}>
  <div class="card-body">
  <h5 class="card-title">Mathew Varghese<span><i className="fa-solid fa-star p-1"></i></span>4.5</h5> 

    <p class="card-text">Bsc in Chemistry with 6 years of teaching experience</p>
    <a href="#" class="">View Profile</a>
  </div>
</div>
</div>
<div className='col-md-3' style={{backgroundColor:'white'}}>
            <div class="card" style={{width: '20rem',marginTop:'40px'}}>
  <div class="card-body">
  <h5 class="card-title">Stephen John<span><i className="fa-solid fa-star p-1"></i></span>4.5</h5> 

    <p class="card-text">Bsc in Chemistry with 6 years of teaching experience</p>
    <a href="#" className="btntext">View Profile</a>
  </div>
</div>
</div>
<div className='col-md-3'style={{backgroundColor:'white'}}>
            <div className="card rounded" style={{width: '20rem',marginTop:'40px',backgroundColor:'#3eadcf'}}>
  <div className="card-body" style={{backgroundColor:'#3eadcf'}}>
    
    <p className="card-text p-2"style={{backgroundColor:'#3eadcf',textAlign:'center'}}>Couldn't find the right tutor and preferred time slots</p>
    <a href="#" class="btn btn-primary "style={{display:'grid',margin:'auto'}}>Find a new tutor</a>
  </div>
</div>
</div>

</div>
</div>
</div>

</div>   
  )
}

export default Cart