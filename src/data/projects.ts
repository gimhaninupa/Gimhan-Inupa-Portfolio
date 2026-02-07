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
        id: "arclight",
        title: "ARCLIGHT",
        description: "A Cinematic Photography Website",
        tags: ["HTML/CSS/JS", "Web Design", "Frontend Development"],
        links: {
            demo: "https://www.arclightsl.com/",
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

export const skills = [
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Flask", icon: "https://cdn.simpleicons.org/flask" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    { name: "Render", icon: "https://cdn.simpleicons.org/render" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
    { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
    { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
    { name: "Dart", icon: "https://cdn.simpleicons.org/dart" },
    { name: "Adobe Photoshop", icon: "/icons/photoshop.svg" },
    { name: "Adobe Premiere Pro", icon: "/icons/premiere.svg" },
    { name: "Adobe Lightroom", icon: "/icons/lightroom.svg" }
];
