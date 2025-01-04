import React, { useState, useEffect } from "react";
import collegeData from "../data/collegeData";

const CollegeList = () => {
  const [data, setData] = useState(collegeData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none"); 
  const [sortField, setSortField] = useState("none"); 
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const filteredData = collegeData.filter((college) =>
      college.collegeName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let sortedData = [...filteredData];

    if (sortField !== "none") {
      sortedData.sort((a, b) => {
        if (sortField === "rating") {
          return sortOrder === "asc"
            ? a.userReviews.rating - b.userReviews.rating
            : b.userReviews.rating - a.userReviews.rating;
        }
        if (sortField === "fees") {
          return sortOrder === "asc"
            ? a.coursesOffered[0].fees - b.coursesOffered[0].fees
            : b.coursesOffered[0].fees - a.coursesOffered[0].fees;
        }
        if (sortField === "cdrank") {
          return sortOrder === "asc"
            ? a.cdRank - b.cdRank
            : b.cdRank - a.cdRank;
        }
        return 0;
      });
    }

    setData(sortedData.slice(0, visibleCount));
  }, [searchTerm, sortOrder, sortField, visibleCount]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto p-6">
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by college name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />
      </div>

      <div className="mb-4">
        <select
          onChange={(e) => {
            const [field, order] = e.target.value.split("-");
            setSortField(field);
            setSortOrder(order);
          }}
          className="border p-2 rounded-lg"
        >
          <option value="none-none">Sort by...</option>
          <option value="rating-asc">Sort by Rating (Ascending)</option>
          <option value="rating-desc">Sort by Rating (Descending)</option>
          <option value="fees-asc">Sort by Fees (Ascending)</option>
          <option value="fees-desc">Sort by Fees (Descending)</option>
          <option value="cdrank-asc">Sort by CD Rank (Ascending)</option>
          <option value="cdrank-desc">Sort by CD Rank (Descending)</option>
        </select>
      </div>

      <div className="grid grid-cols-6 bg-teal-300 text-left font-semibold p-4 rounded-t-lg border-b">
        <div className="col-span-1 border-r border-gray-400">CD Rank</div>
        <div className="col-span-1 border-r border-gray-400">Colleges</div>
        <div className="col-span-1 border-r border-gray-400">Course Fees</div>
        <div className="col-span-1 border-r border-gray-400">Placements</div>
        <div className="col-span-1 border-r border-gray-400">User Reviews</div>
        <div className="col-span-1">Rankings</div>
      </div>

      {data.map((college) => (
        <div key={college.id} className="grid grid-cols-6 gap-4 border-b py-4">
          <div className="col-span-1 border-r border-gray-400">
            <div className="text-lg font-bold">#{college.cdRank}</div>
          </div>

          <div className="col-span-1 border-r border-gray-400">
            <h3 className="text-lg font-semibold text-cyan-300">
              {college.collegeName}
              {college.featured && (
                <span className="ml-2 text-sm text-red-600 font-bold">Featured</span>
              )}
            </h3>
            <p className="text-sm text-gray-500">{college.location}</p>
            <p className="text-sm text-gray-500">AICTE Approved</p>
          </div>

          <div className="col-span-1 border-r border-gray-400">
            <p className="text-lg font-semibold text-cyan-300">₹{college.coursesOffered[0].fees}</p>
          </div>

          <div className="col-span-1 border-r border-gray-400">
            <p className="text-lg font-semibold text-cyan-300"> ₹{college.placement.averageSalary}</p>
            <p>Average Package</p>
            <p className="text-lg font-semibold text-cyan-300"> ₹{college.placement.highestSalary}</p>
            <p>Highest Package</p>
          </div>

          <div className="col-span-1 border-r border-gray-400">
            <p className="text-sm text-gray-600">{college.userReviews.rating} / 10</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-gray-600">#{college.rankings}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegeList;
