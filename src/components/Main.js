import React from 'react';
import { Link } from 'react-router-dom';
import badbank8 from '../assets/badbank8.jpeg'
import badbank9 from '../assets/badbank9.jpeg'

function Main() {
  return (
    <div>

<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner">
        <div class="carousel-item active">
        <img src= { badbank8 }className='img-fluid' atl='Responsive image'/>
        </div>
        <div class="carousel-item">
        <img src= { badbank9 }className='img-fluid' atl='Responsive image'/>
        </div>
        <div class="carousel-item">
        <img src= { badbank9 }className='img-fluid' atl='Responsive image'/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div className='card-container'>
      <div className="card-wrapper">

    <div className='button-container'>
      <button className='button'>
        <Link to="/login">Login</Link>
      </button>
    </div>
    <div className='button-container'>
      <button className='button'>
        <Link to="/createaccount">Create Account</Link>
      </button>
    </div>
    </div>
  </div>
  </div>
  );
}

export default Main;
 