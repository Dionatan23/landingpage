import Image from "next/image";
import styles from "./footer.module.scss";
import logo from "../../../public/agencia.svg";
import icoInsta from "../../../public/instagram.svg";
import icoFace from "../../../public/facebook-f.svg";
import iconLink from "../../../public/linkedin.svg";
import iconYoutube from "../../../public/youtube.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={`${styles.colum} ${styles.columPrimcipal}`}>
        <Image src={logo} alt="Logo" />
        <h1 className={styles.title}>0800 800 800</h1>
        <p>comercial@agencia.com.br</p>
      </div>
      <div className={styles.colum}>
        <h1>MENU</h1>
        <p>Quem somos Cases</p>
      </div>
      <div className={styles.colum}>
        <h1>CONTEÚDO</h1>
        <p>E-books Fórmulas prontas</p>
      </div>
      <div className={`${styles.colum} ${styles.textRight}`}>
        <h1>SOCIAL</h1>
        <div className={styles.icons}>
          <Link href="/">
            <Image src={icoInsta} alt="Incone" />
          </Link>
          <Link href="/">
            <Image src={icoFace} alt="Incone" />
          </Link>
          <Link href="/">
            <Image src={iconLink} alt="Incone" />
          </Link>
          <Link href="/">
            <Image src={iconYoutube} alt="Incone" />
          </Link>
        </div>
      </div>
      <div className={styles.todos}>
        ©2022 AGENCIA - Todos os direitos reservados.
      </div>
    </footer>
  );
}
