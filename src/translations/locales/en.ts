// Add to your existing translations
export const en = {
  translation: {

    header: {
      about: 'About me',
      projects: 'My Projects',
      experience: 'Experience',
      resume: 'Resume',
      dev_projects: 'Development Projects',
      design_projects: 'Design Projects'
    },
    hero: {
      hello: 'Hello, my name is',
      role: 'Software Developer',
      ai: 'AI Enthusiast',
      design: 'Design Lover',
      tech: 'Technology Explorer'
    },
    about: {
      title: 'About Me',
      brief: 'I am Gabriel Cobo, a Computer Science student at UFABC and an agent development intern at Fintalk SA. Passionate about AI, design, and development, I am always exploring new technologies to transform ideas into projects. Click on \'Learn More\' and get to know me better!',
      knowMore: 'Learn More',
      devProjects: 'Development Projects',
      designProjects: 'Design Projects',
      devDescription: 'Explore my software development projects',
      designDescription: 'Check out my design work',
      seeProjects: 'See Projects'
    },
    contact: {
      title: 'Let\'s Talk?',
      description: 'I am always open to new opportunities and connections. If you have an interesting project, an opportunity, or just want to exchange ideas, don\'t hesitate to get in touch!',
      resume: 'Resume',
      seeResume: 'See Resume'
    },

    //About Me Page

    aboutMe: {
      title: 'About me',
      description: 'I am a developer passionate about AIs, currently studying Computer Science at UFABC. I work as an intern in conversational technology at Fintalk S.A., where I develop agents in JavaScript and automations focused on solution architecture.\nMy passion for technology began at ETEC, where I had my first contact with the universe of front-end, back-end, and data science. Since then, I have been seeking to deepen my knowledge with personal projects, such as a RAG-based agent and this portfolio in React. Besides programming, I have always been fascinated by visual arts, one of my biggest hobbies along with sports. Drawing sharpened my eye for design and led me to create promotional arts in projects where I also worked as a developer.',
      images: {
        profile1: 'Profile photo 1',
        profile2: 'Profile photo 2',
        profile3: 'Profile photo 3',
        profile4: 'Profile photo 4'

      },
      complementaryCourses: {
        title: 'Certificates',
        certified: 'Certified',
        inProgress: 'In progress',
        javascript: {
          title: 'Programming logic: dive into programming with JavaScript',
          description: 'Course focused on programming logic fundamentals using JavaScript as the base language.',
          provider: 'Alura',
          year: '2024'
        },
        htmlcss: {
          title: 'HTML and CSS: responsiveness with mobile-first',
          description: 'Development of responsive web interfaces focusing on the mobile-first approach.',
          provider: 'Alura',
          year: '2024'
        },
        git: {
          title: 'Git and Versioning',
          description: 'Version control and good collaboration practices in software projects.',
          provider: 'Ada',
          year: '2024'
        },
        apirest: {
          title: 'API Rest',
          description: 'Development and consumption of RESTful APIs for system integration.',
          provider: 'Ada',
          year: '2024'
        },
        aws: {
          title: 'Amazon Web Services (AWS)',
          description: 'Fundamentals of cloud computing and AWS platform services.',
          provider: 'AWS Skill Builder',
          year: 'In progress',
        }
      },
      languages: {
        title: 'Languages',
        portuguese: {
          name: 'Portuguese',
          level: 'Native',
          skills: []
        },
        english: {
          name: 'English',
          level: 'Intermediate',
          skills: []
        },
        italian: {
          name: 'Italian',
          level: 'Basic',
          skills: []
        }
      },
    },
    timeline: {
      title: 'Timeline',
      events: [
        {
          year: '2019 - 2020',
          title: 'Systems Development',
          description: 'ETEC de Mauá',
          targetId: 'etec-experience'
        },
        {
          year: '2021 - 2026',
          title: 'UFABC Bachelor\'s Degrees',
          description: 'Science and Technology / Computing',
          targetId: 'compsci-experience',
          secondaryTargetId: 'scitech-experience'
        },
        {
          year: '2023 - 2024',
          title: 'Inclusive Monitoring',
          description: 'Federal University of ABC (UFABC)',
          targetId: 'monitoria-experience'
        },
        {
          year: '2024 - 2025',
          title: 'IEEE Designer',
          description: 'IEEE UFABC',
          targetId: 'ieee-experience'
        },
        {
          year: '2024 - Present',
          title: 'Fintalk',
          description: 'Development Internship',
          targetId: 'fintalk-experience'
        }
      ]
    },
    experiences: {
      fintalk: {
        title: "Fintalk",
        subtitle: "Conversational Technology Internship",
        paragraph1: "At Fintalk, a company focused on AI solutions, I worked directly on developing conversational flows for intelligent agents. I used JavaScript to structure dynamic dialogues and integrated with various APIs, ensuring that the bots met the specific needs of each client. To orchestrate and automate these flows, I worked with the n8n platform, which allowed me to create scalable and adaptable solutions for different service scenarios.",
        paragraph2: "In addition to development, I monitor agents using Datadog, tracking metrics, logs, and alerts to ensure the stability and performance of the delivered solutions. This proactive approach was essential to identify and resolve potential bottlenecks or failures before they impacted end users. I also participated in customer service, responding to incident tickets and collaborating for quick problem resolution, which gave me a broader view of the product lifecycle.",
        paragraph3: "My experience at Fintalk also involved an analytical approach to conversational flow data, looking for patterns and opportunities for continuous improvement. I had the opportunity to test internal software, acting almost as a QA, which expanded my understanding of quality, usability, and reliability of solutions. This multidisciplinary experience allowed me to develop technical and interpersonal skills essential for the conversational technology environment."
      },
      etec: {
        title: "ETEC",
        subtitle: "Technical Education",
        paragraph1: "At ETEC, I received comprehensive technical education in software development and web technologies. The program provided me with a solid foundation in both front-end and back-end development, as well as mobile application development.",
        paragraph2: "I participated in various practical projects that allowed me to apply theoretical knowledge to real-world scenarios, developing both individual and team solutions. This experience was crucial for developing my problem-solving skills and technical proficiency."
      },
      sciTech: {
        title: "Bachelor's Degree in Science and Technology",
        subtitle: "Academic Studies",
        paragraph1: "The Bachelor's Degree in Science and Technology provided me with a solid foundation in the fundamental sciences that underpin modern technology, emphasizing analytical thinking and problem-solving through rigorous courses in various scientific disciplines.",
        paragraph2: "Through laboratory work and theoretical studies, I developed a deeper understanding of the physical world and the mathematical principles that describe it. This interdisciplinary approach has been invaluable in my technical work, allowing me to approach problems from multiple perspectives."
      },
      compSci: {
        title: "Bachelor's Degree in Computer Science",
        subtitle: "Academic Studies",
        paragraph1: "My education in Computer Science equipped me with theoretical knowledge and practical skills in software development, algorithms, and data structures. The program emphasized problem-solving and computational thinking across various domains of computer science.",
        paragraph2: "I gained experience in object-oriented programming principles, database management, and modern software development methodologies. Additionally, I explored emerging technologies such as Large Language Models (LLMs), enhancing my ability to work with AI-based solutions."
      },
      monitoriaExperience: {
        title: "Inclusive Monitoring",
        subtitle: "UFABC (2023-2024)",
        paragraph1: "I worked as an inclusive monitor at UFABC, assisting students with special needs in specific disciplines.",
        paragraph2: "I developed adapted materials and personalized teaching strategies to ensure accessibility and effective learning."
      },
      ieeeExperience: {
        logoAlt: "IEEE UFABC Logo",
        title: "IEEE Designer",
        subtitle: "IEEE UFABC (2024-2025)",
        paragraph1: "As a designer in the IEEE student branch at UFABC, I created visual materials for events, workshops, and social media.",
        paragraph2: "I develop visual identities for technical and scientific projects, contributing to the dissemination of knowledge in engineering and technology."
      },
      techTitles: {
        developedSkills: "Developed Skills",
        toolsAndSkills: "Tools and Skills"
      },
      technologies: {
        teaching: "Adaptive Teaching",
        accessibility: "Accessibility",
        communication: "Communication",
        patience: "Patience",
        empathy: "Empathy",
        photoshop: "Adobe Photoshop",
        illustrator: "Adobe Illustrator",
        uiux: "UI/UX",
        graphicDesign: "Graphic Design",
        visualCommunication: "Visual Communication",
        javascript: "JavaScript",
        n8n: "n8n (Automation)",
        python: "Python",
        datadog: "Datadog",
        dataAnalysis: "Data Analysis",
        logMonitoring: "Log Monitoring",
        alertConfig: "Alert Configuration",
        api: "API",
        html: "HTML",
        css: "CSS",
        java: "Java",
        androidStudio: "Android Studio",
        php: "PHP",
        sql: "SQL",
        oop: "Object-Oriented Programming",
        llm: "LLM"
      },
      technologiesUsed: "Technologies Used",
      technologiesLearned: "Technologies Learned",
      areasOfStudy: "Areas of Study",
      technologiesAndConcepts: "Technologies and Concepts",
      subjects: {
        physics: "Physics",
        calculus: "Calculus",
        chemistry: "Chemistry",
        mechanics: "Mechanics",
        thermodynamics: "Thermodynamics",
        statistics: "Statistics"
      },
    },
    skills: {
      title: 'My Skills',
      seeMore: 'See More',
      seeMoreDesc: 'Explore all my skills',
      mainTitle: "Skills",
      technicalTitle: "Technical",
      platformsTitle: "Platforms and Tools",
      softTitle: "Soft Skills",
      platforms: {
        vscode: "VS Code"
      },
      soft: {
        creativity: "Creativity",
        teamwork: "Teamwork",
        agile: "Agile Methods"
      },
      context: {
        javascript: "Professional experience in the internship at Fintalk, focusing on developing robust and typed solutions.",
        java: "Solid training at ETEC and UFABC, applied in academic and personal projects with a focus on OOP.",
        python: "Development of automation scripts and tools for data processing and analysis.",
        flutter: "Development of cross-platform mobile applications for academic projects and personal solutions.",
        react: "Creation of modern and responsive interfaces, including this portfolio and other web projects.",
        sql: "Modeling and querying relational databases, with application in academic and professional projects.",
        firebase: "Implementation in projects such as UFABConecta, using authentication, database, and hosting.",
        git: "Version control in all projects, with experience in collaborative workflows.",
        html: "Experience since training at ETEC, focusing on semantics and accessibility in web projects.",
        css: "Development of responsive and stylized interfaces since the first contacts at ETEC.",
        oop: "Application of OOP principles in personal and academic projects, focusing on reusable and organized code.",
        datadog: "Log monitoring and implementation of alert systems for proactive failure detection in APIs.",
        n8n: "Creation of automation flows to optimize processes and integrations between different systems.",
        api: "Development, consumption, and handling of RESTful APIs as a fundamental part of activities at Fintalk.",
        agile: "Experience with Scrum methodologies and sprints at Fintalk, applying agile principles for continuous delivery of value.",
        creativity: "Constant development through creative readings and practices, seeking innovative solutions for complex problems.",
        teamwork: "Effective collaboration in academic and professional environments, focusing on communication and synergy for superior results.",
        dataAnalysis: "Interpretation of metrics and indicators for data-driven decision making.",
        logMonitoring: "Implementation of solutions for continuous monitoring of application performance.",
        alertConfig: "Definition of parameters and thresholds for proactive notifications in case of anomalies.",
        vscode: "Main development environment for web and general programming."
      }
    },

    //Projects Pages
    projects: {
      title: 'My Projects',
      intro: 'I combine my passion for code with my love for design. This duality allows me to create solutions that are not only functional but also visually appealing.',
      dev: {
        title: 'Development Projects',
        description: 'Development of web, mobile, and desktop applications with a focus on user experience and performance',
        count: 'Projects',
        techCount: 'Technologies'
      },
      design: {
        title: 'Design Projects',
        description: 'Creation of posts, logos, and designs with attention to detail and UI/UX principles',
        count: 'Designs',
        toolCount: 'Tools'
      },
      seeProjects: 'See Projects'
    },
    devProjects: {
      title: 'My Development Projects',
      intro: 'Here are some of my most recent development projects. Each project is a demonstration of my skill in web, mobile, and desktop development.',
      projects: {
        ufabcAgent: {
          title: 'UFABC Intelligent Agent',
          description: 'Virtual assistant that uses RAG (Retrieval Augmented Generation) to answer questions about UFABC, with data automatically extracted from the university\'s official websites.'
        },
        portfolio: {
          title: 'React Portfolio',
          description: 'Personal website developed with React and TypeScript, with support for multiple languages and responsive design. You are browsing it now!'
        },
        discoteca: {
          title: 'Online Record Store',
          description: 'Responsive website of a virtual record store with album carousel, music categories, and adaptable layout for different screen sizes.'
        },
        cg: {
          title: 'Computer Graphics Project',
          description: 'Interactive 3D implementation of a Minecraft-style character using OpenGL, with animations, different skins, and dynamic lighting system.'
        },
        httpServer: {
          title: 'HTTP Server in Python',
          description: 'Simple HTTP server implemented in Python that serves static HTML pages, including a Pokedex with detailed information about Pokémon.'
        },
        secretNumber: {
          title: 'Secret Number Game',
          description: 'Guessing game where the user tries to discover a secret number between 0 and 100, with visual hints and attempt counting.'
        },
        coboCubo: {
          title: 'Cobo Cube',
          description: 'A 3D game developed in Unity where you control a cube that moves on the X and Y axes, avoiding obstacles falling from the sky. The goal is to survive as long as possible while the difficulty progressively increases.'
        },
        crisAdventures: {
          title: "Cris' Adventures",
          description: "Cristina is a professor at UFABC, constantly needing to prepare her classes. In one of her ideas, she decides to catalog the risks of her routine, classify them, and use them during her explanations in class. Help Cris find and classify the risks of her routine."
        }
      }
    },
    designProjects: {
      title: "My Design Projects",
      description: "A collection of my design work, including Instagram posts, Pixel Arts, visual identity, and digital arts.",
      sections: {
        projects: "Projects",
        studyArts: "Study Arts",
        drawings: "Drawings",
        pixelArt: "Pixel Art"
      },
      projects: {
        conectaLaunch: {
          title: "Official Conecta Launch",
          description: "Official launch of the UFABConecta app on Android"
        },
        betaIOS: {
          title: "iOS Beta",
          description: "Announcement of the open beta on iOS"
        },
        cincoMil: {
          title: "5 Thousand Downloads",
          description: "Celebration of an important milestone of app downloads"
        },
        dataSphere: {
          title: "DataSphere Logo",
          description: "Logo design and visual identity for the DataSphere project"
        },
        carrossel: {
          title: "Promotional Carousel",
          description: "Promotional carousel design for mobile application"
        },
        ieeeCarrossel: {
          title: "IEEE Carousel",
          description: "Promotional carousel design for the IEEE project"
        },
        instagram: {
          title: "CS IEEE Instagram Concept",
          description: "Visual Identity Proposal for CS IEEE Instagram"
        },
        webCS: {
          title: "WebCS Selection Process and Logo Creation",
          description: "Promotional image for the selection process and Creation of the WebCS project logo"
        },
        restauraCS: {
          title: "Restaura CS Selection Process",
          description: "Promotional image for the Restaura CS selection process"
        }
      },
      drawings: {
        capybara: {
          title: "UFABConecta Capybara",
          description: "Creation of the mascot and agent persona in the UFABConecta project"
        },
        gokussj: {
          title: "Goku SSJ4",
          description: "First drawing using a graphics tablet"
        },
        dragao: {
          title: "UFABC Dragon",
          description: "Drawing using the concept of augmented reality"
        },
        pxgohan: {
          title: "PixelArt Gohan",
          description: "Finished drawing in pixelart style"
        },
        pxeren: {
          title: "PixelArt Eren",
          description: "Character sketch in pixelArt style"
        },
        pxgoku: {
          title: "PixelArt Goku",
          description: "Pixel Art study of Goku, using a reduced canvas"
        },
        dluckytails: {
          title: "SuperLuckyTails",
          description: "Drawing study made with the mouse"
        },
        dspyro: {
          title: "Spyro",
          description: "Drawing study made with the mouse"
        },
        dori: {
          title: "Ori",
          description: "Drawing study made with the mouse"
        }
      },
      pixelArt: {
        criscasual: {
          title: "Cris' Adventures casual",
          description: "Creation/Editing of character sprites casual skin"
        },
        crisjaleco: {
          title: "Cris' Adventures lab coat",
          description: "Creation/Editing of character sprites lab coat skin"
        },
        devs: {
          title: "Game developer characters",
          description: "Creation of the game developers' characters"
        },
        quarto: {
          title: "Cris'Adventures Room Scenario",
          description: "Creation/Editing of room sprites"
        },
        casa: {
          title: "Cris'Adventures House Scenario",
          description: "Creation/Editing of house sprites"
        },
        ufabc: {
          title: "Cris'Adventures UFABC Scenario",
          description: "Creation of UFABC sprites"
        },
      }
    },

    common: {
      tools: {
        photoshop: "Photoshop",
        illustrator: "Illustrator",
        paint: "Paint",
        pixil: "Pixil",
        mesa: "Graphics Tablet"
      },
      enlargedView: "Enlarged view"
    },

    resume: {
      title: 'My Resume'
    }
  }
};