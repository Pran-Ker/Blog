import { useState } from 'react';


const Home = () => {

    const [name, setName] =  useState('mario');

    const handleClick = () => {
        setName('Prannay')
    }

    
    return (
        <nav className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </nav>
    );

}


export default Home;