import React from "react";

const Loading = () => {
  return (
    <div className="flex space-x-2 my-5 justify-center items-center">
      <span className="sr-only">Loading...</span>
      <div className="h-6 w-6 bg-blue-700 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-6 w-6 dark:bg-gray-600 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-6 w-6 bg-purple-600 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loading;
