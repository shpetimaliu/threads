// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Thread } from "../components/Thread";
import { Image } from "react-feather";
import { database, DB_ID, COLLECTION_ID } from "../../appWriteConfig";
import { Query } from "appwrite";

const Feed = () => {
  const [threads, setThreads] = useState([]);

  const [body, setBody] = useState("");

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
      <div className="p-4">
        <form>
          <textarea
            className="rounded-lg p-4 w-full bg-[rgba(29,29,29,1)]"
            required
            name="body"
            placeholder="What are you thinking today 🤔..."
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
          <div className="flex justify-between items-center">
            <Image size={24} />
            <input
              className="bg-white text-black py-2 text-sm px-4 border border-black rounded"
              type="submit"
              value="Post"
            />
          </div>
        </form>
      </div>

      {threads.map((thread) => (
        <Thread key={thread.$id} thread={thread} />
      ))}
    </div>
  );
};

export default Feed;
