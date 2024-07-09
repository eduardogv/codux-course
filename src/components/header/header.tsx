import styles from './header.module.scss';
import DesigncodeLogoSvg from '../../assets/designcode  logo.svg';
import MenuAlignLeftDescSvg from '../../assets/menu align left desc.svg';
import { Drawer } from '../drawer/drawer';
import {useState} from 'react'
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps {
    className?: string;
}

export const Header = ({}: HeaderProps) => {
    const [isDrawerVisible, setDrawerVisible] = useState(false)
    const drawerRef = useRef(null);

    const toogleDrawer = () => {
        setDrawerVisible(!isDrawerVisible);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (!drawerRef.current || !(drawerRef.current as any).contains(event.target)){
            setDrawerVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.header}>
            {isDrawerVisible && (
                <div className={styles.drawer} ref={drawerRef}>
                    <Drawer />
                </div>
            )}

            <div className={styles.logo}>
                <img className={styles.designcodeLogo} alt="" src={DesigncodeLogoSvg} />
                <b className={styles.designcode}>DesignCode</b>
            </div>
            <a className={styles.buttonCircle} onClick={toogleDrawer}>
                <img className={styles.menuAlignLeftDesc} alt="" src={MenuAlignLeftDescSvg} />
            </a>
            <div className={styles.header1}>
                <Link to={'/browse'} className={styles.button}>
                    <div className={styles.designs}>Designs</div>
                    <div className={styles.info}>
                        <div className={styles.total}>Total</div>
                        <div className={styles.div}>252</div>
                    </div>
                </Link>
                <div className={styles.button1}>
                    <div className={styles.designs}>Updates</div>
                    <div className={styles.info}>
                        <div className={styles.total}>2024</div>
                        <div className={styles.div}>May</div>
                    </div>
                </div>
                <div className={styles.button1}>
                    <div className={styles.designs}>Buy Now</div>
                    <div className={styles.info}>
                        <div className={styles.total}>Early</div>
                        <div className={styles.div}>Access</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
