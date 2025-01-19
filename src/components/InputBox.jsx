// import React, { useState } from "react";

// const InputBox = ({ onSend }) => {
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (input.trim()) {
//       onSend(input);
//       setInput("");
//     }
//   };

//   return (
//     <div className="flex items-center p-4 bg-white border-t border-gray-200 rounded-b-3xl">
//       <input
//         type="text"
//         className="flex-grow border-2 border-indigo-300 rounded-full px-4 py-2 mr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
//         placeholder="Type your message..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyPress={(e) => e.key === "Enter" && handleSend()}
//       />
//       <button
//         className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full shadow-lg border-2 border-indigo-400 hover:bg-indigo-600 hover:border-indigo-500 transition-transform transform hover:scale-105"
//         onClick={handleSend}
//       >
//         Send
//       </button>
//     </div>
//   );
// };

// export default InputBox;
