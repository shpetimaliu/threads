// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  MoreHorizontal,
  Heart,
  Repeat,
  MessageCircle,
  Send,
} from "react-feather";
import { Thread } from "../components/Thread";

const Feed = () => {
  return (
    <div className="container mx-auto max-w-[600px]">
      <div className="flex p-4">
        <img
          src="https://pbs.twimg.com/profile_images/1391922476167405575/gWl0pM1V_400x400.jpg"
          className="w-14 h-14 rounded-full object-cover"
        />
        {/* Header of feed */}
        <div className="w-full px-2 py-4 border-b border-[rgba(97,97,97,1)]">
          <div className="flex justify-between gap-2">
            <strong>Shpetim Aliu</strong>
            <div className="flex justify-between gap-2">
              <p className="text-[rgba(97,97,97,1)]">4hrs ago</p>
              <MoreHorizontal />
            </div>
          </div>
          {/* Body */}
          <div className="py-2">
            <span>Shpetim Aliu trying to create a clone of threads</span>
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
    </div>
  );
};

export default Feed;
