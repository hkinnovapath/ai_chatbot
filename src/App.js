import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import MessageInput from "./components/MessageInput";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [chats, setChats] = useState([]); // Stores chat titles dynamically
  const [activeChat, setActiveChat] = useState(null); // Track the current active chat
  const [messages, setMessages] = useState([]); // Messages for the active chat
  const [firstMessageSent, setFirstMessageSent] = useState(false); // Track if first message has been sent

  const handleSend = (message) => {
    // If it's the first message, replace the placeholder with the user's message
    const updatedMessages = [
      ...messages,
      { sender: "User", text: message },
      { sender: "ChatBot", text: "This is a sample reply." }, // Placeholder response for now
    ];
    setMessages(updatedMessages);
    setFirstMessageSent(true); // Mark that the first message has been sent
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  const addNewChat = () => {
    const newChatTitle = `Chat ${chats.length + 1}`;
    setChats([...chats, newChatTitle]);
    setActiveChat(newChatTitle); // Automatically switch to the new chat
    setMessages([]); // Clear any existing messages for the new chat
    setFirstMessageSent(false); // Reset the first message flag
  };

  const switchChat = (chat) => {
    setActiveChat(chat);
    setMessages([]); // Reset messages for simplicity
    setFirstMessageSent(false); // Reset the first message flag
  };

  const deleteChat = (chatToDelete) => {
    const updatedChats = chats.filter((chat) => chat !== chatToDelete);
    setChats(updatedChats);

    // If the deleted chat is active, reset the active chat
    if (chatToDelete === activeChat) {
      setActiveChat(null);
      setMessages([]);
      setFirstMessageSent(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div
        className={`transition-all duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10 transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-[90%]"
        }`}
        onClick={() => {
          if (!isSidebarVisible) {
            setIsSidebarVisible(true); // Expand if the sidebar is currently hidden
          }
        }} // Sidebar expands if clicked when hidden
      >
        <Sidebar
          chats={chats}
          activeChat={activeChat}
          onAddNewChat={addNewChat}
          onSwitchChat={switchChat}
          onDeleteChat={deleteChat}
          onToggleSidebar={toggleSidebar} // Passing toggleSidebar function
        />
      </div>
      {/* Chat Area */}
      <div
        className={`flex-1 transition-all duration-500 ${isSidebarVisible ? "ml-64" : "ml-10"}`}  // Remove margin when sidebar is hidden
      >
        <div className="flex flex-col h-full">
         {/* ChatBox Display */}
          <ChatBox messages={messages} />
          {/* Message Input */}
          <MessageInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}

export default App;
