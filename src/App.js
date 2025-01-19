// // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // import Sidebar from "./components/Sidebar";
// // // // // // // // // // // import ChatBox from "./components/ChatBox";

// // // // // // // // // // // function App() {
// // // // // // // // // // //   const [conversations, setConversations] = useState([]);
// // // // // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // // // // //   const [isSidebarVisible, setIsSidebarVisible] = useState(true);

// // // // // // // // // // //   const handleSend = (userMessage) => {
// // // // // // // // // // //     const botReply = "This is a sample reply."; // Static reply for now
// // // // // // // // // // //     const newMessages = [
// // // // // // // // // // //       ...messages,
// // // // // // // // // // //       { sender: "User", text: userMessage },
// // // // // // // // // // //       { sender: "ChatBot", text: botReply },
// // // // // // // // // // //     ];
// // // // // // // // // // //     setMessages(newMessages);

// // // // // // // // // // //     if (conversations.length === 0) {
// // // // // // // // // // //       setConversations([{ title: "New Conversation", id: 1 }]);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleNewChat = () => {
// // // // // // // // // // //     setMessages([]);
// // // // // // // // // // //     const newConversation = {
// // // // // // // // // // //       id: conversations.length + 1,
// // // // // // // // // // //       title: `Conversation ${conversations.length + 1}`,
// // // // // // // // // // //     };
// // // // // // // // // // //     setConversations([...conversations, newConversation]);
// // // // // // // // // // //   };

// // // // // // // // // // //   const toggleSidebar = () => {
// // // // // // // // // // //     setIsSidebarVisible(!isSidebarVisible);
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="flex h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
// // // // // // // // // // //       {/* Sidebar */}
// // // // // // // // // // //       <div
// // // // // // // // // // //         className={`transform ${
// // // // // // // // // // //           isSidebarVisible ? "translate-x-0" : "-translate-x-full"
// // // // // // // // // // //         } transition-transform duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10`}
// // // // // // // // // // //       >
// // // // // // // // // // //         <Sidebar
// // // // // // // // // // //           conversations={conversations}
// // // // // // // // // // //           onNewChat={handleNewChat}
// // // // // // // // // // //           onToggleSidebar={toggleSidebar}
// // // // // // // // // // //         />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Unhide Sidebar Button */}
// // // // // // // // // // //       {!isSidebarVisible && (
// // // // // // // // // // //         <button
// // // // // // // // // // //           onClick={toggleSidebar}
// // // // // // // // // // //           className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-full hover:from-pink-500 hover:to-purple-500 shadow-lg transition-all duration-300"
// // // // // // // // // // //         >
// // // // // // // // // // //           <span className="text-lg">{`>`}</span>
// // // // // // // // // // //         </button>
// // // // // // // // // // //       )}

// // // // // // // // // // //       {/* Chat Area */}
// // // // // // // // // // //       <div
// // // // // // // // // // //         className={`flex-1 ${
// // // // // // // // // // //           isSidebarVisible ? "ml-64" : "ml-0"
// // // // // // // // // // //         } transition-all duration-500 ease-in-out`}
// // // // // // // // // // //       >
// // // // // // // // // // //         <ChatBox messages={messages} onSend={handleSend} />
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default App;


// // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // import Sidebar from "./components/Sidebar";
// // // // // // // // // // import ChatBox from "./components/ChatBox";

// // // // // // // // // // function App() {
// // // // // // // // // //   const [conversations, setConversations] = useState([]);
// // // // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // // // //   const [isSidebarVisible, setIsSidebarVisible] = useState(true);

// // // // // // // // // //   const handleSend = (userMessage) => {
// // // // // // // // // //     const botReply = "This is a sample reply."; // Static reply for now
// // // // // // // // // //     const newMessages = [
// // // // // // // // // //       ...messages,
// // // // // // // // // //       { sender: "User", text: userMessage },
// // // // // // // // // //       { sender: "ChatBot", text: botReply },
// // // // // // // // // //     ];
// // // // // // // // // //     setMessages(newMessages);

// // // // // // // // // //     if (conversations.length === 0) {
// // // // // // // // // //       setConversations([{ title: "New Conversation", id: 1 }]);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleNewChat = () => {
// // // // // // // // // //     setMessages([]);
// // // // // // // // // //     const newConversation = {
// // // // // // // // // //       id: conversations.length + 1,
// // // // // // // // // //       title: `Conversation ${conversations.length + 1}`,
// // // // // // // // // //     };
// // // // // // // // // //     setConversations([...conversations, newConversation]);
// // // // // // // // // //   };

// // // // // // // // // //   const toggleSidebar = () => {
// // // // // // // // // //     setIsSidebarVisible(!isSidebarVisible);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="flex h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
// // // // // // // // // //       {/* Sidebar */}
// // // // // // // // // //       <div
// // // // // // // // // //         className={`transform ${
// // // // // // // // // //           isSidebarVisible ? "translate-x-0" : "-translate-x-full"
// // // // // // // // // //         } transition-transform duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10`}
// // // // // // // // // //       >
// // // // // // // // // //         <Sidebar
// // // // // // // // // //           conversations={conversations}
// // // // // // // // // //           onNewChat={handleNewChat}
// // // // // // // // // //           onToggleSidebar={toggleSidebar}
// // // // // // // // // //         />
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Hide/Unhide Button */}
// // // // // // // // // //       <button
// // // // // // // // // //         onClick={toggleSidebar}
// // // // // // // // // //         className={`absolute top-4 left-4 ${
// // // // // // // // // //           isSidebarVisible ? "bg-gray-700" : "bg-transparent"
// // // // // // // // // //         } text-white px-3 py-2 rounded-full hover:bg-gray-600 shadow-lg transition-all duration-300`}
// // // // // // // // // //       >
// // // // // // // // // //         <span
// // // // // // // // // //           className={`text-lg transform ${
// // // // // // // // // //             isSidebarVisible ? "rotate-0" : "rotate-180"
// // // // // // // // // //           } transition-transform duration-300`}
// // // // // // // // // //         >
// // // // // // // // // //           {`<`}
// // // // // // // // // //         </span>
// // // // // // // // // //       </button>

// // // // // // // // // //       {/* Chat Area */}
// // // // // // // // // //       <div
// // // // // // // // // //         className={`flex-1 ${
// // // // // // // // // //           isSidebarVisible ? "ml-64" : "ml-0"
// // // // // // // // // //         } transition-all duration-500 ease-in-out`}
// // // // // // // // // //       >
// // // // // // // // // //         <ChatBox messages={messages} onSend={handleSend} />
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default App;


// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import ChatBox from "./components/ChatBox";
// // // // // // // // // import MessageInput from "./components/MessageInput";

// // // // // // // // // function App() {
// // // // // // // // //   const [messages, setMessages] = useState([]);

// // // // // // // // //   const handleSend = (message) => {
// // // // // // // // //     const newMessages = [
// // // // // // // // //       ...messages,
// // // // // // // // //       { sender: "User", text: message },
// // // // // // // // //       { sender: "ChatBot", text: "This is a sample reply." },
// // // // // // // // //     ];
// // // // // // // // //     setMessages(newMessages);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="h-screen flex flex-col bg-gray-900">
// // // // // // // // //       <div className="flex-1 overflow-hidden">
// // // // // // // // //         <ChatBox messages={messages} />
// // // // // // // // //       </div>
// // // // // // // // //       <MessageInput onSend={handleSend} />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default App;


// // // // // // // // import React, { useState } from "react";
// // // // // // // // import Sidebar from "./components/Sidebar";
// // // // // // // // import ChatBox from "./components/ChatBox";
// // // // // // // // import MessageInput from "./components/MessageInput";
// // // // // // // // import { FaBars, FaTimes } from "react-icons/fa";

// // // // // // // // function App() {
// // // // // // // //   const [isSidebarVisible, setIsSidebarVisible] = useState(true);
// // // // // // // //   const [messages, setMessages] = useState([]);

// // // // // // // //   const handleSend = (message) => {
// // // // // // // //     const newMessages = [
// // // // // // // //       ...messages,
// // // // // // // //       { sender: "User", text: message },
// // // // // // // //       { sender: "ChatBot", text: "This is a sample reply." },
// // // // // // // //     ];
// // // // // // // //     setMessages(newMessages);
// // // // // // // //   };

// // // // // // // //   const toggleSidebar = () => {
// // // // // // // //     setIsSidebarVisible(!isSidebarVisible);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="flex h-screen bg-gray-900 text-white">
// // // // // // // //       {/* Sidebar */}
// // // // // // // //       <div
// // // // // // // //         className={`transform ${
// // // // // // // //           isSidebarVisible ? "translate-x-0" : "-translate-x-full"
// // // // // // // //         } transition-transform duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10`}
// // // // // // // //       >
// // // // // // // //         <Sidebar />
// // // // // // // //       </div>

// // // // // // // //       {/* Hide/Unhide Button */}
// // // // // // // //       <button
// // // // // // // //         onClick={toggleSidebar}
// // // // // // // //         className={`absolute top-4 left-4 z-20 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition-transform ${
// // // // // // // //           isSidebarVisible ? "rotate-0" : "rotate-180"
// // // // // // // //         }`}
// // // // // // // //       >
// // // // // // // //         {isSidebarVisible ? <FaTimes size={20} /> : <FaBars size={20} />}
// // // // // // // //       </button>

// // // // // // // //       {/* Chat Area */}
// // // // // // // //       <div
// // // // // // // //         className={`flex-1 ${
// // // // // // // //           isSidebarVisible ? "ml-64" : "ml-0"
// // // // // // // //         } transition-all duration-500`}
// // // // // // // //       >
// // // // // // // //         <div className="flex flex-col h-full">
// // // // // // // //           <ChatBox messages={messages} />
// // // // // // // //           <MessageInput onSend={handleSend} />
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default App;


// // // // // // // import React, { useState } from "react";
// // // // // // // import Sidebar from "./components/Sidebar";
// // // // // // // import ChatBox from "./components/ChatBox";
// // // // // // // import MessageInput from "./components/MessageInput";
// // // // // // // import { FaBars, FaTimes } from "react-icons/fa";

// // // // // // // function App() {
// // // // // // //   const [isSidebarVisible, setIsSidebarVisible] = useState(true);
// // // // // // //   const [chats, setChats] = useState([]); // Stores chat titles dynamically
// // // // // // //   const [activeChat, setActiveChat] = useState(null); // Track the current active chat
// // // // // // //   const [messages, setMessages] = useState([]); // Messages for the active chat

// // // // // // //   const handleSend = (message) => {
// // // // // // //     const updatedMessages = [
// // // // // // //       ...messages,
// // // // // // //       { sender: "User", text: message },
// // // // // // //       { sender: "ChatBot", text: "This is a sample reply." },
// // // // // // //     ];
// // // // // // //     setMessages(updatedMessages);
// // // // // // //   };

// // // // // // //   const toggleSidebar = () => {
// // // // // // //     setIsSidebarVisible(!isSidebarVisible);
// // // // // // //   };

// // // // // // //   const addNewChat = () => {
// // // // // // //     const newChatTitle = `Chat ${chats.length + 1}`;
// // // // // // //     setChats([...chats, newChatTitle]);
// // // // // // //     setActiveChat(newChatTitle); // Automatically switch to the new chat
// // // // // // //     setMessages([]); // Clear messages for the new chat
// // // // // // //   };

// // // // // // //   const switchChat = (chat) => {
// // // // // // //     setActiveChat(chat);
// // // // // // //     setMessages([]); // Reset messages for simplicity
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="flex h-screen bg-gray-900 text-white">
// // // // // // //       {/* Sidebar */}
// // // // // // //       <div
// // // // // // //         className={`transform ${
// // // // // // //           isSidebarVisible ? "translate-x-0" : "-translate-x-full"
// // // // // // //         } transition-transform duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10`}
// // // // // // //       >
// // // // // // //         <Sidebar
// // // // // // //           chats={chats}
// // // // // // //           activeChat={activeChat}
// // // // // // //           onAddNewChat={addNewChat}
// // // // // // //           onSwitchChat={switchChat}
// // // // // // //         />
// // // // // // //       </div>

// // // // // // //       {/* Hide/Unhide Button */}
// // // // // // //       <button
// // // // // // //         onClick={toggleSidebar}
// // // // // // //         className={`absolute top-4 left-4 z-20 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition-transform ${
// // // // // // //           isSidebarVisible ? "rotate-0" : "rotate-180"
// // // // // // //         }`}
// // // // // // //       >
// // // // // // //         {isSidebarVisible ? <FaTimes size={20} /> : <FaBars size={20} />}
// // // // // // //       </button>

// // // // // // //       {/* Chat Area */}
// // // // // // //       <div
// // // // // // //         className={`flex-1 ${
// // // // // // //           isSidebarVisible ? "ml-64" : "ml-0"
// // // // // // //         } transition-all duration-500`}
// // // // // // //       >
// // // // // // //         <div className="flex flex-col h-full">
// // // // // // //           <div className="p-4 bg-gray-700">
// // // // // // //             <h2 className="text-lg font-bold">
// // // // // // //               {activeChat || "Select or Add a Chat"}
// // // // // // //             </h2>
// // // // // // //           </div>
// // // // // // //           <ChatBox messages={messages} />
// // // // // // //           <MessageInput onSend={handleSend} />
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default App;



// // // // // // import React, { useState } from "react";
// // // // // // import Sidebar from "./components/Sidebar";
// // // // // // import ChatBox from "./components/ChatBox";
// // // // // // import MessageInput from "./components/MessageInput";
// // // // // // import { FaBars, FaTimes } from "react-icons/fa";

// // // // // // function App() {
// // // // // //   const [isSidebarVisible, setIsSidebarVisible] = useState(true);
// // // // // //   const [chats, setChats] = useState([]); // Stores chat titles dynamically
// // // // // //   const [activeChat, setActiveChat] = useState(null); // Track the current active chat
// // // // // //   const [messages, setMessages] = useState([]); // Messages for the active chat

// // // // // //   const handleSend = (message) => {
// // // // // //     const updatedMessages = [
// // // // // //       ...messages,
// // // // // //       { sender: "User", text: message },
// // // // // //       { sender: "ChatBot", text: "This is a sample reply." },
// // // // // //     ];
// // // // // //     setMessages(updatedMessages);
// // // // // //   };

// // // // // //   const toggleSidebar = () => {
// // // // // //     setIsSidebarVisible(!isSidebarVisible);
// // // // // //   };

// // // // // //   const addNewChat = () => {
// // // // // //     const newChatTitle = `Chat ${chats.length + 1}`;
// // // // // //     setChats([...chats, newChatTitle]);
// // // // // //     setActiveChat(newChatTitle); // Automatically switch to the new chat
// // // // // //     setMessages([]); // Clear messages for the new chat
// // // // // //   };

// // // // // //   const switchChat = (chat) => {
// // // // // //     setActiveChat(chat);
// // // // // //     setMessages([]); // Reset messages for simplicity
// // // // // //   };

// // // // // //   const deleteChat = (chatToDelete) => {
// // // // // //     const updatedChats = chats.filter((chat) => chat !== chatToDelete);
// // // // // //     setChats(updatedChats);

// // // // // //     // If the deleted chat is active, reset the active chat
// // // // // //     if (chatToDelete === activeChat) {
// // // // // //       setActiveChat(null);
// // // // // //       setMessages([]);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex h-screen bg-gray-900 text-white">
// // // // // //       {/* Sidebar */}
// // // // // //       <div
// // // // // //         className={`transform ${
// // // // // //           isSidebarVisible ? "translate-x-0" : "-translate-x-full"
// // // // // //         } transition-transform duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10`}
// // // // // //       >
// // // // // //         <Sidebar
// // // // // //           chats={chats}
// // // // // //           activeChat={activeChat}
// // // // // //           onAddNewChat={addNewChat}
// // // // // //           onSwitchChat={switchChat}
// // // // // //           onDeleteChat={deleteChat} // Pass delete function
// // // // // //         />
// // // // // //       </div>

// // // // // //       {/* Hide/Unhide Button */}
// // // // // //       <button
// // // // // //         onClick={toggleSidebar}
// // // // // //         className={`absolute top-4 left-4 z-20 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition-transform ${
// // // // // //           isSidebarVisible ? "rotate-0" : "rotate-180"
// // // // // //         }`}
// // // // // //       >
// // // // // //         {isSidebarVisible ? <FaTimes size={20} /> : <FaBars size={20} />}
// // // // // //       </button>

// // // // // //       {/* Chat Area */}
// // // // // //       <div
// // // // // //         className={`flex-1 ${
// // // // // //           isSidebarVisible ? "ml-64" : "ml-0"
// // // // // //         } transition-all duration-500`}
// // // // // //       >
// // // // // //         <div className="flex flex-col h-full ">
// // // // // //           <div className="flex justify-center items-center m-3 rounded-lg bg-gray-700 py-2 ">
// // // // // //             <h2 className="text-lg font-bold text-center">
// // // // // //               {activeChat || "Select or Add a Chat"}
// // // // // //             </h2>
// // // // // //           </div>
// // // // // //           <ChatBox messages={messages} />
// // // // // //           <MessageInput onSend={handleSend} />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default App;


// // // // // import React, { useState } from "react";
// // // // // import Sidebar from "./components/Sidebar";
// // // // // import ChatBox from "./components/ChatBox";
// // // // // import MessageInput from "./components/MessageInput";
// // // // // import { FaBars, FaTimes } from "react-icons/fa";

// // // // // function App() {
// // // // //   const [isSidebarVisible, setIsSidebarVisible] = useState(true);
// // // // //   const [chats, setChats] = useState([]); // Stores chat titles dynamically
// // // // //   const [activeChat, setActiveChat] = useState(null); // Track the current active chat
// // // // //   const [messages, setMessages] = useState([]); // Messages for the active chat

// // // // //   const handleSend = (message) => {
// // // // //     const updatedMessages = [
// // // // //       ...messages,
// // // // //       { sender: "User", text: message },
// // // // //       { sender: "ChatBot", text: "This is a sample reply." },
// // // // //     ];
// // // // //     setMessages(updatedMessages);
// // // // //   };

// // // // //   const toggleSidebar = () => {
// // // // //     setIsSidebarVisible(!isSidebarVisible); // This function hides or shows the sidebar
// // // // //   };

// // // // //   const addNewChat = () => {
// // // // //     const newChatTitle = `Chat ${chats.length + 1}`;
// // // // //     setChats([...chats, newChatTitle]);
// // // // //     setActiveChat(newChatTitle); // Automatically switch to the new chat
// // // // //     setMessages([]); // Clear messages for the new chat
// // // // //   };

// // // // //   const switchChat = (chat) => {
// // // // //     setActiveChat(chat);
// // // // //     setMessages([]); // Reset messages for simplicity
// // // // //   };

// // // // //   const deleteChat = (chatToDelete) => {
// // // // //     const updatedChats = chats.filter((chat) => chat !== chatToDelete);
// // // // //     setChats(updatedChats);

// // // // //     // If the deleted chat is active, reset the active chat
// // // // //     if (chatToDelete === activeChat) {
// // // // //       setActiveChat(null);
// // // // //       setMessages([]);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex h-screen bg-gray-900 text-white">
// // // // //       {/* Sidebar */}
// // // // //       <div
// // // // //         className={`transform ${
// // // // //           isSidebarVisible ? "translate-x-0" : "-translate-x-full"
// // // // //         } transition-transform duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10`}
// // // // //       >
// // // // //         <Sidebar
// // // // //           chats={chats}
// // // // //           activeChat={activeChat}
// // // // //           onAddNewChat={addNewChat}
// // // // //           onSwitchChat={switchChat}
// // // // //           onDeleteChat={deleteChat}
// // // // //           onToggleSidebar={toggleSidebar} // Passing toggleSidebar function
// // // // //         />
// // // // //       </div>

// // // // //       {/* Hide/Unhide Button */}
// // // // //       <button
// // // // //         onClick={toggleSidebar}
// // // // //         className={`absolute top-4 left-4 z-20 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition-transform ${
// // // // //           isSidebarVisible ? "rotate-0" : "rotate-180"
// // // // //         }`}
// // // // //       >
// // // // //         {isSidebarVisible ? <FaTimes size={20} /> : <FaBars size={20} />}
// // // // //       </button>

// // // // //       {/* Chat Area */}
// // // // //       <div
// // // // //         className={`flex-1 ${
// // // // //           isSidebarVisible ? "ml-64" : "ml-0"
// // // // //         } transition-all duration-500`}
// // // // //       >
// // // // //         <div className="flex flex-col h-full">
// // // // //           <div className="flex justify-center items-center bg-gray-700 py-4">
// // // // //             <h2 className="text-lg font-bold text-center">
// // // // //               {activeChat || "Select or Add a Chat"}
// // // // //             </h2>
// // // // //           </div>
// // // // //           <ChatBox messages={messages} />
// // // // //           <MessageInput onSend={handleSend} />
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;


// // // // import React, { useState } from "react";
// // // // import Sidebar from "./components/Sidebar";
// // // // import ChatBox from "./components/ChatBox";
// // // // import MessageInput from "./components/MessageInput";
// // // // import { FaBars, FaTimes } from "react-icons/fa";

// // // // function App() {
// // // //   const [isSidebarVisible, setIsSidebarVisible] = useState(true);
// // // //   const [chats, setChats] = useState([]); // Stores chat titles dynamically
// // // //   const [activeChat, setActiveChat] = useState(null); // Track the current active chat
// // // //   const [messages, setMessages] = useState([]); // Messages for the active chat

// // // //   const handleSend = (message) => {
// // // //     const updatedMessages = [
// // // //       ...messages,
// // // //       { sender: "User", text: message },
// // // //       { sender: "ChatBot", text: "This is a sample reply." },
// // // //     ];
// // // //     setMessages(updatedMessages);
// // // //   };

// // // //   const toggleSidebar = () => {
// // // //     setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
// // // //   };

// // // //   const addNewChat = () => {
// // // //     const newChatTitle = `Chat ${chats.length + 1}`;
// // // //     setChats([...chats, newChatTitle]);
// // // //     setActiveChat(newChatTitle); // Automatically switch to the new chat
// // // //     setMessages([]); // Clear messages for the new chat
// // // //   };

// // // //   const switchChat = (chat) => {
// // // //     setActiveChat(chat);
// // // //     setMessages([]); // Reset messages for simplicity
// // // //   };

// // // //   const deleteChat = (chatToDelete) => {
// // // //     const updatedChats = chats.filter((chat) => chat !== chatToDelete);
// // // //     setChats(updatedChats);

// // // //     // If the deleted chat is active, reset the active chat
// // // //     if (chatToDelete === activeChat) {
// // // //       setActiveChat(null);
// // // //       setMessages([]);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex h-screen bg-gray-900 text-white">
// // // //       {/* Sidebar */}
// // // //       <div
// // // //         className={`transition-all duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10 transform ${
// // // //           isSidebarVisible ? "translate-x-0" : "-translate-x-[90%]"
// // // //         }`}
// // // //       >
// // // //         <Sidebar
// // // //           chats={chats}
// // // //           activeChat={activeChat}
// // // //           onAddNewChat={addNewChat}
// // // //           onSwitchChat={switchChat}
// // // //           onDeleteChat={deleteChat}
// // // //           onToggleSidebar={toggleSidebar} // Passing toggleSidebar function
// // // //         />
// // // //       </div>

// // // //       {/* Hide/Unhide Button */}
// // // //       <button
// // // //         onClick={toggleSidebar}
// // // //         className={`absolute top-4 left-4 z-20 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition-transform ${
// // // //           isSidebarVisible ? "rotate-0" : "rotate-180"
// // // //         }`}
// // // //       >
// // // //         {isSidebarVisible ? <FaTimes size={20} /> : <FaBars size={20} />}
// // // //       </button>

// // // //       {/* Chat Area */}
// // // //       <div
// // // //         className={`flex-1 ${
// // // //           isSidebarVisible ? "ml-64" : "ml-[10%]"
// // // //         } transition-all duration-500`}
// // // //       >
// // // //         <div className="flex flex-col h-full">
// // // //           <div className="flex justify-center items-center bg-gray-700 py-4">
// // // //             <h2 className="text-lg font-bold text-center">
// // // //               {activeChat || "Select or Add a Chat"}
// // // //             </h2>
// // // //           </div>
// // // //           <ChatBox messages={messages} />
// // // //           <MessageInput onSend={handleSend} />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;


// // // import React, { useState } from "react";
// // // import Sidebar from "./components/Sidebar";
// // // import ChatBox from "./components/ChatBox";
// // // import MessageInput from "./components/MessageInput";
// // // import { FaBars, FaTimes } from "react-icons/fa";

// // // function App() {
// // //   const [isSidebarVisible, setIsSidebarVisible] = useState(true);
// // //   const [chats, setChats] = useState([]); // Stores chat titles dynamically
// // //   const [activeChat, setActiveChat] = useState(null); // Track the current active chat
// // //   const [messages, setMessages] = useState([]); // Messages for the active chat

// // //   const handleSend = (message) => {
// // //     const updatedMessages = [
// // //       ...messages,
// // //       { sender: "User", text: message },
// // //       { sender: "ChatBot", text: "This is a sample reply." },
// // //     ];
// // //     setMessages(updatedMessages);
// // //   };

// // //   const toggleSidebar = () => {
// // //     setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
// // //   };

// // //   const addNewChat = () => {
// // //     const newChatTitle = `Chat ${chats.length + 1}`;
// // //     setChats([...chats, newChatTitle]);
// // //     setActiveChat(newChatTitle); // Automatically switch to the new chat
// // //     setMessages([]); // Clear messages for the new chat
// // //   };

// // //   const switchChat = (chat) => {
// // //     setActiveChat(chat);
// // //     setMessages([]); // Reset messages for simplicity
// // //   };

// // //   const deleteChat = (chatToDelete) => {
// // //     const updatedChats = chats.filter((chat) => chat !== chatToDelete);
// // //     setChats(updatedChats);

// // //     // If the deleted chat is active, reset the active chat
// // //     if (chatToDelete === activeChat) {
// // //       setActiveChat(null);
// // //       setMessages([]);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex h-screen bg-gray-900 text-white">
// // //       {/* Sidebar */}
// // //       <div
// // //         className={`transition-all duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10 transform ${
// // //           isSidebarVisible ? "translate-x-0" : "-translate-x-[90%]"
// // //         }`}
// // //         onClick={toggleSidebar}  // When clicked anywhere on the sidebar, it will toggle
// // //       >
// // //         <Sidebar
// // //           chats={chats}
// // //           activeChat={activeChat}
// // //           onAddNewChat={addNewChat}
// // //           onSwitchChat={switchChat}
// // //           onDeleteChat={deleteChat}
// // //           onToggleSidebar={toggleSidebar} // Passing toggleSidebar function
// // //         />
// // //       </div>

// // //       {/* Commenting out the purple hide/unhide button */}
// // //       {/* 
// // //       <button
// // //         onClick={toggleSidebar}
// // //         className={`absolute top-4 left-4 z-20 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition-transform ${
// // //           isSidebarVisible ? "rotate-0" : "rotate-180"
// // //         }`}
// // //       >
// // //         {isSidebarVisible ? <FaTimes size={20} /> : <FaBars size={20} />}
// // //       </button>
// // //       */}

// // //       {/* Chat Area */}
// // //       <div
// // //         className={`flex-1 ${
// // //           isSidebarVisible ? "ml-64" : "ml-[10%]"
// // //         } transition-all duration-500`}
// // //       >
// // //         <div className="flex flex-col h-full">
// // //           <div className="flex justify-center items-center bg-gray-700 py-4">
// // //             <h2 className="text-lg font-bold text-center">
// // //               {activeChat || "Select or Add a Chat"}
// // //             </h2>
// // //           </div>
// // //           <ChatBox messages={messages} />
// // //           <MessageInput onSend={handleSend} />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // import React, { useState } from "react";
// // import Sidebar from "./components/Sidebar";
// // import ChatBox from "./components/ChatBox";
// // import MessageInput from "./components/MessageInput";
// // import { FaBars, FaTimes } from "react-icons/fa";

// // function App() {
// //   const [isSidebarVisible, setIsSidebarVisible] = useState(true);
// //   const [chats, setChats] = useState([]); // Stores chat titles dynamically
// //   const [activeChat, setActiveChat] = useState(null); // Track the current active chat
// //   const [messages, setMessages] = useState([]); // Messages for the active chat

// //   const handleSend = (message) => {
// //     const updatedMessages = [
// //       ...messages,
// //       { sender: "User", text: message },
// //       { sender: "ChatBot", text: "This is a sample reply." },
// //     ];
// //     setMessages(updatedMessages);
// //   };

// //   const toggleSidebar = () => {
// //     setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
// //   };

// //   const addNewChat = () => {
// //     const newChatTitle = `Chat ${chats.length + 1}`;
// //     setChats([...chats, newChatTitle]);
// //     setActiveChat(newChatTitle); // Automatically switch to the new chat
// //     setMessages([]); // Clear messages for the new chat
// //   };

// //   const switchChat = (chat) => {
// //     setActiveChat(chat);
// //     setMessages([]); // Reset messages for simplicity
// //   };

// //   const deleteChat = (chatToDelete) => {
// //     const updatedChats = chats.filter((chat) => chat !== chatToDelete);
// //     setChats(updatedChats);

// //     // If the deleted chat is active, reset the active chat
// //     if (chatToDelete === activeChat) {
// //       setActiveChat(null);
// //       setMessages([]);
// //     }
// //   };

// //   return (
// //     <div className="flex h-screen bg-gray-900 text-white">
// //       {/* Sidebar */}
// //       <div
// //         className={`transition-all duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10 transform ${
// //           isSidebarVisible ? "translate-x-0" : "-translate-x-[90%]"
// //         }`}
// //         onClick={() => {
// //           if (!isSidebarVisible) {
// //             setIsSidebarVisible(true); // Expand if the sidebar is currently hidden
// //           }
// //         }} // Sidebar expands if clicked when hidden
// //       >
// //         <Sidebar
// //           chats={chats}
// //           activeChat={activeChat}
// //           onAddNewChat={addNewChat}
// //           onSwitchChat={switchChat}
// //           onDeleteChat={deleteChat}
// //           onToggleSidebar={toggleSidebar} // Passing toggleSidebar function
// //         />
// //       </div>

// //       {/* Cross icon to close the sidebar when it's open */}
// //       <div
// //         className={`absolute top-4 right-4 z-20 p-3 rounded-full bg-gray-800 text-white cursor-pointer ${isSidebarVisible ? "" : "hidden"}`}
// //         onClick={toggleSidebar} // This closes the sidebar when clicked
// //       >
// //         <FaTimes size={20} />
// //       </div>

// //       {/* Chat Area */}
// //       <div
// //         className={`flex-1 ${
// //           isSidebarVisible ? "ml-64" : "ml-[10%]"
// //         } transition-all duration-500`}
// //       >
// //         <div className="flex flex-col h-full">
// //           <div className="flex justify-center items-center bg-gray-700 py-4">
// //             <h2 className="text-lg font-bold text-center">
// //               {activeChat || "Select or Add a Chat"}
// //             </h2>
// //           </div>
// //           <ChatBox messages={messages} />
// //           <MessageInput onSend={handleSend} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import ChatBox from "./components/ChatBox";
// import MessageInput from "./components/MessageInput";
// import { FaBars, FaTimes } from "react-icons/fa";

// function App() {
//   const [isSidebarVisible, setIsSidebarVisible] = useState(true);
//   const [chats, setChats] = useState([]); // Stores chat titles dynamically
//   const [activeChat, setActiveChat] = useState(null); // Track the current active chat
//   const [messages, setMessages] = useState([]); // Messages for the active chat

//   const handleSend = (message) => {
//     const updatedMessages = [
//       ...messages,
//       { sender: "User", text: message },
//       { sender: "ChatBot", text: "This is a sample reply." },
//     ];
//     setMessages(updatedMessages);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
//   };

//   const addNewChat = () => {
//     const newChatTitle = `Chat ${chats.length + 1}`;
//     setChats([...chats, newChatTitle]);
//     setActiveChat(newChatTitle); // Automatically switch to the new chat
//     setMessages([]); // Clear messages for the new chat
//   };

//   const switchChat = (chat) => {
//     setActiveChat(chat);
//     setMessages([]); // Reset messages for simplicity
//   };

//   const deleteChat = (chatToDelete) => {
//     const updatedChats = chats.filter((chat) => chat !== chatToDelete);
//     setChats(updatedChats);

//     // If the deleted chat is active, reset the active chat
//     if (chatToDelete === activeChat) {
//       setActiveChat(null);
//       setMessages([]);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-900 text-white">
//       {/* Sidebar */}
//       <div
//         className={`transition-all duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10 transform ${
//           isSidebarVisible ? "translate-x-0" : "-translate-x-[90%]"
//         }`}
//         onClick={() => {
//           if (!isSidebarVisible) {
//             setIsSidebarVisible(true); // Expand if the sidebar is currently hidden
//           }
//         }} // Sidebar expands if clicked when hidden
//       >
//         <Sidebar
//           chats={chats}
//           activeChat={activeChat}
//           onAddNewChat={addNewChat}
//           onSwitchChat={switchChat}
//           onDeleteChat={deleteChat}
//           onToggleSidebar={toggleSidebar} // Passing toggleSidebar function
//         />
//       </div>

//       {/* Cross icon to close the sidebar when it's open */}
//       {/* <div
//         className={`absolute top-4 right-4 z-20 p-3 rounded-full bg-gray-800 text-white cursor-pointer ${isSidebarVisible ? "" : "hidden"}`}
//         onClick={toggleSidebar} // This closes the sidebar when clicked
//       >
//         <FaTimes size={20} />
//       </div> */}

//       {/* Chat Area */}
//       <div
//         className={`flex-1 transition-all duration-500 ${
//           isSidebarVisible ? "ml-64" : "ml-10"
//         }`}  // Remove margin when sidebar is hidden
//       >
//         <div className="flex flex-col  h-full">
//           <div className="flex justify-center items-center m-4 rounded-lg bg-gray-700 py-4">
//             <h2 className="text-lg font-bold text-center">
//               {activeChat || "Select or Add a Chat"}
//             </h2>
//           </div>
//           <ChatBox messages={messages} />
//           <MessageInput onSend={handleSend} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

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
          {/* <div className="flex justify-center items-center mt-2 mx-4 rounded-lg bg-gray-700 py-2">
            <h2 className="text-lg font-bold text-center">
              {activeChat || "Select or Add a Chat"}
            </h2>
          </div> */}

          {/* ChatBox Display */}
          <ChatBox messages={messages} />

          {/* Display placeholder message when no messages are there
          {!firstMessageSent && activeChat && (
            <div className="flex justify-center items-center text-gray-400 text-xl py-8">
              <span>What do you want to know?</span>
            </div>
          )} */}

          {/* Message Input */}
          <MessageInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}

export default App;
