export type SkillItem = {
  id: string;
  src: string;
  name: string;
};

export type TechnologyTag = {
  skillId: string;
  label: string;
};

export type TimelineAchievement = {
  text: string;
};

export type TimelineItem = {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  achievements: TimelineAchievement[];
  technologies?: TechnologyTag[];
};

export type ProjectItem = {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  tasks: string[];
  technologies: TechnologyTag[];
  owner?: {
    name: string;
    avatarSrc: string;
  };
};

export type ContactIconId = 'github' | 'linkedin' | 'whatsapp' | 'email';

export type ContactItem = {
  url: string;
  iconId: ContactIconId;
  label: string;
};
