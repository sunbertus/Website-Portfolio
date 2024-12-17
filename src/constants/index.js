export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  {
    title: '3DConverter',
    desc: '3d Converter is an image converter.',
    subdesc: 'Build with HTML and JS with Tailwind framework.',
    href: 'https://3dbetaproject.vercel.app', // Ensure this link works
    texture: '/textures/project/ScreenWeb.mp4',
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/HTML5.png' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Graphic Design',
    pos: 'Intern Graphic Design',
    duration: 'Aug 2021 - Nov 2021',
    title: "I used to create videos for clients and edit photos for Instagram posts, including designing posters.",
    icon: '/assets/Logo Ming.png',
    animation: 'victory',
  },
  
];
