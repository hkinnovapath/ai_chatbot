

// // // // // // // // import React, { useState } from "react";

// // // // // // // // function MessageInput({ onSend }) {
// // // // // // // //   const [input, setInput] = useState("");

// // // // // // // //   const handleSendClick = () => {
// // // // // // // //     if (input.trim() !== "") {
// // // // // // // //       onSend(input);
// // // // // // // //       setInput("");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="flex items-center bg-gray-800 p-4">
// // // // // // // //       <input
// // // // // // // //         type="text"
// // // // // // // //         value={input}
// // // // // // // //         onChange={(e) => setInput(e.target.value)}
// // // // // // // //         placeholder="Type your message..."
// // // // // // // //         className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-md outline-none"
// // // // // // // //       />
// // // // // // // //       <button
// // // // // // // //         onClick={handleSendClick}
// // // // // // // //         className={`${
// // // // // // // //           input.trim() === ""
// // // // // // // //             ? "bg-gray-600 cursor-not-allowed"
// // // // // // // //             : "bg-blue-500"
// // // // // // // //         } px-4 py-2 text-white rounded-r-md`}
// // // // // // // //         disabled={input.trim() === ""}
// // // // // // // //       >
// // // // // // // //         Send
// // // // // // // //       </button>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default MessageInput;



// // // // // // // import React, { useState } from "react";

// // // // // // // function MessageInput({ onSend }) {
// // // // // // //   const [input, setInput] = useState("");

// // // // // // //   const handleSend = () => {
// // // // // // //     if (input.trim() !== "") {
// // // // // // //       onSend(input);
// // // // // // //       setInput("");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleKeyPress = (event) => {
// // // // // // //     if (event.key === "Enter") {
// // // // // // //       handleSend();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="flex items-center bg-gray-800 p-4 shadow-md">
// // // // // // //       <input
// // // // // // //         type="text"
// // // // // // //         value={input}
// // // // // // //         onChange={(e) => setInput(e.target.value)}
// // // // // // //         onKeyPress={handleKeyPress}
// // // // // // //         placeholder="Type your message..."
// // // // // // //         className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-md outline-none"
// // // // // // //       />
// // // // // // //       <button
// // // // // // //         onClick={handleSend}
// // // // // // //         className={`${
// // // // // // //           input.trim() === ""
// // // // // // //             ? "bg-gray-600 cursor-not-allowed"
// // // // // // //             : "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500"
// // // // // // //         } px-4 py-2 text-white rounded-r-md shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300`}
// // // // // // //         disabled={input.trim() === ""}
// // // // // // //       >
// // // // // // //         Send
// // // // // // //       </button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default MessageInput;


// // // // // // import React, { useState } from "react";

// // // // // // function MessageInput({ onSend }) {
// // // // // //   const [input, setInput] = useState("");

// // // // // //   const handleSend = () => {
// // // // // //     if (input.trim() !== "") {
// // // // // //       onSend(input);
// // // // // //       setInput("");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleKeyPress = (event) => {
// // // // // //     if (event.key === "Enter") {
// // // // // //       handleSend();
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex items-center bg-gray-800 p-4 m-4 rounded-lg">
// // // // // //       <input
// // // // // //         type="text"
// // // // // //         value={input}
// // // // // //         onChange={(e) => setInput(e.target.value)}
// // // // // //         onKeyPress={handleKeyPress}
// // // // // //         placeholder="Type your message..."
// // // // // //         className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-md outline-none"
// // // // // //       />
// // // // // //       <button
// // // // // //         onClick={handleSend}
// // // // // //         className={`${
// // // // // //           input.trim() === ""
// // // // // //             ? "bg-gray-600 cursor-not-allowed"
// // // // // //             : "bg-blue-500"
// // // // // //         } px-4 py-2 text-white rounded-r-md`}
// // // // // //         disabled={input.trim() === ""}
// // // // // //       >
        
// // // // // //         Send
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default MessageInput;


// // // // // import React, { useState } from "react";

// // // // // function MessageInput({ onSend }) {
// // // // //   const [input, setInput] = useState("");

// // // // //   const handleSend = () => {
// // // // //     if (input.trim() !== "") {
// // // // //       onSend(input);
// // // // //       setInput("");
// // // // //     }
// // // // //   };

// // // // //   const handleKeyPress = (event) => {
// // // // //     if (event.key === "Enter") {
// // // // //       handleSend();
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex items-center bg-gray-800 p-3 mb-3 mx-4 rounded-lg">
// // // // //       <input
// // // // //         type="text"
// // // // //         value={input}
// // // // //         onChange={(e) => setInput(e.target.value)}
// // // // //         onKeyPress={handleKeyPress}
// // // // //         placeholder="Type your message..."
// // // // //         className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-md outline-none"
// // // // //       />
// // // // //       <button
// // // // //         onClick={handleSend}
// // // // //         className={`${
// // // // //           input.trim() === ""
// // // // //             ? "bg-gray-600 cursor-not-allowed"
// // // // //             : "bg-blue-500"
// // // // //         } px-4 py-2 text-white rounded-r-md`}
// // // // //         disabled={input.trim() === ""}
// // // // //       >
// // // // //         Send
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default MessageInput;


// // // // import React, { useState } from "react";

// // // // function MessageInput({ onSend }) {
// // // //   const [input, setInput] = useState("");

// // // //   const handleSend = () => {
// // // //     if (input.trim() !== "") {
// // // //       onSend(input);
// // // //       setInput(""); // Clear the input after sending
// // // //     }
// // // //   };

// // // //   const handleKeyPress = (event) => {
// // // //     if (event.key === "Enter" && !event.shiftKey) {
// // // //       event.preventDefault(); // Prevent adding a new line
// // // //       handleSend();
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col bg-gray-800 p-3 mb-3 mx-4 rounded-lg">
// // // //       <textarea
// // // //         value={input}
// // // //         onChange={(e) => setInput(e.target.value)}
// // // //         onKeyDown={handleKeyPress}
// // // //         placeholder="Type your message..."
// // // //         className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg outline-none resize-none overflow-y-auto custom-scrollbar"
// // // //         style={{
// // // //           maxHeight: "150px", // Limit the maximum height of the textarea
// // // //           minHeight: "40px", // Set a minimum height
// // // //         }}
// // // //       />
// // // //       <button
// // // //         onClick={handleSend}
// // // //         className={`mt-2 ${
// // // //           input.trim() === ""
// // // //             ? "bg-gray-600 cursor-not-allowed"
// // // //             : "bg-blue-500 hover:bg-blue-600"
// // // //         } px-4 py-2 text-white rounded-lg`}
// // // //         disabled={input.trim() === ""}
// // // //       >
// // // //         Send       
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default MessageInput;



// // // import React, { useState } from "react";

// // // function MessageInput({ onSend }) {
// // //   const [input, setInput] = useState("");

// // //   const handleSend = () => {
// // //     if (input.trim() !== "") {
// // //       onSend(input);
// // //       setInput("");
// // //     }
// // //   };

// // //   const handleKeyPress = (event) => {
// // //     if (event.key === "Enter" && !event.shiftKey) {
// // //       event.preventDefault();
// // //       handleSend();
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex flex-col bg-gray-800 p-3 mb-3 mx-4 rounded-lg">
// // //       <textarea
// // //         value={input}
// // //         onChange={(e) => setInput(e.target.value)}
// // //         onKeyDown={handleKeyPress}
// // //         placeholder="Type your message..."
// // //         className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg outline-none resize-y overflow-y-auto custom-scrollbar"
// // //         style={{
// // //           maxHeight: "150px", // Limit maximum height
// // //           minHeight: "40px", // Set minimum height
// // //         }}
// // //       />
// // //       <button
// // //         onClick={handleSend}
// // //         className={`mt-2 ${
// // //           input.trim() === ""
// // //             ? "bg-gray-600 cursor-not-allowed"
// // //             : "bg-blue-500 hover:bg-blue-600"
// // //         } px-4 py-2 text-white rounded-lg`}
// // //         disabled={input.trim() === ""}
// // //       >
// // //         Send
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // // export default MessageInput;


// // import React, { useState } from "react";

// // function MessageInput({ onSend }) {
// //   const [input, setInput] = useState("");

// //   const handleSend = () => {
// //     if (input.trim() !== "") {
// //       onSend(input);
// //       setInput("");
// //     }
// //   };

// //   const handleKeyPress = (event) => {
// //     if (event.key === "Enter" && !event.shiftKey) {
// //       event.preventDefault();
// //       handleSend();
// //     }
// //   };

// //   return (
// //     <div
// //       className="flex flex-col bg-gray-800 p-3 mb-3 mx-4 rounded-lg"
// //       style={{ resize: "vertical", overflow: "hidden" }}
// //     >
// //       <textarea
// //         value={input}
// //         onChange={(e) => setInput(e.target.value)}
// //         onKeyDown={handleKeyPress}
// //         placeholder="Type your message..."
// //         className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg outline-none overflow-y-auto custom-scrollbar resize-none"
// //         style={{
// //           maxHeight: "150px", // Limit maximum height
// //           minHeight: "40px", // Set minimum height
// //           resize: "vertical", // Allow vertical resizing
// //         }}
// //       />
// //       <button
// //         onClick={handleSend}
// //         className={`mt-2 ${
// //           input.trim() === ""
// //             ? "bg-gray-600 cursor-not-allowed"
// //             : "bg-blue-500 hover:bg-blue-600"
// //         } px-4 py-2 text-white rounded-lg`}
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
//     if (event.key === "Enter" && !event.shiftKey) {
//       event.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col bg-gray-800 p-3 mb-3 mx-4 rounded-lg">
//       <textarea
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={handleKeyPress}
//         placeholder="Type your message..."
//         className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg outline-none overflow-y-auto custom-scrollbar"
//         style={{
//           maxHeight: "200px", // Optional max height
//           minHeight: "40px", // Minimum height
//           resize: "vertical", // Allow vertical resizing
//         }}
//       />
//       <button
//         onClick={handleSend}
//         className={`mt-2 ${
//           input.trim() === ""
//             ? "bg-gray-600 cursor-not-allowed"
//             : "bg-blue-500 hover:bg-blue-600"
//         } px-4 py-2 text-white rounded-lg`}
//         disabled={input.trim() === ""}
//       >
//         Send
//       </button>
//     </div>
//   );
// }

// export default MessageInput;

import React, { useState, useEffect, useRef } from "react";

function MessageInput({ onSend }) {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    // Auto resize the textarea based on content
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height to auto to calculate new height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scroll height
    }
  }, [input]); // Re-run when input changes

  const handleSend = () => {
    if (input.trim() !== "") {
      onSend(input);
      setInput(""); // Clear input after sending
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col bg-gray-800 p-2 mb-3 mx-4 rounded-lg">
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your message..."
        className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg outline-none resize-none custom-scrollbar"
        style={{
          minHeight: "40px",  // Set the minimum height
          maxHeight: "150px", // Set the maximum height
          overflowY: "auto",  // Enable vertical scrollbars if content exceeds maxHeight
        }}
      />
      <button
        onClick={handleSend}
        className={`mt-1 font-bold text-lg ${
          input.trim() === ""
            ? "bg-blue-500 cursor-not-allowed"
            : "bg-blue-600 "
        } px-4 py-1 text-white rounded-lg`}
        disabled={input.trim() === ""}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
