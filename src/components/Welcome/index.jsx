import Button from "../Button";
import styles from "./style.module.scss";
import banner from "../../../public/leads-img.svg"
import Image from "next/image";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Melhor agência de marketing do bairro</h1>
        <p>
          Somos uma agência de performance digital, aceleramos vendas e
          aquisição de leads para grandes marcas.
        </p>
        <Button label="Aumentar vendas" tipo="secundary"/>
      </div>
      <div className={styles.image}>
        <Image src={banner} alt="Banner" />
      </div>
    </div>
  );
}
