
import './App.css';
import Stack from '@mui/material/Stack';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

function App() {
const [interest, setInterest] = useState(0)
const [principle, setPrinciple] = useState(0)
const [rate, setRate] = useState(0)
const [year, setYear] = useState(0)
const [isprinciple, setIsPrinciple] = useState(true)
const [israte, setIsRate] = useState(true)
const [isyear, setIsYear] = useState(true)
const handleCalculate = (e)=>{
  e.preventDefault()
  if (!principle || !rate || !year){
    alert('Please fill the form')
  }
  else{
    // alert('submitted')
    setInterest(principle * rate * year/100)
  }
}

const handleReset = (e)=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}


const getValidate = (e)=>{
  const {name, value} = e.target
  // console.log(!!value.match(/^[0-9]+$/))
  if(!!value.match(/^[0-9]*.?[0-9]+$/)){
    if(name ==='principle'){
    setPrinciple(value)
    setIsPrinciple(true)
  }
  
  else if(name ==='rate'){
    setRate(value)
    setIsRate(true)
  }
  else{
    setYear(value)
    setIsYear(true)
  }
}
  else{
    if(name ==='principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name ==='rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }
  }

}

  return (
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
        <p>calculate simple interest easily</p>
        <div className='bg-warning d-flex justify-content-center align-items-center w-100 p-4 rounded flex-column' >

          <h1>₹ {''} {interest}</h1>
          <p>Total simple interest</p>
        </div>
        <form  className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
          <TextField name='principle' value={principle || ""} onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
          </div>
          {!isprinciple  &&
            <div>
            <p className='text-danger'>Invalid Input</p>Invalid
          </div>} 
         


          <div className='mb-3'>
          <TextField name='rate' value={rate || ""} onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" />
          </div>
          {!israte  &&
            <div>
            <p className='text-danger'>Invalid Input</p>
          </div>} 

          <div className='mb-3'>
          <TextField name='year'  onChange={(e)=>getValidate(e)} value={year || ""} className='w-100' id="outlined-basic" label="Year (Yr)" variant="outlined" />
          </div>
          {!isyear  &&
            <div>
            <p className='text-danger'>Invalid Input</p>
          </div>} 

          <Stack className='mt-5' direction="row" spacing={2}>

          <Button type='submit' disabled={isprinciple && israte && isyear?false:true} className='bg-success' variant="contained">Calculate</Button>
          <Button onClick={handleReset} variant="outlined">Reset</Button>

          </Stack>
        </form>

        </div>
    </div>
  );
}

export default App;
