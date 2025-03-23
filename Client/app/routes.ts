import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/Layout.tsx", [
    index("routes/home.tsx"),
    route("/jobs/:id", "routes/job.tsx"),
  ]),
] satisfies RouteConfig;
