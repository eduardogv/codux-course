import styles from './gallery-item.module.scss';
import BookmarkSvg from '../../assets/bookmark.svg';
import Homeimage2Jpeg from '../../assets/homeimage2.jpeg';

export interface GalleryItemProps {
    image?: string;
    alt?: string;
}

export const GalleryItem = ({ image = Homeimage2Jpeg, alt='Image'}: GalleryItemProps) => {
    return (
        <div className={styles.galleryItem}>
            <img className={styles.galleryItemImage} alt="" src={image} />
            <a className={styles.circleButton}>
                <img className={styles.bookmarkIcon} alt="Bookmark icon" src={BookmarkSvg} />
            </a>
        </div>
    );
};
