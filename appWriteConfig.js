import { Account, Client, Databases, Functions, Storage } from "appwrite";

const client = new Client();

export const VITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
export const PROJECT_ID = import.meta.env.VITE_APPWRITE_SETPROJECT;
export const DB_ID = import.meta.env.VITE_DB_ID;
export const BUCKET_IMAGE_ID = import.meta.env.VITE_BUCKETS_IMAGE_ID;
export const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;
export const COLLECTION_ID_PROFILES = "64dd7ec370a9eba9dd44";

client.setEndpoint(VITE_ENDPOINT).setProject(PROJECT_ID);

export const account = new Account(client);
export const storage = new Storage(client);
export const database = new Databases(client);
export const functions = new Functions(client);
export default client;
