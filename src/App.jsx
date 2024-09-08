import "./App.css";
import FriendsList from "./components/FriendsList";
import { initialFriends } from "../data";

import FormAndFriend from "./components/FormAndFriend";
import Buttons from "./components/Buttons";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAndFriend, setShowAndFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAndFriend() {
    setShowAndFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAndFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAndFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelction={handleSelection}
        />

        {showAndFriend && <FormAndFriend onAddFriend={handleAddFriend} />}

        <Buttons onClick={handleShowAndFriend}>
          {showAndFriend ? "Close" : "Add Friend"}
        </Buttons>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSpiltBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
