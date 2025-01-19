// // // // // import React from "react";
// // // // // import MessageInput from "./MessageInput";

// // // // // function ChatBox({ messages, onSend }) {
// // // // //   return (
// // // // //     <div className="flex-1 flex flex-col">
// // // // //       <div className="flex-1 p-4 overflow-y-auto">
// // // // //         {messages.length === 0 ? (
// // // // //           <p className="text-center text-gray-400 mt-8">What can I help with?</p>
// // // // //         ) : (
// // // // //           messages.map((msg, index) => (
// // // // //             <div
// // // // //               key={index}
// // // // //               className={`mb-4 ${
// // // // //                 msg.sender === "User" ? "text-right" : "text-left"
// // // // //               }`}
// // // // //             >
// // // // //               <div className="font-bold">{msg.sender}</div>
// // // // //               <div className="bg-gray-700 p-2 rounded inline-block">
// // // // //                 {msg.text}
// // // // //               </div>
// // // // //             </div>
// // // // //           ))
// // // // //         )}
// // // // //       </div>
// // // // //       <MessageInput onSend={onSend} />
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default ChatBox;


// // // // import React, { useState } from "react";

// // // // function ChatBox({ messages, onSend }) {
// // // //   const [input, setInput] = useState("");

// // // //   const handleSend = () => {
// // // //     if (input.trim() !== "") {
// // // //       onSend(input);
// // // //       setInput("");
// // // //     }
// // // //   };

// // // //   const handleKeyDown = (e) => {
// // // //     if (e.key === "Enter") {
// // // //       handleSend();
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="h-full flex flex-col justify-between p-4">
// // // //       {/* Chat Messages */}
// // // //       <div className="flex-1 overflow-y-auto">
// // // //         {messages.map((msg, index) => (
// // // //           <div
// // // //             key={index}
// // // //             className={`p-2 rounded-lg mb-2 ${
// // // //               msg.sender === "User"
// // // //                 ? "bg-blue-500 text-white self-end"
// // // //                 : "bg-gray-700 text-white self-start"
// // // //             }`}
// // // //           >
// // // //             <span className="block text-xs font-bold mb-1">
// // // //               {msg.sender}
// // // //             </span>
// // // //             {msg.text}
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Input Field */}
// // // //       <div className="flex justify-center items-center mt-4">
// // // //         <input
// // // //           type="text"
// // // //           value={input}
// // // //           onChange={(e) => setInput(e.target.value)}
// // // //           onKeyDown={handleKeyDown}
// // // //           placeholder="Type a message..."
// // // //           className="w-3/4 max-w-2xl px-4 py-2 rounded-lg border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
// // // //         />
// // // //         <button
// // // //           onClick={handleSend}
// // // //           className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
// // // //         >
// // // //           Send
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default ChatBox;




// // // import React from "react";

// // // function ChatBox({ messages }) {
// // //   return (
// // //     <div className="flex flex-col justify-between p-4 h-full">
// // //       {/* Chat Messages */}
// // //       <div className="flex-1 overflow-y-auto space-y-4">
// // //         {messages.map((msg, index) => (
// // //           <div
// // //             key={index}
// // //             className={`flex ${
// // //               msg.sender === "User" ? "justify-end" : "justify-start"
// // //             }`}
// // //           >
// // //             <div
// // //               className={`px-4 py-2 rounded-md ${
// // //                 msg.sender === "User"
// // //                   ? "bg-blue-500 text-white"
// // //                   : "bg-gray-700 text-white"
// // //               }`}
// // //               style={{
// // //                 maxWidth: "75%", // Matches the input field width
// // //                 minWidth: "200px", // Prevents shrinking too much
// // //                 textAlign: "left", // Aligns text properly
// // //               }}
// // //             >
// // //               <span className="block text-xs font-bold mb-1">
// // //                 {msg.sender}
// // //               </span>
// // //               {msg.text}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default ChatBox;

// // import React from "react";

// // function ChatBox({ messages }) {
// //   return (
// //     <div className="flex-1  bg-gray-700 p-4 mt-7 m-4 rounded-lg overflow-y-auto custom-scrollbar ">
// //       <div className="space-y-4">
// //         {
// //         messages.length === 0 ? (
// //           <div className="flex justify-center  items-center text-gray-400 text-4xl pt-56 py-8">
// //             What do you want to know?
// //           </div>
// //         ) : (
// //           messages.map((msg, index) => (
// //             <div
// //               key={index}
// //               className={`flex items-center space-x-2 ${
// //                 msg.sender === "User" ? "justify-end" : "justify-start"
// //               }`}
// //             >
// //               <div
// //                 className={`p-3 rounded-lg max-w-xs ${
// //                   msg.sender === "User"
// //                     ? "bg-blue-500 text-white"
// //                     : "bg-gray-600 text-white"
// //                 }`}
// //               >
// //                 {msg.text}
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ChatBox;


// import React, { useEffect, useRef } from "react";

// function ChatBox({ messages }) {
//   const chatBoxRef = useRef(null);

//   // Scroll to the bottom when messages change
//   useEffect(() => {
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <div
//       ref={chatBoxRef}
//       className="flex-1 bg-gray-700 p-4 mt-7 m-4 rounded-lg overflow-y-auto custom-scrollbar"
//     >
//       <div className="space-y-4">
//         {messages.length === 0 ? (
//           <div className="flex justify-center items-center text-gray-400 text-4xl py-8">
//             What do you want to know?
//           </div>
//         ) : (
//           messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`flex items-center space-x-2 ${
//                 msg.sender === "User" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`p-3 rounded-lg max-w-xs ${
//                   msg.sender === "User"
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-600 text-white"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default ChatBox;


import React, { useEffect, useRef } from "react";

function ChatBox({ messages }) {
  const chatBoxRef = useRef(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatBoxRef}
      className="flex-1 bg-gray-700 p-4 mt-7 m-4 rounded-lg overflow-y-auto custom-scrollbar"
    >
      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="flex justify-center items-center text-gray-400 text-4xl py-48">
            {/* What do you want to know? */}
            Please Input Your Query.....
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 ${
                msg.sender === "User" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-3/4 ${
                  msg.sender === "User"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-600 text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ChatBox;
