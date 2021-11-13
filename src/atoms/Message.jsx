import { useEffect, useState } from "react";
import { useTaskContext } from "../contexts/TaskContext";

const Message = () => {
  const { message, setMessage } = useTaskContext();

  useEffect(() => {
    setTimeout(() => {
      setMessage({ error: null, msg: null });
    }, 3000);
  }, [message]);

  return (
    <>
      {message.error != null && (
        <section className="absolute top-4 right-4 shadow-lg rounded-lg">
          <div
            className={
              message.error
                ? "bg-red-400 text-gray-100 border-r-2 border-red-700 rounded-lg"
                : "bg-green-400 text-gray-100 border-r-2 border-green-700 rounded-lg"
            }
          >
            <div className="px-4 py-2 max-w-xs max-h-14 overflow-hidden">
              {message.msg}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Message;
