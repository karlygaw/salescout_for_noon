import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from "lucide-react";
import 'swiper/css/pagination';

export default function HeroSection() {
  const testimonials = [
    {
      id: 1,
      rating: "★★★★★",
      text: "“An excellent repricing tool! I’ve been using Repricer for years for Amazon repricing and it keeps getting better. The support is excellent.”",
      author: "Robin",
      role: "US",
    },
    {
      id: 2,
      rating: "★★★★★",
      text: "“The service provided by SaleScout is exceptional. Their intelligent pricing system has significantly boosted our sales on noon.”",
      author: "Jane Doe",
      role: "CEO at Example Corp",
    },
    {
      id: 3,
      rating: "★★★★★",
      text: "“We have seen a remarkable improvement in our sales since we started using SaleScout. Their system is easy to use and very effective.”",
      author: "John Smith",
      role: "Sales Manager at Test Inc",
    },
  ];

  return (
    <section className="relative min-h-[90vh] pt-12 sm:pt-16 pb-12 sm:pb-20 container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="relative mb-4 mt-15">
            <div className="absolute -top-12 left-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white px-6 py-2 rounded-full transform -rotate-2 shadow-lg">
              <span className="relative inline-block transform rotate-2 text-xs sm:text-sm md:text-base">
                BE THE FIRST IN OFFERS LIST
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Boost Sales on
            <span className="text-yellow-400"> noon</span> with SaleScout’s Intelligent Pricing System
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Automate pricing. Stay on top. Sell more with ease!
          </p>
          <div className="space-y-4 sm:space-y-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full sm:w-auto">Contact Us</Button>
              </DialogTrigger>
              <DialogContent>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex justify-center relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-r from-primary/30 to-yellow-400/30 rounded-full blur-3xl opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[250px] md:w-[300px] h-[150px] sm:h-[250px] md:h-[300px] bg-gradient-to-r from-yellow-400/30 to-primary/30 rounded-full blur-2xl opacity-20 animate-pulse" />
          </div>

          <div className="relative w-full max-w-[280px] sm:max-w-[320px] h-[550px] md:h-[650px]">
            <div className="absolute inset-0 bg-black rounded-[2rem] sm:rounded-[3rem] shadow-xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-5 sm:h-7 bg-black rounded-b-2xl sm:rounded-b-3xl" />
              <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bottom-1 sm:bottom-2 left-1 sm:left-2 bg-white rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/VIDEO_Phone.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center relative">
        {/* Пользовательские стрелки */}
        <div className="absolute inset-y-0 left-0 z-10 flex items-center">
  <button className="swiper-button-prev bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform -translate-x-1/2">
    <ChevronLeft className="w-6 h-6 text-gray-700" />
  </button>
</div>
<div className="absolute inset-y-0 right-0 z-10 flex items-center">
  <button className="swiper-button-next bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform translate-x-1/2">
    <ChevronRight className="w-6 h-6 text-gray-700" />
  </button>
</div>

        {/* Карусель */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          className="w-full max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <p className="text-lg font-semibold">{testimonial.rating}</p>
                <p className="text-gray-800 mt-4">{testimonial.text}</p>
                <p className="mt-6 font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Рейтинг и описание */}
        <div className="mt-6 text-gray-600">
          <p>4.9 BN price changes performed last week on Amazon for thousands of clients</p>
          <p className="mt-2 flex items-center justify-center">
            <span className="text-yellow-500 text-xl">★★★★★</span>
            <span className="ml-2">Rated 5 / 5</span>
          </p>
        </div>
      </div>
    </section>
  );
}