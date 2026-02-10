function SearchBar({ filters = {}, onSearch }) {
  const handleChange = (e) => {
    onSearch({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-wrap gap-4 my-10 justify-center px-4">
      <select
        className="bg-amber-50 rounded-xl py-2 "
        name="title"
        value={filters.title || ""}
        onChange={handleChange}
      >
        <option value="" className="text-white">
          Job Role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Backend Developer">Backend Developer</option>
      </select>

      <select
        className="bg-amber-50 rounded-xl py-2 "
        name="type"
        value={filters.type || ""}
        onChange={handleChange}
      >
        <option value="">Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part time">Part time</option>
        <option value="Internship">Internship</option>
        <option value="Contract">Contract</option>
      </select>

      <select
        className="bg-amber-50 rounded-xl py-2 "
        name="location"
        value={filters.location || ""}
        onChange={handleChange}
      >
        <option value="">Location</option>
        <option value="Remote">Remote</option>
        <option value="In-office">In-office</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select
        className="bg-amber-50 rounded-xl py-2 "
        name="level"
        value={filters.level || ""}
        onChange={handleChange}
      >
        <option value="">Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
    </div>
  );
}

export default SearchBar;
