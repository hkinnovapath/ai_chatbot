// import React from "react";

// const MessageBubble = ({ from, text }) => {
//   const isUser = from === "user";
//   return (
//     <div className={`flex ${isUser ? "justify-end" : "justify-start"} items-center`}>
//       {!isUser && (
//         <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center mr-3">
//           🤖
//         </div>
//       )}
//       <div
//         className={`rounded-2xl p-4 max-w-sm shadow-lg ${
//           isUser
//             ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-2 border-blue-400"
//             : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800"
//         }`}
//       >
//         {text}
//       </div>
//       {isUser && (
//         <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full flex items-center justify-center ml-3">
//           👤
//         </div>
//       )}
//     </div>
//   );
// };

// export default MessageBubble;
