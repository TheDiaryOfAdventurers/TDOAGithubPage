import React, {useContext} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ThemeContext} from './contexts/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ForumPage from './pages/ForumPage.jsx';
import WikiPage from './pages/WikiPage.jsx';
import NotFoundPage from './pages/NotFound.jsx';
import {useSetupRequestInterceptors} from "./utils/request.jsx";
import './App.css';

function App() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <Router>
            <SetupInterceptors/>
            <div className="App">
                <Navbar theme={theme} toggleTheme={toggleTheme}/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/forum" element={<ForumPage/>}/>
                    <Route path="/wiki" element={<WikiPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/> {/* 添加 catch-all 路由 */}
                </Routes>
            </div>
        </Router>
    );
}

function SetupInterceptors() {
    useSetupRequestInterceptors()
    return null
}

export default App;
