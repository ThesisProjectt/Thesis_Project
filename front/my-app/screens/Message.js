import React, { useEffect, useState } from "react";
import { ScrollView, TextInput } from "react-native";

function Message({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <View className="chat-window">
      <View className="chat-header">
        <Text>Live Chat</Text>
      </View>
      <View className="chat-body">
        <ScrollView className="message-container">
          {messageList.map((messageContent) => {
            return (
              <View
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <View>
                  <View className="message-content">
                    <Text>{messageContent.message}</Text>
                  </View>
                  <View className="message-meta">
                    <Text id="time">{messageContent.time}</Text>
                    <Text id="author">{messageContent.author}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View className="chat-footer">
        <TextInput
          type="text"
        //   currentvalue={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <Button onPress={sendMessage} color="##9658"/>
      </View>
    </View>
  );
}

export default Message;