import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

// components
import PrivateRoute from './PrivateRoute';
import Root from './Root';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const SignInSignUp = React.lazy(() => import('../pages/auth/SignInSignUp'));
const LockScreen = React.lazy(() => import('../pages/auth/LockScreen'));

// auth2
const Login2 = React.lazy(() => import('../pages/auth2/Login2'));
const Logout2 = React.lazy(() => import('../pages/auth2/Logout2'));
const Register2 = React.lazy(() => import('../pages/auth2/Register2'));
const Confirm2 = React.lazy(() => import('../pages/auth2/Confirm2'));
const ForgetPassword2 = React.lazy(() => import('../pages/auth2/ForgetPassword2'));
const LockScreen2 = React.lazy(() => import('../pages/auth2/LockScreen2'));
const SignInSignUp2 = React.lazy(() => import('../pages/auth2/SignInSignUp2'));

// landing
const Landing = React.lazy(() => import('../pages/landing/'));
const About = React.lazy(() => import('../pages/landing/pages/AboutUs'));
const Blog = React.lazy(() => import('../pages/landing/pages/Blog/'));
const BlogDetails = React.lazy(() => import('../pages/landing/pages/BlogDetails/'));
const Contact = React.lazy(() => import('../pages/landing/pages/Contact/'));

// dashboards
const SalesDashboard = React.lazy(() => import('../pages/dashboard/Sales/'));
const CRMDashboard = React.lazy(() => import('../pages/dashboard/CRM/'));
const AnalyticsDashboard = React.lazy(() => import('../pages/dashboard/Analytics/'));

// apps
const CalendarApp = React.lazy(() => import('../pages/apps/Calendar/'));
// - chat
const ChatApp = React.lazy(() => import('../pages/apps/Chat/'));
// - ecommece pages
const EcommerceProducts = React.lazy(() => import('../pages/apps/Ecommerce/Products'));
const EcommerceProductsGrid = React.lazy(() => import('../pages/apps/Ecommerce/ProductsGrid'));
const ProductDetail = React.lazy(() => import('../pages/apps/Ecommerce/ProductDetail'));
const CreateProduct = React.lazy(() => import('../pages/apps/Ecommerce/CreateProduct'));
const Customers = React.lazy(() => import('../pages/apps/Ecommerce/Customers'));
const Orders = React.lazy(() => import('../pages/apps/Ecommerce/Orders'));
const OrderDetail = React.lazy(() => import('../pages/apps/Ecommerce/OrderDetail'));
const Sellers = React.lazy(() => import('../pages/apps/Ecommerce/Sellers'));
const Cart = React.lazy(() => import('../pages/apps/Ecommerce/Cart'));
const Checkout = React.lazy(() => import('../pages/apps/Ecommerce/Checkout'));
// - email
const Inbox = React.lazy(() => import('../pages/apps/Email/Inbox'));
const EmailDetail = React.lazy(() => import('../pages/apps/Email/Detail'));
// - companies
const Companies = React.lazy(() => import('../pages/apps/Companies/'));
// - tasks
const TaskList = React.lazy(() => import('../pages/apps/Tasks/List/'));
const TaskDetails = React.lazy(() => import('../pages/apps/Tasks/Details'));
const Kanban = React.lazy(() => import('../pages/apps/Tasks/Board/'));
// - contacts
const ContactsList = React.lazy(() => import('../pages/apps/Contacts/List/'));
const ContactsProfile = React.lazy(() => import('../pages/apps/Contacts/Profile/'));
// - ticktes
const Tickets = React.lazy(() => import('../pages/apps/Tickets/'));
// - file
const FileManager = React.lazy(() => import('../pages/apps/FileManager'));

// extra pages
const Starter = React.lazy(() => import('../pages/other/Starter'));
const Timeline = React.lazy(() => import('../pages/other/Timeline'));
const Sitemap = React.lazy(() => import('../pages/other/Sitemap/'));
const Error404 = React.lazy(() => import('../pages/error/Error404'));
const Error404Alt = React.lazy(() => import('../pages/error/Error404Alt'));
const Error500 = React.lazy(() => import('../pages/error/Error500'));
// - other
const Invoice = React.lazy(() => import('../pages/other/Invoice'));
const FAQ = React.lazy(() => import('../pages/other/FAQ'));
const SearchResults = React.lazy(() => import('../pages/other/SearchResults/'));
const CommingSoon = React.lazy(() => import('../pages/other/CommingSoon'));
const Pricing = React.lazy(() => import('../pages/other/Pricing'));
const Gallery = React.lazy(() => import('../pages/other/Gallery/'));
const Maintenance = React.lazy(() => import('../pages/other/Maintenance'));

// uikit
// -base ui
const Avatars = React.lazy(() => import('../pages/uikit/Avatars'));
const Buttons = React.lazy(() => import('../pages/uikit/Buttons'));
const Cards = React.lazy(() => import('../pages/uikit/Cards'));
const Carousels = React.lazy(() => import('../pages/uikit/Carousel'));
const Dropdowns = React.lazy(() => import('../pages/uikit/Dropdowns'));
const EmbedVideo = React.lazy(() => import('../pages/uikit/EmbedVideo'));
const GeneralUI = React.lazy(() => import('../pages/uikit/GeneralUI'));
const Grid = React.lazy(() => import('../pages/uikit/Grid'));
const Images = React.lazy(() => import('../pages/uikit/Images'));
const ListGroup = React.lazy(() => import('../pages/uikit/ListGroup'));
const Modals = React.lazy(() => import('../pages/uikit/Modals'));
const Notifications = React.lazy(() => import('../pages/uikit/Notifications'));
const Offcanvases = React.lazy(() => import('../pages/uikit/Offcanvas'));
const Placeholders = React.lazy(() => import('../pages/uikit/Placeholders'));
const Portlets = React.lazy(() => import('../pages/uikit/Portlets'));
const Progress = React.lazy(() => import('../pages/uikit/Progress'));
const Ribbons = React.lazy(() => import('../pages/uikit/Ribbons'));
const Spinners = React.lazy(() => import('../pages/uikit/Spinners'));
const TabsAccordions = React.lazy(() => import('../pages/uikit/TabsAccordions'));
const TooltipsPopovers = React.lazy(() => import('../pages/uikit/TooltipsPopovers'));
const Typography = React.lazy(() => import('../pages/uikit/Typography'));
// - extended ui
const NestableList = React.lazy(() => import('../pages/uikit/NestableList'));
const RangeSliders = React.lazy(() => import('../pages/uikit/RangeSliders'));
const TourPage = React.lazy(() => import('../pages/uikit/TourPage'));
const SweetAlerts = React.lazy(() => import('../pages/uikit/SweetAlerts'));

// widgets
const Widgets = React.lazy(() => import('../pages/widgets/'));

// icons
const FeatherIcons = React.lazy(() => import('../pages/icons/FeatherIcons/'));
const RemixIcons = React.lazy(() => import('../pages/icons/RemixIcons/'));
const BoxIcons = React.lazy(() => import('../pages/icons/BoxIcons/'));
const WeatherIcons = React.lazy(() => import('../pages/icons/WeatherIcons/'));
const MDIIcons = React.lazy(() => import('../pages/icons/MDIIcons/'));
const FontAwesomeIcons = React.lazy(() => import('../pages/icons/FontAwesomeIcons/'));

// forms
const BasicForms = React.lazy(() => import('../pages/forms/Basic'));
const FormAdvanced = React.lazy(() => import('../pages/forms/Advanced'));
const FormValidation = React.lazy(() => import('../pages/forms/Validation'));
const FormWizard = React.lazy(() => import('../pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('../pages/forms/FileUpload'));
const Editors = React.lazy(() => import('../pages/forms/Editors'));

// tables
const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));

// charts
const ApexChart = React.lazy(() => import('../pages/charts/Apex'));
const ChartJs = React.lazy(() => import('../pages/charts/ChartJs'));

// maps
const GoogleMaps = React.lazy(() => import('../pages/maps/GoogleMaps'));
const VectorMaps = React.lazy(() => import('../pages/maps/VectorMaps'));

export interface RoutesProps {
    path: RouteProps['path'];
    name?: string;
    component?: RouteProps['component'];
    route?: any;
    exact?: RouteProps['exact'];
    icon?: string;
    header?: string;
    roles?: string[];
    children?: RoutesProps[];
}

// root routes
const rootRoute: RoutesProps = {
    path: '/',
    exact: true,
    component: () => <Root />,
    route: Route,
};

// dashboards
const dashboardRoutes: RoutesProps = {
    path: '/dashboard',
    name: 'Dashboards',
    icon: 'airplay',
    header: 'Navigation',
    children: [
        {
            path: '/dashboard/sales',
            name: 'Sales',
            component: SalesDashboard,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/crm',
            name: 'CRM',
            component: CRMDashboard,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/analytics',
            name: 'Analytics',
            component: AnalyticsDashboard,
            route: PrivateRoute,
        },
    ],
};

// apps

const chatAppRoutes: RoutesProps = {
    path: '/apps/chat',
    name: 'Chat',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-message-2-line',
    component: ChatApp,
};

const ecommerceAppRoutes = {
    path: '/apps/ecommerce',
    name: 'eCommerce',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'shopping-cart',
    children: [
        {
            path: '/apps/ecommerce/products',
            name: 'Products',
            component: EcommerceProducts,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/products-grid',
            name: 'Products',
            component: EcommerceProductsGrid,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/product-detail',
            name: 'Product Detail',
            component: ProductDetail,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/product-create',
            name: 'Product Edit',
            component: CreateProduct,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/customers',
            name: 'Customers',
            component: Customers,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/orders',
            name: 'Orders',
            component: Orders,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/order/detail',
            name: 'Order Detail',
            component: OrderDetail,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/sellers',
            name: 'Sellers',
            component: Sellers,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/shopping-cart',
            name: 'Shopping Cart',
            component: Cart,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/checkout',
            name: 'Checkout',
            component: Checkout,
            route: PrivateRoute,
        },
    ],
};

const calendarAppRoutes: RoutesProps = {
    path: '/apps/calendar',
    name: 'Calendar',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-calendar-2-line',
    component: CalendarApp,
    header: 'Apps',
};

const emailAppRoutes: RoutesProps = {
    path: '/apps/email',
    name: 'Email',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-mail-line',
    children: [
        {
            path: '/apps/email/inbox',
            name: 'Inbox',
            component: Inbox,
            route: PrivateRoute,
        },
        {
            path: '/apps/email/details',
            name: 'Email Details',
            component: EmailDetail,
            route: PrivateRoute,
        },
    ],
};

const companiesAppRoutes = {
    path: '/apps/companies',
    name: 'Companies',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-building-4-line',
    component: Companies,
};

const taskAppRoutes = {
    path: '/apps/tasks',
    name: 'Tasks',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-task-line',
    children: [
        {
            path: '/apps/tasks/list',
            name: 'Task List',
            component: TaskList,
            route: PrivateRoute,
        },
        {
            path: '/apps/tasks/details',
            name: 'Task List',
            component: TaskDetails,
            route: PrivateRoute,
        },
        {
            path: '/apps/tasks/kanban',
            name: 'Kanban',
            component: Kanban,
            route: PrivateRoute,
        },
    ],
};

const ticketsRoutes: RoutesProps = {
    path: '/apps/tickets',
    name: 'Tickets',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-customer-service-2-line',
    component: Tickets,
    header: 'Apps',
};

const contactsRoutes = {
    path: '/apps/contacts',
    name: 'Contacts',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-profile-line',
    children: [
        {
            path: '/apps/contacts/list',
            name: 'Task List',
            component: ContactsList,
            route: PrivateRoute,
        },
        {
            path: '/apps/contacts/profile',
            name: 'Profile',
            component: ContactsProfile,
            route: PrivateRoute,
        },
    ],
};

const fileAppRoutes = {
    path: '/apps/file-manager',
    name: 'File Manager',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'folder-plus',
    component: FileManager,
};

const appRoutes = [
    chatAppRoutes,
    ecommerceAppRoutes,
    calendarAppRoutes,
    emailAppRoutes,
    companiesAppRoutes,
    taskAppRoutes,
    ticketsRoutes,
    contactsRoutes,
    fileAppRoutes,
];

// pages
const extrapagesRoutes = {
    path: '/pages',
    name: 'Pages',
    icon: 'ri-pages-line',
    header: 'Custom',
    children: [
        {
            path: '/pages/starter',
            name: 'Starter',
            component: Starter,
            route: PrivateRoute,
        },
        {
            path: '/pages/timeline',
            name: 'Timeline',
            component: Timeline,
            route: PrivateRoute,
        },
        {
            path: '/pages/sitemap',
            name: 'Sitemap',
            component: Sitemap,
            route: PrivateRoute,
        },
        {
            path: '/pages/invoice',
            name: 'Invoice',
            component: Invoice,
            route: PrivateRoute,
        },
        {
            path: '/pages/faq',
            name: 'FAQ',
            component: FAQ,
            route: PrivateRoute,
        },
        {
            path: '/pages/serach-results',
            name: 'Search Results',
            component: SearchResults,
            route: PrivateRoute,
        },
        {
            path: '/pages/pricing',
            name: 'Pricing',
            component: Pricing,
            route: PrivateRoute,
        },
        {
            path: '/pages/gallery',
            name: 'Gallery',
            component: Gallery,
            route: PrivateRoute,
        },
        {
            path: '/pages/error-404-alt',
            name: 'Error - 404-alt',
            component: Error404Alt,
            route: PrivateRoute,
        },
    ],
};

// ui
const uiRoutes: RoutesProps = {
    path: '/ui',
    name: 'Components',
    icon: 'ri-pencil-ruler-2-line',
    header: 'UI Elements',
    children: [
        {
            path: '/ui/base',
            name: 'Base UI',
            children: [
                {
                    path: '/ui/avatars',
                    name: 'Avatars',
                    component: Avatars,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/buttons',
                    name: 'Buttons',
                    component: Buttons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/cards',
                    name: 'Cards',
                    component: Cards,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/carousel',
                    name: 'Carousel',
                    component: Carousels,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/dropdowns',
                    name: 'Dropdowns',
                    component: Dropdowns,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/embedvideo',
                    name: 'EmbedVideo',
                    component: EmbedVideo,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/general',
                    name: 'General UI',
                    component: GeneralUI,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/grid',
                    name: 'Grid',
                    component: Grid,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/images',
                    name: 'Images',
                    component: Images,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/listgroup',
                    name: 'List Group',
                    component: ListGroup,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/modals',
                    name: 'Modals',
                    component: Modals,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/notifications',
                    name: 'Notifications',
                    component: Notifications,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/offcanvas',
                    name: 'Offcanvas',
                    component: Offcanvases,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/placeholders',
                    name: 'Placeholders',
                    component: Placeholders,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/portlets',
                    name: 'Portlets',
                    component: Portlets,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/progress',
                    name: 'Progress',
                    component: Progress,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/ribbons',
                    name: 'Ribbons',
                    component: Ribbons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/spinners',
                    name: 'Spinners',
                    component: Spinners,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/tabs-accordions',
                    name: 'Tabs & Accordions',
                    component: TabsAccordions,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/tooltips-popovers',
                    name: 'Tooltips & Popovers',
                    component: TooltipsPopovers,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/typography',
                    name: 'Typography',
                    component: Typography,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/extended',
            name: 'Extended UI',
            children: [
                {
                    path: '/extended-ui/nestable',
                    name: 'Nestable List',
                    component: NestableList,
                    route: PrivateRoute,
                },
                {
                    path: '/extended-ui/rangesliders',
                    name: 'Range Sliders',
                    component: RangeSliders,
                    route: PrivateRoute,
                },
                {
                    path: '/extended-ui/sweet-alert',
                    name: 'Sweet Alert',
                    component: SweetAlerts,
                    route: PrivateRoute,
                },
                {
                    path: '/extended-ui/tour',
                    name: 'Tour Page',
                    component: TourPage,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/widgets',
            name: 'Widgets',
            component: Widgets,
            route: PrivateRoute,
        },
        {
            path: '/ui/icons',
            name: 'Icons',
            children: [
                {
                    path: '/ui/icons/feather',
                    name: 'Feather Icons',
                    component: FeatherIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/mdi',
                    name: 'Material Design',
                    component: MDIIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/font-awesome',
                    name: 'Font Awesome 5',
                    component: FontAwesomeIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/remix',
                    name: 'Remix',
                    component: RemixIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/boxicons',
                    name: 'Box Icons',
                    component: BoxIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/weather',
                    name: 'Weather Icons',
                    component: WeatherIcons,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/forms',
            name: 'Forms',
            children: [
                {
                    path: '/ui/forms/basic',
                    name: 'Basic Elements',
                    component: BasicForms,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/advanced',
                    name: 'Form Advanced',
                    component: FormAdvanced,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/validation',
                    name: 'Form Validation',
                    component: FormValidation,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/wizard',
                    name: 'Form Wizard',
                    component: FormWizard,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/upload',
                    name: 'File Upload',
                    component: FileUpload,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/editors',
                    name: 'Editors',
                    component: Editors,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/tables',
            name: 'Tables',
            children: [
                {
                    path: '/ui/tables/basic',
                    name: 'Basic',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/tables/advanced',
                    name: 'Advanced',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/charts',
            name: 'Charts',
            children: [
                {
                    path: '/ui/charts/apex',
                    name: 'Apex',
                    component: ApexChart,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/charts/chartjs',
                    name: 'Chartjs',
                    component: ChartJs,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/maps',
            name: 'Maps',
            children: [
                {
                    path: '/ui/googlemaps',
                    name: 'Google Maps',
                    component: GoogleMaps,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/vectorMaps',
                    name: 'Google Maps',
                    component: VectorMaps,
                    route: PrivateRoute,
                },
            ],
        },
    ],
};

// auth
const authRoutes: RoutesProps[] = [
    {
        path: '/auth/login',
        name: 'Login',
        component: Login,
        route: Route,
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: Register,
        route: Route,
    },
    {
        path: '/auth/confirm',
        name: 'Confirm',
        component: Confirm,
        route: Route,
    },
    {
        path: '/auth/forget-password',
        name: 'Forget Password',
        component: ForgetPassword,
        route: Route,
    },
    {
        path: '/auth/signin-signup',
        name: 'SignIn-SignUp',
        component: SignInSignUp,
        route: Route,
    },
    {
        path: '/auth/lock-screen',
        name: 'Lock Screen',
        component: LockScreen,
        route: Route,
    },
    {
        path: '/auth/logout',
        name: 'Logout',
        component: Logout,
        route: Route,
    },
    {
        path: '/auth/login2',
        name: 'Login2',
        component: Login2,
        route: Route,
    },
    {
        path: '/auth/logout2',
        name: 'Logout2',
        component: Logout2,
        route: Route,
    },
    {
        path: '/auth/register2',
        name: 'Register2',
        component: Register2,
        route: Route,
    },
    {
        path: '/auth/confirm2',
        name: 'Confirm2',
        component: Confirm2,
        route: Route,
    },
    {
        path: '/auth/forget-password2',
        name: 'Forget Password2',
        component: ForgetPassword2,
        route: Route,
    },
    {
        path: '/auth/signin-signup2',
        name: 'SignIn-SignUp2',
        component: SignInSignUp2,
        route: Route,
    },
    {
        path: '/auth/lock-screen2',
        name: 'Lock Screen2',
        component: LockScreen2,
        route: Route,
    },
];

// public routes
const otherPublicRoutes = [
    {
        path: '/landing',
        name: 'landing',
        component: Landing,
        route: Route,
    },
    {
        path: '/landing-about',
        name: 'About',
        component: About,
        route: Route,
    },
    {
        path: '/landing-blog',
        name: 'Blog',
        component: Blog,
        route: Route,
    },
    {
        path: '/landing-blog-detail',
        name: 'Blog Detail',
        component: BlogDetails,
        route: Route,
    },
    {
        path: '/landing-contact',
        name: 'Contact',
        component: Contact,
        route: Route,
    },
    {
        path: '/maintenance',
        name: 'Maintenance',
        component: Maintenance,
        route: Route,
    },
    {
        path: '/error-404',
        name: 'Error - 404',
        component: Error404,
        route: Route,
    },
    {
        path: '/error-500',
        name: 'Error - 500',
        component: Error500,
        route: Route,
    },
    {
        path: '/comming-soon',
        name: 'Coming Soon',
        component: CommingSoon,
        route: Route,
    },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
    let flatRoutes: RoutesProps[] = [];

    routes = routes || [];
    routes.forEach((item: RoutesProps) => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// // All routes
const authProtectedRoutes = [rootRoute, dashboardRoutes, ...appRoutes, extrapagesRoutes, uiRoutes];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export { publicRoutes, authProtectedRoutes, authProtectedFlattenRoutes, publicProtectedFlattenRoutes };
