import React from 'react';
import cor1 from '../../assets/cor1.jpeg';
import cor2 from '../../assets/cor2.jpg';
import cor3 from '../../assets/cor3.jpeg';
import cor4 from '../../assets/cor4.png';

const Carousel = () => {
  return (
    <div className='carousel slide' id='car' data-bs-ride='carousel'>

<ol class="carousel-indicators">
            <li data-bs-target='#car' class="active" data-bs-slide-to="0"></li>
            <li  data-bs-target='#car' data-bs-slide-to='1'></li>
            <li data-bs-target='#car' data-bs-slide-to='2'></li>
            <li data-bs-target='#car' data-bs-slide-to='3'></li>
        </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img className='w-100 ' src={cor1} alt='' style={{ height: '400px' }}></img>
          <div className='carousel-caption'>
            <h2 className='text-muted'>welcome Every frist order you can get 30% offer</h2>
            <button className='btn btn-info'>order</button>
          </div>
        </div>

        <div className='carousel-item'>
          <img className='w-100' src={cor2} alt='' style={{ height: '400px' }}></img>
          <div className='carousel-caption'>
            <h2 className='text-muted'>welcome Every frist order you can get 30% offer</h2>
            <button className='btn btn-info'>order</button>
          </div>
        </div>

        <div className='carousel-item'>
          <img className='w-100' src={cor3} alt='' style={{ height: '400px' }}></img>
          <div className='carousel-caption'>
            <h2 className='text-muted'>welcome Every frist order you can get 30% offer</h2>
            <button className='btn btn-info'>order</button>
          </div>
        </div>

        <div className='carousel-item'>
          <img className='w-100' src={cor4} alt='' style={{ height: '400px' }}></img>
          <div className='carousel-caption'>
            <h2 className='text-muted'>welcome Every frist order you can get 30% offer</h2>
            <button className='btn btn-info'>order</button>
          </div>
        </div>
      </div>

      <button className='carousel-control-prev' type='button' data-bs-slide='prev' data-bs-target='#car'>
        <span className='carousel-control-prev-icon'></span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-slide='next' data-bs-target='#car'>
        <span className='carousel-control-next-icon'></span>
      </button>
    </div>
  );
}

export default Carousel;
