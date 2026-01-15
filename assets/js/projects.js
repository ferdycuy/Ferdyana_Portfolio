const myProjects = [
    {
        title: "Nazmalogy Company Profile & Community",
        client: "nazmalogy.com",
        img: "assets/img/nazmalogy.png", 
        tech: ["php", "laravel", "nodejs", "tailwindcss", "mysql", "livewire", "nginx"],
        demo: "https://nazmalogy.com",
        isPrivate: false,
        desc: "A dynamic Company Profile website equipped with a community interaction platform. This site serves as a central hub for company services and an active communication space for users.",
        details: [
            "Developed a multi-role system (Superadmin, Admin, and User) to maintain high security and organized data management.",
            "Built an active community platform allowing users to create posts, like content, and leave comments.",
            "Provided a dynamic training management module to update Public and Online Training data flexibly via the dashboard.",
            "Integrated an AI-powered Chatbot virtual assistant to enhance user experience by providing instant service information.",
            "Managed server configuration and deployment on VPS using Nginx, combining Laravel, Node.js, and Livewire for a dynamic performance."
        ]
    },
    {
        title: "Tournament Registration System",
        client: "IPSI Cikarang",
        img: "assets/img/project2.1.png",
        tech: ["php", "laravel", "javascript", "nodejs", "tailwindcss", "github", "mysql"],
        demo: "https://cs-championship.com",
        isPrivate: false,
        desc: "Together with the team, I contributed to the development of this tournament registration system, taking primary responsibility for the frontend and partial involvement in the backend. My tasks included:",
        details: [
            "Designing and implementing a responsive, intuitive, and user-friendly frontend interface.",
            "Implementing a multi-role user system, including an admin role for managing tournaments and a participant role for registration and interaction.",
            "Building a comprehensive tournament registration feature, including participant forms, validation, and administrative approval workflow.",
            "Creating digital certificates for participants, downloadable and embedded with QR codes for authenticity verification.",
            "Collaborating efficiently with team members using GitHub for version control and collective development integration."
        ]
    },
    {
        title: "Publisher Nazmalogy",
        client: "publisher.nazmalogy.com",
        img: "assets/img/publisher.png", 
        tech: ["php", "laravel", "javascript", "nodejs", "tailwindcss", "mysql"],
        demo: "https://publisher.nazmalogy.com",
        isPrivate: false,
        desc: "A professional book publishing service platform. This website enables authors to register their manuscripts and transparently monitor the publishing process through an integrated system.",
        details: [
            "Developed structured digital manuscript upload and management features for authors and internal teams.",
            "Built a comprehensive Administration Dashboard to manage author data, book catalogs, and publication service orders.",
            "Implemented a modern, responsive UI using Tailwind CSS, ensuring adaptability across mobile, tablet, and desktop devices.",
            "Provided a real-time publication tracking system for authors to monitor the progress of their book production.",
            "Designed a relational MySQL database schema for secure storage of documents, book metadata, and client information."
        ]
    },
    {
        title: "Human Resource Information System",
        client: "PT.Syifa Tekno",
        img: "assets/img/project1.1.png",
        tech: ["php", "laravel", "javascript", "react", "tailwindcss", "mysql", "git", "jira"],
        demo: "/",
        isPrivate: true,
        desc: "In this project, I contributed to the development and enhancement of various features within the Human Resource Information System (HRISY), including:",
        details: [
            "Integrated Google SSO for seamless and secure login.",
            "Developed a company settings module to manage organizational configurations.",
            "Built full CRUD functionalities for managing employee family member data.",
            "Migrated image storage from local server to Google Cloud Storage (S3-compatible).",
            "Designed and implemented RESTful APIs to support scalable front-end integrations."
        ]
    },
    {
        title: "Computer Laboratory Attendance",
        client: "Universitas Pelita Bangsa",
        img: "assets/img/project3.1.png",
        tech: ["php", "laravel", "javascript", "bootstrap", "mysql"],
        demo: "https://absensi.labinformatika.com",
        isPrivate: false,
        desc: "A system I developed to enhance and expand the existing attendance management platform for computer laboratory sessions, by implementing features such as practicum grading, certificate automation, QR-based validation, and assistant attendance.",
        details: [
            "Developing a practicum grading feature that calculates average scores and determines certificate eligibility based on the minimum passing grade (KKM).",
            "Automating certificate delivery via email to eligible participants using Laravel's Mail feature.",
            "Generating certificates using the Imagick library and embedding QR codes for authenticity validation.",
            "Implementing QR-based attendance for lab assistants.",
            "Providing attendance reports for lab assistants with Excel export support."
        ]
    },
    {
        title: "POS Apotek GM",
        client: "Apotek Management System",
        img: "assets/img/apotek.png",
        tech: ["react", "laravel", "nodejs", "tailwindcss", "mysql"],
        demo: "/",
        isPrivate: true,
        desc: "A web-based Point of Sale (POS) application specifically designed for pharmacy operations. This system integrates drug inventory management, real-time sales transactions, and automated financial reporting.",
        details: [
            "Built a comprehensive drug inventory management system covering categories, stock levels, pricing, and expiration dates.",
            "Developed a responsive cashier transaction module with fast product search and automatic calculations for transaction efficiency.",
            "Implemented an automated receipt printing feature for customers as valid proof of purchase.",
            "Provided accurate daily and monthly sales reporting features for revenue analysis and transaction history.",
            "Utilized a Headless architecture with React JS and Laravel API to ensure a seamless and optimized user experience on mobile devices."
        ]
    },
    {
        title: "LinkKU",
        client: "Personal Project",
        img: "assets/img/project4.png",
        tech: ["javascript", "nodejs", "react", "express", "tailwindcss", "mongodb"],
        demo: "https://bookmark-frontend-nu.vercel.app",
        isPrivate: false,
        desc: "This is a self-built fullstack project called <strong>LinkKu</strong>, a personal bookmark manager designed to help users save and organize important links easily. The project was developed using <strong>React</strong> for the frontend, <strong>Express.js</strong> for the backend, and <strong>MongoDB</strong> as the database.",
        details: [
            "Developed bookmark management features with full CRUD functionality.",
            "Designed responsive and user-friendly UI with dynamic routing using React Router.",
            "Implemented backend RESTful API with Express.js to handle all link operations.",
            "Stored and retrieved bookmark data securely using MongoDB and Mongoose."
        ]
    }
];