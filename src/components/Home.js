import Card from './Cards';
import badbank1 from '../assets/badbank1.jpeg'
import React, { useState, useEffect } from 'react';


function Home(){
  const [totalState, setTotalState] = useState(localStorage.getItem('totalState') || 0);
  const status = `Your Account Balance $ ${totalState}`;


  useEffect(() => {
    localStorage.setItem('totalState', totalState);
  }, [totalState]);


  return(
<div className='home-container'>
    <Card 
    bgcolor='primary'
    textcolor='black'
    header='Welcome to BadBank'
    tittle=''
    text= {(<h1 classname='home' id="deposit-total">{status}</h1>)}
    body={(<img src= { badbank1 }className='img-fluid' atl='Responsive image'/>)}
  />
</div>
  )
}

export default Home;