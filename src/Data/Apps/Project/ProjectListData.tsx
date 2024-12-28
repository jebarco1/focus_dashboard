import { ProjectInitialValue } from "../../../Type/Apps/Ecommerce/ProductListType";
import { ProjectListData } from "../../../Types/Apps/ProjectList/ProjectListTypes";
import * as Yup from "yup";

export const projectData:ProjectListData[] =  [
    {
        id: 1,
        title: "Endless admin Design",
        badge: "Doing",
        img: "user/3.jpg",
        sites: "Themeforest, australia",
        desc: "Endless Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "12",
        resolved: "5",
        comment: "7",
        like: "10",
        progress: "70",
        customers_img1: "user/3.jpg",
        customers_img2: "user/5.jpg",
        customers_img3: "user/1.jpg"
    },
    {
        id: 2,
        title: "Universal admin Design",
        badge: "Done",
        img: "user/3.jpg",
        sites: "Themeforest, australia",
        desc: "Universal Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "24",
        resolved: "24",
        comment: "40",
        like: "3",
        progress: "100",
        customers_img1: "user/3.jpg",
        customers_img2: "user/5.jpg",
        customers_img3: "user/1.jpg"
    },
    {
        id: 3,
        title: "Poco admin Design",
        badge: "Done",
        img: "user/3.jpg",
        sites: "Themeforest, australia",
        desc: "Poco Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "40",
        resolved: "40",
        comment: "20",
        like: "2",
        progress: "100",
        customers_img1: "user/3.jpg",
        customers_img2: "user/5.jpg",
        customers_img3: "user/1.jpg"
    },
    {
        id: 4,
        title: "Universal admin Design",
        badge: "Done",
        img: "user/3.jpg",
        sites: "Themeforest, australia",
        desc: "Universal Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "24",
        resolved: "24",
        comment: "40",
        like: "3",
        progress: "100",
        customers_img1: "user/3.jpg",
        customers_img2: "user/5.jpg",
        customers_img3: "user/1.jpg"
    },
    {
        id: 5,
        title: "Endless admin Design",
        badge: "Doing",
        img: "user/3.jpg",
        sites: "Themeforest, australia",
        desc: "Endless Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "12",
        resolved: "5",
        comment: "7",
        like: "10",
        progress: "70",
        customers_img1: "user/3.jpg",
        customers_img2: "user/5.jpg",
        customers_img3: "user/1.jpg"
    },
    {
        id: 6,
        title: "Poco admin Design",
        badge: "Done",
        img: "user/3.jpg",
        sites: "Themeforest, australia",
        desc: "Poco Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "40",
        resolved: "40",
        comment: "20",
        like: "2",
        progress: "100",
        customers_img1: "user/3.jpg",
        customers_img2: "user/5.jpg",
        customers_img3: "user/1.jpg"
    }
]

export const PROJECT_INITIALVALUE: ProjectInitialValue = {
    title: "",
    client: "",
    progress: 0,
    type: "",
    priority: "",
    size: "",
    description: "",
  };
  
  export const PROJECT_VALIDATION = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    client: Yup.string().required("Client Name is required"),
    description: Yup.string().required("Some Details is required"),
    progress: Yup.number().required("Between 0 to 100").max(100),
  });