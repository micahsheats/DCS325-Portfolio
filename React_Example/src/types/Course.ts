export interface Course {
    code: string;
    fullTitle: string;
    prerequisites: string;
    modesofInquiry: string;
    writingCredit: string;
    GEC: string;
    Instructor: string;
    departmentAttribute: string;
    classRestriction: string;
    instructorPermissionRequired: string;
    description?: string;
    credits?: string;
    crosslisted?: string[];
    shortTitle?: string;
    offered?: string;
    lastUpdated?: number; // timestamp when the course was last updated
}

export interface CourseMap {
    [courseCode: string]: Course;
}
