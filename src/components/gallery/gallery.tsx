import classNames from 'classnames';
import styles from './gallery.module.scss';

export interface GalleryProps {
    className?: string;
}

export const Gallery = ({ className }: GalleryProps) => {
    return <div className={classNames(styles.root, className)}>Gallery</div>;
};
