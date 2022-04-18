export interface ProjectDetailTypes {
    id: number;
    client: string;
    name: string;
    startDate: string;
    dueDate: string;
    status: string;
}

export interface SkillTypes {
    language: string;
    progress: number;
}

const skills: SkillTypes[] = [
    {
        language: 'HTML5',
        progress: 90,
    },
    {
        language: 'PHP',
        progress: 67,
    },
    {
        language: 'WordPress',
        progress: 48,
    },
    {
        language: 'Laravel',
        progress: 95,
    },
    {
        language: 'ReactJs',
        progress: 72,
    },
];

const projectDetails: ProjectDetailTypes[] = [
    {
        id: 1,
        client: 'Halette Boivin',
        name: 'App design and development',
        startDate: '01/01/2015',
        dueDate: '10/15/2018',
        status: 'Work in Progress',
    },
    {
        id: 2,
        client: 'Durandana Jolicoeur',
        name: 'Coffee detail page - Main Page',
        startDate: '21/07/2016',
        dueDate: '12/05/2018',
        status: 'Pending',
    },
    {
        id: 3,
        client: 'Lucas Sabourin',
        name: 'Poster illustation design',
        startDate: '18/03/2018',
        dueDate: '28/09/2018',
        status: 'Done',
    },
    {
        id: 4,
        client: 'Donatien Brunelle',
        name: 'Drinking bottle graphics',
        startDate: '02/10/2017',
        dueDate: '07/05/2018',
        status: 'On Hold',
    },
    {
        id: 5,
        client: 'Karel Auberjo',
        name: 'Landing page design - Home',
        startDate: '17/01/2017',
        dueDate: '25/05/2021',
        status: 'Coming soon',
    },
];

export { projectDetails, skills };
