import styles from "./TransactionItem.module.css";

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{type}</td>
      <td className={styles.td}>{amount}</td>
      <td className={styles.td}>{currency}</td>
    </tr>
  );
}
