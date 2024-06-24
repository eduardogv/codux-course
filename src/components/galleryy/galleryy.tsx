import classNames from 'classnames';
import styles from './galleryy.module.scss';
import Homeimage2Jpeg from '../../assets/homeimage2.jpeg';
import Homeimage3Jpeg from '../../assets/homeimage3.jpeg';
import Homeimage4Jpeg from '../../assets/homeimage4.jpeg';

export interface GalleryyProps {
    className?: string;
}

export const Galleryy = ({ className }: GalleryyProps) => {
    return (
        <div className={styles.gallery}>
            <div className={styles.galleryItem}>
                <img className={styles.galleryItemImage} alt="" src={Homeimage2Jpeg} />
                <a className={styles.circleButton}>
                    <img className={styles.bookmarkIcon} alt="" src="Bookmark.svg" />
                </a>
            </div>
            <div className={styles.galleryItem1}>
                <img className={styles.galleryItemImage1} alt="" src={Homeimage3Jpeg} />
            </div>
            <div className={styles.galleryItem1}>
                <img className={styles.galleryItemImage1} alt="" src={Homeimage4Jpeg} />
            </div>
        </div>
    );
};
