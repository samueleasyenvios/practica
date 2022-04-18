// images
import user1 from '../../../assets/images/landing/users/img-1.png';
import user2 from '../../../assets/images/landing/users/img-2.png';
import user3 from '../../../assets/images/landing/users/img-3.png';

import img1 from '../../../assets/images/landing/blog/img-1.jpg';
import img2 from '../../../assets/images/landing/blog/img-2.jpg';
import img3 from '../../../assets/images/landing/blog/img-3.jpg';
import img4 from '../../../assets/images/landing/blog/img-4.jpg';
import img5 from '../../../assets/images/landing/blog/img-5.jpg';
import img6 from '../../../assets/images/landing/blog/img-6.jpg';

export interface Post {
    image: string;
    title: string;
    desc: string;
    author: string;
    author_avatar: string;
    posted_on: string;
    isPopular: boolean;
}

const posts: Post[] = [
    {
        image: img1,
        title: 'Orange plant on a table',
        desc: 'If several languages coalesce, the grammar of the resulting language',
        author: 'Joseph Nash',
        author_avatar: user1,
        posted_on: '04 May, 2019',
        isPopular: true,
    },
    {
        image: img2,
        title: 'Beautiful Day In Paris',
        desc: 'Everyone realizes why a new common language would be desirable could refuse',
        author: 'Victor Paul',
        author_avatar: user2,
        posted_on: '05 May, 2019',
        isPopular: true,
    },
    {
        image: img3,
        title: 'A person riding a bicycle',
        desc: 'It will be as simple as in fact it will be occidental to an english person',
        author: 'Jose Obrien',
        author_avatar: user3,
        posted_on: '06 May, 2019',
        isPopular: true,
    },
    {
        image: img4,
        title: 'Nature valley with cooling',
        desc: 'At vero eos et accusamus et iusto odio digniss ducimus qui blanditiis',
        author: 'Derek Rich',
        author_avatar: user1,
        posted_on: '07 May, 2019',
        isPopular: false,
    },
    {
        image: img5,
        title: 'A person discuss for project',
        desc: 'If several languages coalesce, the grammar of the resulting language',
        author: 'Andrew Smith',
        author_avatar: user2,
        posted_on: '08 May, 2019',
        isPopular: false,
    },
    {
        image: img6,
        title: 'A person discuss for project',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
        author: 'Daniel Hatcher',
        author_avatar: user3,
        posted_on: '09 May, 2019',
        isPopular: false,
    },
];

export { posts };
