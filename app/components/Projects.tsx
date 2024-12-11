import ProjectCard from './ProjectCard'
import Link from 'next/link'; // Import Link component

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
]

const Projects = () => {
    return (
        <section id="projects" className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    My Projects
                </h2>
                <p className="mt-3 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
                    Here are some of the projects I&apos;ve worked on recently.
                </p>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link href="/projects" className="inline-block bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Projects

