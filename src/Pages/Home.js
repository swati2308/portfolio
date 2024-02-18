import React from 'react';
import { Button } from '../Components/Button';
import { Navbar } from '../Components/Navbar';
import './Home.css';
export const Home = () => {
    return (
        <div className='text-center font-josefin'>
         <Navbar/> 
         
        <div className='pt-48 pr-96'>
        <p className='px-8 py-2 text-4xl text-black'>
            Hi there! My name is Swati Kumari
         </p>
         <p className='px-4 py-2 pt-10 text-4xl text-black'>
            I'm a <span className='text-violet-300'>front-end developer</span>
         </p>  
         <Button/>
        </div>
         
        </div>
    
      );
}
