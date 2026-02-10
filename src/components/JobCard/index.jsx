import React, { useState } from "react";

const JobCard = ({ job, onApply }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Add default/fallback values if job is undefined
  const jobData = job || {
    id: 0,
    title: "Position Not Available",
    company: "Unknown Company",
    type: "N/A",
    level: "N/A",
    location: "N/A",
    skills: [],
    postedDays: 0,
    description: "Job details not available.",
  };

  const getJobTypeColor = (type) => {
    if (!type) return "bg-gray-100 text-gray-800";

    switch (type.toLowerCase()) {
      case "full-time":
      
        return "bg-green-100 text-green-800";
      case "part-time":
      case "part time":
        return "bg-yellow-100 text-yellow-800";
      case "remote":
        return "bg-purple-100 text-purple-800";
      case "internship":
        return "bg-blue-100 text-blue-800";
      case "in-office":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleApply = () => {
    if (onApply) {
      onApply(jobData);
    }
  };

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{jobData.title}</h3>
            <p className="text-lg text-gray-700 font-semibold mt-1">
              {jobData.company}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getJobTypeColor(jobData.type)}`}
              >
                {jobData.type}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                {jobData.level}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                {jobData.location}
              </span>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-700">
                Required Skills:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {jobData.skills && jobData.skills.length > 0 ? (
                  jobData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 text-sm">
                    No skills specified
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              Posted {jobData.postedDays} days ago
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <button
              onClick={handleViewDetails}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 w-full md:w-auto"
            >
              View Details
            </button>
            <button
              onClick={handleApply}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200 w-full md:w-auto"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Job Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {jobData.title}
                  </h2>
                  <p className="text-xl text-gray-700 font-semibold mt-1">
                    {jobData.company}
                  </p>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className={`px-4 py-2 rounded-lg ${getJobTypeColor(jobData.type)}`}
                >
                  <span className="font-semibold">{jobData.type}</span>
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="font-semibold">{jobData.level}</span>
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="font-semibold">{jobData.location}</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Job Description
                </h3>
                <p className="text-gray-600 mt-2">
                  {jobData.description ||
                    "We are looking for a passionate developer to join our team. You will be responsible for developing and maintaining high-quality applications using cutting-edge technologies."}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Requirements
                </h3>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Strong understanding of modern development practices</li>
                  <li>Experience with relevant technologies</li>
                  <li>Good communication skills</li>
                  <li>Ability to work in a team environment</li>
                  <li>Problem-solving mindset</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {jobData.skills && jobData.skills.length > 0 ? (
                    jobData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500">
                      No specific skills required
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-end gap-4">
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-200 w-full sm:w-auto"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleApply();
                    setShowDetails(false);
                  }}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200 w-full sm:w-auto"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobCard;
