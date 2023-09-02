// eslint-disable-next-line no-unused-vars
import { ID, Query } from "appwrite";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-feather";
import {
  BUCKET_IMAGE_ID,
  COLLECTION_ID,
  DB_ID,
  database,
  storage,
} from "../../appWriteConfig";
import { Thread } from "../components/Thread";
import { useAuth } from "../context/authContext";

const Feed = () => {
  const [threads, setThreads] = useState([]);

  const [body, setBody] = useState("");
  const [threadImg, setThreadImg] = useState(null);

  const { user } = useAuth();

  const fileRef = useRef(null);

  useEffect(() => {
    getThreads();
  }, []);

  const getThreads = async () => {
    const following = user.profile.following;
    const feedPost = [];

    for (let i = 0; following.length > i; i++) {
      console.log("following[i].$id:", following[i].$id);
      let response = await database.listDocuments(DB_ID, COLLECTION_ID, [
        Query.orderDesc("$createdAt"),
        Query.equal("owner_id", following[i].$id),
        Query.limit(1),
      ]);
      feedPost = [...feedPost, feedPost];
      console.log("feedPost:", feedPost);
    }

    // const response = await database.listDocuments(DB_ID, COLLECTION_ID, [
    //   Query.orderDesc("$createdAt"),
    //   Query.equal("owner_id", ID),
    // ]);
    // setThreads(response.documents);
  };

  const handleThreadSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      owner_id: user.$id,
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
    setThreadImg(null);
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

    const response = await storage.createFile(
      BUCKET_IMAGE_ID,
      ID.unique(),
      fileObject
    );

    const imagePreview = storage.getFilePreview(BUCKET_IMAGE_ID, response.$id);
    setThreadImg(imagePreview.href);
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
          <img src={threadImg} />

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
