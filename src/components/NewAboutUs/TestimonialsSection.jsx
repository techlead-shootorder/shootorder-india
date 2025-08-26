'use client'
import { useState } from 'react';
import { Play, X } from 'lucide-react';

const TestimonialsSection = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const testimonials = [
        {
            id: 1,
            name: "Ms. Pratima Sinha",
            title: "CEO - Birla Open Minds International School",
            image: "/api/placeholder/400/400",
            videoUrl: "YOUR_YOUTUBE_VIDEO_ID_1",
            platform: "youtube"
        },
        {
            id: 2,
            name: "Ms. Keerthi Reddy",
            title: "Founder - One Roze",
            image: "/api/placeholder/400/400",
            videoUrl: "https://www.instagram.com/reel/XXXXXXXXX/",
            platform: "instagram"
        },
        {
            id: 3,
            name: "Mr. Varun",
            title: "Co-founder - Oye Happy",
            image: "/api/placeholder/400/400",
            videoUrl: "YOUR_YOUTUBE_VIDEO_ID_3",
            platform: "youtube"
        }
    ];

    const openModal = (testimonial) => {
        setSelectedVideo(testimonial);
    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="!max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Our Clients Love Our Work
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Don't take our word for it, hear directly from brands that have transformed their digital presence with us.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="relative group">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <div className="relative h-80">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Play Button */}
                                    <button
                                        onClick={() => openModal(testimonial)}
                                        className="cursor-pointer absolute bottom-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full py-2.5 px-2 shadow-lg transition-all duration-300 group-hover:scale-110 z-15"
                                    >
                                        <Play className="w-6 h-6 text-gray-700 ml-1" fill="currentColor" />
                                    </button>

                                    {/* Overlay with client info */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                        <h3 className="text-white text-xl font-semibold mb-1">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-gray-200 text-sm">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div 
                    className="fixed inset-0 flex items-center justify-center z-50 p-4"
                    style={{ backgroundColor: '#00000080' }}
                    onClick={closeModal}
                >
                    <div 
                        className="relative w-full !max-w-4xl bg-white border border-black rounded-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 cursor-pointer z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all duration-300"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Conditional Embed */}
                        <div className="relative w-full h-0 pb-[56.25%]">
                            {selectedVideo.platform === "youtube" ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideo.videoUrl}?autoplay=1`}
                                    title="Client Testimonial Video"
                                    className="absolute top-0 left-0 w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                />
                            ) : (
                                <iframe
                                    src={`${selectedVideo.videoUrl}embed`}
                                    title="Instagram Video"
                                    className="absolute top-0 left-0 w-full h-full"
                                    frameBorder="0"
                                    allowTransparency={true}
                                    allowFullScreen
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TestimonialsSection;