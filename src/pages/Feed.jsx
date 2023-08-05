// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Thread } from "../components/Thread";
import { database, DB_ID, COLLECTION_ID } from "../../appWriteConfig";

const Feed = () => {
  const [threads, setThreads] = useState();

  useEffect(() => {
    getThreads();
  }, []);

  const getThreads = async () => {
    const response = await database.listDocuments(DB_ID, COLLECTION_ID);
    console.log("response:", response);
  };

  return (
    <div className="container mx-auto max-w-[600px]">
      <Thread />
      <Thread />
      <Thread />
      <Thread />
    </div>
  );
};

export default Feed;
