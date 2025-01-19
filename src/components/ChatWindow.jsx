// import React, { useState } from "react";
// import MessageBubble from "./MessageBubble";
// import InputBox from "./InputBox";

// const ChatWindow = () => {
//   const [messages, setMessages] = useState([]);

//   const handleSendMessage = (message) => {
//     if (message.trim()) {
//       setMessages([...messages, { from: "user", text: message }]);
//       setTimeout(() => {
//         setMessages((prev) => [...prev, { from: "bot", text: "How can I help you today?" }]);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="flex flex-col flex-grow px-6 py-4 space-y-4 overflow-hidden">
//       <div className="flex-grow overflow-y-auto space-y-6 pr-4 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-indigo-200">
//         {messages.map((msg, index) => (
//           <MessageBubble key={index} from={msg.from} text={msg.text} />
//         ))}
//       </div>
//       <InputBox onSend={handleSendMessage} />
//     </div>
//   );
// };

// export default ChatWindow;
