// App.js
import React from 'react';
import Chatboot from './Components/chatbot1'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';
import About from './About';
import WeatherApp from './Components/WeatherApp';

const App = () => {
return <div>
    <WeatherApp/>
    <Chatboot />
</div>
}


export default App;
