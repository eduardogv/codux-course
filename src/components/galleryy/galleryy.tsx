import classNames from 'classnames';
import styles from './galleryy.module.scss';
import Homeimage2Jpeg from '../../assets/homeimage2.jpeg';
import Homeimage3Jpeg from '../../assets/homeimage3.jpeg';
import Homeimage4Jpeg from '../../assets/homeimage4.jpeg';
import { GalleryItem } from '../gallery-item/gallery-item';

export interface GalleryyProps {
    className?: string;
}

const images = [
    { image: Homeimage2Jpeg, alt: 'Image 1'}, 
    { image: Homeimage3Jpeg, alt: 'Image 2' }, 
    { image: Homeimage4Jpeg, alt: 'Image 3' }
];

export const Galleryy = ({ className }: GalleryyProps) => {
    return (
        <div className={styles.gallery}>
            {images.map((item, index) => (
                <GalleryItem key={index} image={item.image} alt={item.alt} />
            ))}
        </div>
    );
};
