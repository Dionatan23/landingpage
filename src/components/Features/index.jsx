import styles from "./features.module.scss";
import icon from "../../../public/icon.svg";
import Image from "next/image";

export default function Features() {
  return (
    <div className={styles.container}>
      <h1>Neste bairro, não há agência melhor. Garantimos.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className={styles.features}>
        <div className={styles.feature}>
          <Image src={icon} alt="Icone" className={styles.icon} />
          <h1>Digital Strategy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={icon} alt="Icone" className={styles.icon} />
          <h1>Estratégia digital</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={icon} alt="Icone" className={styles.icon} />
          <h1>Social Midia</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={icon} alt="Icone" className={styles.icon} />
          <h1>Social Midia</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
    </div>
  );
}
