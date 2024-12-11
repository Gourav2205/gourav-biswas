import TestimonialCard from './TestimonialCard'

const testimonials = [
    {
        name: "Sukanta Chakraborti",
        role: "Founder, GS SUKRIYA PRIVATE LIMITED",
        content: "Working with Gourav Biswas was a game-changer for our project. Their expertise in both full-stack development and data science brought unique insights and solutions.",
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        name: "Jane Smith",
        role: "CTO, DataDrive",
        content: "Gourav Biswas delivered beyond our expectations. His ability to translate complex data into actionable insights significantly improved our decision-making process.",
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        name: "Alex Johnson",
        role: "Product Manager, WebSolutions",
        content: "I was impressed by Gourav Biswas's attention to detail and problem-solving skills. He consistently delivered high-quality work and were a pleasure to work with.",
        image: "/placeholder.svg?height=100&width=100"
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    What People Say
                </h2>
                <p className="mt-3 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
                    Don&apos;t just take my word for it. Here&apos;s what others have to say about working with me.
                </p>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials

