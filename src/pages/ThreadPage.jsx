import { ID, Query } from "appwrite";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  COLLECTION_ID,
  COLLECTION_ID_COMMENTS,
  DB_ID,
  database,
} from "../../appWriteConfig";
import Comment from "../components/Comment";
import { Thread } from "../components/Thread";
import { useAuth } from "../context/authContext";

function ThreadPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [thread, setThread] = useState(null);
  const [commentBody, setCommentBody] = useState("");
  const [comments, setComments] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getThreads();
    getComments();
  }, []);

  const getThreads = async () => {
    const response = await database.getDocument(DB_ID, COLLECTION_ID, id);
    setThread(response);
    setLoading(false);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      owner_id: user.$id,
      thread_id: id,
      body: commentBody,
    };
    const response = await database.createDocument(
      DB_ID,
      COLLECTION_ID_COMMENTS,
      ID.unique(),
      payload
    );

    setCommentBody("");
    setComments((prevState) => [response, ...prevState]);
  };

  const getComments = async () => {
    const response = await database.listDocuments(
      DB_ID,
      COLLECTION_ID_COMMENTS,
      [Query.orderDesc("$createdAt"), Query.equal("thread_id", id)]
    );
    setComments(response.documents);
  };

  if (!thread) return;

  return (
    <>
      <Thread thread={thread} />
      <div className="p-4">
        <form onSubmit={handleCommentSubmit}>
          <textarea
            className="rounded-lg p-4 w-full bg-[rgba(29,29,29,1)]"
            required
            name="body"
            placeholder="Say something about this Thread 🤔..."
            value={commentBody}
            onChange={(e) => {
              setCommentBody(e.target.value);
            }}
          ></textarea>

          <div className="flex justify-end items-center border-y py-2 border-[rgba(49,49,49,1)]">
            <span className="text-[#5b5b5b] flex p-4 w-full pb-4">
              👋 This WebApp is cool, create by Shpetim Aliu
            </span>
            <input
              className="bg-white cursor-pointer text-black py-2 text-sm px-4 border border-black rounded-full"
              type="submit"
              value="Post"
            />
          </div>
        </form>
      </div>

      <div>
        {comments.map((comment) => (
          <Comment key={comment.$id} comment={comment} />
        ))}
      </div>
    </>
  );
}

export default ThreadPage;
