import { Client } from "appwrite";

const client = new Client();
const ENDPOINT = import.meta.env.APPWRITE_ENDPOINT;
const PROJECT_ID = import.meta.env.APPWRITE_SETPROJECT;

client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);

export default client;
