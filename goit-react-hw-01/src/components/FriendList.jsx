import css from "../css/FriendList.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={css.item}>
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
