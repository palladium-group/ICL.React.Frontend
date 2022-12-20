import {
  BookOpen,
  Briefcase,
  Calendar,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  ShoppingCart,
  PieChart,
  Sliders,
  Users,
  Server,
} from "react-feather";

const pagesSection = [
  {
    href: "/dashboard",
    icon: Sliders,
    title: "Data Warehouse",
    children: [
      {
        href: "/dashboard/default",
        title: "Shipment",
      },
      {
        href: "/dashboard/analytics",
        title: "Distribution Planning",
      },
      {
        href: "/dashboard/analytics",
        title: "Order Fulfilment",
      },
      // {
      //   href: "/dashboard/saas",
      //   title: "SaaS",
      // },
    ],
  },
];

const transportationPlanning = [
  {
    href: "/transportation",
    icon: Briefcase,
    title: "Transportation Planning",
    children: [
      {
        href: "/dashboard/default",
        title: "Vendor Selection & Management"
      },
      {
        href: "/dashboard/default",
        title: "Freight"
      },
    ],
  },
];

const deliveryStatus = [
  {
    href: "/dashboard",
    icon: Grid,
    title: "Delivery Status",
    children: [
      {
        href: "/dashboard/default",
        title: "Track & Trace"
      },
    ],
  },
];

const inventoryAnalysisAndPlanning = [
  {
    href: "/inventory",
    icon: Calendar,
    title: "Inventory Analysis And Planning",
    children: [
      {
        href: "/dashboard/default",
        title: "Visibility"
      },
      {
        href: "/dashboard/default",
        title: "Reports"
      },
    ],
  },
];

const controlTower = [
  {
    href: "/control-tower",
    icon: Server,
    title: "Control Tower",
  }
];


const navItems = [
  {
    title: "Data Warehouse",
    pages: pagesSection,
  },
  {
    title: "Transportation And Planning",
    pages: transportationPlanning,
  },
  {
    title: "Delivery Status",
    pages: deliveryStatus,
  },
  {
    title: "Inventory Analysis and Planning",
    pages: inventoryAnalysisAndPlanning,
  },
  {
    title: "Control Tower",
    pages: controlTower,
  },
];

export default navItems;
