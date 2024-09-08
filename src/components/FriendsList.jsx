import Friend from "./Friend";

function FriendsList({ friends, onSelction, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelction={onSelction}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
