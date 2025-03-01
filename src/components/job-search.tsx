export function JobSearch() {
    const jobs = [
      {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120,000 - $150,000",
        posted: "2 days ago",
        skills: ["React", "TypeScript", "GraphQL"],
      },
      {
        id: 2,
        title: "UX Designer",
        company: "Design Studio",
        location: "Remote",
        type: "Contract",
        salary: "$80,000 - $100,000",
        posted: "1 week ago",
        skills: ["Figma", "UI/UX", "Prototyping"],
      },
      {
        id: 3,
        title: "Backend Developer",
        company: "Data Systems",
        location: "New York, NY",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        posted: "3 days ago",
        skills: ["Node.js", "PostgreSQL", "AWS"],
      },
    ];
  
    return (
      <div className="space-y-6">
        <div className="card shadow-lg rounded-lg p-6">
          <div className="card-header">
            <h2 className="text-2xl font-semibold">Job Search</h2>
            <p className="text-muted-foreground text-lg">Find your next opportunity</p>
          </div>
          <div className="card-content mt-6">
            <div className="grid gap-4">
              {/* Search bar and filter options */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="search"
                    placeholder="Search jobs, skills, companies..."
                    className="input w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <select
                    defaultValue="all"
                    className="select w-full md:w-44 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Types</option>
                    <option value="fulltime">Full-time</option>
                    <option value="parttime">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="freelance">Freelance</option>
                  </select>
                  <select
                    defaultValue="all"
                    className="select w-full md:w-44 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Locations</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">On-site</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                  <button className="button p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    <span>Search</span>
                  </button>
                </div>
              </div>
  
              <hr className="my-6" />
  
              {/* Filters and job list */}
              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
                <div className="filters p-4 bg-white rounded-lg shadow-lg">
                  <div className="filters-header">
                    <h3 className="text-xl font-semibold">Filters</h3>
                  </div>
                  <div className="filters-content mt-4">
                    {/* Salary range */}
                    <div className="space-y-4">
                      <label className="text-xs font-medium">Salary Range</label>
                      <input
                        type="range"
                        min="0"
                        max="200000"
                        step="10000"
                        defaultValue="50000"
                        className="w-full"
                      />
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>$0</span>
                        <span>$200k+</span>
                      </div>
                    </div>
  
                    {/* Experience Level */}
                    <div className="space-y-4 mt-6">
                      <label className="text-xs font-medium">Experience Level</label>
                      <div className="grid gap-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="entry" />
                          <label htmlFor="entry" className="text-sm">Entry Level</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="mid" defaultChecked />
                          <label htmlFor="mid" className="text-sm">Mid Level</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="senior" defaultChecked />
                          <label htmlFor="senior" className="text-sm">Senior Level</label>
                        </div>
                      </div>
                    </div>
  
                    {/* Date Posted */}
                    <div className="space-y-2 mt-6">
                      <label className="text-xs font-medium">Date Posted</label>
                      <select
                        className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="any"
                      >
                        <option value="any">Any time</option>
                        <option value="day">Past 24 hours</option>
                        <option value="week">Past week</option>
                        <option value="month">Past month</option>
                      </select>
                    </div>
                  </div>
                  <div className="filters-footer mt-4">
                    <button className="button-outline p-3 w-full border-2 border-gray-300 text-black rounded-lg hover:bg-gray-100 transition">
                      Reset Filters
                    </button>
                  </div>
                </div>
  
                {/* Job list */}
                <div className="job-list">
                  <div className="flex text-black justify-between items-center">
                    <p className="text-sm text-muted-foreground">Showing 3 of 156 jobs</p>
                    <select defaultValue="relevance" className="select p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="relevance">Relevance</option>
                      <option value="recent">Most Recent</option>
                      <option value="salary-high">Salary (High to Low)</option>
                      <option value="salary-low">Salary (Low to High)</option>
                    </select>
                  </div>
  
                  <div className="grid gap-6 mt-6">
                    {jobs.map((job) => (
                      <div key={job.id} className="job-card border-2 border-gray-300 rounded-lg p-4 shadow-lg">
                        <div className="job-card-header flex justify-between items-center">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <button className="apply-button p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            Apply
                          </button>
                        </div>
  
                        <div className="job-details mt-4 flex justify-between">
                          <div className="location">{job.location}</div>
                          <div className="type">{job.type}</div>
                          <div className="salary">{job.salary}</div>
                        </div>
  
                        <div className="skills mt-4">
                          {job.skills.map((skill) => (
                            <span key={skill} className="skill p-2 text-xs bg-gray-200 rounded-lg mr-2">
                              {skill}
                            </span>
                          ))}
                        </div>
  
                        <div className="job-footer flex justify-between items-center mt-4">
                          <div className="posted">Posted {job.posted}</div>
                          <button className="save-job-button p-3 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition">
                            Save Job
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  