import styles from './App.module.scss';
import { HomePage } from './components/home-page/home-page';
import { BrowsePage } from './components/browse-page/browse-page';
import { Routes, Route, MemoryRouter } from'react-router-dom';

function App() {
    return (
        <div className={styles.App}>
            <MemoryRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/browse" element={<BrowsePage/>} />
            </Routes>
            </MemoryRouter>
        </div>
    );
}

export default App;
