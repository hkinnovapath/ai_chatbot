

// // // import React, { useState } from "react";
// // // import Sidebar from "./components/Sidebar";
// // // import ChatBox from "./components/ChatBox";

// // // function App() {
// // //   const [conversations, setConversations] = useState([]);
// // //   const [messages, setMessages] = useState([]);

// // //   const handleSend = (userMessage) => {
// // //     const botReply = "This is a sample reply."; // Static reply for now
// // //     const newMessages = [
// // //       ...messages,
// // //       { sender: "User", text: userMessage },
// // //       { sender: "ChatBot", text: botReply },
// // //     ];
// // //     setMessages(newMessages);

// // //     // Add conversation title if this is the first message
// // //     if (conversations.length === 0) {
// // //       setConversations([{ title: "New Conversation", id: 1 }]);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex h-screen bg-gray-900 text-white">
// // //       <Sidebar conversations={conversations} />
// // //       <ChatBox messages={messages} onSend={handleSend} />
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // import React, { useState } from "react";
// // import Sidebar from "./components/Sidebar";
// // import ChatBox from "./components/ChatBox";

// // function App() {
// //   const [conversations, setConversations] = useState([]);
// //   const [messages, setMessages] = useState([]);
// //   const [isSidebarVisible, setIsSidebarVisible] = useState(true);

// //   const handleSend = (userMessage) => {
// //     const botReply = "This is a sample reply."; // Static reply for now
// //     const newMessages = [
// //       ...messages,
// //       { sender: "User", text: userMessage },
// //       { sender: "ChatBot", text: botReply },
// //     ];
// //     setMessages(newMessages);

// //     if (conversations.length === 0) {
// //       setConversations([{ title: "New Conversation", id: 1 }]);
// //     }
// //   };

// //   const handleNewChat = () => {
// //     setMessages([]);
// //     const newConversation = {
// //       id: conversations.length + 1,
// //       title: `Conversation ${conversations.length + 1}`,
// //     };
// //     setConversations([...conversations, newConversation]);
// //   };

// //   const toggleSidebar = () => {
// //     setIsSidebarVisible(!isSidebarVisible);
// //   };

// //   return (
// //     <div className="flex h-screen bg-gray-900 text-white">
// //       {isSidebarVisible && (
// //         <Sidebar
// //           conversations={conversations}
// //           onNewChat={handleNewChat}
// //           onToggleSidebar={toggleSidebar}
// //         />
// //       )}
// //       <div
// //         className={`flex-1 ${
// //           isSidebarVisible ? "w-3/4" : "w-full"
// //         } transition-all duration-300`}
// //       >
// //         <ChatBox messages={messages} onSend={handleSend} />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import ChatBox from "./components/ChatBox";

// function App() {
//   const [conversations, setConversations] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [isSidebarVisible, setIsSidebarVisible] = useState(true);

//   const handleSend = (userMessage) => {
//     const botReply = "This is a sample reply."; // Static reply for now
//     const newMessages = [
//       ...messages,
//       { sender: "User", text: userMessage },
//       { sender: "ChatBot", text: botReply },
//     ];
//     setMessages(newMessages);

//     if (conversations.length === 0) {
//       setConversations([{ title: "New Conversation", id: 1 }]);
//     }
//   };

//   const handleNewChat = () => {
//     setMessages([]);
//     const newConversation = {
//       id: conversations.length + 1,
//       title: `Conversation ${conversations.length + 1}`,
//     };
//     setConversations([...conversations, newConversation]);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarVisible(!isSidebarVisible);
//   };

//   return (
//     <div className="flex h-screen bg-gray-900 text-white relative">
//       <div
//         className={`transform ${
//           isSidebarVisible ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-500 ease-in-out`}
//       >
//         <Sidebar
//           conversations={conversations}
//           onNewChat={handleNewChat}
//           onToggleSidebar={toggleSidebar}
//         />
//       </div>
//       {!isSidebarVisible && (
//         <button
//           onClick={toggleSidebar}
//           className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white px-3 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           {`>`} {/* Unhide Sidebar Button */}
//         </button>
//       )}
//       <div
//         className={`flex-1 ${
//           isSidebarVisible ? "w-3/4" : "w-full"
//         } transition-all duration-500 ease-in-out`}
//       >
//         <ChatBox messages={messages} onSend={handleSend} />
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";

function App() {
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleSend = (userMessage) => {
    const botReply = "This is a sample reply."; // Static reply for now
    const newMessages = [
      ...messages,
      { sender: "User", text: userMessage },
      { sender: "ChatBot", text: botReply },
    ];
    setMessages(newMessages);

    if (conversations.length === 0) {
      setConversations([{ title: "New Conversation", id: 1 }]);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    const newConversation = {
      id: conversations.length + 1,
      title: `Conversation ${conversations.length + 1}`,
    };
    setConversations([...conversations, newConversation]);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Sidebar */}
      <div
        className={`transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg z-10`}
      >
        <Sidebar
          conversations={conversations}
          onNewChat={handleNewChat}
          onToggleSidebar={toggleSidebar}
        />
      </div>

      {/* Unhide Sidebar Button */}
      {!isSidebarVisible && (
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-full hover:from-pink-500 hover:to-purple-500 shadow-lg transition-all duration-300"
        >
          <span className="text-lg">{`>`}</span>
        </button>
      )}

      {/* Chat Area */}
      <div
        className={`flex-1 ${
          isSidebarVisible ? "ml-64" : "ml-0"
        } transition-all duration-500 ease-in-out`}
      >
        <ChatBox messages={messages} onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;
