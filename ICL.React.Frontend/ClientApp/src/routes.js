import React from "react";

import async from "./components/Async";

// All pages that rely on 3rd party components (other than MUI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";

// Guards
import AuthGuard from "./components/guards/AuthGuard";

// Auth components
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";
import Page404 from "./pages/auth/Page404";
import Page500 from "./pages/auth/Page500";

// Dashboard components
const Default = async(() => import("./pages/dashboards/Default"));
const Analytics = async(() => import("./pages/dashboards/Analytics"));
const SaaS = async(() => import("./pages/dashboards/SaaS"));
const Home = async(() => import("./pages/home"));
const ControlTower = async (() => import("./pages/control-tower"));
const HomeAnalytics = async(() => import("./pages/analytics/HomeAnalytics"));
const Inbound = async(() => import("./pages/dashboards/dwh/Inbound"));
const Outbound = async(() => import("./pages/dashboards/dwh/Outbound"));
const Monitoring = async(() => import("./pages/dashboards/dwh/Monitoring"));
const Costing = async(() => import("./pages/dashboards/dwh/Costing"));
const TenderingAndContracting = async(() => import("./pages/dashboards/dwh/TenderingAndContracting"));

const routes = [
  {
    path: "/",
    element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      }
    ]
  },
  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "inbound",
        element: <Inbound />,
      },
      {
        path: "outbound",
        element: <Outbound />,
      },
      {
        path: "monitoring",
        element: <Monitoring />,
      },
      {
        path: "costing",
        element: <Costing />,
      },
      {
        path: "tendering-contracting",
        element: <TenderingAndContracting />,
      },
      {
        path: "ePOD",
        element: <Default />,
      },
    ],
  },
  {
    path: "control-tower",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <ControlTower />,
      },
    ],
  },
  // {
  //   path: "pages",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "profile",
  //       element: <Profile />,
  //     },
  //     {
  //       path: "settings",
  //       element: <Settings />,
  //     },
  //     {
  //       path: "pricing",
  //       element: <Pricing />,
  //     },
  //     {
  //       path: "chat",
  //       element: <Chat />,
  //     },
  //     {
  //       path: "blank",
  //       element: <Blank />,
  //     },
  //   ],
  // },
  // {
  //   path: "projects",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Projects />,
  //     },
  //   ],
  // },
  // {
  //   path: "invoices",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <InvoiceList />,
  //     },
  //     {
  //       path: "detail",
  //       element: <InvoiceDetails />,
  //     },
  //   ],
  // },
  // {
  //   path: "orders",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Orders />,
  //     },
  //   ],
  // },
  // {
  //   path: "tasks",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Tasks />,
  //     },
  //   ],
  // },
  // {
  //   path: "calendar",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Calendar />,
  //     },
  //   ],
  // },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  // {
  //   path: "components",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "accordion",
  //       element: <Accordion />,
  //     },
  //     {
  //       path: "alerts",
  //       element: <Alerts />,
  //     },
  //     {
  //       path: "avatars",
  //       element: <Avatars />,
  //     },
  //     {
  //       path: "badges",
  //       element: <Badges />,
  //     },
  //     {
  //       path: "buttons",
  //       element: <Buttons />,
  //     },
  //     {
  //       path: "cards",
  //       element: <Cards />,
  //     },
  //     {
  //       path: "chips",
  //       element: <Chips />,
  //     },
  //     {
  //       path: "dialogs",
  //       element: <Dialogs />,
  //     },
  //     {
  //       path: "lists",
  //       element: <Lists />,
  //     },
  //     {
  //       path: "menus",
  //       element: <Menus />,
  //     },
  //     {
  //       path: "pagination",
  //       element: <Pagination />,
  //     },
  //     {
  //       path: "progress",
  //       element: <Progress />,
  //     },
  //     {
  //       path: "snackbars",
  //       element: <Snackbars />,
  //     },
  //     {
  //       path: "tooltips",
  //       element: <Tooltips />,
  //     },
  //   ],
  // },
  // {
  //   path: "forms",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "pickers",
  //       element: <Pickers />,
  //     },
  //     {
  //       path: "selection-controls",
  //       element: <SelectionCtrls />,
  //     },
  //     {
  //       path: "selects",
  //       element: <Selects />,
  //     },
  //     {
  //       path: "text-fields",
  //       element: <TextFields />,
  //     },
  //     {
  //       path: "editors",
  //       element: <Editors />,
  //     },
  //     {
  //       path: "formik",
  //       element: <Formik />,
  //     },
  //   ],
  // },
  // {
  //   path: "tables",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "simple-table",
  //       element: <SimpleTable />,
  //     },
  //     {
  //       path: "advanced-table",
  //       element: <AdvancedTable />,
  //     },
  //     {
  //       path: "data-grid",
  //       element: <DataGrid />,
  //     },
  //   ],
  // },
  // {
  //   path: "icons",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "material-icons",
  //       element: <MaterialIcons />,
  //     },
  //     {
  //       path: "feather-icons",
  //       element: <FeatherIcons />,
  //     },
  //   ],
  // },
  // {
  //   path: "charts",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "chartjs",
  //       element: <Chartjs />,
  //     },
  //     {
  //       path: "apexcharts",
  //       element: <ApexCharts />,
  //     },
  //   ],
  // },
  // {
  //   path: "maps",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "google-maps",
  //       element: <GoogleMaps />,
  //     },
  //     {
  //       path: "vector-maps",
  //       element: <VectorMaps />,
  //     },
  //   ],
  // },
  // {
  //   path: "documentation",
  //   element: <DocLayout />,
  //   children: [
  //     {
  //       path: "welcome",
  //       element: <Welcome />,
  //     },
  //     {
  //       path: "getting-started",
  //       element: <GettingStarted />,
  //     },
  //     {
  //       path: "routing",
  //       element: <Routing />,
  //     },
  //     {
  //       path: "auth/auth0",
  //       element: <Auth0 />,
  //     },
  //     {
  //       path: "auth/cognito",
  //       element: <Cognito />,
  //     },
  //     {
  //       path: "auth/firebase",
  //       element: <Firebase />,
  //     },
  //     {
  //       path: "auth/jwt",
  //       element: <JWT />,
  //     },
  //     {
  //       path: "guards",
  //       element: <Guards />,
  //     },
  //     {
  //       path: "environment-variables",
  //       element: <EnvironmentVariables />,
  //     },
  //     {
  //       path: "deployment",
  //       element: <Deployment />,
  //     },
  //     {
  //       path: "theming",
  //       element: <Theming />,
  //     },
  //     {
  //       path: "api-calls",
  //       element: <APICalls />,
  //     },
  //     {
  //       path: "redux",
  //       element: <Redux />,
  //     },
  //     {
  //       path: "internationalization",
  //       element: <Internationalization />,
  //     },
  //     {
  //       path: "eslint-and-prettier",
  //       element: <ESLintAndPrettier />,
  //     },
  //     {
  //       path: "support",
  //       element: <Support />,
  //     },
  //   ],
  // },
  // {
  //   path: "changelog",
  //   element: <DocLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Changelog />,
  //     },
  //   ],
  // },
  // {
  //   path: "private",
  //   element: (
  //     <AuthGuard>
  //       <DashboardLayout />
  //     </AuthGuard>
  //   ),
  //   children: [
  //     {
  //       path: "",
  //       element: <ProtectedPage />,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
