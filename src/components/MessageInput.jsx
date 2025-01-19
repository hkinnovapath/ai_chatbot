

// // import React, { useState } from "react";

// // function MessageInput({ onSend }) {
// //   const [input, setInput] = useState("");

// //   const handleSendClick = () => {
// //     if (input.trim() !== "") {
// //       onSend(input);
// //       setInput("");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center bg-gray-800 p-4">
// //       <input
// //         type="text"
// //         value={input}
// //         onChange={(e) => setInput(e.target.value)}
// //         placeholder="Type your message..."
// //         className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-md outline-none"
// //       />
// //       <button
// //         onClick={handleSendClick}
// //         className={`${
// //           input.trim() === ""
// //             ? "bg-gray-600 cursor-not-allowed"
// //             : "bg-blue-500"
// //         } px-4 py-2 text-white rounded-r-md`}
// //         disabled={input.trim() === ""}
// //       >
// //         Send
// //       </button>
// //     </div>
// //   );
// // }

// // export default MessageInput;



// import React, { useState } from "react";

// function MessageInput({ onSend }) {
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
//     <div className="flex items-center bg-gray-800 p-4 shadow-md">
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyPress={handleKeyPress}
//         placeholder="Type your message..."
//         className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-md outline-none"
//       />
//       <button
//         onClick={handleSend}
//         className={`${
//           input.trim() === ""
//             ? "bg-gray-600 cursor-not-allowed"
//             : "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500"
//         } px-4 py-2 text-white rounded-r-md shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300`}
//         disabled={input.trim() === ""}
//       >
//         Send
//       </button>
//     </div>
//   );
// }

// export default MessageInput;


import React, { useState } from "react";

function MessageInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex items-center bg-gray-800 p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-md outline-none"
      />
      <button
        onClick={handleSend}
        className={`${
          input.trim() === ""
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-blue-500"
        } px-4 py-2 text-white rounded-r-md`}
        disabled={input.trim() === ""}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
