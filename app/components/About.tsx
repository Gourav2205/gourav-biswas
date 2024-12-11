import Image from 'next/image'

const About = () => {
    return (
        <section id="about" className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                            About Me
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
                            I&apos;m a passionate NextJS Developer and Data Scientist with 2 years of experience.
                            I love creating efficient, scalable web applications and deriving meaningful insights from complex datasets.
                            My expertise spans across front-end technologies, back-end systems, and machine learning algorithms.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Skills:</h3>
                            <ul className="mt-2 list-disc list-inside text-gray-500 dark:text-gray-400">
                                <li>NextJS Development (React, Node.js, NextJS, MERN)</li>
                                <li>Data Science & Machine Learning (Python, DBMS, R) </li>
                                <li>Database Management (SQL, NoSQL)</li>
                                <li>Cloud Platforms (AWS, Vercel)</li>
                                <li>DevOps & CI/CD</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="aspect-w-3 aspect-h-4">
                            <Image
                                className="object-cover shadow-lg rounded-lg"
                                src="/images/profile-pic.jpg"
                                alt="Your Name"
                                width={400}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

