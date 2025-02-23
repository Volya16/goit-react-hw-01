import styles from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`Avatar of ${name}`}
        width="48"
      />
      <p className={styles.name}>{name}</p>
      <p
        className={clsx(
          styles.status,
          isOnline ? styles.isOnline : styles.isOffline
        )}
      >
        {isOnline ? "isOnline" : "Offline"}
      </p>
    </>
  );
}
