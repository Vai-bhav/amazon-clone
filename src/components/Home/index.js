import React from 'react';
import Product from '../Product';
import './style.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img 
          className="home_image" 
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg" 
          alt="" 
        />
        <div className="home_row">
          <Product 
            title="OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)"
            price={29999.00}
            image="https://images-na.ssl-images-amazon.com/images/I/61imIDlZ7JL._SX679_.jpg"
            rating={4}
          />
          <Product 
            title="OnePlus 8T 5G (Lunar Silver, 8GB RAM, 128GB Storage)"
            price={42999.00}
            image="https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-lunar.png"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product 
            title="OnePlus Bullets Wireless Z Bass Edition"
            price={1999.00}
            image="https://images-na.ssl-images-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg"
            rating={4}
          />
          <Product 
            title="Titan Modern Bandhan Analog Silver Dial unisex Watch 9400294202KM01/NN9400294202KM01"
            price={13995.00}
            image="https://images-na.ssl-images-amazon.com/images/I/81tOQsIIjHL._UL1500_.jpg"
            rating={5}
          />
          <Product 
            title="EYEBOGLER Regular Men's Cotton Designer T-Shirt (EB1T67)"
            price={399.00}
            image="https://images-na.ssl-images-amazon.com/images/I/517haCxIeiL._UL1000_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product 
            title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey"
            price={135790}
            image="https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;