

// // import React, { useState } from "react";
// // import MessageInput from "./MessageInput";

// // function ChatBox({ messages, onSend }) {
// //   return (
// //     <div className="flex-1 flex flex-col">
// //       <div className="flex-1 p-4 overflow-y-auto">
// //         {messages.length === 0 ? (
// //           <p className="text-center text-gray-400 mt-8">What can I help with?</p>
// //         ) : (
// //           messages.map((msg, index) => (
// //             <div
// //               key={index}
// //               className={`mb-4 ${
// //                 msg.sender === "User" ? "text-right" : "text-left"
// //               }`}
// //             >
// //               <div className="font-bold">{msg.sender}</div>
// //               <div className="bg-gray-700 p-2 rounded inline-block">
// //                 {msg.text}
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //       <MessageInput onSend={onSend} />
// //     </div>
// //   );
// // }

// // export default ChatBox;


// import React from "react";
// import MessageInput from "./MessageInput";

// function ChatBox({ messages, onSend }) {
//   return (
//     <div className="flex-1 flex flex-col">
//       <div className="flex-1 p-4 overflow-y-auto">
//         {messages.length === 0 ? (
//           <p className="text-center text-gray-400 mt-8">What can I help with?</p>
//         ) : (
//           messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`mb-4 ${
//                 msg.sender === "User" ? "text-right" : "text-left"
//               }`}
//             >
//               <div className="font-bold">{msg.sender}</div>
//               <div className="bg-gray-700 p-2 rounded inline-block">
//                 {msg.text}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <MessageInput onSend={onSend} />
//     </div>
//   );
// }

// export default ChatBox;




// import React, { useState } from "react";

// function ChatBox({ messages, onSend }) {
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (input.trim() !== "") {
//       onSend(input);
//       setInput("");
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col h-full">
//       {/* Chat Messages */}
//       <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-800">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`p-4 rounded-lg shadow ${
//               msg.sender === "User"
//                 ? "bg-blue-500 self-end"
//                 : "bg-gray-600 self-start"
//             }`}
//           >
//             <p className="font-bold">{msg.sender}</p>
//             <p>{msg.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* Message Input */}
//       <div className="flex items-center bg-gray-900 p-4 shadow-lg">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={handleKeyPress}
//           placeholder="Type your message..."
//           className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-md outline-none"
//         />
//         <button
//           onClick={handleSend}
//           className={`${
//             input.trim() === ""
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500"
//           } px-4 py-2 text-white rounded-r-md shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300`}
//           disabled={input.trim() === ""}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatBox;

import React from "react";
import MessageInput from "./MessageInput";

function ChatBox({ messages, onSend }) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-center text-gray-400 mt-8">What can I help with?</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.sender === "User" ? "text-right" : "text-left"
              }`}
            >
              <div className="font-bold">{msg.sender}</div>
              <div className="bg-gray-700 p-2 rounded inline-block">
                {msg.text}
              </div>
            </div>
          ))
        )}
      </div>
      <MessageInput onSend={onSend} />
    </div>
  );
}

export default ChatBox;
