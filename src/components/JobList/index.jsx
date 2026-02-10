import { useState } from "react";
import JobCard from "../JobCard";
const JobList = ({ jobs = [] }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [appliedJob, setAppliedJob] = useState(null);

  const handleApply = (job) => {
    if (!job) return;
    setAppliedJob(job);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">Available Jobs</h2>
        <p className="text-white mt-2">
          Find your perfect job from our curated list of opportunities
        </p>
      </div>

      {/* Success Toast */}
      {showSuccess && appliedJob && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <p className="font-semibold">
                Application Submitted Successfully!
              </p>
              <p className="text-sm opacity-90">
                You applied for {appliedJob.title} at {appliedJob.company}
              </p>
            </div>
          </div>
        </div>
      )}

      {jobs.length === 0 ? (
        <div className="text-center py-12">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No jobs available
          </h3>
          <p className="mt-1 text-gray-500">
            Check back later for new opportunities.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onApply={handleApply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
