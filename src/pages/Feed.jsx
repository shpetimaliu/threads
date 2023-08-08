// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Thread } from "../components/Thread";
import { database, DB_ID, COLLECTION_ID } from "../../appWriteConfig";
import { Query } from "appwrite";

const Feed = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getThreads();
  }, []);

  const getThreads = async () => {
    const response = await database.listDocuments(DB_ID, COLLECTION_ID, [
      Query.orderDesc("$createdAt"),
    ]);
    console.log("response:", response);
    setThreads(response.documents);
    console.log(response.documents);
  };

  return (
    <div className="container mx-auto max-w-[600px]">
      {threads.map((thread) => (
        <Thread key={thread.$id} thread={thread} />
      ))}
    </div>
  );
};

export default Feed;
