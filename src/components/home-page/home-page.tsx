import classNames from 'classnames';
import styles from './home-page.module.scss';
import FigmaLogoSvg from '../../assets/figma  logo.svg';
import ChevronRightSvg from '../../assets/chevron right.svg';
import Homeimage1Jpeg from '../../assets/homeimage1.jpeg';
import { Header } from '../header/header';
import { Galleryy } from '../galleryy/galleryy';
import { Footer } from '../footer/footer';
import { Helmet } from 'react-helmet';

export interface HomePageProps {
    className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div className={styles.App}>
            <Helmet>
                <title>Figma UI Kit and design systems for iOS</title>
                <meta name="description" content="Create iOS apps faster with our extensive Figma UI kit. It offers adaptive components, font/color variables, dynamic type sizes, and both light and dark mode. It also includes a design system for iOS." />
                <meta name="keywords" content="Figma, UI Kit, iOS, design systems" />
            </Helmet>
            <Header />
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Speed up iOS app design with our robust Figma UI kit
                    </h1>
                    <h2 className={styles.subtitle}>Figma UI Kit and design system for iOS</h2>
                    <p className={styles.text}>
                        Create iOS apps faster with our extensive Figma UI kit. It offers adaptive
                        components, font/color variables, dynamic type sizes, and both light and
                        dark mode designs.{' '}
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.button}>
                            <img src={FigmaLogoSvg} alt="" />
                            Preview in Figma{' '}
                        </button>
                        <button className={styles.button2}>
                            Free Download
                            <img src={ChevronRightSvg} alt="" />{' '}
                        </button>
                    </div>
                </div>
                <img src={Homeimage1Jpeg} alt="" className={styles.image} />
            </div>
            <Galleryy />
            <Footer />
        </div>
    );
};
