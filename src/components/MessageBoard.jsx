import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = {
      id: message.length + 1,
      message: inputMessage,
    };
    setMessage([...message, newMessage]);
    setInputMessage("");
  };

  const deleteMessage = (ID) => {
    const updateMessage = message.filter((message) => message.id !== ID);
    setMessage(updateMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => setInputMessage(event.target.value)}
            value={inputMessage}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((message) => (
          <div className="message">
            <div key={message.id}>
              {message.message}
              <button
                className="delete-button"
                onClick={() => deleteMessage(message.id)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
