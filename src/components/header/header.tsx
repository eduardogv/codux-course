import classNames from 'classnames';
import styles from './header.module.scss';
import DesigncodeLogoSvg from '../../assets/designcode  logo.svg';
import MenuAlignLeftDescSvg from '../../assets/menu align left desc.svg';
import { Drawer } from '../drawer/drawer';
import {useState} from 'react'

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [isDrawerVisible, setDrawerVisible] = useState(false)
    const toogleDrawer = () => {
        setDrawerVisible(!isDrawerVisible);
    }

    return (
        <div className={styles.header}>
            {isDrawerVisible && (
                <div className={styles.drawer}>
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
                <div className={styles.button}>
                    <div className={styles.designs}>Designs</div>
                    <div className={styles.info}>
                        <div className={styles.total}>Total</div>
                        <div className={styles.div}>252</div>
                    </div>
                </div>
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
