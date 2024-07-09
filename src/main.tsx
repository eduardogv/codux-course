import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/home-page/home-page';
import { BrowsePage } from './components/browse-page/browse-page';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/browse" element={<BrowsePage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
