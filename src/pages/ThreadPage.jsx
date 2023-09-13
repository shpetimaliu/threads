import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { COLLECTION_ID, DB_ID, database } from "../../appWriteConfig";
import Thread from "../components/Thread";

function ThreadPage() {
  database();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [thread, setThread] = useState(null);
  useEffect(() => {
    getThreads();
  }, []);

  const getThreads = async () => {
    const response = await database.getDocument(DB_ID, COLLECTION_ID, id);
    setThread(response);
    setLoading(false);
  };
  if (!thread) return;

  return (
    <div>
      <Thread thread={thread} />
    </div>
  );
}

export default ThreadPage;
