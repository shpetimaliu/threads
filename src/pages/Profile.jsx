import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import { COLLECTION_ID, DB_ID, database } from "../../appWriteConfig";

const Profile = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getThreads();
  });

  const getThreads = async () => {
    const response = await database.listDocuments(DB_ID, COLLECTION_ID, [
      Query.orderDesc("$createdAt"),
      Query.equal("title", "Avatar"),
    ]);
    setThreads(response.documents);
  };

  return <div>Profile</div>;
};

export default Profile;
