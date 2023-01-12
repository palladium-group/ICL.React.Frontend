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
import home from '@iconify/icons-dashicons/admin-home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

const manageSection = [
  {
    href: "/manage",
    icon: TrendingUpOutlinedIcon,
    title: "Manage",
  },
];
const planSection = [
  {
    href: "/plan",
    icon: CalendarMonthOutlinedIcon,
    title: "Plan",
  }
];
const sourceSection = [
  {
    title: "Source",
    href: "",
    icon: ShoppingCartCheckoutOutlinedIcon,
    children: [
      {
        title: "Market Conditions",
        href: "",
        children: [
          {
            title: "Primary and Secondary Data",
            href: "",
          },
          {
            title: "Market Research",
            href: "",
          },
        ],
      },
      {
        title: "Logistics Category Profiles",
        href: "",
        children: [
          {
            title: "Customs Clearance",
            href: ""
          },
          {
            title: "Storage",
            href: ""
          },
          {
            title: "Delivery",
            href: ""
          },
          {
            title: "Product Master List",
            href: ""
          },
          {
            title: "Network Design",
            href: ""
          },
        ],
      },
      {
        title: "Procurement",
        href: "",
        children: [
          {
            title: "Vendor Registry",
            href: "",
          },
          {
            title: "Underqualified Bidder Action Plans",
            href: "",
          },
          {
            title: "Request for Proposals (Annual)",
            href: "",
          },
          {
            title: "Request for Proposals (Spot Market)",
            href: "",
          },
          {
            title: "Service Level Agreements",
            href: "",
          },
          {
            title: "Purchase Orders",
            href: "",
          },
        ],
      },
    ],
  },
];
const storeSection = [
  {
    href: "",
    title: "Store",
    icon: WarehouseOutlinedIcon,
    children: [
      {
        title: "Inventory Monitoring",
        href: "",
        children: [
          {
            title: "Per Location",
            href: "",
          }
        ],
      },
      {
        title: "Temperature Monitoring",
        href: "",
        children: [
          {
            title: "Per Location",
            href: "",
          }
        ],
      },
      {
        title: "Insurance",
        href: "",
        children: [
          {
            title: "Per Location",
            href: "",
          }
        ],
      },
      {
        title: "3PL Performance",
        href: "",
        children: [
          {
            title: "Vendor Scorecard",
            href: "",
          },
          {
            title: "Corrective Action Reports",
            href: "",
          },
        ],
      },
    ],
  }
];
const deliverSection = [
  {
    title: "Deliver",
    href: "",
    icon: LocalShippingOutlinedIcon,
    children: [
      {
        title: "Commodity Tracking",
        href: "",
      },
      {
        title: "Temperature Monitoring",
        href: "",
      },
      {
        title: "Proof of Delivery",
        href: "",
      },
      {
        title: "3PL Performance",
        href: "",
        children: [
          {
            title: "Vendor Scorecard",
            href: "",
          }
        ]
      },
    ],
  },
];
const enableSection = [
  {
    title: "Enable",
    href: "",
    icon: CheckBoxOutlinedIcon,
    children: [
      {
        title: "Digital Twins",
        href: "",
      },
      {
        title: "Chain of Custody",
        href: "",
      },
      {
        title: "Green House Gas Monitoring",
        href: "",
      },
      {
        title: "Risk Management",
        href: "",
      },
      {
        title: "Automated Reports",
        href: "",
      },
      {
        title: "Custom Reports",
        href: "",
      },
    ],
  }
];
const MISAdministrationSection = [
  {
    title: "MIS Administration",
    href: "",
    icon: ManageAccountsOutlinedIcon,
    children: [
      {
        title: "Interoperability",
        href: "",
        children: [
          {
            title: "Middleware status",
            href: "",
          },
        ],
      },
      {
        title: "Data Management",
        href: "",
        children: [
          {
            title: "Data warehouse",
            href: "",
          },
          {
            title: "Data lake",
            href: "",
          },
          {
            title: "Data Marts",
            href: "",
          },
          {
            title: "Logic Apps",
            href: "",
          },
          {
            title: "Queues, Subscriptions, and Events",
            href: "",
          },
        ]
      },
      {
        title: "User Management",
        href: "",
        children: [
          {
            title: "User Registry",
            href: "",
          },
          {
            title: "Assign New User",
            href: "",
          },
          {
            title: "Remove User",
            href: "",
          },
        ],
      },
      {
        title: "Information Security",
        href: "",
        children: [
          {
            title: "Policy",
            href: "",
          },
        ],
      },
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
      {
        href: "/dashboard/transportation-distribution",
        title: "Transportation And Distribution",
      },
      {
        href: "/dashboard/chain-of-custody",
        title: "Chain of Custody",
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
        icon: HomeOutlinedIcon,
      }
    ],
  },
  {
    title: "",
    pages: manageSection,
  },
  {
    title: "",
    pages: planSection,
  },
  {
    title: "",
    pages: sourceSection,
  },
  {
    title: "",
    pages: storeSection,
  },
  {
    title: "",
    pages: deliverSection,
  },
  {
    title: "",
    pages: enableSection,
  },
  {
    title: "",
    pages: MISAdministrationSection,
  },
  // {
  //   title: "",
  //   pages: pagesSection,
  // },
  // {
  //   title: "Transportation And Planning",
  //   pages: transportationPlanning,
  // },
  // {
  //   title: "Delivery",
  //   pages: deliveryStatus,
  // },
  // {
  //   title: "Inventory Analysis and Planning",
  //   pages: inventoryAnalysisAndPlanning,
  // },
  // {
  //   title: "Control Tower",
  //   pages: controlTower,
  // },
];

export default navItems;
