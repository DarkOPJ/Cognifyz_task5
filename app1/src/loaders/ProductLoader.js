import {fetchJobs} from "../services/ProductApi";

export const jobLoader = async ({ params }) => {
  try {
    const res = await fetchJobs(`/${params.id}`);
    return res;
  } catch (error) {
    throw new Error(
      `There was an error fetching the product data. Details: ${error.message}`
    );
  }
};
