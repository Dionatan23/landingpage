import styles from "./style.module.scss";

export default function Button({ label, tipo }) {
  const  genereteClassTipo = () => {
    if (tipo === "secundary") return styles.secundary;
    if (tipo === "full") return styles.full;
    return styles.primary;
  }

  return (
    <button className={`${styles.button}  ${genereteClassTipo()}`}>
      {label}
    </button>
  );
}
