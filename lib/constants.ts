export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/yourusername',
		linkedin: 'https://www.linkedin.com/in/viru-gurudath/',
		email: 'mailto:youremail@example.com',
		phone: 'tel:+1234567890',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Mechatronics Intern',
		company: 'Log9 Materials',
		location: 'Bangalore, India',
		startDate: 'June 2024',
		endDate: 'August 2024',
		description: [
			'Assimilated into Log9’s ZappUp team to support battery manufacturing projects via cost analysis, component optimisation, and Computer-Aided Design and optimisation at India’s "Best Energy Start Up" (2022, The Economic Times). ',
			' Worked on proprietary battery manufacturing processes under strict NDA, involving BOM analysis, charge capacity optimisation, Computational Fluid Dynamics, and Finite Element Analysis.',
		],
		technologies: ['SolidWorks', 'Excel', 'Ansys Fluent', 'Ansys Mechanical'],
	},
	{
		title: 'Research Assistant',
		company: 'Hynes Group / Capilano University',
		location: 'Vancouver, Canada',
		startDate: 'May 2023',
		endDate: 'December 2023',
		description: [
			'Interned under Mitacs Accelerate researched based internship program in collaboration with Capilano University & Hynes Group.',
			'Research focused on Datacenter electrical consumption and heat management strategies using Computer-Aided Design, Building Information Management, Computational Fluid Dynamics, and Human-Machine Interface design.',
		],
		technologies: ['MATLAB', 'SolidWorks', 'OpenFOAM', 'Ansys Fluent', 'Bash', 'OpenStudio', 'TwinCAT 3'],
	},
		{
		title: 'Research and Development Project Intern',
		company: 'Log9 Materials',
		location: 'Bangalore, India',
		startDate: 'June 2022',
		endDate: 'August 2022',
		description: [
			'Led research into next generation product generation on India’s 1st 4W electric skateboard platform, conducted under NDA. ',
			'Received recognition of CEO, VP of Design, and Technical Team Leads for quality and timeliness of research reports.',
		],
		technologies: ['Word', 'Excel', 'BOM'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Autonomous Solar Panel Cleaning Robot',
		description:
			'Designed and implemented a smart home automation system using IoT technologies to control lighting, temperature, and security features.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['IoT', 'Arduino', 'C++', 'Mobile App'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Datacenter Human-Machine Interace',
		description:
			'Developed software for structural analysis of beams and trusses using numerical methods and visualization techniques.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['MATLAB', 'Python', 'FEA', 'Structural Engineering'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Arduino Robot Muscle',
		description:
			'Created a system to monitor and analyze performance of solar panels and wind turbines for optimal energy production.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
		link: '#',
		repo: '#',
	},
	{
		title: 'OpenStudio Building Information Management',
		description:
			'Created a system to monitor and analyze performance of solar panels and wind turbines for optimal energy production.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Autodesk AutoCAD and Revit Personal Project',
		description:
			'Created a system to monitor and analyze performance of solar panels and wind turbines for optimal energy production.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
		link: '#',
		repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Applied Science',
		field: 'Integrated Engineering',
		institution: 'University of British Columbia',
		location: 'Vancouver, Canada',
		startDate: 'September 2020',
		endDate: 'April 2025',
		gpa: '3.75/4.33',
		achievements: [
			'Dean\'s List 2021/22, 2020/21',
			'Oustanding International Student Award',
		],
	},
	{
		degree: 'International Baccalaureate Diploma Programme',
		field: 'Science and Mathematics',
		institution: 'Canadian International School Bangalore',
		location: 'City, Country',
		startDate: 'Sep 2016',
		endDate: 'Jun 2020',
		achievements: [
			'Student Council President',
			'LEO Club President',
			'Honour Roll (every single term since 6th grade)',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Engineering In Training Certification',
		issuer: 'Engineers and Geoscientists British Columbia',
		date: 'August 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'IB Diploma',
		issuer: 'International Baccalaureate',
		date: 'Jun 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Embedded Systems', level: 7, category: 'technical' },
	{ name: 'Thermodynamics', level: 8, category: 'technical' },
	{ name: 'Control Systems', level: 8, category: 'technical' },
	{ name: 'Circuit Design', level: 6, category: 'technical' },
	{ name: 'Heat Transfer', level: 7, category: 'technical' },

	// Software Skills
	{ name: 'MATLAB', level: 8, category: 'software' },
	{ name: 'AutoCAD', level: 7, category: 'software' },
	{ name: 'SolidWorks', level: 8, category: 'software' },
	{ name: 'BIM', level: 7, category: 'software' },
	{ name: 'C/C++', level: 6, category: 'software' },
	{ name: 'ANSYS Mechanical', level: 7, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Team Leadership', level: 9, category: 'soft' },
	{ name: 'Project Management', level: 7, category: 'soft' },
	{ name: 'Technical Writing', level: 9, category: 'soft' },
	{ name: 'Presentation', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Spanish', level: 6, category: 'language' },
	{ name: 'French', level: 4, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];