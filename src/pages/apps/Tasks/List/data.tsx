// images
import avatarImg2 from '../../../../assets/images/users/avatar-2.jpg';
import avatarImg3 from '../../../../assets/images/users/avatar-3.jpg';
import avatarImg4 from '../../../../assets/images/users/avatar-4.jpg';
import avatarImg5 from '../../../../assets/images/users/avatar-5.jpg';
import avatarImg6 from '../../../../assets/images/users/avatar-6.jpg';
import avatarImg7 from '../../../../assets/images/users/avatar-7.jpg';
import avatarImg9 from '../../../../assets/images/users/avatar-9.jpg';
import avatarImg10 from '../../../../assets/images/users/avatar-10.jpg';

interface ChecklistsItems {
    id: number;
    title: string;
    completed: boolean;
}

interface AttachmentsItems {
    id: number;
    filename: string;
    size: string;
}

interface CommentsItems {
    id: number;
    author: string;
    text: string;
    posted_on: string;
    author_avatar: string;
}

export interface TaskItemTypes {
    id: number | string;
    title: string;
    assigned_to: string;
    assignee_avatar: string;
    due_date: string;
    completed: boolean;
    priority: string;
    stage?: string;
    checklists?: Array<ChecklistsItems>;
    description?: string;
    attachments?: Array<AttachmentsItems>;
    comments?: Array<CommentsItems>;
}

const todayTasks: TaskItemTypes[] = [
    {
        id: '#MN2045',
        title: 'IOS App home page',
        assignee_avatar: avatarImg2,
        assigned_to: 'Houston Fritz',
        due_date: 'Today 10am',
        priority: 'High',
        completed: false,
    },
    {
        id: '#MN2044',
        title: 'Topnav layout design',
        assignee_avatar: avatarImg3,
        assigned_to: 'Glenn Lynch',
        due_date: 'Today 04pm',
        priority: 'Medium',
        completed: false,
    },
    {
        id: '#MN2043',
        title: 'Invite user to a project',
        assignee_avatar: avatarImg4,
        assigned_to: 'Robert Hebert',
        due_date: 'Today 02pm',
        priority: 'High',
        completed: false,
    },
    {
        id: '#MN2042',
        title: 'Write a release note',
        assignee_avatar: avatarImg5,
        assigned_to: 'Darnell McCormick',
        due_date: 'Today 06pm',
        priority: 'Low',
        completed: false,
    },
];

const upcomingTasks: TaskItemTypes[] = [
    {
        id: '#MN2050',
        title: 'Enable analytics tracking',
        assignee_avatar: avatarImg5,
        assigned_to: 'Donald Mealy',
        due_date: 'May 27, 2020',
        priority: 'High',
        completed: false,
    },
    {
        id: '#MN2049',
        title: 'Kanban board design',
        assignee_avatar: avatarImg6,
        assigned_to: 'Shelton Garza',
        due_date: 'No Due Date',
        priority: 'Medium',
        completed: false,
    },
    {
        id: '#MN2048',
        title: 'Code HTML email template',
        assignee_avatar: avatarImg7,
        assigned_to: 'Adrian Key',
        due_date: 'June 08, 2020',
        priority: 'High',
        completed: false,
    },
];

const otherTasks: TaskItemTypes[] = [
    {
        id: '#MN2054',
        title: 'Brand logo design',
        assignee_avatar: avatarImg9,
        assigned_to: 'Donald Mealy',
        due_date: 'June 04, 2020',
        priority: 'High',
        completed: false,
    },
    {
        id: '#MN2053',
        title: 'Improve animation loader',
        assignee_avatar: avatarImg10,
        assigned_to: 'Doris Kinsey',
        due_date: 'June 10, 2020',
        priority: 'Medium',
        completed: true,
    },
    {
        id: '#MN2052',
        title: 'Dashboard Re-design',
        assignee_avatar: avatarImg2,
        assigned_to: 'Donnell Smith',
        due_date: 'No Due Date',
        priority: 'Low',
        completed: false,
    },
];

const allTasks = [...todayTasks, ...upcomingTasks, ...otherTasks];

export { todayTasks, upcomingTasks, otherTasks, allTasks };
