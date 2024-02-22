import styles from "./header.module.scss";
import logo from "../../../public/agencia.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logotipo}>
        <Image src={logo} alt="logotipo" />
      </div>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/">O que fazemos ?</Link>
        <Link href="/">Contato</Link>
      </div>
      <div className={styles.action}>
        <button className={styles.button}>Fale conosco</button>
      </div>
    </header>
  );
}
