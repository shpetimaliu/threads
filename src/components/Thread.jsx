// eslint-disable-next-line no-unused-vars
import { Functions } from "appwrite";
import React, { useState, useEffect } from "react";
import {
  MoreHorizontal,
  Heart,
  Repeat,
  MessageCircle,
  Send,
} from "react-feather";
import { functions } from "../../appWriteConfig";

export const Thread = ({ thread }) => {
  const [loading, setLoading] = useState(true);
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = async () => {
    const response = await functions.createExecution("64ced7442bdd27af1d2b");
    console.log("Raporti:", response);
    setLoading(false);
  };

  if (loading) return;

  return (
    <div className="flex p-4">
      <img
        src="https://pbs.twimg.com/profile_images/1391922476167405575/gWl0pM1V_400x400.jpg"
        className="w-14 h-14 rounded-full object-cover"
      />
      {/* Header of feed */}
      <div className="w-full px-2 pb-4 border-b border-[rgba(97,97,97,1)]">
        <div className="flex justify-between gap-2">
          <strong>{thread.owner_id}</strong>
          <div className="flex justify-between gap-2">
            <p className="text-[rgba(97,97,97,1)]">4hrs ago</p>
            <MoreHorizontal />
          </div>
        </div>
        {/* Body */}
        <div className="py-2">
          <span>{thread.body}</span>
        </div>
        <div className="flex gap-2 py-2">
          <Heart size={22} />
          <MessageCircle size={22} />
          <Repeat size={22} />
          <Send size={22} />
        </div>
        <div className="flex gap-3">
          <p className="text-[rgba(97,97,97,1)]">Replies 3</p>
          <p className="text-[rgba(97,97,97,1)]"> • </p>
          <p className="text-[rgba(97,97,97,1)]">23 Likes</p>
        </div>
      </div>
    </div>
  );
};
