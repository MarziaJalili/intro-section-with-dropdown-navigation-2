import { useLayoutEffect } from "react";
import Features from "./Features";
import Company from "./Company";

const navbarData = [
  {
    id: 1,
    name: "Features",
    button: true,
    details: <Features />,
    detailsShown: false
  },
  {
    id: 2,
    name: "Company",
    button: true,
    details: <Company />,
    detailsShown: false
  },
  {
    id: 3,
    name: "Careers",
  },
  {
    id: 4,
    name: "About",
  }
];


export default navbarData;