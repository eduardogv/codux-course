import classNames from 'classnames';
import styles from './browse-page.module.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import ChevronDownSvg from '../../assets/chevron down.svg';
import MagnifyingGlassSvg from '../../assets/magnifying glass.svg';
import { GalleryItem } from '../gallery-item/gallery-item';
import HomeimageDark1 from '../../assets/homeimagedark1.jpeg';
import HomeimageDark2 from '../../assets/homeimagedark2.jpeg';
import HomeimageDark3 from '../../assets/homeimagedark3.jpeg';
import HomeimageDark4 from '../../assets/homeimagedark4.jpeg';
import HomeimageDark5 from '../../assets/homeimagedark5.jpeg';
import HomeimageDark6 from '../../assets/homeimagedark6.jpeg';
import HomeimageDark7 from '../../assets/homeimagedark7.jpeg';
import HomeimageDark8 from '../../assets/homeimagedark8.jpeg';
import HomeimageDark9 from '../../assets/homeimagedark9.jpeg';
import { Helmet } from 'react-helmet';

export interface BrowsePageProps {
    className?: string;
}

const images = [
    { src: HomeimageDark1, alt: 'Home Image Dark 1' },
    { src: HomeimageDark2, alt: 'Home Image Dark 2' },
    { src: HomeimageDark3, alt: 'Home Image Dark 3' },
    { src: HomeimageDark4, alt: 'Home Image Dark 4' },
    { src: HomeimageDark5, alt: 'Home Image Dark 5' },
    { src: HomeimageDark6, alt: 'Home Image Dark 6' },
    { src: HomeimageDark7, alt: 'Home Image Dark 7' },
    { src: HomeimageDark8, alt: 'Home Image Dark 8' },
    { src: HomeimageDark9, alt: 'Home Image Dark 9' },
];

export const BrowsePage = ({ className }: BrowsePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Helmet>
                <title>Browse - Figma UI Kit and design systems for iOS</title>
                <meta name="description" content="Create iOS apps faster with our extensive Figma UI kit. It offers adaptive components, font/color variables, dynamic type sizes, and both light and dark mode. It also includes a design system for iOS." />
                <meta name="keywords" content="Figma, UI Kit, iOS, design systems" />
            </Helmet>            
            <Header />
            <div className={styles.menu}>
                <div className={styles.dropdowns}>
                    <div className={styles.button}>
                        <div className={styles.newest}>Newest</div>
                        <img className={styles.chevronDownIcon} alt="" src={ChevronDownSvg} />
                    </div>
                    <div className={styles.button1}>
                        <div className={styles.newest}>Designs</div>
                        <img className={styles.chevronDownIcon} alt="" src={ChevronDownSvg} />
                    </div>
                    <div className={styles.button1}>
                        <div className={styles.newest}>Bookmarks</div>
                        <img className={styles.chevronDownIcon} alt="" src={ChevronDownSvg} />
                    </div>
                </div>

                <div className={styles.search}>
                    <div className={styles.timer}>
                        <div className={styles.search1}>Search</div>
                        <img className={styles.chevronDownIcon} alt="" src={MagnifyingGlassSvg} />
                    </div>
                </div>
            </div>
            <div className={styles.gallery}>
                {images.map((item, index) => (
                    <GalleryItem key={index} image={item.src} alt={item.alt} />
                ))}
            </div>
            <Footer />
        </div>
    );
};
