import { lazy } from "solid-js";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("./core/layout")),
    children: [
      {
        path: "/",
      },
      {
        path: "/customers",
        component: lazy(
          () => import("./features/customers/pages/listCustomers")
        ),
      },
    ],
  },
];
