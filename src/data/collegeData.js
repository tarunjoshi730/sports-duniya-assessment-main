const collegeData = [
    {
      id: 1,
      cdRank: 1,
      collegeName: "College A",
      coursesOffered: [
        {
          courseName: "B.Tech Computer Science",
          cutoffMark: 85,
          fees: 120000,
        },
        {
          courseName: "MBA",
          cutoffMark: 80,
          fees: 150000,
        }
      ],
      placement: {
        averageSalary: 800000,
        highestSalary: 1500000,
      },
      userReviews: {
        totalReviews: 250,
        rating: 9.2,
      },
      rankings: 5,
      featured: true,
    },
    {
      id: 2,
      cdRank: 2,
      collegeName: "College B",
      coursesOffered: [
        {
          courseName: "B.Tech Mechanical",
          cutoffMark: 78,
          fees: 130000,
        },
        {
          courseName: "MCA",
          cutoffMark: 75,
          fees: 110000,
        }
      ],
      placement: {
        averageSalary: 750000,
        highestSalary: 1300000,
      },
      userReviews: {
        totalReviews: 190,
        rating: 8.7,
      },
      rankings: 10,
      featured: false,
    },
    {
      id: 3,
      cdRank: 3,
      collegeName: "College C",
      coursesOffered: [
        {
          courseName: "B.Tech Civil Engineering",
          cutoffMark: 82,
          fees: 140000,
        },
        {
          courseName: "MBA Finance",
          cutoffMark: 85,
          fees: 160000,
        }
      ],
      placement: {
        averageSalary: 850000,
        highestSalary: 1400000,
      },
      userReviews: {
        totalReviews: 210,
        rating: 9.0,
      },
      rankings: 8,
      featured: true,
    },
    {
      id: 4,
      cdRank: 4,
      collegeName: "College D",
      coursesOffered: [
        {
          courseName: "B.Sc. Agriculture",
          cutoffMark: 88,
          fees: 115000,
        },
        {
          courseName: "BBA",
          cutoffMark: 80,
          fees: 125000,
        }
      ],
      placement: {
        averageSalary: 730000,
        highestSalary: 1200000,
      },
      userReviews: {
        totalReviews: 180,
        rating: 8.4,
      },
      rankings: 12,
      featured: false,
    },
    {
      id: 5,
      cdRank: 5,
      collegeName: "College E",
      coursesOffered: [
        {
          courseName: "B.Tech IT",
          cutoffMark: 79,
          fees: 125000,
        },
        {
          courseName: "M.Tech Data Science",
          cutoffMark: 85,
          fees: 135000,
        }
      ],
      placement: {
        averageSalary: 890000,
        highestSalary: 1450000,
      },
      userReviews: {
        totalReviews: 230,
        rating: 9.1,
      },
      rankings: 7,
      featured: true,
    },
    {
      id: 6,
      cdRank: 6,
      collegeName: "College F",
      coursesOffered: [
        {
          courseName: "B.Arch",
          cutoffMark: 85,
          fees: 150000,
        },
        {
          courseName: "M.Des",
          cutoffMark: 83,
          fees: 140000,
        }
      ],
      placement: {
        averageSalary: 780000,
        highestSalary: 1300000,
      },
      userReviews: {
        totalReviews: 170,
        rating: 8.6,
      },
      rankings: 15,
      featured: false,
    },
    {
      id: 7,
      cdRank: 7,
      collegeName: "College G",
      coursesOffered: [
        {
          courseName: "B.Com",
          cutoffMark: 75,
          fees: 95000,
        },
        {
          courseName: "BBA",
          cutoffMark: 80,
          fees: 105000,
        }
      ],
      placement: {
        averageSalary: 650000,
        highestSalary: 1200000,
      },
      userReviews: {
        totalReviews: 210,
        rating: 7.9,
      },
      rankings: 13,
      featured: false,
    },
    {
      id: 8,
      cdRank: 8,
      collegeName: "College H",
      coursesOffered: [
        {
          courseName: "B.Tech ECE",
          cutoffMark: 84,
          fees: 125000,
        },
        {
          courseName: "M.Tech Electronics",
          cutoffMark: 86,
          fees: 140000,
        }
      ],
      placement: {
        averageSalary: 810000,
        highestSalary: 1350000,
      },
      userReviews: {
        totalReviews: 240,
        rating: 8.9,
      },
      rankings: 6,
      featured: true,
    },
    {
      id: 9,
      cdRank: 9,
      collegeName: "College I",
      coursesOffered: [
        {
          courseName: "BCA",
          cutoffMark: 77,
          fees: 95000,
        },
        {
          courseName: "MCA",
          cutoffMark: 80,
          fees: 105000,
        }
      ],
      placement: {
        averageSalary: 700000,
        highestSalary: 1250000,
      },
      userReviews: {
        totalReviews: 150,
        rating: 7.5,
      },
      rankings: 16,
      featured: false,
    },
    {
      id: 10,
      cdRank: 10,
      collegeName: "College J",
      coursesOffered: [
        {
          courseName: "B.Pharm",
          cutoffMark: 85,
          fees: 135000,
        },
        {
          courseName: "M.Pharm",
          cutoffMark: 87,
          fees: 145000,
        }
      ],
      placement: {
        averageSalary: 830000,
        highestSalary: 1400000,
      },
      userReviews: {
        totalReviews: 160,
        rating: 8.8,
      },
      rankings: 11,
      featured: true,
    },
    {
      id: 11,
      cdRank: 11,
      collegeName: "College K",
      coursesOffered: [
        {
          courseName: "B.Sc. Computer Science",
          cutoffMark: 83,
          fees: 115000,
        },
        {
          courseName: "M.Sc. Data Science",
          cutoffMark: 85,
          fees: 125000,
        }
      ],
      placement: {
        averageSalary: 870000,
        highestSalary: 1500000,
      },
      userReviews: {
        totalReviews: 220,
        rating: 9.3,
      },
      rankings: 3,
      featured: true,
    },
    {
      id: 12,
      cdRank: 12,
      collegeName: "College L",
      coursesOffered: [
        {
          courseName: "B.Sc. Mathematics",
          cutoffMark: 79,
          fees: 100000,
        },
        {
          courseName: "M.Sc. Applied Mathematics",
          cutoffMark: 82,
          fees: 110000,
        }
      ],
      placement: {
        averageSalary: 730000,
        highestSalary: 1200000,
      },
      userReviews: {
        totalReviews: 150,
        rating: 8.0,
      },
      rankings: 14,
      featured: false,
    },
    {
      id: 13,
      cdRank: 13,
      collegeName: "College M",
      coursesOffered: [
        {
          courseName: "BFA",
          cutoffMark: 70,
          fees: 80000,
        },
        {
          courseName: "MFA",
          cutoffMark: 75,
          fees: 90000,
        }
      ],
      placement: {
        averageSalary: 650000,
        highestSalary: 1100000,
      },
      userReviews: {
        totalReviews: 120,
        rating: 7.0,
      },
      rankings: 18,
      featured: false,
    },
    {
      id: 14,
      cdRank: 14,
      collegeName: "College N",
      coursesOffered: [
        {
          courseName: "B.Tech Aerospace Engineering",
          cutoffMark: 88,
          fees: 160000,
        },
        {
          courseName: "M.Tech Aerospace",
          cutoffMark: 90,
          fees: 170000,
        }
      ],
      placement: {
        averageSalary: 950000,
        highestSalary: 2000000,
      },
      userReviews: {
        totalReviews: 300,
        rating: 9.5,
      },
      rankings: 1,
      featured: true,
    },
    {
      id: 15,
      cdRank: 15,
      collegeName: "College O",
      coursesOffered: [
        {
          courseName: "B.Sc. Physics",
          cutoffMark: 82,
          fees: 105000,
        },
        {
          courseName: "M.Sc. Astrophysics",
          cutoffMark: 85,
          fees: 115000,
        }
      ],
      placement: {
        averageSalary: 810000,
        highestSalary: 1450000,
      },
      userReviews: {
        totalReviews: 200,
        rating: 8.5,
      },
      rankings: 9,
      featured: false,
    }
  ];
  
  export default collegeData;
  