import { DocumentNode } from "@apollo/client";
import client from "./contentful-client";
import { parse } from "graphql";

const StringifyGQL = (gqlQuery: DocumentNode) : string => {
  return gqlQuery.loc && gqlQuery.loc.source.body;
}

const getDataFromCF = async (gqlQuery: DocumentNode) => {
  const entry = StringifyGQL(gqlQuery);
  const query = parse(entry);
  const data = await client.query({ query });
  return data;
}

export default getDataFromCF;