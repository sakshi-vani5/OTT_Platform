import NavB from './NavB'
import Footer from './Footer'
import { useState } from 'react'
function ByeOnline(){
    const[form,setForm]=useState({})
  function handleInput(e){
    console.log(e.target.name,e.target.value);
  
    setForm({
        ...form,
        [e.target.name]:e.target.value
       
    })
  

  }

  async function handleSubmit(e){
    e.preventDefault()  
    const response=await fetch("http://localhost:8089/moviee",{
            method: 'POST',
            body:  JSON.stringify(form),
            headers:{
             'Content-Type':'application/json'
            }

    }) 

    const data=await response.json()
    console.log(data)
    // console.log(form)
 }
    return(
        <div>
          
            <NavB></NavB>
            <h2 id='heading'>BEING OUR SUSCRIBER</h2>
            <div id='onlnC'>
               
                <div id='onlnC1'>
                
                    <div id='onlnC2'>
                       <div>
                       
                        <form onSubmit={handleSubmit}>
                            Username: <input type='text'name='Username'onChange={handleInput}></input><br></br>
                            Mobile No. : <input type='number'name='MobileNo' style={{marginTop:"15px"}} onChange={handleInput} ></input><br></br>
                            Email:     <input type='text' name="Email" style={{marginTop:"15px"}} onChange={handleInput}></input><br></br>
                            Movie Type:   <input type='text' name='typeofMovie' style={{marginTop:"15px"}} onChange={handleInput}></input><br></br>
                            Name of Movie:  <input type='text' name='nameofmovie' style={{marginTop:"15px"}} onChange={handleInput}></input>
                            <input type='submit' id='submitBtn'></input>

                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    
    )
}
export default ByeOnline