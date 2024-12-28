import { Accounting, AllCourses, BackendDevelopment, BusinessAnalyst, Completed, Design, Development, FreeCourses, FrontendDevelopment, InterfaceDesign, Management, PaidCourses, Progress, Registration, UIDesign, UXDesign, UXDevelopment, UserExperience, WebDevelopment } from "../../utils/Constant";

export const mainLearningCardsData = [
    {
      learningCardBy: "Paige Turner",
      dateSpan: "05",
      date: "January 2023",
      hits: 15,
      language: "Java Language",
    },
    {
      learningCardBy: "Petey Cruiser",
      dateSpan: "10",
      date: "March 2023",
      hits: 36,
      language: "Web Development",
    },
  ];

export const imagePath = [
    {
        img:3,
        detail:"This course is designed to start you on a path toward future studies in web development and design."
    },
    {
        img:1,
        detail:"A Web Designing course belongs to the field of Computer Science and IT. It enables students to learn"
    },
    {
        img:4,
        detail:"User interface design (UI) is the design for machines and software, such as mobile devices, computers."
    },
    {
        img:2,
        detail:"Spoken English Courses are pursued by candidates from all levels to improve their communication skills."
    },
    {
        img:4,
        detail:"This course is designed to start you on a path toward future studies in web development and design."
    },
    {
        img:3,
        detail:"A Web Development course belongs to the field of Computer Science and IT. It enables students to learn"
    }];

export const categoriesCheckBoxData = [
    Accounting,
    Design,
    Development,
    Management,
];

export const durationCheckBoxData = [
    "0-50 hours",
    "50-100 hours",
    "100+ hours",
  ];

  export const priceCheckBoxData = [AllCourses, PaidCourses, FreeCourses];

  export const statusCheckBoxData = [Registration, Progress, Completed];

  export const designCategoriesData = [
    { learningHeading: UIDesign, badgeNumber: 28 },
    { learningHeading: UXDesign, badgeNumber: 35 },
    { learningHeading: InterfaceDesign, badgeNumber: 17 },
    { learningHeading: UserExperience, badgeNumber: 26 },
  ];

  export const developmentCategoriesData = [
    { DevelopmentHeading: FrontendDevelopment, badgeNumber: 48 },
    { DevelopmentHeading: BackendDevelopment, badgeNumber: 19 },
  ];

  export const upcomingCoursesData = [
    { courseHeading: UXDevelopment, courseDate: 18, courseMonth: "Dec", courseTeam: "Development Team" },
    { courseHeading: BusinessAnalyst, courseDate: 28, courseMonth: "Dec", courseTeam: "Analyst Team" },
    { courseHeading: WebDevelopment, courseDate: 5, courseMonth: "Jan", courseTeam: "Designer" },
  ];