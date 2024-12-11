import ProjectsGrid from '../components/ProjectsGrid'

export default function ProjectsPage() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">All Projects</h1>
                <p className="mt-5 max-w-xl text-xl text-gray-500 dark:text-gray-400">Explore all the projects I&apos;ve worked on, showcasing my skills in full-stack development and data science.</p>
                <div className="mt-12">
                    <ProjectsGrid />
                </div>
            </div>
        </div>
    )
}

