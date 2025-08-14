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
		linkedin: 'https://www.linkedin.com/in/viru-gurudath/',
		email: 'mailto:virugurudath@gmail.com',
		phone: 'tel:+1(604)968-5595',
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
	preview_description: string;
	description: string;
	images: { src: string; caption: string }[] | string;
	tags: string[];
};

export const projects: Project[] = [
	{
		title: 'Autonomous Solar Panel Cleaning Robot',
		preview_description:
			'A fully self-designed 12 kg, six-wheel rover built to restore and maintain peak solar panel performance.',
		description:
			'Dust and grime can cut photovoltaic efficiency by up to 30%, so this robot tackles the problem with dual cleaning rollers and a diaphragm-pump spray system, evenly applying cleaning solution through a 110° nozzle. Its custom PET-G chassis, Hall-encoded drive motors, and 3D-printed wheel cores deliver secure traction and precise dead-reckoning navigation—even on slick, angled glass.',
		images: [
			{ src: '/images/projects/robot/solar.png', caption: 'Final CAD Model' },
			{ src: '/images/projects/robot/full_assembly.png', caption: 'Full Assembly of Robot' },
			{ src: '/images/projects/robot/rope_rail.png', caption: 'Rope & Rail Guidance System - A motorised rope-and-rail safety gantry with a 110 mm drum and twin 24 V winch motors tether and retrieve the robot, enabling dependable climbs on pitches up to 50 °. It also tracks the robot\'s position and follows it, keeping the rope at the most optimal positions to stop the robot from sliding.' },
			{ src: '/images/projects/robot/circuit.png', caption: 'Circuit Wiring Diagram - Different voltage environments were needed for each system to ensure safe operation. 24V: Drum and Rail Motors, 12V: Locomotion Motors and Soap Pumps, 5V: Teensy, 3.3V: ESP' },
			{ src: '/images/projects/robot/io.png', caption: 'IO Pin Diagram' },
		],
		tags: ['SolidWorks', 'Arduino', 'Embedded Systems / C++', 'Fusion 360', 'Circuit Design'],
	},
	{
		title: 'Datacenter Human-Machine Interace',
		description:
			'Designed Manual Control, Automatic Real-Time Display, and EtherCAT Diagnostics pages to manage fan speeds, compressor states, and air handling parameters. Implemented user control modules with fault handling, enable logic, and custom alarm visual feedback, integrating branding elements for a professional operator interface. Delivered a production-ready system that enhanced technician usability and enabled direct supervisory control over environmental performance.',
		preview_description:
			'Developed and deployed a Human-Machine Interface (HMI) in Beckhoff TwinCAT 3 for real-time control and monitoring of HVAC systems in a live datacenter (DC-1) as part of a Capilano University–Hynes Group research project.',
		images: [
			{ src: '/images/projects/datacentre/centre.png', caption: 'Datacentre' },
			{ src: '/images/projects/datacentre/main.png', caption: 'Home page' },
			{ src: '/images/projects/datacentre/mc.png', caption: 'Main Control page - This page allows a user to toggle On/Off states of key HVAC machines within the datacenter.' },
			{ src: '/images/projects/datacentre/artd.png', caption: 'Automatic Real Time Control system - Includes all relevant boolean statuses. Additionally Aisle Temperatures and Pressures are displayed. Fan speeds are also visible.' },
		],
		tags: ['Beckhoff TwinCAT 3', 'C++', 'HTML5', 'JavaScript'],
	},
	{
		title: 'Arduino Robot Muscle',
		description: 'Developed a laser-cut tabletop “Master ARM” with potentiometer joints to stream scaled PWM signals to a full-scale “Slave ARM” made of wood/PLA and powered by four high-torque servos on a 7.5 V rail. Engineered a counter-weighted design capable of lifting >400 g at full extension, with each joint achieving ~250° sweep. Delivered a functional prototype meeting all performance specs; planned upgrades include a wearable master sleeve, +2 DOF, and encoder feedback for industrial tele-manipulation applications.',
		preview_description:
			'Designed and built a 4-DOF master–slave robotic arm capable of replicating operator motions in <300 ms with ±1 cm accuracy on a $323 budget.',
		images: [
			{ src: '/images/projects/arm/arm.png', caption: 'ARM' },
			{ src: '/images/projects/arm/base.png', caption: 'Base Joint Exploded View' },
			{ src: '/images/projects/arm/mcd.png', caption: 'Main Wiring Diagram - Illustrates Master-Slave configuration. Potentiometers send signals to Arduino which then send PWM signals to high torque Servo motors.' },
		],
		tags: ['SolidWorks', 'Circuit Design', 'Woodworking'],
	},
	{
		title: 'Building Energy & Information Management',
		description: 'Simulated air handling units, chilled water systems, CRAH/CRAC equipment, thermal zones, and server heat loads using BIM-aligned layouts. Analysed power consumption, pinpointed high-load equipment, and tested power scheduling strategies, projecting a 12% reduction in facility energy use. Delivered a validated model to support optimisation decisions, with scope for CFD and HMI integration.',
		preview_description:
			'Built a high-fidelity OpenStudio model of a Hynes Group datacenter HVAC system to identify and reduce energy losses.',
		images: [
			{ src: '/images/projects/bem/bem.png', caption: 'ARM' },
			{ src: '/images/projects/bem/dclm.png', caption: 'Datecenter Layout Model - Includes dimensioned aisles for sever racks.' },
			{ src: '/images/projects/bem/hvac.png', caption: 'Datacenter HVAC Flow Loop' },
		],
		tags: ['OpenStudio'],
	},
	{
		title: 'Floor Plan & BIM Personal Project',
		description:
			'This section includes personal Floor Plan Layouts I have drafted in AutoCAD and also results of Building Information Management (BIM) using Autodesk Revit. I believe this highlights my self-starter philosophy and illustrates my ability to adapt and assimilate quickly.',
		preview_description:
			'Created a system to monitor and analyze performance of solar panels and wind turbines for optimal energy production.',
		images: [
			{ src: '/images/projects/dim/dim.png', caption: 'ARM' },
			{ src: '/images/projects/dim/2d.png', caption: 'AutoCAD 2D Floor Plan Layout -- Designed and drafted a construction-ready floor plan using AutoCAD, showcasing precise room layouts, structural gridlines, and functional zoning. Organized elements with a structured layer system and applied industry-standard hatches and lineweights for clear, professional documentation. Ensured seamless readability for construction teams through clean annotations and architectural conventions.' },
			{ src: '/images/projects/dim/floor2.png', caption: '2nd Floor view - Visualized a complete two-storey residential structure with integrated balconies, curtain walls, and roofing, emphasizing exterior composition and architectural massing in Revit.' },
		],
		tags: ['AutoCAD', 'Revit'],
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
			'Degree with Distinction (2025)',
			'Dean\'s List 2021/22, 2020/21',
			'Oustanding International Student Award (2020)',
		],
	},
	{
		degree: 'International Baccalaureate Diploma Programme',
		field: 'Science and Mathematics',
		institution: 'Canadian International School',
		location: 'Bangalore, India',
		startDate: 'September 2016',
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
		id: '',
		url: '#',
		pdf: '#',
	},
	{
		title: 'IB Diploma',
		issuer: 'International Baccalaureate Diploma Programme',
		date: 'June 2023',
		id: '',
		url: '#',
		pdf: '#',
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
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};
;