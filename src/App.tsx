import React from 'react';

import './index.css';

import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

import Hero from './sections/Hero.tsx';
import About from './sections/About.tsx';
import Explore from './sections/Explore.tsx';
import GetStarted from './sections/GetStarted.tsx';
import WhatsNew from './sections/WhatsNew.tsx';
import World from './sections/World.tsx';
import Insights from './sections/Insights.tsx';
import Feedback from './sections/Feedback.tsx';

const App: React.FC = () => {
    return (
        <div className="App bg-[#1A232E] overflow-hidden text-[#fff]">
            <Navbar />
            <Hero />

            <div className="relative">
                <About />
                <div className="gradient-03 z-0" />
                <Explore />
            </div>

            <div className="relative">
                <GetStarted />
                <div className="gradient-04 z-0" />
                <WhatsNew />
            </div>

            <World />

            <div className="relative">
                <Insights />
                <div className="gradient-04 z-0" />
                <Feedback />
            </div>
            
            <Footer />
        </div>
    );
};

export default App;