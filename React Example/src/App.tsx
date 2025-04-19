import { useState, useEffect, useRef } from "react";
import "./App.css";
import { CourseCatalogService } from "./services/courseCatalogService";
import { Course, CourseMap } from "./types/Course";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";

interface RequirementOption {
  title: string;
  courseOptions: string[];
}

interface RequirementCategory {
  title: string;
  options: RequirementOption[];
}

// Interface for tooltip position
interface TooltipPosition {
  code: string;
  element: HTMLElement;
}

function App() {
  const [courses, setCourses] = useState<CourseMap>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [hoveredCourse, setHoveredCourse] = useState<TooltipPosition | null>(
    null
  );
  const [completedCourses, setCompletedCourses] = useState<string[]>([])

  // References for tooltip positioning
  const courseButtonsRef = useRef<{ [key: string]: HTMLButtonElement | null }>(
    {}
  );

  // Define the DCS major requirements structure
  const majorRequirements: RequirementCategory[] = [
    {
      title: "Core Requirements",
      options: [
        {
          title: "Introduction to Programming",
          courseOptions: [
            "DCS 109S",
            "DCS 109D",
            "DCS 109R",
            "DCS 109T",
            "DCS 111",
            "DCS 227",
          ],
        },
        {
          title: "Software Development",
          courseOptions: ["DCS 211", "DCS 229"],
        },
      ],
    },
    {
      title: "Core Methods",
      options: [
        {
          title: "Data Science & Analysis",
          courseOptions: [
            "DCS 105",
            "DCS 204",
            "DCS 212",
            "DCS 307",
            "DCS 375",
          ],
        },
        {
          title: "Critical Digital Studies",
          courseOptions: [
            "DCS 105",
            "DCS 106",
            "DCS 204",
            "DCS 206",
            "DCS 212",
            "DCS 301C",
            "DCS 305",
          ],
        },
        {
          title: "Human-Centered Design",
          courseOptions: [
            "DCS 106",
            "DCS 301C",
            "DCS 304",
            "DCS 305",
            "DCS 325",
            "DCS S31",
          ],
        },
        {
          title: "Community-Engaged Learning*",
          courseOptions: [
            "DCS 106",
            "DCS 212",
            "DCS 301C",
            "DCS 304",
            "DCS 325",
          ],
        },
      ],
    },
    {
      title: "Advanced Requirements",
      options: [
        {
          title: "Two 300-level DCS Electives++",
          courseOptions: [
            "DCS 301C",
            "DCS 304",
            "DCS 305",
            "DCS 306",
            "DCS 307",
            "DCS 316",
            "DCS 317",
            "DCS 319",
            "DCS 320",
            "DCS 325",
            "DCS 331",
            "DCS 351",
            "DCS 355A",
            "DCS 355D",
            "DCS 355H",
            "DCS 357",
            "DCS 360",
            "DCS 368",
            "DCS 375",
          ],
        },
        {
          title: "Senior Design Capstone",
          courseOptions: ["DCS 4XX (exact # TBA)", "DCS W3"],
        },
        {
          title: "Additional Electives to reach 10 total courses**",
          courseOptions: [],
        },
      ],
    },
  ];

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const coursesData = await CourseCatalogService.fetchDCSCourses();
      setCourses(coursesData);
    } catch (err) {
      setError("Failed to load course catalog. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle course hover
  const handleCourseHover = (courseCode: string, e: React.MouseEvent) => {
    const shortCode = courseCode.replace("DCS ", "");
    if (courses[shortCode]) {
      // Get the target element for the tooltip positioning
      const target = e.currentTarget as HTMLElement;

      setHoveredCourse({
        code: shortCode,
        element: target,
      });
    }
  };

  // Function to handle course click
  const handleCourseClick = (courseCode: string) => {
    const shortCode = courseCode.replace("DCS ", "");
    if (courses[shortCode]) {
      setSelectedCourse(courses[shortCode]);
    }
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedCourse(null);
  };

  // Function to find the course from the course code
  const getCourse = (courseCode: string) => {
    const shortCode = courseCode.replace("DCS ", "");
    return courses[shortCode] || null;
  };
  
  // Function to toggle course completion status
  const toggleCourseCompletion = (courseCode: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the course modal
    
    setCompletedCourses(prev => {
      // If course is already completed, remove it
      if (prev.includes(courseCode)) {
        return prev.filter(code => code !== courseCode);
      } 
      // Otherwise add it to completed courses
      else {
        return [...prev, courseCode];
      }
    });
  }  // Function to check if a requirement is fulfilled
  const isRequirementFulfilled = (courseOptions: string[], requirementTitle?: string): boolean => {
    // Special case for Two 300-level DCS Electives requirement
    if (requirementTitle === "Two 300-level DCS Electives++") {
      // Extract completed course codes that match the available options or are 300-level
      let completed300LevelCourses: string[] = [];
      
      // First check the explicit course options if provided
      if (courseOptions.length > 0) {
        completed300LevelCourses = courseOptions
          .filter(code => {
            const justCode = code.replace(/DCS\s+/, '').replace(/\{.*\}/, '');
            return completedCourses.includes(`DCS ${justCode}`);
          });
      } else {
        // If no explicit options, look for any 300-level courses in completed courses
        completed300LevelCourses = completedCourses.filter(courseCode => {
          // Extract the numeric part of the course code
          const match = courseCode.match(/DCS (\d+)/);
          if (!match) return false;
          
          const courseNumber = parseInt(match[1], 10);
          // Check if it's a 300-level course (300-399)
          return courseNumber >= 300 && courseNumber < 400;
        });
      }
      
      // Require at least two 300-level courses
      return completed300LevelCourses.length >= 2;
    }
    
    // Special case for "Additional Electives to reach 10 total courses"
    if (requirementTitle === "Additional Electives to reach 10 total courses**") {
      // Count all DCS courses that have been completed
      const totalDCSCoursesCompleted = completedCourses.filter(courseCode => 
        courseCode.startsWith("DCS ")
      ).length;
      
      // Require at least 10 total DCS courses
      return totalDCSCoursesCompleted >= 10;
    }
    
    // For empty options (other electives), we can't determine fulfillment automatically
    if (courseOptions.length === 0) return false;
    
    // Standard check: if at least one course in the options has been completed
    return courseOptions.some(courseCode => {
      const justCode = courseCode.replace(/DCS\s+/, '').replace(/\{.*\}/, '');
      return completedCourses.includes(`DCS ${justCode}`);
    });
  }
  // Function to determine which method categories a course is actively fulfilling
  const getActivelyFulfilledCategories = (): Map<string, string[]> => {
    // This map will store course code -> array of category titles it's actively fulfilling
    const activeFulfillment = new Map<string, string[]>();
    
    // Initial mapping of course to all categories it could fulfill
    const potentialCategoriesPerCourse = new Map<string, string[]>();
    
    // Only check the Core Methods category (index 1)
    const coreMethodsCategory = majorRequirements[1];
    if (!coreMethodsCategory || coreMethodsCategory.title !== "Core Methods") return activeFulfillment;
    
    // First, gather all potential categories each completed course could fulfill
    for (const option of coreMethodsCategory.options) {
      const categoryTitle = option.title;
      
      // Find completed courses for this requirement
      const completedCoursesForThisOption = option.courseOptions
        .filter(code => {
          const justCode = code.replace(/DCS\s+/, '').replace(/\{.*\}/, '');
          return completedCourses.includes(`DCS ${justCode}`);
        })
        .map(code => {
          const justCode = code.replace(/DCS\s+/, '').replace(/\{.*\}/, '');
          return `DCS ${justCode}`;
        });
        
      // Add this category to each course's potential categories
      for (const course of completedCoursesForThisOption) {
        if (!potentialCategoriesPerCourse.has(course)) {
          potentialCategoriesPerCourse.set(course, [categoryTitle]);
        } else {
          potentialCategoriesPerCourse.get(course)?.push(categoryTitle);
        }
      }
    }
    
    // Keep track of which categories have been fulfilled
    const fulfilledCategories = new Set<string>();
    
    // First pass: Assign courses that can only fulfill one category
    for (const [course, categories] of potentialCategoriesPerCourse.entries()) {
      if (categories.length === 1 && !fulfilledCategories.has(categories[0])) {
        activeFulfillment.set(course, [...categories]);
        fulfilledCategories.add(categories[0]);
      }
    }
    
    // Second pass: Assign courses that can fulfill two categories
    for (const [course, categories] of potentialCategoriesPerCourse.entries()) {
      // Skip courses that have already been fully assigned
      if (activeFulfillment.has(course) && 
          activeFulfillment.get(course)?.length === categories.length) continue;
      
      // Find unfulfilled categories this course can fulfill
      const potentialUnfulfilled = categories.filter(cat => !fulfilledCategories.has(cat));
      
      // If there are unfulfilled categories, assign up to 2 of them to this course
      if (potentialUnfulfilled.length > 0) {
        const currentAssigned = activeFulfillment.get(course) || [];
        
        // Determine how many more categories we can assign to this course
        const canAssignCount = Math.min(2 - currentAssigned.length, potentialUnfulfilled.length);
        
        if (canAssignCount > 0) {
          const toAssign = potentialUnfulfilled.slice(0, canAssignCount);
          
          // Update fulfilled categories
          for (const cat of toAssign) {
            fulfilledCategories.add(cat);
          }
          
          // Update course's assigned categories
          activeFulfillment.set(course, [...currentAssigned, ...toAssign]);
        }
      }
    }
    
    // Third pass: If there are still unfulfilled categories, assign them to courses
    // even if it means exceeding 2 categories per course
    const allCoreMethodCategories = coreMethodsCategory.options.map(o => o.title);
    const remainingUnfulfilled = allCoreMethodCategories.filter(cat => !fulfilledCategories.has(cat));
    
    for (const unfulfilled of remainingUnfulfilled) {
      // Find courses that could fulfill this category
      for (const [course, categories] of potentialCategoriesPerCourse.entries()) {
        if (categories.includes(unfulfilled)) {
          const currentAssigned = activeFulfillment.get(course) || [];
          if (!currentAssigned.includes(unfulfilled)) {
            activeFulfillment.set(course, [...currentAssigned, unfulfilled]);
            fulfilledCategories.add(unfulfilled);
            break;
          }
        }
      }
    }
    
    return activeFulfillment;
  }
    // Function to get courses that are being used in too many method categories
  const getCoursesWithTooManyMethods = (): string[] => {
    const activeFulfillment = getActivelyFulfilledCategories();
    const overusedCourses: string[] = [];
    
    for (const [course, categories] of activeFulfillment.entries()) {
      if (categories.length > 2) {
        overusedCourses.push(course);
      }
    }
    
    return overusedCourses;
  }

  function countMethodCategoriesFulfilled(code: string): number {
    const activeFulfillment = getActivelyFulfilledCategories();
    const categories = activeFulfillment.get(code) || [];
    return categories.length;
  }

  // Removed unused refs

  return (
    <div className="min-h-screen bg-gray-100 p-0">      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-4 md:pt-6 mb-8">
          <h1
            className="text-4xl tracking-tight text-left mb-4 md:mb-0"
            style={{
              fontFamily: 'var(--fontSerif, "Sabon Next W01")',
              color: "var(--colorGarnet, hsl(350, 78%, 30%))",
              fontWeight: 500,
            }}
            tabIndex={0}
        >
            DCS Major Requirements
          </h1>
          
          <a 
            href="#complete-catalog" 
            className="self-start md:self-auto bg-[#8C2131] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#A32639] transition-colors duration-200 shadow-md flex items-center gap-2 group"
          >
            <span>Jump to Complete Catalog</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-200"
            >
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading course catalog...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg mb-6 border-t-4 border-[#8C2131]">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="col-span-2 grid grid-cols-2 gap-6">
                <h3
                  className="text-xl font-semibold bg-[#8C2131] text-white px-4 py-2 rounded-md shadow-sm"
                  tabIndex={0}
                  role="heading"
                  aria-level={3}
                >
                  Requirements
                </h3>
                <h3
                  className="text-xl font-semibold bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm"
                  tabIndex={0}
                  role="heading"
                  aria-level={3}
                >
                  Course Options
                </h3>
              </div>

              {/* Grid layout for Requirements and Course Options */}
              <div className="col-span-2">
                {majorRequirements.map((category, catIndex) => (
                  <div key={catIndex} className="mb-12">
                    {/* Category header - minimal version */}
                    <div className="flex items-center mb-3">
                      <div className="text-[#8C2131] border-b border-[#8C2131] text-sm font-medium pb-1 uppercase tracking-wider">
                        {category.title}
                      </div>
                    </div>

                    {/* Requirements and Course Options grid */}
                    <div className="grid grid-cols-2 gap-4">                      {/* Requirements column */}
                      <div className="space-y-4">                        {category.options.map((option, optIndex) => {
                          const fulfilled = isRequirementFulfilled(option.courseOptions, option.title);
                            // Get all completed courses that fulfill this requirement
                          const completedCoursesInThisRequirement = option.courseOptions
                            .filter(code => {
                              const justCode = code.replace(/DCS\s+/, '').replace(/\{.*\}/, '');
                              return completedCourses.includes(`DCS ${justCode}`);
                            })
                            .map(code => {
                              const justCode = code.replace(/DCS\s+/, '').replace(/\{.*\}/, '');
                              return `DCS ${justCode}`;
                            });
                          
                          // Find courses that are being used in too many method categories
                          const overusedCourses = category.title === "Core Methods" ? 
                            completedCoursesInThisRequirement.filter(code => countMethodCategoriesFulfilled(code) > 2)
                            : [];
                            
                          // Get courses from getCoursesWithTooManyMethods() that are also used in this requirement
                          const coursesWithTooManyMethods = getCoursesWithTooManyMethods();
                          
                          // Show warning ONLY if:
                          // 1. We're in the Core Methods category
                          // 2. There are completed courses for this requirement
                          // 3. Any of these courses are still being used in more than 2 method categories total
                          const hasWarning = category.title === "Core Methods" && 
                                          completedCoursesInThisRequirement.some(code => 
                                            coursesWithTooManyMethods.includes(code));
                          
                          return (
                            <div
                            key={optIndex}
                            className="border border-gray-200 rounded-lg h-16"
                            tabIndex={0}
                            role="region"
                            aria-label={`Requirement: ${option.title}`}
                          >
                              <div className={`p-3 font-medium border-l-4 h-full flex items-center justify-between
                                ${fulfilled 
                                  ? 'bg-green-50 border-green-600 text-green-800' 
                                  : 'bg-[#F5EFE8] border-[#8C2131]'
                                }`}
                              >
                                <span>{option.title}</span>
                                <div className="flex items-center">
                                  {fulfilled && (
                                    <span className="text-green-600 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                      </svg>
                                      Fulfilled
                                    </span>
                                  )}
                                    {hasWarning && (
                                    <TooltipProvider delayDuration={0}>
                                      <Tooltip disableHoverableContent>
                                        <TooltipTrigger asChild>
                                          <div className="ml-2 bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full flex items-center text-xs font-semibold cursor-help border border-amber-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1 text-amber-500">
                                              <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                            </svg>
                                            Warning
                                          </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-white border border-amber-300 shadow-lg p-2 max-w-xs">
                                          <div className="space-y-2">
                                            <p className="font-medium text-amber-800">Course Limit Warning</p>
                                            <p className="text-sm">
                                              {overusedCourses.join(", ")} {overusedCourses.length === 1 ? "is" : "are"} being used in more than 2 methods categories.
                                              <br />
                                              <span className="font-semibold">No course can count for more than 2 methods.</span>
                                            </p>
                                          </div>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Course options column */}
                      <div className="space-y-4">
                        {category.options.map((option, optIndex) => (
                          <div
                            key={optIndex}
                            className="border border-gray-200 rounded-lg h-16"
                          >
                            <div className="p-3 bg-white h-full overflow-x-auto overflow-y-hidden">
                              <div className="flex flex-nowrap gap-2 min-w-max">
                                {option.courseOptions.map((courseCode, i) => {
                                  const justCode = courseCode
                                    .replace(/DCS\s+/, "")
                                    .replace(/\{.*\}/, "");
                                  const course = getCourse(`DCS ${justCode}`);
                                  const isAvailable = course !== null;                                  return (
                                    <TooltipProvider key={i} delayDuration={0}>
                                      <Tooltip disableHoverableContent>
                                        <TooltipTrigger asChild>
                                          <div className="relative inline-block group">
                                            <button
                                              ref={(el) => {
                                              courseButtonsRef.current[
                                                `${option.title}-${courseCode}`
                                              ] = el;
                                            }}
                                              className={`px-3 py-1.5 rounded-full text-sm font-medium transition duration-200 ease-in-out course-card pl-7
                                                ${
                                                isAvailable
                                                    ? completedCourses.includes(`DCS ${justCode}`)
                                                    ? 'bg-green-600 text-white hover:bg-green-700 active:scale-95'
                                                    : "bg-[#8C2131] text-white hover:bg-[#A32639] active:scale-95"
                                                    : "bg-gray-300 text-gray-600"
                                                }`}
                                              onClick={() => {
                                                if (isAvailable) {
                                                  handleCourseClick(
                                                  `DCS ${justCode}`
                                                );
                                                }
                                              }}
                                              onKeyDown={(e) => {
                                              if (
                                                e.key === "Enter" ||
                                                e.key === " "
                                              ) {
                                                e.preventDefault();
                                                if (isAvailable) {
                                                  handleCourseClick(
                                                    `DCS ${justCode}`
                                                  );
                                                }
                                              }
                                            }}
                                            tabIndex={0}
                                            aria-label={`Course ${courseCode}${
                                              isAvailable
                                                ? ""
                                                : " (Not Available)"
                                            }`}
                                            role="button"
                                          >
                                              {courseCode}
                                            </button>
                                            {isAvailable && (
                                              <div 
                                                className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                                onClick={(e) => toggleCourseCompletion(`DCS ${justCode}`, e)}
                                              >
                                                <div className={`w-4 h-4 border rounded flex items-center justify-center transition-colors duration-150
                                                  ${completedCourses.includes(`DCS ${justCode}`) 
                                                  ? 'bg-white border-white' 
                                                  : 'bg-transparent border-white hover:bg-white/30'}`}
                                                >
                                                  {completedCourses.includes(`DCS ${justCode}`) ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-green-600">
                                                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                                    </svg>
                                                  ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white opacity-0 hover:opacity-60">
                                                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                                    </svg>
                                                  )}
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        </TooltipTrigger>
                                        {isAvailable && (
                                          <TooltipContent className="bg-white border border-gray-200 shadow-lg p-2 max-w-xs">
                                            <div className="space-y-2">
                                              <p className="font-medium">
                                                {course.fullTitle}
                                              </p>
                                              {course.prerequisites && (
                                                <p className="text-sm">
                                                  <span className="font-semibold">
                                                    Prerequisites:
                                                  </span>{" "}
                                                  {course.prerequisites}
                                                </p>
                                              )}
                                            </div>
                                          </TooltipContent>
                                        )}
                                      </Tooltip>
                                    </TooltipProvider>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footnotes - Full width */}
        <div className="col-span-2 mt-4">
          <div className="text-sm text-gray-700 space-y-2 bg-[#F5EFE8] p-4 rounded-lg border-l-4 border-[#8C2131]">
            <p>
              +For core methods courses, no course can count for more than 2
              methods.
            </p>
            <p>
              *An approved CEL-tagged course outside DCS can be substituted with
              permission.
            </p>
            <p>
              ++Core methods courses may be used to complete this requirement.
            </p>
            <p>
              **Up to two Short Term courses (s20 or higher) can count towards
              the major, up to one elective may be a non-DCS Bates course with
              permission, and up to three electives may be taken external to
              Bates (e.g., study abroad, Roux) with prior approval.
            </p>
            <p>
              In addition to these requirements, all Bates graduates are
              required to complete the general education requirements for the
              catalog in which they have graduated.
            </p>
          </div>
        </div>        {/* Course catalog list */}
        {!loading && !error && (
          <div id="complete-catalog" className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#8C2131] scroll-mt-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <h2 className="text-2xl font-semibold text-[#8C2131]">
                Complete Course Catalog
              </h2>
              
              <a 
                href="#top" 
                className="self-start md:self-auto bg-[#8C2131] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#A32639] transition-colors duration-200 shadow-md flex items-center gap-2 group"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200"
                >
                  <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                </svg>
                <span>Back to Worksheet</span>
              </a>
            </div>
            
            <div className="border-b border-[#8C2131] w-full mb-4"></div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {Object.values(courses).map((course: Course) => (
                <TooltipProvider key={course.code} delayDuration={0}>
                  <Tooltip disableHoverableContent>
                    <TooltipTrigger asChild>
                      <div
                        key={course.code}
                        className={`p-4 rounded-lg shadow-sm cursor-pointer course-card border-l-2 relative
                          ${completedCourses.includes(course.code)
                            ? 'bg-green-50 border-green-600'
                            : 'bg-[#F9F5F1] border-[#8C2131]'
                          }`}
                        onClick={() => setSelectedCourse(course)}
                        onMouseEnter={(e) => handleCourseHover(course.code, e)}
                        onMouseLeave={() => setHoveredCourse(null)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSelectedCourse(course);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`Course ${course.code}: ${course.fullTitle}`}
                      >                        <div 
                          className="absolute top-2 left-2 w-4 h-4 border rounded cursor-pointer flex items-center justify-center transition-colors duration-150 hover:bg-white/20"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCourseCompletion(course.code, e);
                          }}
                        >
                          {completedCourses.includes(course.code) ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-600">
                              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white opacity-0 hover:opacity-60">
                              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <div className="text-center mt-2">
                          <h3 className={`text-lg font-semibold mb-1
                            ${completedCourses.includes(course.code) ? 'text-green-700' : 'text-[#8C2131]'}`}
                          >
                            {course.code}
                          </h3>
                          <p className="text-sm line-clamp-2 overflow-hidden">
                          {course.fullTitle}
                        </p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white border border-gray-200 shadow-lg p-2 max-w-xs">
                      <div className="space-y-2">
                        <p className="font-medium">{course.fullTitle}</p>
                        {course.description && (
                          <p className="text-sm">{course.description}</p>
                        )}
                        {course.prerequisites && (
                          <p className="text-sm mt-1">
                            <span className="font-semibold">
                              Prerequisites:
                            </span>{" "}
                            {course.prerequisites}
                          </p>
                        )}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        )}

        {/* Course hover tooltip using shadcn UI Tooltip component */}
        <TooltipProvider delayDuration={0}>
          {hoveredCourse && courses[hoveredCourse.code] && (
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="absolute opacity-0"
                  style={{ pointerEvents: "none" }}
                >
                  Trigger
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                align="center"
                className="bg-white p-3 rounded-md shadow-lg z-50 w-64 border border-[#8C2131]"
                style={{
                  position: "absolute",
                  left:
                    hoveredCourse.element.getBoundingClientRect().left +
                    window.scrollX,
                  top:
                    hoveredCourse.element.getBoundingClientRect().top +
                    window.scrollY -
                    10,
                  transform: "translateY(-100%)",
                  pointerEvents: "none",
                }}
              >
                <h3 className="font-semibold text-[#8C2131]">
                  {courses[hoveredCourse.code].code}:{" "}
                  {courses[hoveredCourse.code].fullTitle}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">Prerequisites:</span>{" "}
                  {courses[hoveredCourse.code].prerequisites}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </TooltipProvider>

        {/* Course detail modal using shadcn UI Dialog component */}
        <Dialog
          open={selectedCourse !== null}
          onOpenChange={(isOpen) => !isOpen && setSelectedCourse(null)}
        >
          <DialogContent className="sm:max-w-[600px] border-0 p-0 overflow-hidden rounded-lg shadow-xl gap-0">
            {selectedCourse && (
              <>
                <DialogHeader className="bg-[#8C2131] text-white px-6 py-5 pb-5 mb-0">
                  <DialogTitle className="text-xl font-bold tracking-tight">
                    {selectedCourse.code}: {selectedCourse.fullTitle}
                  </DialogTitle>
                </DialogHeader>
                <div className="px-6 py-5 bg-white mt-0 mb-0">
                  <DialogDescription className="text-gray-800 mb-5 text-base leading-relaxed border-l-4 border-[#8C2131] pl-4 py-2 bg-[#F9F5F1]">
                    {selectedCourse.description || "No description available."}
                  </DialogDescription>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-gray-800">
                    {/* Left column for primary information */}
                    <div className="space-y-3">
                      {selectedCourse.credits && (
                        <p className="flex items-start">
                          <span className="font-semibold text-[#8C2131] w-28 flex-shrink-0">
                            Credits:
                          </span>
                          <span>{selectedCourse.credits}</span>
                        </p>
                      )}
                      {selectedCourse.prerequisites && (
                        <p className="flex items-start">
                          <span className="font-semibold text-[#8C2131] w-28 flex-shrink-0">
                            Prerequisites:
                          </span>
                          <span>{selectedCourse.prerequisites}</span>
                        </p>
                      )}
                      {selectedCourse.Instructor && (
                        <p className="flex items-start">
                          <span className="font-semibold text-[#8C2131] w-28 flex-shrink-0">
                            Instructor:
                          </span>
                          <span>{selectedCourse.Instructor}</span>
                        </p>
                      )}
                      {selectedCourse.modesofInquiry &&
                        selectedCourse.modesofInquiry !== "None" && (
                          <p className="flex items-start">
                            <span className="font-semibold text-[#8C2131] w-28 flex-shrink-0">
                              Modes of Inquiry:
                            </span>
                            <span>{selectedCourse.modesofInquiry}</span>
                          </p>
                        )}
                      {selectedCourse.writingCredit &&
                        selectedCourse.writingCredit !== "None" && (
                          <p className="flex items-start">
                            <span className="font-semibold text-[#8C2131] w-28 flex-shrink-0">
                              Writing Credit:
                            </span>
                            <span>{selectedCourse.writingCredit}</span>
                          </p>
                        )}
                    </div>

                    {/* Right column for secondary information */}
                    <div className="space-y-3">
                      {selectedCourse.GEC && selectedCourse.GEC !== "None" && (
                        <p className="flex items-start">
                          <span className="font-semibold text-[#8C2131] w-32 flex-shrink-0">
                            GEC:
                          </span>
                          <span>{selectedCourse.GEC}</span>
                        </p>
                      )}
                      {selectedCourse.departmentAttribute &&
                        selectedCourse.departmentAttribute !== "None" && (
                          <p className="flex items-start">
                            <span className="font-semibold text-[#8C2131] w-32 flex-shrink-0">
                              Dept. Attribute:
                            </span>
                            <span>{selectedCourse.departmentAttribute}</span>
                          </p>
                        )}
                      {selectedCourse.classRestriction &&
                        selectedCourse.classRestriction !== "None" && (
                          <p className="flex items-start">
                            <span className="font-semibold text-[#8C2131] w-32 flex-shrink-0">
                              Class Restriction:
                            </span>
                            <span>{selectedCourse.classRestriction}</span>
                          </p>
                        )}
                      {selectedCourse.instructorPermissionRequired && (
                        <p className="flex items-start">
                          <span className="font-semibold text-[#8C2131] w-32 flex-shrink-0">
                            Permission Req'd:
                          </span>
                          <span>
                            {selectedCourse.instructorPermissionRequired}
                          </span>
                        </p>
                      )}
                      {selectedCourse.offered && (
                        <p className="flex items-start">
                          <span className="font-semibold text-[#8C2131] w-32 flex-shrink-0">
                            Offered:
                          </span>
                          <span>{selectedCourse.offered}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Full width for crosslisted courses */}
                  <div className="mt-4">
                    {selectedCourse.crosslisted &&
                      selectedCourse.crosslisted.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="flex items-start">
                            <span className="font-semibold text-[#8C2131] mr-2">
                              Cross-listed as:
                            </span>
                            <span>{selectedCourse.crosslisted.join(", ")}</span>
                          </p>
                        </div>
                      )}
                    {selectedCourse.lastUpdated && (
                      <p className="text-gray-500 text-xs mt-4 mb-0">
                        Last updated:{" "}
                        {new Date(
                          selectedCourse.lastUpdated
                        ).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
                <DialogFooter className="bg-[#F5EFE8] px-6 py-4 border-t border-gray-200 mt-0">
                  <button
                    className="bg-[#8C2131] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#A32639] transition-colors duration-200 shadow-sm"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
