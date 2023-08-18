import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [threads, setThreads] = useState([]);
  const params = useParams();

  useEffect(() => {
    getThreads();
  });

  //   const getThreads = async () => {
  //     const response = await database.listDocuments(DB_ID, COLLECTION_ID, [
  //       Query.orderDesc("$createdAt"),
  //       Query.equal("owner_id", "Avatar"),
  //     ]);
  //     setThreads(response.documents);
  //   };

  return <div>Profile</div>;
};

export default Profile;
