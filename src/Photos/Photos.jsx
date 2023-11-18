import React from 'react';
import App from '../App';
import './Photos.css';
import colloque01 from "./colloque2.PNG";
import conf from "./conference1.jpg";

const Photos = () => {
    return (
        <div className='photos'>
            <h1 className='text-center fw-bold mt-5'>PHOTOS</h1>
            <div className="underline1"></div>
<div id="carouselExampleFade" class="carousel slide carousel-fade ">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={colloque01} class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={colloque01} class="d-block" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>

    
    );
}

export default Photos;
