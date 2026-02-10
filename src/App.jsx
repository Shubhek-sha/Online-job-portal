import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import jobData from "./JobDummyData";

function App() {
  const [filters, setFilters] = useState({
    title: "",
    type: "",
    location: "",
    level: "",
  });

  const filteredJobs = jobData.filter((job) => {
    return (
      (!filters.title || job.title === filters.title) &&
      (!filters.type || job.type === filters.type) &&
      (!filters.location || job.location === filters.location) &&
      (!filters.level || job.level === filters.level)
    );
  });

  return (
    <div>
      <Navbar />
      <Header />

      <SearchBar filters={filters} onSearch={setFilters} />

      <JobList jobs={filteredJobs} />
    </div>
  );
}

export default App;
