import ProjectCard from './ProjectCard'

const projects = [
    {
        title: "Storage and File Sharing Platform",
        description: "A storage management and file sharing platform that lets users effortlessly upload, organize, and share files.",
        image: "/images/project2.jpg",
        tags: ["NextJS", "AppWrite", "React", "TailwindCSS", "ShadCN", "TypeScript"],
        link: "https://github.com/Gourav2205/ShareIt"
    },
    {
        title: "Movie Recommendation System",
        description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
        image: "/images/project1.jpg",
        tags: ["Python", "Numpy", "Pandas", "Scikit-Learn"],
        link: "https://github.com/Gourav2205/Movie-Recommendation-System",
    },
    {
        title: "A Project Management System",
        description: "A Next.js Project Management App for quick task tracking, team collaboration, and efficient performance across all devices.",
        image: "/images/project3.jpg",
        tags: ["NextJS", "React", "TailwindCSS", "TypeScript"],
        link: "https://github.com/Gourav2205/ProjectManagement",
    },
    {
        title: "Whatsapp Clone With Video Calling Function",
        description: "A WhatsApp Clone built with Next.js offers real-time messaging, group chats, and media sharing, all optimized for fast performance and smooth user experience across devices.",
        image: "/images/project4.jpg",
        tags: ["NextJS", "React", "typescript", "Tailwind CSS"],
        link: "https://github.com/Gourav2205/whatsapp2.0"
    },
    // {
    //     title: "Natural Language Processing Chatbot",
    //     description: "An AI-powered chatbot using natural language processing techniques.",
    //     image: "/images/project5.jpg",
    //     tags: ["Python", "NLTK", "TensorFlow", "Flask"],
    //     link: "https://github.com/yourusername/project5"
    // },
    // {
    //     title: "IoT Home Automation System",
    //     description: "A smart home automation system using IoT devices and a mobile app.",
    //     image: "/images/project6.jpg",
    //     tags: ["React Native", "Node.js", "MQTT", "Raspberry Pi"],
    //     link: "https://github.com/yourusername/project6"
    // },
]

const ProjectsGrid = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    )
}

export default ProjectsGrid

