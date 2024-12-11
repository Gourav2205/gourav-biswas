

interface TestimonialCardProps {
    name: string
    role: string
    content: string
    // image: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content }) => {
    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-6">
                <div className="flex items-center">
                    {/* <div className="flex-shrink-0">
                        <Image
                            className="h-12 w-12 rounded-full"
                            src={image}
                            alt={name}
                            width={48}
                            height={48}
                        />
                    </div> */}
                    <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
                    </div>
                </div>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                    &quot;{content}&quot;
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard

