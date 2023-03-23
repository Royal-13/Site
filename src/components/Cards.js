import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-10.jpg'
              text='Explore the hidden waterfall of Guwahati'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='../images/img-11.jpg' 
              text='Travel through the backwaters of Kerala in a house boat'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-12.jpg'
              text='Ride through the extravagent streets of India'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='../images/img-13.jpg'
              text='Experience water sports in the valley of Uttarakhand'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='../images/img-14.jpg' 
              text='Take a virtual ride and celebrate festivals of india'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
