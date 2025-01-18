import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import React from "react";
import PageLayout from "./layout/PageLayout";
import Homepage from "./pages/Homepage";
import JobsPage from "./pages/JobsPage";
import AddJobsPage from "./pages/AddJobsPage";
import EditJobsPage from "./pages/EditJobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ViewJob from "./pages/ViewJob";
import {jobLoader} from "./loaders/ProductLoader"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/jobs/:id" element={<ViewJob/>} loader={jobLoader}/>
        <Route path="/add-job" element={<AddJobsPage/>}/>
        <Route path="/edit-job/:id" element={<EditJobsPage/>} loader={jobLoader}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
