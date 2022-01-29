import { ReactElement } from "react";
import styles from "./styles.module.scss";

interface SocialButtonProps {
  icon: ReactElement;
  title: string;
}

export function SocialButton({ icon, title }: SocialButtonProps) {
  return (
    <button className={styles.socialButton}>
      {icon}
      {title}
    </button>
  );
}
