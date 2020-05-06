import React from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';


function Home() {
    return (
        <>
    <div className="slant">
        <Header/>
        <About/>
    </div>
    <Footer/>
    </>
)
}
export default Home;