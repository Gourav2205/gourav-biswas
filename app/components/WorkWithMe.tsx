import Link from 'next/link'

const WorkWithMe = () => {
    return (
        <section id="work-with-me" className="bg-purple-700 dark:bg-purple-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Work With Me
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-purple-200">
                    I&apos;m always open to new opportunities and collaborations. Whether you need a full-stack developer,
                    a data scientist, or someone who can bridge the gap between the two, I&apos;m here to help.
                </p>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-white">Services I Offer:</h3>
                    <ul className="mt-4 list-disc list-inside text-purple-200">
                        <li>Full-stack web development</li>
                        <li>Data analysis and visualization</li>
                        <li>Machine learning model development</li>
                        <li>API design and integration</li>
                        <li>Technical consultation</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <Link href="mailto:gouravbiswas897@gmail.com" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50">
                        Let&apos;s Discuss Your Project
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WorkWithMe

