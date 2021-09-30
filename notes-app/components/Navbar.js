import styles from "../styles/Navbar.module.scss"
import Image from "next/image"
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href="/">
                <Image 
                    className={styles.nav_logo}
                    src="/images/logo.svg" 
                    alt="Noteist"
                    width={120}
                    height= {40}
                />
            </Link>
            <div className={styles.navlinks}>
                <Link href="/login">Login</Link>
                <Link href="/signup">SignUp</Link>
            </div>
        </div>
    )
}

export default Navbar
