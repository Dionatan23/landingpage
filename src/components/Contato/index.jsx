import Link from "next/link";
import Button from "../Button";
import Select from "../Select";
import TextInput from "../TextInput";
import styles from "./contato.module.scss";

export default function Contato() {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <span>ENTRE EM CONTATO</span>
        <h1>Aumente seu resultado de vendas e performance</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>
      <div className={styles.form}>
        <h1>Fale com um especialista</h1>
        <form>
          <TextInput type="text" placeholder="Nome completo" required />
          <TextInput type="email" placeholder="E-mail profissional" required />
          <TextInput
            type="text"
            placeholder="Celular/Whatsapp"
            pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
            required
          />
          <TextInput type="text" placeholder="Site" />
          <Select
            placeholder="Orçamento para mídia"
            required
            options={[
              { label: "Instagram", value: "instagram" },
              { label: "Facebook", value: "facebook" },
              { label: "Google", value: "Google" },
            ]}
          />
          <Button label="Enviar" tipo="full" />
        </form>
      </div>
      <div className={styles.footer}>
        <p>
          Ao enviar esse formulário, você reconhece que leu e concorda com a
          nossa
          <Link href="/">
            <span> Política de Privacidade.</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
