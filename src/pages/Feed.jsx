// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Thread } from "../components/Thread";
import { Image } from "react-feather";
import { database, DB_ID, COLLECTION_ID } from "../../appWriteConfig";
import { Query, ID } from "appwrite";

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
    setThreads(response.documents);
  };

  const handleThreadSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      owner_id: "64ce80a727511035504e",
      body: body,
      image: null,
    };
    const response = await database.createDocument(
      DB_ID,
      COLLECTION_ID,
      ID.unique(),
      payload
    );

    console.log("RESPONSE @2:", response);
    setThreads((prevState) => [response, ...prevState]);
    setBody("");
  };

  return (
    <div className="container mx-auto max-w-[600px]">
      <div className="p-4">
        <form onSubmit={handleThreadSubmit}>
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
