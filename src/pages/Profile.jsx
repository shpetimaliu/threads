import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { COLLECTION_ID, DB_ID, database } from "../../appWriteConfig";
import { Thread } from "../components/Thread";

const Profile = () => {
  const [threads, setThreads] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("Params:", id);
    getThreads();
  });

  const getThreads = async () => {
    const response = await database.listDocuments(DB_ID, COLLECTION_ID, [
      Query.orderDesc("$createdAt"),
      Query.equal("owner_id", id),
    ]);
    setThreads(response.documents);
  };

  return (
    <div>
      <div>
        {threads.map((thread) => (
          <Thread key={thread.$id} thread={thread} setThreads={setThreads} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
