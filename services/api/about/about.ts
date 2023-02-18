import executeQuery from '../../../utils/apollo/execute-query';
import query from "./about.gql";

export const getCFData = async () => {
  const data = await executeQuery(query);
  const result = data?.data?.aboutEndPointCollection?.items[0];
  
  const { 
    name,
    company,
    job,
    location: {
      lon,
      lat
    }
  } = result;

  return {
    name,
    company,
    job,
    location: {
      lon,
      lat
    }
  };
}