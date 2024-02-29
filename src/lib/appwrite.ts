import { Client,Account } from "appwrite";

export const client = new Client();

client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!).setProject(process.env.NEXT_PUBLIC_PROJECT_ID!);
