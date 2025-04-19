import { Course, CourseMap } from '../types/Course';

export class CourseCatalogService {
    // Comprehensive DCS courses data manually extracted from the catalog
    private static readonly DEFAULT_DCS_COURSES: CourseMap = {
        '105': {
            code: 'DCS 105',
            fullTitle: 'Calling Bull: Data Literacy and Information Science',
            prerequisites: 'None',
            modesofInquiry: '[QF], [SR]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Eaton, Carrie',
            departmentAttribute: '(DCS: Critical Digital St.)(DCS: Praxis)',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Hones digital citizenship skills by spotting, dissecting, and refuting false claims based on quantitative analysis. Explores case studies in policy and science, with examples including election misinformation, health risk interpretation, and facial recognition algorithms.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '106': {
            code: 'DCS 106',
            fullTitle: 'TechnoGenderCulture',
            prerequisites: 'None',
            modesofInquiry: '[AC]',
            writingCredit: 'None',
            GEC: 'C027, C091',
            Instructor: 'Shrout, Anelise',
            departmentAttribute: '(DCS: Critical Digital St.)(DCS: Praxis)',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Explores contemporary problems at the intersection of gender and technology through science/technology studies and gender/sexuality studies approaches.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '109D': {
            code: 'DCS 109D',
            fullTitle: 'Introduction to Computer Science for Data Analysis',
            prerequisites: 'None',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Castro, Jason',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Introduction to computational thinking using Python for problems in brain research and experimental science. Covers data structures, flow control, OOP, and applications in image processing and neural networks.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '109R': {
            code: 'DCS 109R',
            fullTitle: 'Introduction to Computer Science Using Robots',
            prerequisites: 'None',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Ricci, Andy Elliot',
            departmentAttribute: '(DCS: Programming & Theory)',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Introduces computer science and Python programming in the context of robotics. Covers conditional statements, iteration, abstraction, and problem-solving through robot control.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '109S': {
            code: 'DCS 109S',
            fullTitle: 'Intro to Computer Science for Software Development',
            prerequisites: 'None',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Lawson, Barry',
            departmentAttribute: '(DCS: Programming & Theory)',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Introduction to computational thinking via Python programming for broad software applications. Covers data structures, algorithms, OOP, and applications in image processing and DNA analysis.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '109T': {
            code: 'DCS 109T',
            fullTitle: 'Intro to Computer Science for Text Analysis',
            prerequisites: 'None',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Shrout, Anelise',
            departmentAttribute: '(DCS: Programming & Theory)',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Introduction to computational thinking via Python programming for humanities and text analysis applications. Focuses on systematic problem-solving for scholarly applications.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '117': {
            code: 'DCS 117',
            fullTitle: 'Introduction to Data Science: Data Visualization',
            prerequisites: 'None',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Baker, Laurie',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Introduction to data science through visualization using R. Covers data cleaning, descriptive statistics, and creating/critiquing visualizations. No prior experience required.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '170': {
            code: 'DCS 170',
            fullTitle: 'Introduction to Digital Media',
            prerequisites: 'None',
            modesofInquiry: '[CP]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Smith, Courtney',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Explores digital media in performing arts, covering technology, creativity, and communities. Examines history and technologies in projection/video design.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '204': {
            code: 'DCS 204',
            fullTitle: 'Archives, Data, and Analysis',
            prerequisites: 'One 100-level DCS course',
            modesofInquiry: '[HS], [SR]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Shrout, Anelise',
            departmentAttribute: '(DCS: Critical Digital St.)(DCS: Praxis)',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Computational humanities course where students work with archives through data structuring and quantitative analysis to create digital humanities projects.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '206': {
            code: 'DCS 206',
            fullTitle: 'The Past, Present, and Possible Dystopian Future of Computing',
            prerequisites: 'None (recommended: critical studies DCS course)',
            modesofInquiry: '[CP]',
            writingCredit: '[W2]',
            GEC: 'None',
            Instructor: 'Eaton, Carrie',
            departmentAttribute: '(DCS: Critical Digital St.)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Examines computing history and future through film/literature, focusing on power dynamics, data uses/abuses, and technological consequences in society.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '209': {
            code: 'DCS 209',
            fullTitle: 'Pixelated Parts: Race, Gender, Video Games',
            prerequisites: 'None',
            modesofInquiry: '[AC], [HS]',
            writingCredit: 'None',
            GEC: 'C009',
            Instructor: 'Rubin, Josh',
            departmentAttribute: '(DCS: Critical Digital St.)(DCS: Praxis)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Examines race, gender, and sexuality in video games, including production processes, player communities, and material interactions with gaming technologies.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '210': {
            code: 'DCS 210',
            fullTitle: 'Programming for Data Analysis and Visualization',
            prerequisites: 'One DCS course',
            modesofInquiry: '[QF], [SR]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'TBA, Staff',
            departmentAttribute: '(DCS: Praxis)(DCS: Programming & Theory)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Teaches R programming for quantitative data analysis and visualization. Covers data manipulation, analysis techniques, and effective data presentation methods.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '211': {
            code: 'DCS 211',
            fullTitle: 'Computing for Insight',
            prerequisites: 'DCS 109, 111, or 210',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Lawson, Barry',
            departmentAttribute: '(DCS: Praxis)(DCS: Programming & Theory)',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Advanced programming course applying software composition to interdisciplinary problems. Covers data structures, algorithms, data visualization, machine learning, and modeling.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '212': {
            code: 'DCS 212',
            fullTitle: 'Digital History Methods',
            prerequisites: 'None',
            modesofInquiry: '[HS]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Shrout, Anelise',
            departmentAttribute: '(DCS: Critical Digital St.)(DCS: Praxis)(History: Modern)(History: United States)',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Merges traditional historical methods with digital tools to develop new methodologies for collecting, analyzing, and disseminating historical knowledge.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '216': {
            code: 'DCS 216',
            fullTitle: 'Computational Physics',
            prerequisites: 'MATH 106 and (PHYS 108 or PHYS S31); MATH 205 may be concurrent',
            modesofInquiry: '[QF], [SR]',
            writingCredit: 'None',
            GEC: 'C006',
            Instructor: 'Oishi, Jeffrey',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Introduction to computational methods for simulating physical systems, with applications in astrophysics, population dynamics, traffic flow, and materials science.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '219': {
            code: 'DCS 219',
            fullTitle: 'Composing Sonic Systems',
            prerequisites: 'None (recommended: arts or programming experience)',
            modesofInquiry: '[CP]',
            writingCredit: 'None',
            GEC: 'C005',
            Instructor: 'Tamirisa, Asha',
            departmentAttribute: '(DCS: Praxis)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Uses Pure Data environment to create software-based sound compositions exploring computational concepts like randomness, signal processing, and feedback.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '229': {
            code: 'DCS 229',
            fullTitle: 'Data Structures and Algorithms',
            prerequisites: 'DCS 109 or 111',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Lawson, Barry',
            departmentAttribute: '(DCS: Programming & Theory)',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Introduction to common data structures (arrays, stacks, queues, trees) and algorithms (sorting, graph-search) with focus on problem-solving applications.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '252': {
            code: 'DCS 252',
            fullTitle: 'Philosophy of Cognitive Science',
            prerequisites: 'One course in philosophy, psychology, or neuroscience',
            modesofInquiry: '[AC]',
            writingCredit: 'None',
            GEC: 'C031',
            Instructor: 'Dacey, Mike',
            departmentAttribute: 'None',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Examines conceptual foundations of cognitive science, integrating perspectives from psychology, neuroscience, linguistics, computer science, and philosophy.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '301C': {
            code: 'DCS 301C',
            fullTitle: 'Public History in the Digital Age',
            prerequisites: 'None',
            modesofInquiry: '[HS]',
            writingCredit: '[W2]',
            GEC: 'C091',
            Instructor: 'Shrout, Anelise',
            departmentAttribute: '(DCS: Critical Digital St.)(DCS: Praxis)(History: Modern)(History: United States)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Community-engaged course exploring digital forms of public history through websites, social media, and interactive experiences, with focus on diverse voices.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '305': {
            code: 'DCS 305',
            fullTitle: 'Digital Maps, Space, and Place',
            prerequisites: 'One 200-level DCS course',
            modesofInquiry: '[CP]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Shrout, Anelise',
            departmentAttribute: '(DCS: Critical Digital St.)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Examines how maps encode power and represent cultural understandings of space, with focus on geospatial analysis tools and linking historical to modern geography.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '306': {
            code: 'DCS 306',
            fullTitle: 'Animal Learning',
            prerequisites: 'NRSC/PSYC 160 or 200, PSYC 222, 230, or 250',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Castro, Jason',
            departmentAttribute: 'None',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Examines classical/operant conditioning, biological constraints on learning, and cognitive processes in animal learning.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '307': {
            code: 'DCS 307',
            fullTitle: 'Theory and Implementation of Computer Simulation Models',
            prerequisites: 'DCS 211 or 229',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Lawson, Barry',
            departmentAttribute: '(DCS: Praxis)(DCS: Programming & Theory)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Covers discrete-event simulation, Monte Carlo methods, stochastic modeling, and output analysis. Students implement queuing and agent-based models in R/Python.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '316': {
            code: 'DCS 316',
            fullTitle: 'PIC Math: Community Engaged Data Science',
            prerequisites: 'MATH 205 and 206',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'C091',
            Instructor: 'TBA, Staff',
            departmentAttribute: '(DCS: Praxis)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'Yes',
            description: 'Team-based research solving problems for community partners, developing mathematical/programming skills alongside teamwork and communication abilities.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '317': {
            code: 'DCS 317',
            fullTitle: 'Algorithms & Theory of Computation',
            prerequisites: 'DCS 229',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Lawson, Barry',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Covers algorithm design/analysis (divide & conquer, dynamic programming) and computation theory (P vs NP, Turing machines, undecidability).',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '319': {
            code: 'DCS 319',
            fullTitle: 'The Future of Work at the Human-Technology Frontier',
            prerequisites: 'None',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'TBA, Staff',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Examines privilege, power, and labor in digital economies through feminist and critical digital studies approaches, including AI/ML and digital activism.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '320': {
            code: 'DCS 320',
            fullTitle: 'Health Informatics and Digital Health: Data, Systems, and Innovations in Healthcare',
            prerequisites: 'DCS 109 or 111; and one of: DCS 211, 229, BIO 202, or permission',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Agbonkhese, Chris',
            departmentAttribute: 'None',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Covers health information systems, EHRs, clinical decision support, health data analysis using ML, and digital health innovations like telemedicine and wearables.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '325': {
            code: 'DCS 325',
            fullTitle: 'Introduction to Web Development',
            prerequisites: 'DCS 109 or 111',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Lawson, Barry',
            departmentAttribute: 'None',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Full-stack web development covering HTML/CSS/JavaScript, React, back-end frameworks (Django/Flask), UI/UX concepts, and working with clients.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '331': {
            code: 'DCS 331',
            fullTitle: 'Mathematics for Machine Learning',
            prerequisites: 'MATH 205',
            modesofInquiry: '[QF], [SR]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Sanogo, Fatou',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Covers linear regression, bias-variance tradeoff, regularization, trees, random forests, SVMs, PCA, and clustering, with implementation in R/Python.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '351': {
            code: 'DCS 351',
            fullTitle: 'Computational Macroeconomics',
            prerequisites: 'ECON 255 and 270',
            modesofInquiry: '[QF], [SR]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Chakraborty, Pubali; Sen, Anamika',
            departmentAttribute: 'None',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Introduction to computational methods for solving dynamic general equilibrium models used in modern macroeconomic analysis of growth, fluctuations, and policy.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '355A': {
            code: 'DCS 355A',
            fullTitle: 'Numerical Analysis',
            prerequisites: 'MATH 106 and 205',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'C006',
            Instructor: 'TBA, Staff',
            departmentAttribute: '(DCS: Programming & Theory)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Studies numerical algorithms for interpolation, approximation, equation solving, integration, differential equations, and linear systems with mathematical focus.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '355D': {
            code: 'DCS 355D',
            fullTitle: 'Chaotic Dynamical Systems',
            prerequisites: 'MATH 205',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'C006',
            Instructor: 'Ross, Chip',
            departmentAttribute: '(DCS: Programming & Theory)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Explores chaotic dynamics through theoretical and computational approaches, covering attractors, bifurcations, and applications in biology/physics.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '355H': {
            code: 'DCS 355H',
            fullTitle: 'Numerical Linear Algebra',
            prerequisites: 'MATH 205',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'C006',
            Instructor: 'TBA, Staff',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Focuses on computational methods for solving linear algebra problems including systems of equations, least squares, and eigenvalue problems.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '357': {
            code: 'DCS 357',
            fullTitle: 'Computational Neuroscience',
            prerequisites: 'NRSC/PSYC 160',
            modesofInquiry: '[SR]',
            writingCredit: '[W2]',
            GEC: 'None',
            Instructor: 'Castro, Jason',
            departmentAttribute: 'None',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Survey of tools for analyzing high-dimensional neuroscience data in perception, genomics, and neural coding, emphasizing data exploration and modeling.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '360': {
            code: 'DCS 360',
            fullTitle: 'Independent Study',
            prerequisites: 'Permission of instructor',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'TBA, Staff',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Individually designed course of study or research in digital/computational studies with faculty sponsorship and department approval.',
            credits: 'Variable credit',
            lastUpdated: Date.now()
        },
        '368': {
            code: 'DCS 368',
            fullTitle: 'Data Science for Economists',
            prerequisites: 'ECON 255 and ECON 260 or 270',
            modesofInquiry: '[QF]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'TBA, Staff',
            departmentAttribute: '(DCS: Praxis)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Applies econometric techniques to large datasets, covering data acquisition, visualization, programming efficiency, and ethical considerations in economic analysis.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        '375': {
            code: 'DCS 375',
            fullTitle: 'Network Analysis',
            prerequisites: 'DCS 204',
            modesofInquiry: '[SR]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Eaton, Carrie; Shrout, Anelise',
            departmentAttribute: '(DCS: Critical Digital St.)(DCS: Praxis)(DCS: Programming & Theory)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Introduces network analysis for studying social, biological, and information systems, covering terminology, theory, and data analysis/visualization tools.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        'S13': {
            code: 'DCS S13',
            fullTitle: 'Computation & Mathematical Art',
            prerequisites: 'Any college-level math course, DCS 109, or 111',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'TBA, Staff',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Explores mathematical/computational art concepts through historical examples and hands-on projects including crochet, with focus on information storage history.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        'S16': {
            code: 'DCS S16',
            fullTitle: 'Infrastructures',
            prerequisites: 'None',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Herzig, Rebecca',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Examines material impacts of digital technologies through infrastructure studies, covering resource depletion, energy consumption, and sustainability efforts.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        'S17': {
            code: 'DCS S17',
            fullTitle: 'Modeling & Data Analysis in the Physical Sciences',
            prerequisites: 'None',
            modesofInquiry: '[QF], [SR]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Payne, Becca',
            departmentAttribute: 'None',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Explores model use across physical sciences through lecture/lab format, enabling students to conduct data-driven research projects regardless of coding background.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        'S31': {
            code: 'DCS S31',
            fullTitle: 'Human-Robot Interaction Design Workshop',
            prerequisites: 'One DCS course or permission',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Ricci, Andy Elliot',
            departmentAttribute: '(DCS: Critical Digital St.)(DCS: Praxis)',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Team-based design of human-robot interaction systems, covering HRI theory and iterative design/evaluation processes without requiring robotics experience.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        'S33': {
            code: 'DCS S33',
            fullTitle: 'Introduction to Web Development',
            prerequisites: 'DCS 109 or 111',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Lawson, Barry',
            departmentAttribute: 'None',
            classRestriction: 'Not open to: First-Years',
            instructorPermissionRequired: 'No',
            description: 'Short-term version of full-stack web development course covering client-side technologies, server frameworks, UI/UX concepts, and client work.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        'S34': {
            code: 'DCS S34',
            fullTitle: 'Data, AI, and Society: Ethical Implications in Research and Practice',
            prerequisites: 'MATH 117, DCS 204, 210, 211, or 375, or permission',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'TBA, Staff',
            departmentAttribute: '(DCS: Critical Digital St.)(DCS: Praxis)',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Examines ethical challenges in data science/AI including privacy, bias, and governance through case studies, with final project developing ethical safeguards or teaching materials.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        },
        'S45T': {
            code: 'DCS S45T',
            fullTitle: 'Mathematical Image Processing',
            prerequisites: 'MATH 205 or 206',
            modesofInquiry: 'None',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Ott, Katy',
            departmentAttribute: '(DCS: Programming & Theory)',
            classRestriction: 'None',
            instructorPermissionRequired: 'No',
            description: 'Covers mathematical foundations of image processing techniques including filtering, enhancement, edge detection, and segmentation implemented in MATLAB.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        }, 'S51A': {
            code: 'DCS S51A',
            fullTitle: 'STIP: Rethinking Archives, Data and Analysis: Critical Approaches to Archival Data and Bates College',
            prerequisites: 'AMST 204, DCS 104, or 204',
            modesofInquiry: '[AC], [HS]',
            writingCredit: 'None',
            GEC: 'None',
            Instructor: 'Shrout, Anelise',
            departmentAttribute: '(DCS: Critical Digital St.)',
            classRestriction: 'None',
            instructorPermissionRequired: 'Yes',
            description: 'Reimagines AMST/DCS 204 with focus on Bates College history through critical archival/data studies and computational methods centering race, power, and colonialism.',
            credits: 'One course credit',
            lastUpdated: Date.now()
        }
    }

      public static fetchDCSCourses(): CourseMap {
    console.log('Using default course data');
    // Simply return the default courses
    return this.DEFAULT_DCS_COURSES;
}
    
    public static formatCourse(course: Course): string {
    let result = `${course.code}: ${course.fullTitle}\n`;
    result += `Prerequisites: ${course.prerequisites}\n`;

    if (course.modesofInquiry) {
        result += `Modes of Inquiry: ${course.modesofInquiry}\n`;
    }

    if (course.writingCredit) {
        result += `Writing Credit: ${course.writingCredit}\n`;
    }

    if (course.GEC) {
        result += `GEC: ${course.GEC}\n`;
    }

    if (course.Instructor) {
        result += `Instructor: ${course.Instructor}\n`;
    }

    if (course.departmentAttribute) {
        result += `Department Attribute: ${course.departmentAttribute}\n`;
    }

    if (course.classRestriction) {
        result += `Class Restriction: ${course.classRestriction}\n`;
    }

    if (course.instructorPermissionRequired) {
        result += `Instructor Permission Required: ${course.instructorPermissionRequired}\n`;
    }

    if (course.description) {
        result += `Description: ${course.description}\n`;
    }

    if (course.credits) {
        result += `Credits: ${course.credits}\n`;
    }

    if (course.crosslisted && course.crosslisted.length > 0) {
        result += `Cross-listed with: ${course.crosslisted.join(', ')}\n`;
    }    return result;
}
}

