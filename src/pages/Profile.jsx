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

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [threads, setThreads] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getThreads();
    getProfile();
  }, []);

  const getThreads = async () => {
    const response = await database.listDocuments(DB_ID, COLLECTION_ID, [
      Query.orderDesc("$createdAt"),
      Query.equal("owner_id", id),
    ]);
    setThreads(response.documents);
  };

  const getProfile = async () => {
    const data = await database.getDocument(DB_ID, COLLECTION_ID_PROFILES, id);
    console.log("data:", data);
    setUserProfile(data);
    setLoading(false);
  };

  if (loading) return;

  return (
    <div className="container mx-auto max-w-[600px]">
      <div>
        <div>
          <h3 className="text-lg">@{userProfile.username}</h3>
        </div>
        <div>
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={userProfile.profile_pic}
          />
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
