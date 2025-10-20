// src/components/TestimonialArea.tsx

import React from 'react';
import { TestimonialCard } from './TestimonialCard';

interface Testimonial {
  name: string;
  rating: number; 
  text: string;
}

const testimonialData: Testimonial[] = [
  {
    name: "Dhruv Paleja",
    rating: 5,
    text: "Soul Yatri focuses on overall well-being and truly brings a positive change in mental health. The platform helps you understand yourself better, calm your mind, and discover emotional balance. It’s more than just therapy — it’s a journey towards inner peace.",
  },
  {
    name: "Kanisk",
    rating: 5,
    text: "I recently attended a Soul Yatri session, and honestly, I feel so much better afterwards. The therapists were genuinely caring and attentive, guiding me through every emotion with patience. It’s rare to find such an understanding and supportive space online.",
  },
  {
    name: "Rahul",
    rating: 5,
    text: "Soul Yatri brings out the true purpose of life and reminds us to slow down and reconnect with ourselves. The overall experience — from therapy to guided meditation — was excellent. Definitely worth every minute spent here.",
  },
  {
    name: "Ansh",
    rating: 4,
    text: "The Soul Yatri AI chatbot is surprisingly good! It listens patiently and offers thoughtful responses that actually help. I love how it feels personal yet so easy to talk to. A great tool for quick emotional check-ins anytime.",
  },
  {
    name: "Chintamani",
    rating: 5,
    text: "Soul Yatri truly helps a lot in managing stress and emotions. Their approach feels refreshing and deeply human. I can’t wait to see them expand and go fully online — it’s going to change so many lives for the better.",
  },
  {
    name: "Priya Sharma",
    rating: 4,
    text: "Yay! Feeling so light and mentally clear after talking to the therapists at Soul Yatri. They made me feel seen, heard, and cared for. The sessions gave me hope and peace of mind — exactly what I was looking for.",
  },
  {
    name: "Madhulika",
    rating: 5,
    text: "The people at Soul Yatri are so friendly and compassionate. They take responsibility for your healing journey and make sure you never feel alone. I truly recommend Soul Yatri to everyone around me — it’s an experience that stays with you.",
  },
];


const TestimonialArea: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 332; 
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth; 
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#F96D00] py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-10 text-white">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              What our Users say about Soul Yatri
            </h2>
            <p className="text-base text-white opacity-80">
              This is the Testimonials from the users.
            </p>
          </div>
          <a href="#" className="text-lg font-semibold hover:underline">
            Read More
          </a>
        </div>

        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="hidden lg:block absolute left-[-40px] top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full z-30 hover:bg-white/50 transition-colors"
          >
            {'<'}
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-scroll snap-x snap-mandatory pb-6 -mx-4 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonialData.map((review, index) => (
              <TestimonialCard 
                key={index}
                name={review.name}
                rating={review.rating}
                text={review.text}
              />
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="hidden lg:block absolute right-[-40px] top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full z-30 hover:bg-white/50 transition-colors"
          >
            {'>'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;