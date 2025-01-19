// // // // // // // import React from "react";

// // // // // // // function Sidebar({ conversations, onNewChat, onToggleSidebar }) {
// // // // // // //   return (
// // // // // // //     <div className="h-full p-4">
// // // // // // //       {/* Header with Hide Button */}
// // // // // // //       <div className="flex justify-between items-center">
// // // // // // //         <h1 className="text-lg font-bold">Conversations</h1>
// // // // // // //         <button
// // // // // // //           onClick={onToggleSidebar}
// // // // // // //           className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-2 py-1 rounded hover:from-green-500 hover:to-blue-500 shadow transition-all duration-300"
// // // // // // //         >
// // // // // // //           {`<`}
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* New Chat Button */}
// // // // // // //       <button
// // // // // // //         onClick={onNewChat}
// // // // // // //         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 mt-4 rounded w-full hover:from-pink-500 hover:to-purple-500 shadow-lg transition-all duration-300"
// // // // // // //       >
// // // // // // //         + New Chat
// // // // // // //       </button>

// // // // // // //       {/* Conversations List */}
// // // // // // //       <ul className="mt-4 space-y-2">
// // // // // // //         {conversations.length === 0 ? (
// // // // // // //           <p className="text-gray-400">No conversations yet</p>
// // // // // // //         ) : (
// // // // // // //           conversations.map((conv) => (
// // // // // // //             <li
// // // // // // //               key={conv.id}
// // // // // // //               className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition-all duration-300"
// // // // // // //             >
// // // // // // //               {conv.title}
// // // // // // //             </li>
// // // // // // //           ))
// // // // // // //         )}
// // // // // // //       </ul>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Sidebar;



// // // // // // import React from "react";

// // // // // // function Sidebar({ conversations, onNewChat, onToggleSidebar }) {
// // // // // //   return (
// // // // // //     <div className="h-full p-4">
// // // // // //       {/* Header with Hide Button */}
// // // // // //       <div className="flex justify-between items-center">
// // // // // //         <h1 className="text-lg font-bold">Conversations</h1>
// // // // // //         <button
// // // // // //           onClick={onToggleSidebar}
// // // // // //           className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-2 py-1 rounded hover:from-green-500 hover:to-blue-500 shadow transition-all duration-300"
// // // // // //         >
// // // // // //           {`<`}
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* New Chat Button */}
// // // // // //       <button
// // // // // //         onClick={onNewChat}
// // // // // //         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 mt-4 rounded w-full hover:from-pink-500 hover:to-purple-500 shadow-lg transition-all duration-300"
// // // // // //       >
// // // // // //         + New Chat
// // // // // //       </button>

// // // // // //       {/* Conversations List */}
// // // // // //       <ul className="mt-4 space-y-2">
// // // // // //         {conversations.length === 0 ? (
// // // // // //           <p className="text-gray-400">No conversations yet</p>
// // // // // //         ) : (
// // // // // //           conversations.map((conv) => (
// // // // // //             <li
// // // // // //               key={conv.id}
// // // // // //               className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition-all duration-300"
// // // // // //             >
// // // // // //               {conv.title}
// // // // // //             </li>
// // // // // //           ))
// // // // // //         )}
// // // // // //       </ul>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default Sidebar;


// // // // // import React from "react";

// // // // // function Sidebar() {
// // // // //   return (
// // // // //     <div className="flex flex-col h-full p-4 bg-gray-800">
// // // // //       <h2 className="text-lg font-bold mb-4">Conversations</h2>
// // // // //       {/* Add functionality for showing conversation history */}
// // // // //       <ul className="space-y-2">
// // // // //         <li className="p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600">
// // // // //           Chat 1
// // // // //         </li>
// // // // //         <li className="p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600">
// // // // //           Chat 2
// // // // //         </li>
// // // // //         <li className="p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600">
// // // // //           Chat 3
// // // // //         </li>
// // // // //       </ul>
// // // // //       <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
// // // // //         Add New Chat
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Sidebar;


// // // // import React from "react";

// // // // function Sidebar({ chats, activeChat, onAddNewChat, onSwitchChat }) {
// // // //   return (
// // // //     <div className="flex flex-col h-full p-4 bg-gray-800">
// // // //       <h2 className="text-lg font-bold mb-4">Conversations</h2>

// // // //       {/* Chat List */}
// // // //       <ul className="flex-1 overflow-y-auto space-y-2">
// // // //         {chats.map((chat, index) => (
// // // //           <li
// // // //             key={index}
// // // //             className={`p-2 rounded-lg cursor-pointer ${
// // // //               chat === activeChat
// // // //                 ? "bg-blue-500 text-white"
// // // //                 : "bg-gray-700 hover:bg-gray-600"
// // // //             }`}
// // // //             onClick={() => onSwitchChat(chat)}
// // // //           >
// // // //             {chat}
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       {/* Add New Chat Button */}
// // // //       <button
// // // //         onClick={onAddNewChat}
// // // //         className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
// // // //       >
// // // //         Add New Chat
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Sidebar;


// // // import React from "react";
// // // import { FaTrash } from "react-icons/fa";

// // // function Sidebar({ chats, activeChat, onAddNewChat, onSwitchChat, onDeleteChat }) {
// // //   return (
// // //     <div className="flex flex-col h-full p-4 bg-gray-800">
// // //       <h2 className="text-lg font-bold mb-4">Conversations</h2>

// // //       {/* Chat List */}
// // //       <ul className="flex-1 overflow-y-auto space-y-2">
// // //         {chats.map((chat, index) => (
// // //           <li
// // //             key={index}
// // //             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
// // //               chat === activeChat
// // //                 ? "bg-blue-500 text-white"
// // //                 : "bg-gray-700 hover:bg-gray-600"
// // //             }`}
// // //           >
// // //             <span onClick={() => onSwitchChat(chat)} className="flex-1">
// // //               {chat}
// // //             </span>
// // //             <button
// // //               onClick={(e) => {
// // //                 e.stopPropagation(); // Prevent triggering the switchChat on delete click
// // //                 onDeleteChat(chat);
// // //               }}
// // //               className="text-red-500 hover:text-red-700"
// // //             >
// // //               <FaTrash />
// // //             </button>
// // //           </li>
// // //         ))}
// // //       </ul>

// // //       {/* Add New Chat Button */}
// // //       <button
// // //         onClick={onAddNewChat}
// // //         className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
// // //       >
// // //         Add New Chat
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // // export default Sidebar;

// // import React from "react";
// // import { FaTrash, FaTimes } from "react-icons/fa";

// // function Sidebar({ chats, activeChat, onAddNewChat, onSwitchChat, onDeleteChat, onToggleSidebar }) {
// //   return (
// //     <div className="flex flex-col h-full p-4 bg-gray-800 relative">
// //       {/* Header with the cross button beside "Conversations" */}
// //       <div className="flex items-center justify-between mb-4">
// //         <h2 className="text-lg font-bold">Conversations</h2>
// //         <button
// //           onClick={onToggleSidebar}  // This is now connected to the functionality
// //           className="text-white hover:text-gray-400"
// //         >
// //           <FaTimes size={20} /> {/* Cross icon for hiding */}
// //         </button>
// //       </div>

// //       {/* Chat List */}
// //       <ul className="flex-1 overflow-y-auto space-y-2">
// //         {chats.map((chat, index) => (
// //           <li
// //             key={index}
// //             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
// //               chat === activeChat
// //                 ? "bg-blue-500 text-white"
// //                 : "bg-gray-700 hover:bg-gray-600"
// //             }`}
// //           >
// //             <span onClick={() => onSwitchChat(chat)} className="flex-1">
// //               {chat}
// //             </span>
// //             <button
// //               onClick={(e) => {
// //                 e.stopPropagation(); // Prevent triggering the switchChat on delete click
// //                 onDeleteChat(chat);
// //               }}
// //               className="text-red-500 hover:text-red-700"
// //             >
// //               <FaTrash />
// //             </button>
// //           </li>
// //         ))}
// //       </ul>

// //       {/* Add New Chat Button */}
// //       <button
// //         onClick={onAddNewChat}
// //         className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
// //       >
// //         Add New Chat
// //       </button>
// //     </div>
// //   );
// // }

// // export default Sidebar;


// import React from "react";
// import { FaTrash, FaTimes } from "react-icons/fa";

// function Sidebar({ chats, activeChat, onAddNewChat, onSwitchChat, onDeleteChat, onToggleSidebar }) {
//   return (
//     <div className="flex flex-col h-full p-4 bg-gray-800 relative transition-all ease-in-out duration-500">
//       {/* Header with the cross button beside "Conversations" */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-bold">Conversations</h2>
//         <button
//           onClick={onToggleSidebar}  // This is now connected to the functionality
//           className="text-white hover:text-gray-400"
//         >
//           <FaTimes size={20} /> {/* Cross icon for hiding */}
//         </button>
//       </div>

//       {/* Chat List */}
//       <ul className="flex-1 overflow-y-auto space-y-2">
//         {chats.map((chat, index) => (
//           <li
//             key={index}
//             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
//               chat === activeChat
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-700 hover:bg-gray-600"
//             }`}
//           >
//             <span onClick={() => onSwitchChat(chat)} className="flex-1">
//               {chat}
//             </span>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent triggering the switchChat on delete click
//                 onDeleteChat(chat);
//               }}
//               className="text-red-500 hover:text-red-700"
//             >
//               <FaTrash />
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Add New Chat Button */}
//       <button
//         onClick={onAddNewChat}
//         className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
//       >
//         Add New Chat
//       </button>
//     </div>
//   );
// }

// export default Sidebar;


import React from "react";
import { FaTrash, FaTimes } from "react-icons/fa";

function Sidebar({ chats, activeChat, onAddNewChat, onSwitchChat, onDeleteChat, onToggleSidebar }) {
  return (
    <div className="flex flex-col h-full p-4 bg-gray-800 relative transition-all ease-in-out duration-500">
      {/* Header with the cross button beside "Conversations" */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Conversation History</h2>
        <button
          onClick={onToggleSidebar}  // This is now connected to the functionality
          className="text-white hover:text-gray-400"
        >
          <FaTimes size={20} /> {/* Cross icon for hiding */}
        </button>
      </div>

      {/* Chat List */}
      <ul className="flex-1 overflow-y-auto space-y-2 custom-scrollbar pr-2">
        {chats.map((chat, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
              chat === activeChat
                ? "bg-blue-500 text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            <span onClick={() => onSwitchChat(chat)} className="flex-1">
              {chat}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the switchChat on delete click
                onDeleteChat(chat);
              }}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      {/* Add New Chat Button */}
      <button
        onClick={onAddNewChat}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
      >
        Add New Chat
      </button>
    </div>
  );
}

export default Sidebar;
