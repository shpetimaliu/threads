import React, { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import {
  COLLECTION_ID_PROFILES,
  DB_ID,
  database,
  functions,
} from "../../appWriteConfig";

// TimeAgo.addDefaultLocale(en);

function Comment({ comment }) {
  const [loading, setLoading] = useState(true);
  const [owner, setOwner] = useState(null);
  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = async () => {
    const payload = {
      owner_id: comment.owner_id,
    };
    const response = await functions.createExecution(
      "64ced7442bdd27af1d2b",
      JSON.stringify(payload)
    );
    const profile = await database.getDocument(
      DB_ID,
      COLLECTION_ID_PROFILES,
      comment.owner_id
    );
    const userData = JSON.parse(response.response);
    userData["profile_pic"] = profile.profile_pic;
    userData["username"] = profile.username;
    setOwner(userData);
    setLoading(false);
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
                date={new Date(comment.$createdAt).getTime()}
                locale="en-US"
              />
            </p>
            {/* <Trash2 onClick={handleDelete} size={14} /> */}
          </div>
        </div>
        {/* Body */}

        <div className="py-2 text-white" style={{ whiteSpace: "pre-wrap" }}>
          {comment.body}
          {/* <span>
              {comment.image && (
                <img
                  className="object-cover border border-[rgba(49, 49, 49, 1)] rounded-md"
                  src={comment.image}
                />
              )}
            </span> */}
        </div>
        <div className="flex gap-2 py-2">
          {/* <div className="group flex items-center p-1 rounded-full cursor-pointer hover:hover:bg-[rgba(49,49,49,1)] hover:backdrop-blur-3xl">
            <Heart
              onClick={toggleLike}
              size={22}
              color={
                threadInstance.users_who_liked.includes(user.$id)
                  ? "#ff0000"
                  : "#fff"
              }
            />
          </div> */}
          {/* <Link to={`/thread/${comment.$id}`}>
            <div className="group flex items-center p-1 rounded-full cursor-pointer hover:hover:bg-[rgba(49,49,49,1)] hover:backdrop-blur-3xl">
              <MessageCircle size={22} />
            </div>
          </Link>
          <div className="group flex items-center p-1 rounded-full cursor-pointer hover:hover:bg-[rgba(49,49,49,1)] hover:backdrop-blur-3xl">
            <Repeat size={22} />
          </div>
          <div className="group flex items-center p-1 rounded-full cursor-pointer hover:hover:bg-[rgba(49,49,49,1)] hover:backdrop-blur-3xl">
            <Send size={22} />
          </div>*/}
        </div>

        <div className="flex gap-3">
          <p className="text-[rgba(97,97,97,1)]">Replies 3</p>
          <p className="text-[rgba(97,97,97,1)]"> • </p>
          {/* <p className="text-[rgba(97,97,97,1)]">
            {comment.likes} Likes
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Comment;
