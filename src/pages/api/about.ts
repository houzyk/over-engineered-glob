import { NextApiHandler } from 'next';
import { getCFData } from "../../../services/api/about/about";

const AboutEndPoint: NextApiHandler = async (_, response) => {
  const data =  await getCFData();
  if (data) {
    response.status(200).json(data)
  }
}

export default AboutEndPoint;