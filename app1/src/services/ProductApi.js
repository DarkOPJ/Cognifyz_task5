// const API_TO_USE = 'https://reactjobsapi.onrender.com/jobs'
// const API_TO_USE = '/jobApiOnline'
const API_TO_USE = '/jobApi'

// Used to fetch jobs from the api
export const fetchJobs = async (endpoint) => {
  try {
    // For data fetching
    const res = await fetch(`${API_TO_USE}${endpoint}`);
    if (!res.ok) {
      throw new Error("HTTP Error! Error code: ", res.status);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("An error occurred fetching the data.", error);
    throw error;
  }
};
// Used to fetch jobs from the api

// Used to add a new job to the api
export const addNewJob = async (newJob) => {
  try {
    const res = await fetch(`${API_TO_USE}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });

    if (!res.ok) {
      throw new Error(
        "There was an error sending the data, code: ",
        res.status
      );
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("An error occurred. Error code: ", error);
    throw error;
  }
};
// Used to add a new job to the api

// Used to delete a job
export const deleteJob = async (id) => {
  try {
    const res = await fetch(`${API_TO_USE}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(
        "There was an error deleting this job, code: ",
        res.status
      );
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("An error occurred. Error code: ", error);
    throw error;
  }
};
// Used to delete a job

// Used to edit a job
export const editJob = async (id, edittedJob) => {
  try {
    const res = await fetch(`${API_TO_USE}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(edittedJob),
    });
    if (!res.ok) {
      throw new Error(
        "There was an error editing this job, code: ",
        res.status
      );
    }

    const data = await res.json();
    return data;
    
  } catch (error) {
    console.error("An error occurred. Error code: ", error);
    throw error;
  }
};
// Used to edit a job
