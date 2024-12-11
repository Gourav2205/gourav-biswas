import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
    title: string
    description: string
    image: string
    tags: string[]
    link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
            <div className="relative h-48">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{description}</p>
                <div className="mt-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-6">
                    <Link href={link} className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-medium">
                        View Project
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

