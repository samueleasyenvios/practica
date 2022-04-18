// images
import avatar1 from '../../../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../../assets/images/users/avatar-6.jpg';
import avatar7 from '../../../../assets/images/users/avatar-7.jpg';
import avatar8 from '../../../../assets/images/users/avatar-8.jpg';
import avatar9 from '../../../../assets/images/users/avatar-9.jpg';

export interface TaskTypes {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    userAvatar: string[];
    dueDate: string;
}

const tasks: TaskTypes[] = [
    {
        id: 1,
        title: 'iOS App home page',
        description: 'There are many variations of passages of Lorem Ipsum available.',
        status: 'Upcoming',
        priority: 'medium',
        userAvatar: [avatar1, avatar3],
        dueDate: 'Jan 16, 2020',
    },
    {
        id: 2,
        title: 'Enable analytics tracking',
        description: 'It has roots in a piece of classical Latin literature from 45 BC.',
        status: 'Inprogress',
        priority: 'low',
        userAvatar: [avatar6],
        dueDate: 'Feb 12, 2020',
    },
    {
        id: 3,
        title: 'Brand logo design',
        description: 'Various versions have evolved over the years, sometimes by accident.',
        status: 'Completed',
        priority: 'low',
        userAvatar: [avatar2],
        dueDate: 'Mar 27, 2020',
    },
    {
        id: 4,
        title: 'Improve animation loader',
        description: 'A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
        status: 'Completed',
        priority: 'medium',
        userAvatar: [avatar3],
        dueDate: 'Mar 27, 2020',
    },
    {
        id: 5,
        title: 'Topnav layout design',
        description: 'Many desktop publishing packages and web page.',
        status: 'Upcoming',
        priority: 'low',
        userAvatar: [avatar2],
        dueDate: 'Jan 22, 2020',
    },
    {
        id: 6,
        title: 'Invite user to a project',
        description: 'If you are going to use a passage of Lorem Ipsum.',
        status: 'Upcoming',
        priority: 'low',
        userAvatar: [avatar5],
        dueDate: 'Feb 08, 2020',
    },
    {
        id: 7,
        title: 'Dashboard Re-design',
        description: 'There are many variations of passages of Lorem Ipsum available.',
        status: 'Completed',
        priority: 'low',
        userAvatar: [avatar5, avatar8],
        dueDate: 'Apr 19, 2019',
    },
    {
        id: 8,
        title: 'Kanban board design',
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined.',
        status: 'Inprogress',
        priority: 'low',
        userAvatar: [avatar8, avatar4],
        dueDate: 'Jan 31, 2020',
    },
    {
        id: 9,
        title: 'Write a release note',
        description: 'There are many variations of passages of Lorem Ipsum available.',
        status: 'Upcoming',
        priority: 'high',
        userAvatar: [avatar6, avatar7],
        dueDate: 'Feb 12, 2020',
    },
    {
        id: 10,
        title: 'Code HTML email template',
        description: 'There are many variations of passages of Lorem Ipsum available.',
        status: 'Inprogress',
        priority: 'high',
        userAvatar: [avatar9],
        dueDate: 'Mar 27, 2020',
    },
    {
        id: 11,
        title: 'iOS App home page',
        description: "you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        status: 'Completed',
        priority: 'low',
        userAvatar: [avatar4],
        dueDate: 'Apr 27, 2020',
    },
];

export { tasks };
