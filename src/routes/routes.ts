import { lazy, LazyExoticComponent } from "react";
import LazyPage from "../01-lazyload/pages/LazyPage";
import LazyPage2 from "../01-lazyload/pages/LazyPage2";
import LazyPage3 from "../01-lazyload/pages/LazyPage3";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<() => JSX.Element>;
  name: string;
}

const Lazy1 = lazy(
  () => import(/*webpackChunkName: "Lazy1"*/ "../01-lazyload/pages/LazyPage")
);
const Lazy2 = lazy(
  () => import(/*webpackChunkName: "Lazy2"*/ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () => import(/*webpackChunkName: "Lazy3"*/ "../01-lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: LazyPage,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: LazyPage3,
    name: "Lazy-3",
  },
];
