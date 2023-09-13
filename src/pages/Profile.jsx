import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  COLLECTION_ID,
  COLLECTION_ID_PROFILES,
  DB_ID,
  database,
} from "../../appWriteConfig";
import { Thread } from "../components/Thread";
import { useAuth } from "../context/authContext";

const Profile = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [threads, setThreads] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    getProfile();
    getThreads();
  }, []);

  const getThreads = async (owner_id) => {
    const response = await database.listDocuments(DB_ID, COLLECTION_ID, [
      Query.orderDesc("$createdAt"),
      Query.equal("owner_id", owner_id),
    ]);
    setThreads(response.documents);
  };

  const getProfile = async () => {
    const data = await database.listDocuments(DB_ID, COLLECTION_ID_PROFILES, [
      Query.equal("username"),
      Query.limit(1),
    ]);
    console.log("data:", data);
    // getThreads(data.$id);
    // setUserProfile(data);
    setLoading(false);
  };

  const toogleFollow = async () => {
    const following = user.profile.following;
    const followers = userProfile.followers;

    // Following
    if (following.includes(userProfile.$id)) {
      const index = following.indexOf(userProfile.$id);
      following.splice(index, 1);
    } else {
      following.push(userProfile.$id);
    }

    // Followers

    if (followers.includes(user.$id)) {
      const index = followers.indexOf(user.$id);
      followers.splice(index, 1);
    } else {
      followers.push(user.$id);
    }

    const payload = {
      following: following,
    };

    const payload2 = {
      followers: followers,
      follow_count: followers.length,
    };

    console.log("payload1:", payload);
    console.log("payload2:", payload2);

    const response = await database.updateDocument(
      DB_ID,
      COLLECTION_ID_PROFILES,
      user.$id,
      payload
    );

    const response2 = await database.updateDocument(
      DB_ID,
      COLLECTION_ID_PROFILES,
      userProfile.$id,
      payload2
    );

    setUserProfile(response2);

    console.log("response:", response);
    console.log("response2:", response2);

    console.log(">>>CLicked on follow");
  };

  if (loading) return;

  return (
    <div className="container mx-auto max-w-[600px]">
      <div className="flex justify-between my-20">
        <div className="py-4">
          <strong className="text-3xl">{userProfile.name}</strong>
          <div className="text-xl">
            <p>@{userProfile.username}</p>
          </div>
          <div className="py-4">{userProfile.bio}</div>
          <div className="flex gap-2">
            <p className="text-[rgba(97,97,97,1)]">
              {userProfile.follow_count} followers
            </p>
            {userProfile.link && (
              <>
                <p className="text-[rgba(97,97,97,1)]">•</p>
                <a href={userProfile.link} className="text-[rgba(97,97,97,1)]">
                  {userProfile.link}
                </a>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={userProfile.profile_pic}
          />
          {user.profile.following.includes(userProfile.$id) ? (
            <button
              onClick={toogleFollow}
              className="text-white py-2 px-4 border border-[#fff] text-sm  rounded-full"
            >
              Following
            </button>
          ) : (
            <button
              onClick={toogleFollow}
              className="bg-white text-black py-2 px-4 border text-sm border-black rounded-full"
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className="p-4">
        {threads.map((thread) => (
          <Thread key={thread.$id} thread={thread} setThreads={setThreads} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
