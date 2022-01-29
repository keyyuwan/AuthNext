import styles from "./styles.module.scss";

interface InputProps {
  label: string;
  name: string;
}

export function Input({ label, name }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{label}</label>
      <input type={name} id={name} />
    </div>
  );
}
