import classNames from 'classnames';
import styles from './header.module.scss';
import DesigncodeLogoSvg from '../../assets/designcode  logo.svg';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.designcodeLogo} alt="" src={DesigncodeLogoSvg} />
                <b className={styles.designcode}>DesignCode</b>
            </div>
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
