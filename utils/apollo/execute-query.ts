import { DocumentNode } from "@apollo/client";
import client from "./contentful-client";
import { parse } from "graphql";

const StringifyGQL = (gqlQuery: DocumentNode) => {
  return gqlQuery.loc && gqlQuery.loc.source.body;
}

const getDataFromCF = async (gqlQuery: DocumentNode) => {
  const entry = StringifyGQL(gqlQuery);
  if (entry) {
    const query = parse(entry);
    const data = await client.query({ query });
    return data;
  }
}

export default getDataFromCF;