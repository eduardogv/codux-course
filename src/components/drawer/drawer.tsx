import classNames from 'classnames';
import styles from './drawer.module.scss';
import DesigncodeLogoSvg from '../../assets/designcode  logo.svg';
import XLogoSvg from '../../assets/x  logo.svg';
import YoutubeLogoSvg from '../../assets/youtube  logo.svg';

export interface DrawerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Drawer = ({ className }: DrawerProps) => {
    return (
        <div className={[styles.drawer, className].join(' ')} data-animate-on-scroll>
            <div className={styles.headerMenu}>
                <a className={styles.headerButton}>
                    <div className={styles.headerButtonText}>Designs</div>
                    <div className={styles.headerButtonInfo}>
                        <div className={styles.headerButtonCaption}>Total</div>
                        <div className={styles.headerButtonFootnote}>252</div>
                    </div>
                </a>
                <a className={styles.headerButton}>
                    <div className={styles.headerButtonText}>Updates</div>
                    <div className={styles.headerButtonInfo}>
                        <div className={styles.headerButtonCaption}>2024</div>
                        <div className={styles.headerButtonFootnote}>May</div>
                    </div>
                </a>
                <a className={styles.headerButton}>
                    <div className={styles.headerButtonText}>Buy Now</div>
                    <div className={styles.headerButtonInfo}>
                        <div className={styles.headerButtonCaption}>Early</div>
                        <div className={styles.headerButtonFootnote}>Access</div>
                    </div>
                </a>
            </div>
            <div className={styles.footerLinks}>
                <a className={styles.buttonLink}>
                    <div className={styles.designs}>Pricing</div>
                </a>
                <a className={styles.buttonLink}>
                    <div className={styles.designs}>About</div>
                </a>
                <a className={styles.buttonLink}>
                    <div className={styles.designs}>Contact</div>
                </a>
                <a className={styles.buttonLink}>
                    <div className={styles.designs}>Sign in</div>
                </a>
                <a className={styles.buttonLink}>
                    <div className={styles.designs}>Create account</div>
                </a>
            </div>
            <div className={styles.footerCompany}>
                <div className={styles.logoFooter}>
                    <img className={styles.buttonCircleIcon} alt="" src={DesigncodeLogoSvg} />
                    <b className={styles.designcode}>DesignCode</b>
                </div>
                <div className={styles.designIosApplications}>
                    Design iOS applications quickly using our comprehensive Figma UI kit
                </div>
                <div className={styles.social}>
                    <img className={styles.buttonCircleIcon} alt="" src={XLogoSvg} />
                    <img className={styles.buttonCircleIcon} alt="" src={YoutubeLogoSvg} />
                </div>
                <div className={styles.privacyTerms}>© 2024 . PRIVACY . TERMS</div>
            </div>
        </div>
    );
};
