export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    links: {
        demo?: string;
        github?: string;
    };
    image?: string;
    video?: string;
    buttonText?: string;
}

export const projects: Project[] = [
    {
        id: "ecotrack",
        title: "EcoTrack",
        description: "Smart Waste Management System",
        tags: ["React (TypeScript)", "Tailwind CSS", " Firebase (Firestore, Auth)"],
        links: {
            demo: "https://eco-track-delta-gules.vercel.app/",
            github: "https://github.com/gimhaninupa/EcoTrack"
        },
        image: "/images/projects/Projects/EcoTrack/EcoTrack.png",
        buttonText: "Visit Website"
    },
    {
        id: "arclight",
        title: "ARCLIGHT",
        description: "A Cinematic Photography Website",
        tags: ["HTML/CSS/JS", "Web Design", "Frontend Development"],
        links: {
            demo: "https://arclight-portfolio.vercel.app/",
            github: "https://github.com/gimhaninupa/arclight-portfolio"
        },
        image: "/images/projects/Projects/ARCLIGHT/ARCLIGHT.png",
        buttonText: "Visit Website"
    },
    {
        id: "edupilot-ai",
        title: "EduPilot AI",
        description: "AI-driven educational assistant for personalized learning.",
        tags: ["React (Vite)", "Tailwind CSS", "Firebase"],
        links: {
            demo: "https://edu-pilot-ai.vercel.app/",
            github: "https://github.com/gimhaninupa/EduPilot-AI"
        },
        image: "/images/projects/Projects/EduPilotAI/EduPilotAI.png",
        buttonText: "Visit Website"
    },
    {
        id: "velora",
        title: "Velora",
        description: "A Premium Fashion E-Commerce Website.",
        tags: ["React (Vite)", "Tailwind CSS", "Frontend Development"],
        links: {
            demo: "https://velora-one-swart.vercel.app/",
            github: "https://github.com/gimhaninupa/Velora"
        },
        image: "/images/projects/Projects/Velora/Velora.png",
        buttonText: "Visit Website"
    },
    {
        id: "chatterbox",
        title: "ChatterBox",
        description: "Real-time communication platform for seamless connectivity.",
        tags: ["AI", "Computer Vision", "IoT"],
        links: {
            github: "https://github.com/gimhaninupa/ChatterBox"
        },
        image: "/images/projects/Projects/ChatterBox/ChatterBox.jpg",
        video: "/images/projects/Projects/ChatterBox/ChatterBox.mp4",
        buttonText: "Live Demo"
    },
    {
        id: "fitunique",
        title: "FitUnique",
        description: "Customized fitness tracking and workout planning application.",
        tags: ["Flutter", "Dart", "Mobile App Development"],
        links: {
            github: "https://github.com/gimhaninupa/fitness-planner"
        },
        image: "/images/projects/Projects/FitUnique/FitUnique.png",
        video: "/images/projects/Projects/FitUnique/FitUnique.mp4",
        buttonText: "Live Demo"
    },
    {
        id: "taskmaster",
        title: "TaskMaster",
        description: "Productivity tool for organizing and tracking daily tasks.",
        tags: ["Flutter", "Dart", "Mobile App Development"],
        links: {
            github: "https://github.com/gimhaninupa/todo_app"
        },
        image: "/images/projects/Projects/TaskMaster/TaskMaster.png",
        video: "/images/projects/Projects/TaskMaster/TaskMaster.mp4",
        buttonText: "Live Demo"
    },
];

export interface Skill {
    name: string;
    icon: string;
    darkIcon?: string;
}

export const skills: Skill[] = [
    {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
    },
    {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    },
    {
        name: "HTML5",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
    },
    {
        name: "CSS3",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
    },
    {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
    },
    {
        name: "Flask",
        icon: "https://cdn.simpleicons.org/flask",
        darkIcon: "https://cdn.simpleicons.org/flask/white"
    },
    {
        name: "Tailwind CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs",
        darkIcon: "https://cdn.simpleicons.org/nextdotjs/white"
    },
    {
        name: "Figma",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
    },
    {
        name: "PostgreSQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
    },
    {
        name: "Git",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
    },
    {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github",
        darkIcon: "https://cdn.simpleicons.org/github/white"
    },
    {
        name: "Render",
        icon: "https://cdn.simpleicons.org/render",
        darkIcon: "https://cdn.simpleicons.org/render/white"
    },
    {
        name: "Vercel",
        icon: "https://cdn.simpleicons.org/vercel",
        darkIcon: "https://cdn.simpleicons.org/vercel/white"
    },
    {
        name: "WordPress",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg",
        darkIcon: "https://cdn.simpleicons.org/wordpress/white"
    },
    {
        name: "Flutter",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
    },
    {
        name: "Dart",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg"
    },
    {
        name: "Adobe Photoshop",
        icon: "/icons/photoshop.svg"
    },
    {
        name: "Adobe Premiere Pro",
        icon: "/icons/premiere.svg"
    },
    {
        name: "Adobe Lightroom",
        icon: "/icons/lightroom.svg"
    }
];

