
import './App.css';
import image from './images/bg-main-desktop.png'
import card from './images/bg-card-front.png'
import card2 from './images/bg-card-back.png'
import { useState } from 'react';
function App() {
  const [error, seterror] = useState(false)
  const [nameerr, setnameerr] = useState(false)
  const [name, setname] = useState('')

  const  handle=(e)=>{
    
    e.preventDefault()
   console.log(name)
    if(name.length==0){
      setnameerr(true)
      
    }else{
      setnameerr(false)
    }


  }
  return (
    
    <div className='container-fluid con '  style={{marginTop:'10px',height:'100%',float: 'left',padding: '0',
    margin: '0 auto'}}>

    <div className='row' style={{height:'890px'}}>
    <div  className='col-md-3 leftSide' style={{backgroundImage: `url(${image})`, float:'left'}}>
    </div>
      <div className='col-md-4 rightSide' style={{marginTop:'240px',marginLeft:'430px'}}>
      <form >
        
  <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
          Card Holder
          </label>
          <input
            type="text"
            className="form-control"
            placeholder='e.g. shubham sarkar'
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e)=>setname(e.target.value)}
          />
          {
          nameerr?<p style={{color:'red'}}>Please given me vaild </p>:null
        }
        </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
     Card Number
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputPassword1"
     placeholder='e.g. 12345668798016632'
    />
  </div>
  <div className='row'>
 <div className='col-md-6'>
 <label htmlFor="exampleInputPassword1" className="form-label">
     Exp.Date(MM/YY)
    </label>
    <div className='row'>
   <div className='col-md-6'>
   <input
      type="text"
      className="form-control"
      id="exampleInputPassword1"
     placeholder='MM'
     style={{padding:'6px'}}
    />
   </div>
   <div className='col-md-6'>
   <input
      type="text"
      className="form-control"
      id="exampleInputPassword1"
     placeholder='YY'
     style={{padding:'6px'}}
    />
   </div>
   </div>
   
</div>
<div className='col-md-6'>
  
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
   CVV 
    </label>
    <input
      type="number"
      className="form-control"
      placeholder='e.g. 123'
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    
  </div>
   </div>
  </div>
  <div className='text-center'>
  <button type="submit" className="btn btn-primary " style={{width:'100%',backgroundColor:'#00008B'}}  onClick={handle} >
    Confirm
  </button>
  </div>
</form>

     
      </div>
    </div>
    <div style={{position:'absolute',left:'10%',top:'10%',backgroundRepeat:'no-repeat'}} >
      
  <img src={card}  alt='card'/>
  <span style={{marginLeft:'-400px', color:'white',fontSize:'40px'}}>0000 0000 0000 0000</span>
 
</div> 

 
    <div style={{position:'absolute',left:'15%',top:'45%',backgroundRepeat:'no-repeat'}} >
  <img src={card2}  alt='card'/>
</div> 

    
    </div>
  );
}

export default App;
