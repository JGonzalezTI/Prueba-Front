'use client'
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./Navbar.module.scss";
import { useCartStore } from "@/store/cartStore";

const Navbar = () => {

    const { items } = useCartStore();
    const totalItems = items.length;

    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.brand}>
                    
                        <Link href="/" className={styles.brandName}>
                            LeanShop
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link href="/cart" className={styles.cartLink}>
                        <div className="carthead">
                        <FiShoppingCart size={28} />
                            {totalItems > 0 && (
                                <div className='cartCount'>
                                    {totalItems}
                                </div>
                            )}
                        </div>
                          
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
