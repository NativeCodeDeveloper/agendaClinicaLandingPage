export default function RecommendationsSection() {
    // Array mock of testimonials
    const testimonials = [
        {
            avatar: "/google.png",
            name: "John Doe",
            title: "Software Engineer",
            company: "Tech Solutions Inc.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae orci nec metus placerat pharetra a sed arcu. Nullam at libero vel dui volutpat blandit et non lectus.",
            stars: 5,
        },
        {
            avatar: "/google.png",
            name: "Jane Smith",
            title: "Project Manager",
            company: "Web Design Co.",
            text: "Curabitur a semper felis. Nulla facilisi. Proin gravida justo vel purus luctus, sit amet fringilla dolor venenatis.",
            stars: 4,
        },
        {
            avatar: "/google.png",
            name: "Sam Johnson",
            title: "UX Designer",
            company: "Creative Agency",
            text: "Sed in lectus quis massa bibendum blandit. Integer nec odio at libero suscipit vehicula.",
            stars: 4,
        },
    ];
    return (
        <div className="bg-gradient-to-r from-purple-900 to-cyan-700 text-white p-16 rounded-lg shadow-2xl">
            <h1 className="text-5xl font-extrabold mb-12 text-center">Testimonios</h1>
            {/* Container for testimonial cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    // Testimonial card
                    <div
                        key={index}
                        className="bg-gray-900 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105 duration-300"
                    >
                        {/* Avatar and name section */}
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.avatar}
                                alt={`${testimonial.name} avatar`}
                                className="w-12 h-12 rounded-full mr-4 object-cover"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                <p className="text-gray-300 text-sm">
                                    {testimonial.title}, {testimonial.company}
                                </p>
                            </div>
                        </div>
                        {/* Testimonial text */}
                        <p className="text-lg mb-4 leading-relaxed text-gray-100">
                            &ldquo;{testimonial.text}&rdquo;
                        </p>
                        {/* Star ratings */}
                        <div className="flex items-center">
                            {[...Array(testimonial.stars)].map((star, i) => (
                                // Individual star
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.846-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
