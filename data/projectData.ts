export interface IProjectProps {
  title: string;
  position: string;
  img: string;
  github: string;
  date: string;
}

export const projectsData: IProjectProps[] = [
  {
    title: 'Blog',
    position: 'Full-Stack',
    img: 'https://user-images.githubusercontent.com/78544031/191671062-68fde161-d690-4d55-bfc9-c54b432db0b2.svg',
    github: `https://github.com/Mangpha/Portfolio-Backend
			https://github.com/Mangpha/Portfolio-frontend`,
    date: '2022.08.08 ~',
  },
  {
    title: 'NERD Chat',
    position: 'Leader, Full-Stack',
    img: 'https://user-images.githubusercontent.com/79839230/132945747-d75e1792-a210-4a14-92c6-5c4f67e27eea.gif',
    github: 'https://github.com/codestates/Nerdchat',
    date: '2021.09.06 - 2021.10.07',
  },
  {
    title: 'Moment',
    position: 'Leader, Back-End',
    img: 'https://user-images.githubusercontent.com/79839230/131764676-0840134f-0625-4546-bdc2-537d26c25dc8.jpg',
    github: 'https://github.com/codestates/Moment/',
    date: '2021.08.23 - 2021.09.02',
  },
];
