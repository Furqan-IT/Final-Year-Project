import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import "./Community.css";

const Community = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Create the socket connection when the component mounts
    const newSocket = io("http://localhost:8000");
    setSocket(newSocket);

    // Clean up the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  const joinRoom = () => {
    if (username !== "" && room !== "" && socket) {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <>
      <div className="App">
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Join A Chat</h3>
            <input
              type="text"
              placeholder="John..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
    </>
  );
};

export default Community;
