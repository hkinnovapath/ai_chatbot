
// // // import React from "react";

// // // function Sidebar({ conversations }) {
// // //   return (
// // //     <div className="w-1/4 bg-gray-800 p-4">
// // //       <h1 className="text-lg font-bold">Conversations</h1>
// // //       <ul className="mt-4">
// // //         {conversations.length === 0 ? (
// // //           <p className="text-gray-400">No conversations yet</p>
// // //         ) : (
// // //           conversations.map((conv) => (
// // //             <li key={conv.id} className="mt-2 p-2 bg-gray-700 rounded">
// // //               {conv.title}
// // //             </li>
// // //           ))
// // //         )}
// // //       </ul>
// // //     </div>
// // //   );
// // // }

// // // export default Sidebar;


// // import React from "react";

// // function Sidebar({ conversations, onNewChat, onToggleSidebar }) {
// //   return (
// //     <div className="w-1/4 bg-gray-800 p-4">
// //       <div className="flex justify-between items-center">
// //         <h1 className="text-lg font-bold">Conversations</h1>
// //         <button
// //           onClick={onToggleSidebar}
// //           className="bg-gray-700 px-2 py-1 rounded text-sm"
// //         >
// //           {`<`} {/* Toggle Button */}
// //         </button>
// //       </div>
// //       <button
// //         onClick={onNewChat}
// //         className="bg-blue-500 text-white px-4 py-2 mt-4 rounded w-full"
// //       >
// //         + New Chat
// //       </button>
// //       <ul className="mt-4">
// //         {conversations.length === 0 ? (
// //           <p className="text-gray-400">No conversations yet</p>
// //         ) : (
// //           conversations.map((conv) => (
// //             <li key={conv.id} className="mt-2 p-2 bg-gray-700 rounded">
// //               {conv.title}
// //             </li>
// //           ))
// //         )}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Sidebar;



// import React from "react";

// function Sidebar({ conversations, onNewChat, onToggleSidebar }) {
//   return (
//     <div
//       className="w-1/4 bg-gray-800 p-4 transition-all duration-500 ease-in-out shadow-lg"
//     >
//       <div className="flex justify-between items-center">
//         <h1 className="text-lg font-bold">Conversations</h1>
//         <button
//           onClick={onToggleSidebar}
//           className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-2 py-1 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           {`<`} {/* Hide Sidebar Button */}
//         </button>
//       </div>
//       <button
//         onClick={onNewChat}
//         className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white px-4 py-2 mt-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 w-full"
//       >
//         + New Chat
//       </button>
//       <ul className="mt-4">
//         {conversations.length === 0 ? (
//           <p className="text-gray-400">No conversations yet</p>
//         ) : (
//           conversations.map((conv) => (
//             <li
//               key={conv.id}
//               className="mt-2 p-2 bg-gray-700 rounded hover:bg-gray-600 transition-all"
//             >
//               {conv.title}
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;



import React from "react";

function Sidebar({ conversations, onNewChat, onToggleSidebar }) {
  return (
    <div className="h-full p-4">
      {/* Header with Hide Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Conversations</h1>
        <button
          onClick={onToggleSidebar}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-2 py-1 rounded hover:from-green-500 hover:to-blue-500 shadow transition-all duration-300"
        >
          {`<`}
        </button>
      </div>

      {/* New Chat Button */}
      <button
        onClick={onNewChat}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 mt-4 rounded w-full hover:from-pink-500 hover:to-purple-500 shadow-lg transition-all duration-300"
      >
        + New Chat
      </button>

      {/* Conversations List */}
      <ul className="mt-4 space-y-2">
        {conversations.length === 0 ? (
          <p className="text-gray-400">No conversations yet</p>
        ) : (
          conversations.map((conv) => (
            <li
              key={conv.id}
              className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition-all duration-300"
            >
              {conv.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
