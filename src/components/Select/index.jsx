import styles from "./select.module.scss";

export default function Select({ placeholder, required, options }) {
  return (
    <select className={styles.select} required={required}>
      <option value="">{placeholder}</option>

      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
