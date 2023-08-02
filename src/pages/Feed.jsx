// eslint-disable-next-line no-unused-vars
import React from "react";
import { MoreHorizontal } from "react-feather";

const Feed = () => {
  return (
    <div className="container mx-auto w-[600px]">
      <div className="flex p-4">
        <img
          src="https://pbs.twimg.com/profile_images/1391922476167405575/gWl0pM1V_400x400.jpg"
          className="w-14 rounded-full object-cover"
        />
        <div className="w-full px-2">
          <div className="flex justify-between gap-2">
            <strong>Shpetim Aliu</strong>
            <div className="flex justify-between gap-2">
              <p>4hrs ago</p>
              <MoreHorizontal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
