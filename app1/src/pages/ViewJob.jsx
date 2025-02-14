import React, {useRef} from "react";
import { FaArrowLeft, FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import ModalBtns from "../components/ModalBtns";

const ViewJob = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const modalControl = useRef(null); // Declare modalControl here

    return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-gray-500 hover:text-gray-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{data.type}</div>
                <h1 className="text-3xl font-bold mb-4">
                {data.title}
                </h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaLocationDot className="text-lg text-orange-700 mr-2"/>
                  <p className="text-orange-700">{data.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-gray-500 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">
                {data.description}
                </p>

                <h3 className="text-gray-500 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{data.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{data.company.name}</h2>

                <p className="my-2">
                {data.company.description}
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-gray-200 p-2 font-bold">
                {data.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-gray-200 p-2 font-bold">{data.company.contactPhone}</p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${id}`}
                  className="bg-gray-600 hover:bg-gray-700 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                
                <ModalBtns btnTxt="Delete Job" inModal={false} modalControl={modalControl}/>
              </div>
            </aside>
          </div>
        </div>
        <DeleteModal modalControl={modalControl} id={id}/>
      </section>
    </>
  );
};

export default ViewJob;
