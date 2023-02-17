declare module '*.graphql' {
  import { DocumentNode, DocumentNode } from 'gql';
  const Schema: DocumentNode;
  export = Schema;
}

declare module '*.gql' {
  const Schema: DocumentNode;
  export = Schema;
}
