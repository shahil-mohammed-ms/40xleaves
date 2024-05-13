import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Products() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const items = [
    { id: 1, name: 'Radish Pink Microgreen Seeds', imageUrl: 'https://images.unsplash.com/photo-1503289130890-6eff9c5df553?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjV8MjEwMDExNXx8ZW58MHx8fHx8' , price:'120' , quantity:'500' },
    { id: 2, name: 'Broccoli Microgreen Seeds', imageUrl: 'https://images.unsplash.com/photo-1504541891213-1b1dfdadb739?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8MjEwMDExNXx8ZW58MHx8fHx8' ,  price:'150' , quantity:'500' },
    { id: 3, name: 'Radish White Microgreen seeds', imageUrl: 'https://images.unsplash.com/photo-1505159042738-73dbae90178f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjl8MjEwMDExNXx8ZW58MHx8fHx8' ,  price:'180' , quantity:'500' },
    { id: 4, name: 'Pak Choli Microgreen seeds', imageUrl: 'https://images.unsplash.com/photo-1483996887144-ede479a83102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjh8MjEwMDExNXx8ZW58MHx8fHx8' ,  price:'180' , quantity:'500' },
  
  ];

  return (
    <div className='mt-5  bg-body-tertiary ' style={{overflowX:'hidden'}}>
      <div>
        <h2 className='text-center mb-5 p-3 fw-bold '>Our Products</h2>
        <Container>
          <Row>
            <Col>
              <Slider {...settings}>
                {items.map(item => (
                  <div key={item.id} className='d-flex justify-content-center text-center p-3  '>
                    <div className='shadow p-3 bg-white rounded' style={{padding:'10px',width:"80%"}}>
                      <Link to={'/product'}><img src={item.imageUrl} alt={item.name} className="img-fluid mx-auto mb-2" style={{mixBlendMode:'multiply'}}/></Link>
                     <Link to={'/product'}> <h5 className='text-dark'>{item.name}</h5></Link>
                      <p className='fw-bold m-1'>₹{item.price}</p>
                      <p>{item.quantity} gm</p>
                    <div className='d-flex justify-content-around'>  
                   <Link to={'/wishlist'}>
                      <button className='btn btn-success rounded-3'>
                        <i class="fa-solid fa-heart"></i>
                     </button>
                   </Link>
                     <Link to={'/cart'}> <button className='btn btn-success rounded-3'>Add</button></Link>
                  </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className='text-center mt-4 p-5 '>
                <Link to={'/allproducts'}><button className='btn btn-success '>Load More</button></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Products;
