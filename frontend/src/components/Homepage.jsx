import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1>Homepage</h1>
      <h2>PANTRY PING: Your Attendant For Refreshment</h2>
      <p>Attention Busy Bees!</p>
      <p>
        Tired of waiting in line for your daily caffeine or refreshing drink? Introducing PANTRY PING,
        <br /> your one-stop shop 
        for ordering beverages from our amazing cafeteria, delivered straight to your desk!
      </p>
      <h3>With Pantry Ping, you can:</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><strong>Save Time:</strong> Skip the queue and order your favourite coffee, tea, or water with just a few clicks on your phone or computer.</li>
        <li><strong>Boost Productivity:</strong> Get back to work faster and avoid those frustrating lunchtime hold-ups.</li>
        <li><strong>Enjoy Convenience:</strong> Have your drink delivered right to your desk - focus on work, not waiting!</li>
      </ul>
      <h3>Pantry Ping offers:</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>A wide variety of beverages: From hot coffee and tea to refreshing iced options and water, there's something for everyone.</li>
        <li>Easy-to-use platform: Our user-friendly website and app make ordering a breeze.</li>
        <li>Customization options: Add your customised needs with a few clicks.</li>
      </ul>
      <p>Say goodbye to wasted time and hello to a hassle-free beverage experience with Pantry Ping!</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login" style={{ padding: '10px 20px', marginRight: '20px', cursor: 'pointer', textDecoration: 'none', backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}>LOGIN</Link>
        <Link to="/signup" style={{ padding: '10px 20px', cursor: 'pointer', textDecoration: 'none', backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}>SIGNUP</Link>
      </div>
    </div>
  );
};

export default Homepage;
