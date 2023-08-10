// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import { Thread } from "../components/Thread";
import { Image } from "react-feather";
import { database, DB_ID, COLLECTION_ID } from "../../appWriteConfig";
import { Query, ID } from "appwrite";

const Feed = () => {
  const [threads, setThreads] = useState([]);

  const [body, setBody] = useState("");
  const [threadImg, setThreadImg] = useState(null);

  const fileRef = useRef(null);

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
      image: threadImg,
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

  const handleClick = async (e) => {
    fileRef.current.click();
  };

  const handleFileChange = async (e) => {
    const fileObject = e.target.files && e.target.files[0];
    console.log(fileObject);

    if (!fileObject) {
      return;
    }
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

          {/* Icon */}
          <input
            style={{ display: "none" }}
            type="file"
            ref={fileRef}
            onChange={handleFileChange}
          />

          <div className="flex justify-between items-center border-y py-2 border-[rgba(49,49,49,1)]">
            <div className="icon-container group">
              <Image
                onClick={handleClick}
                className="cursor-pointer group-hover:bg-[rgba(49,49,49,1)] rounded-full p-2"
                size={40}
              />
            </div>
            <input
              className="bg-white cursor-pointer text-black py-2 text-sm px-4 border border-black rounded"
              type="submit"
              value="Post"
            />
          </div>
        </form>
      </div>

      {threads.map((thread) => (
        <Thread key={thread.$id} thread={thread} setThreads={setThreads} />
      ))}
    </div>
  );
};

export default Feed;
