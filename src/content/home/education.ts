import type { TimelineItem } from '@/content/home/types';

const educationData: TimelineItem[] = [
  {
    id: 'self-taught',
    date: '2022 - 2023',
    title: 'Self-taught',
    subtitle: 'Web Development',
    achievements: [
      {
        text: 'Completed a focused self-paced web development track across modern frontend and backend tooling.',
      },
      {
        text: 'Built practical fluency in TypeScript-based product development through hands-on learning and implementation.',
      },
    ],
    technologies: [
      { skillId: 'ts', label: 'TS' },
      { skillId: 'nextjs', label: 'Next.js' },
      { skillId: 'redux', label: 'Redux' },
      { skillId: 'mobx', label: 'MobX' },
      { skillId: 'sass', label: 'SCSS' },
      { skillId: 'tailwind', label: 'Tailwind' },
      { skillId: 'nestjs', label: 'NestJS' },
      { skillId: 'postgresql', label: 'SQL' },
      { skillId: 'supabase', label: 'Supabase' },
      { skillId: 'graphql', label: 'GraphQL' },
      { skillId: 'prisma', label: 'Prisma' },
    ],
  },
  {
    id: 'practicum-israel',
    date: '2020 - 2021',
    title: 'Practicum Israel',
    subtitle: 'Web Development',
    achievements: [
      {
        text: 'Completed a web development program covering frontend, backend, databases, and deployment fundamentals.',
      },
      {
        text: 'Took on extra responsibilities as a senior student, including peer mentoring, group leadership, and program representation.',
      },
    ],
    technologies: [
      { skillId: 'react', label: 'React' },
      { skillId: 'nodejs', label: 'Node' },
      { skillId: 'html', label: 'HTML' },
      { skillId: 'css', label: 'CSS' },
      { skillId: 'js', label: 'JS' },
      { skillId: 'express', label: 'Express' },
      { skillId: 'mongodb', label: 'Mongo' },
      { skillId: 'nginx', label: 'Nginx' },
      { skillId: 'css', label: 'BEM' },
    ],
  },
  {
    id: 'mipt-practical-programming',
    date: '2018 - 2019',
    title: 'MIPT',
    subtitle: 'Practical Programming',
    achievements: [
      {
        text: 'Completed a structured programming course built around lectures, labs, and reviewed homework.',
      },
      {
        text: 'Strengthened core engineering fundamentals across Python, algorithms, Linux, Git, and web development basics.',
      },
    ],
    technologies: [
      { skillId: 'python', label: 'Python' },
      { skillId: 'python', label: 'Web' },
      { skillId: 'python', label: 'Algorithms' },
      { skillId: 'linux', label: 'Linux' },
      { skillId: 'git', label: 'Git' },
    ],
  },
];

export default educationData;
