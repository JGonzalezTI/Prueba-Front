import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.socialMedia}>
                    <a href="/">About Us</a>
                    <a href="/">Contact Us</a>
                    <a href="/">FAQ</a>
                </div>
                <div className={styles.sep} />
                <div className={styles.copyRight}>
                    <p>© {new Date().getFullYear()} LeanShop - All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;