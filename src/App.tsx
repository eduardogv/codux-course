import styles from './App.module.scss';
import { HomePage } from './components/home-page/home-page';

function App() {
    return (
        <div className={styles.App}>
            <HomePage />
        </div>
    );
}

export default App;
