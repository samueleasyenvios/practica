// types
import { RawFaqs } from '../other/data';

// images
import testi1 from '../../assets/images/landing/users/img-1.png';
import testi2 from '../../assets/images/landing/users/img-2.png';
import testi3 from '../../assets/images/landing/users/img-3.png';

export interface Service {
    icon: string;
    title: string;
    desc: string;
}

interface Feature {
    name: string;
    supported: boolean;
}

export interface PricingPlan {
    title: string;
    icon: string;
    desc: string;
    price: number;
    features: Feature[];
    active: boolean;
}

export interface Statisctics {
    id: number;
    stats: number;
    title: string;
    icon: string;
}

export interface Testimonial {
    id: number;
    clientName: string;
    title: string;
    avatar: string;
    message: string;
}

const services: Service[] = [
    {
        icon: 'pe-7s-display1',
        title: 'Bootstrap UI based',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque.',
    },
    {
        icon: 'pe-7s-science',
        title: 'Creative Design',
        desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
    },
    {
        icon: 'pe-7s-phone',
        title: 'Responsive Layouts',
        desc: 'Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis maiores alias.',
    },
    {
        icon: 'pe-7s-exapnd2',
        title: 'Strategy Solutions',
        desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
    },
    {
        icon: 'pe-7s-headphones',
        title: 'Awesome Support',
        desc: 'Et harum quidem rerum facilis est et expedita distinctio nam soluta nobis est.',
    },
    {
        icon: 'pe-7s-upload',
        title: 'Easy to customize',
        desc: 'Ut enim ad minima veniam, quis nostrum ullam corporis suscipit.',
    },
];

const features: Service[] = [
    {
        icon: 'pe-7s-notebook',
        title: 'Quality Code',
        desc: 'It will be as simple as Occidental in fact, it will be Occidental. To an English person it will seem like simplified English.',
    },
    {
        icon: 'pe-7s-exapnd2',
        title: 'Strategy Solutions',
        desc: 'It will be as simple as Occidental in fact, it will be Occidental. To an English person it will seem like simplified English.',
    },
    {
        icon: 'pe-7s-edit',
        title: 'Easy to customize',
        desc: 'If several languages coalesce, the grammar of the resulting language is more simple and regular than of the individual languages.',
    },
    {
        icon: 'pe-7s-headphones',
        title: 'Awesome Support',
        desc: 'New common language will be more simple and regular than the existing European languages occidental.',
    },
    {
        icon: 'pe-7s-headphones',
        title: 'Awesome Support',
        desc: 'New common language will be more simple and regular than the existing European languages occidental.',
    },
    {
        icon: 'pe-7s-edit',
        title: 'Easy to customize',
        desc: 'If several languages coalesce, the grammar of the resulting language is more simple and regular than of the individual languages.',
    },
];

const pricingPlans: PricingPlan[] = [
    {
        icon: 'pe-7s-helm',
        title: 'Single Application',
        desc: 'Sed ut perspiciatis unde',
        price: 24,
        features: [
            {
                name: '5 Projects',
                supported: true,
            },
            {
                name: '1 GB Storage',
                supported: true,
            },
            {
                name: 'No Domain',
                supported: true,
            },
            {
                name: '1 User',
                supported: false,
            },
            {
                name: 'Free Support',
                supported: false,
            },
        ],
        active: false,
    },
    {
        icon: 'pe-7s-diamond',
        title: 'Multiple Application',
        desc: 'Sed ut perspiciatis unde',
        price: 120,
        features: [
            {
                name: '5 Projects',
                supported: true,
            },
            {
                name: '1 GB Storage',
                supported: true,
            },
            {
                name: 'No Domain',
                supported: true,
            },
            {
                name: '1 User',
                supported: true,
            },
            {
                name: 'Free Support',
                supported: false,
            },
        ],
        active: true,
    },
    {
        icon: 'pe-7s-shield',
        title: 'Extended',
        desc: 'Sed ut perspiciatis unde',
        price: 999,
        features: [
            {
                name: '5 Projects',
                supported: true,
            },
            {
                name: '1 GB Storage',
                supported: true,
            },
            {
                name: 'No Domain',
                supported: true,
            },
            {
                name: '1 User',
                supported: true,
            },
            {
                name: 'Free Support',
                supported: true,
            },
        ],
        active: false,
    },
];

const statisticsData: Statisctics[] = [
    {
        id: 1,
        stats: 1200,
        title: 'Fans',
        icon: 'pe-7s-add-user',
    },
    {
        id: 2,
        stats: 4900,
        title: 'Total Sales',
        icon: 'pe-7s-cart',
    },
    {
        id: 3,
        stats: 5645,
        title: 'Happy Clients',
        icon: 'pe-7s-smile',
    },
    {
        id: 1,
        stats: 800,
        title: 'Won Prices',
        icon: 'pe-7s-medal',
    },
];

const testimonials: Testimonial[] = [
    {
        id: 1,
        clientName: 'James Barrett',
        title: 'Minton User',
        avatar: testi1,
        message:
            'If several languages coalesce the grammar of the resulting language is more simple than that of the individual languages.',
    },
    {
        id: 2,
        clientName: 'Glenn Ziegler',
        title: 'Minton User',
        avatar: testi2,
        message:
            'Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators to achieve this it would be necessary to have uniform grammar.',
    },
    {
        id: 3,
        clientName: 'Samuel Hicks',
        title: 'Minton User',
        avatar: testi3,
        message:
            'Separate existence is a myth Europe uses the same vocabulary the languages only differ in pronunciation and their most common words.',
    },
];

const generalFAQs: RawFaqs[] = [
    {
        id: 1,
        question: 'What is Lorem Ipsum?',
        answer: 'The new common language will be more simple and regular than the existing European languages It will be as simple as occidental.',
    },
    {
        id: 2,
        question: 'Why do we use it?',
        answer: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    {
        id: 3,
        question: 'Where does it come from?',
        answer: 'If several languages coalesce, the grammar of the resulting language is more simple and regular of the individual languages.',
    },
];

const pricingFAQs: RawFaqs[] = [
    {
        id: 4,
        question: 'Why do we use it?',
        answer: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    {
        id: 5,
        question: 'Where does it come from?',
        answer: 'If several languages coalesce, the grammar of the resulting language is more simple and regular of the individual languages.',
    },
    {
        id: 6,
        question: 'What is Lorem Ipsum?',
        answer: 'The new common language will be more simple and regular than the existing European languages It will be as simple as occidental.',
    },
];

export { services, features, pricingPlans, statisticsData, testimonials, generalFAQs, pricingFAQs };
