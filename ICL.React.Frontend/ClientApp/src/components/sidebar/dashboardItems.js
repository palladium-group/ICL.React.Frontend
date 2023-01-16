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
    backgroundcolor: "#E57200",
  },
];
const planSection = [
  {
    href: "/plan",
    icon: CalendarMonthOutlinedIcon,
    title: "Plan",
    backgroundcolor: "#BA0C2F",
  }
];
const sourceSection = [
  {
    title: "Source",
    href: "/source",
    icon: ShoppingCartCheckoutOutlinedIcon,
    backgroundcolor: "#8D6E97",
  },
];
const storeSection = [
  {
    href: "/store",
    title: "Store",
    icon: WarehouseOutlinedIcon,
    backgroundcolor: "#FFB500"
  }
];
const deliverSection = [
  {
    title: "Deliver",
    href: "/deliver",
    icon: LocalShippingOutlinedIcon,
    backgroundcolor: "#64A70B"
  },
];
const enableSection = [
  {
    title: "Enable",
    href: "/enable",
    icon: CheckBoxOutlinedIcon,
    backgroundcolor: "#05C3DE"
  }
];
const MISAdministrationSection = [
  {
    title: "MIS Administration",
    href: "/MISAdministration",
    icon: ManageAccountsOutlinedIcon,
    backgroundcolor: "#4D4D4D",
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
        backgroundcolor: "#FFFFFF",
        color: "#000000"
      }
    ],
  },
  {
    title: "manage",
    pages: manageSection,
  },
  {
    title: "Plan",
    pages: planSection,
  },
  {
    title: "Source",
    pages: sourceSection,
  },
  {
    title: "Store",
    pages: storeSection,
  },
  {
    title: "Deliver",
    pages: deliverSection,
  },
  {
    title: "Enable",
    pages: enableSection,
  },
  {
    title: "MIS",
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
