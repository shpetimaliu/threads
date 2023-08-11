// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Heart, Repeat, MessageCircle, Send, Trash2 } from "react-feather";
import {
  COLLECTION_ID,
  DB_ID,
  functions,
  database,
} from "../../appWriteConfig";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ReactTimeAgo from "react-time-ago";
TimeAgo.addDefaultLocale(en);

export const Thread = ({ thread, setThreads }) => {
  const [loading, setLoading] = useState(true);
  const [owner, setOwner] = useState(null);
  const [threadInstance, setThreadInstance] = useState(thread);
  const currentUserId = "64ce80a727511035504e";

  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = async () => {
    const payload = {
      owner_id: thread.owner_id,
    };
    const response = await functions.createExecution(
      "64ced7442bdd27af1d2b",
      JSON.stringify(payload)
    );
    const userData = JSON.parse(response.response);
    // console.log("Raporti:", userData);
    setOwner(userData);
    setLoading(false);
  };

  const handleDelete = async () => {
    setThreads((prevState) =>
      prevState.filter((item) => item.$id !== thread.$id)
    );
    database.deleteDocument(DB_ID, COLLECTION_ID, thread.$id);
    console.log("Thread was deleted");
  };

  const toggleLike = async () => {
    const users_who_liked = thread.users_who_liked;

    if (users_who_liked.includes(currentUserId)) {
      const index = users_who_liked.indexOf(currentUserId);
      users_who_liked.splice(index, 1);
    } else {
      users_who_liked.push(currentUserId);
    }

    const payload = {
      users_who_liked: users_who_liked,
      likes: users_who_liked.length,
    };

    const response = await database.updateDocument(
      DB_ID,
      COLLECTION_ID,
      thread.$id,
      payload
    );
    setThreadInstance(response);
  };

  if (loading) return;

  return (
    <div className="flex p-4">
      <img
        src={owner.profile_pic}
        className="w-14 h-14 rounded-full object-cover"
      />
      {/* Header of feed */}
      <div className="w-full px-2 pb-4 border-b border-[rgba(97,97,97,1)]">
        <div className="flex justify-between gap-2">
          <strong>{owner.name}</strong>
          <div className="flex justify-between gap-2 items-center cursor-pointer">
            <p className="text-[rgba(97,97,97,1)]">
              <ReactTimeAgo
                date={new Date(thread.$createdAt).getTime()}
                locale="en-US"
              />
            </p>
            <Trash2 onClick={handleDelete} size={14} />
          </div>
        </div>
        {/* Body */}
        <div className="py-2" style={{ whiteSpace: "pre-wrap" }}>
          {thread.body}
          <span>
            {thread.image && (
              <img
                className="object-cover border border-[rgba(49, 49, 49, 1)] rounded-md"
                src={thread.image}
              />
            )}
          </span>
        </div>
        <div className="flex gap-2 py-2">
          <div className="group flex items-center p-1 rounded-full cursor-pointer hover:hover:bg-[rgba(49,49,49,1)]">
            <Heart
              onClick={toggleLike}
              size={22}
              color={
                threadInstance.users_who_liked.includes(currentUserId)
                  ? "#ff0000"
                  : "#fff"
              }
            />
          </div>
          <div className="group flex items-center p-1 rounded-full cursor-pointer hover:hover:bg-[rgba(49,49,49,1)]">
            <MessageCircle size={22} />
          </div>
          <div className="group flex items-center p-1 rounded-full cursor-pointer hover:hover:bg-[rgba(49,49,49,1)]">
            <Repeat size={22} />
          </div>
          <div className="group flex items-center p-1 rounded-full cursor-pointer hover:hover:bg-[rgba(49,49,49,1)]">
            <Send size={22} />
          </div>
        </div>

        <div className="flex gap-3">
          <p className="text-[rgba(97,97,97,1)]">Replies 3</p>
          <p className="text-[rgba(97,97,97,1)]"> • </p>
          <p className="text-[rgba(97,97,97,1)]">
            {threadInstance.likes} Likes
          </p>
        </div>
      </div>
    </div>
  );
};
