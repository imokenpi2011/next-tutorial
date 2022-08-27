import Link from "next/link";
import styles from "../../styles/Home.module.css";

const ProductsList = () => {
    return <div className={styles.container}>
        <main className={styles.main}>
            <h2 className={styles.title}>Products</h2>
            <ul>
                <li>
                    <Link href="/products/smamrtphone">
                        <a>smartphohne</a>
                    </Link>
                </li>
                <li>
                    <Link href="/products/pc">
                        <a>pc</a>
                    </Link>
                </li>
                <li>
                    <Link href="/products/headphone">
                        <a>headphone</a>
                    </Link>
                </li>
            </ul>
        </main>
  </div>;
};

export default ProductsList;
