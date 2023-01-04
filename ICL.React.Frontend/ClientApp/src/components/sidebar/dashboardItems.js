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
  Home,
  Move,
} from "react-feather";

const clearingSection = [
  {
    href: "",
    icon: Move,
    title: "Clearing",
    children: [
      {
        title: "Shipment",
        href: "/control-tower",
      },
      {
        title: "Pos/ASN",
        href: "/shipment/pos",
      }
    ],
  },
];

const pagesSection = [
  {
    href: "/dashboard",
    icon: Sliders,
    title: "Warehouse",
    children: [
      {
        href: "/dashboard/inbound",
        title: "Inbound",
      },
      {
        href: "/dashboard/outbound",
        title: "Outbound",
      },
      {
        href: "/dashboard/monitoring",
        title: "Monitoring",
      },
    ],
  },
];

const transportationPlanning = [
  {
    href: "/transportation",
    icon: Briefcase,
    title: "Transportation And Planning",
    children: [
      {
        href: "/dashboard/costing",
        title: "Costing",
      },
      {
        href: "/dashboard/tendering-contracting",
        title: "Tendering Contracting",
      },
    ],
  },
];

const deliveryStatus = [
  {
    href: "/dashboard",
    icon: Grid,
    title: "Delivery",
    children: [
      {
        href: "/dashboard/ePOD",
        title: "ePOD"
      },
      {
        href: "",
        title: "Returns",
      }
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
        href: "/dashboard/",
        title: "Consumption Prediction"
      },
      {
        href: "/dashboard/",
        title: "Allocation Prediction"
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
    title: "",
    pages: [
      {
        title: "Home",
        href: "/",
        icon: Home,
      }
    ],
  },
  {
    title: "Clearing",
    pages: clearingSection,
  },
  {
    title: "Warehouse",
    pages: pagesSection,
  },
  {
    title: "Transportation And Planning",
    pages: transportationPlanning,
  },
  {
    title: "Delivery",
    pages: deliveryStatus,
  },
  {
    title: "Inventory Analysis and Planning",
    pages: inventoryAnalysisAndPlanning,
  },
  // {
  //   title: "Control Tower",
  //   pages: controlTower,
  // },
];

export default navItems;
