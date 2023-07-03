import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import BusinessAdmin from './Pages/BusinessAdmin';
import Masjid from './Pages/findMasjid';
import Business from './Pages/findBusiness';
import Footer from './components/Footer';
import PublicViewingDetails from './components/PublicViewingDetails';
import DetailMasjid from './components/DetailMasjid';
import BusinessForm from './components/BusinessForm.js';
import Detail from './components/Detail';
import AdminAnnouncement from './Pages/AdminAnnouncement';
import CarouselForm from './components/CarouselForm'
import Nav from './components/Nav';
import Directory from './Pages/Directory';
import ImagePage from './Pages/ImagePage';
import Admin from './Pages/Admin';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AdminAccounts from './Pages/AdminAccounts';

function Routing() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route
            path="/"
            element={ <Home /> }
        />
        <Route
            path="/about"
            element={ <About /> }
        />
        <Route
            path="/contact"
            element={ <Contact/> }
        />
        <Route
            path="/directory"
            element={ <Directory/> }
        />

        <Route
            path="/findMasjid"
            element={ <Masjid/> }
        />
        <Route
            path="/findBusiness"
            element={ <Business/> }
        />
        <Route
            path="/footer"
            element={ <Footer/> }
        />
        <Route
            path="/businessadmin"
            element={ <BusinessAdmin/> }
        />
        
        <Route
            path="/form"
            element={ <BusinessForm /> }
        />

        <Route
            path="/detail"
            element={ <Detail /> }
        />

        <Route
            path="/view"
            element={ <PublicViewingDetails /> }
        />

        <Route
            path="/detailmasjid"
            element={ <DetailMasjid /> }
        />

        <Route
            path="/AdminAnnouncement"
            element={ <AdminAnnouncement /> }
        />
        
        <Route
            path="/CarouselForm"
            element={ <CarouselForm /> }
        />

        <Route
            path="/imagepage"
            element={ <ImagePage /> }
        />

        <Route
            path="/admin"
            element={ <Admin /> }
        />
        
        <Route
            path="/register"
            element={ <Register /> }
        />

        <Route
            path="/login"
            element={ <Login /> }
        />

        <Route
            path="/accounts"
            element={ <AdminAccounts /> }
        />

    </Routes>
    
    <Footer />
</BrowserRouter>
)
}

export default Routing