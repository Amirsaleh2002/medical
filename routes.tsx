import ArticleInfoPage from "./src/Pages/ArticleInfoPage";
import Articles from "./src/Pages/Articles";
import DoctorInfoPage from "./src/Pages/DoctorInfoPage";
import DoctorsList from "./src/Pages/DoctorsList";
import DrugInfoPage from "./src/Pages/DrugInfoPage";
import DrugStore from "./src/Pages/DrugStore";
import HomePage from "./src/Pages/HomePage";
import LoginRegister from "./src/Pages/LoginRegister";
import NewDoctor from "./src/Pages/NewDoctor";
import NewParient from "./src/Pages/NewParient";
import TurnRating from "./src/Pages/TurnRating";

let allRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/doctor", element: <DoctorsList /> },
  { path: "/doctor/:id", element: <DoctorInfoPage /> },
  { path: "/doctor/newdoctor", element: <NewDoctor /> },
  { path: "/article", element: <Articles /> },
  { path: "/article/:id", element: <ArticleInfoPage /> },
  { path: "/login-register", element: <LoginRegister /> },
  { path: "/turn-rating", element: <TurnRating /> },
  { path: "/turn-rating/newpatient", element: <NewParient /> },
  { path: "/drug-store", element: <DrugStore /> },
  { path: "/drug-store/:id", element: <DrugInfoPage /> },

];

export default allRoutes;
