import Profile from "./Profile";
import userData from "../data-json/userData.json";

import FriendList from "./FriendList";
import friends from "../data-json/friends.json";

import TransactionHistory from "./TransactionHistory";
import transactions from "../data-json/transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
