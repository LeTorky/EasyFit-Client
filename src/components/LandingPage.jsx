import React from 'react'
import { AboutGymawy } from './landingPageComponents/AboutGymawy'
import { Carousell } from './landingPageComponents/Carousell'
import { Coaches } from './landingPageComponents/Coaches'
import { Header } from './shared/Header.jsx'
import { Footer } from './shared/Footer.jsx'

const LandingPage = () => {

    return (
        <>
        <Header></Header>
        <Carousell></Carousell>
        <AboutGymawy></AboutGymawy>
        <Footer></Footer>
        </>
    );
}
export default LandingPage;