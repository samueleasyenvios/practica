// images
import member1 from '../../../../assets/images/landing/team/img-1.jpg';
import member2 from '../../../../assets/images/landing/team/img-2.jpg';
import member3 from '../../../../assets/images/landing/team/img-3.jpg';
import member4 from '../../../../assets/images/landing/team/img-4.jpg';

export interface Service {
    id: string;
    title: string;
    description: string;
}

export interface TeamMember {
    id: number;
    name: string;
    title: string;
    avatar: string;
}

const services: Service[] = [
    {
        id: '01',
        title: 'Bootstrap UI based',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae',
    },
    {
        id: '02',
        title: 'Creative Design',
        description:
            'Quis autem vel eum iure reprehenderit qui in ea voluptatelit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.',
    },
    {
        id: '03',
        title: 'Responsive Layouts',
        description:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi incidunt ut ',
    },
    {
        id: '04',
        title: 'Strategy Solutions',
        description:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium deleniti atque corrupti quos dolores et quas.',
    },
    {
        id: '05',
        title: 'Awesome Support',
        description:
            'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit',
    },
    {
        id: '06',
        title: 'Easy to customize',
        description:
            'Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis maiores alias aut perferendis doloribus asperiores repellat.',
    },
];

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Mitchell Dicken',
        title: 'CEO/Founder',
        avatar: member1,
    },
    {
        id: 2,
        name: 'Patricia Fleming',
        title: 'Project Manager',
        avatar: member2,
    },
    {
        id: 3,
        name: 'Richard Bailey',
        title: 'Web Designer',
        avatar: member3,
    },
    {
        id: 4,
        name: 'Emily Johnson',
        title: 'Graphic Designer',
        avatar: member4,
    },
];

export { services, teamMembers };
