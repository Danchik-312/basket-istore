import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import AccessoryPage from "./pages/accessoryPage/AccessoryPage";
import Catalog from "./pages/catalog/Catalog";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import Iphone from "./pages/iphone/Iphone";
import AppleWatch from "./pages/appleWatch/AppleWatch";
import IPad from "./pages/iPad/IPad";
import CatalogList from "./pages/catalogList/CatalogList";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/accessory' element={<AccessoryPage/>}/>
                <Route path='/catalog' element={<Catalog/>}>
                    <Route index element={<CatalogList/>}/>
                    <Route path='iphone' element={<Iphone/>}/>
                    <Route path='iPad' element={<IPad/>}/>
                    <Route path='apple-watch' element={<AppleWatch/>}/>
                </Route>
                <Route path='/contacts' element={<ContactsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;