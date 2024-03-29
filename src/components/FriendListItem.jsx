import css from "../css/FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt={name} width="100" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
}
