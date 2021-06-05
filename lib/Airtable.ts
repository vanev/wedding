import Airtable from "airtable";

export const peopleTable = () => {
  if (!process.env.NEXT_PUBLIC_AIRTABLE_API_KEY)
    throw new Error("Airtable API Key Not Defined");

  if (!process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID)
    throw new Error("Airtable Base Id Not Defined");

  const client = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  });

  return client.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID).table("People");
};
