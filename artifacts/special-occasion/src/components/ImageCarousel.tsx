import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import slide1Img from '@assets/slide1_custom.jpg';
import slide2Img from '@assets/slide2_custom.jpg';
import slide3Img from '@assets/slide3_custom.jpg';
import slide4Img from '@assets/slide4_custom.jpg';
import slide5Img from '@assets/slide5_custom.jpg';
import slide6Img from '@assets/slide6_custom.jpg';
import slide7Img from '@assets/slide7_custom.jpg';

const SLIDES = [
  {
    image: slide1Img,
    caption: 'A moment to celebrate you',
    alt: 'Slide 1'
  },
  {
    image: slide2Img,
    caption: 'To many more beautiful memories',
    alt: 'Slide 2'
  },
  {
    image: slide3Img,
    caption: 'Grace, elegance, and beauty',
    alt: 'Slide 3'
  },
  {
    image: slide4Img,
    caption: 'Bringing light into every room',
    alt: 'Slide 4'
  },
  {
    image: slide5Img,
    caption: 'A breathtaking view, just like you',
    alt: 'Slide 5'
  },
  {
    image: slide6Img,
    caption: 'moment nonton moana yang bikin ina nangiss',
    alt: 'Slide 6'
  },
  {
    image: slide7Img,
    caption: 'photobooth keduanya di MBG',
    alt: 'Slide 7'
  }
];

export function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
      <div className="overflow-hidden rounded-2xl shadow-xl bg-card border border-border/50" ref={emblaRef}>
        <div className="flex touch-pan-y flex-row h-[400px] sm:h-[500px] md:h-[600px]">
          {SLIDES.map((slide, index) => (
            <div 
              className="relative flex-none w-full h-full min-w-0"
              key={index}
            >
              <img 
                src={slide.image} 
                alt={slide.alt} 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-center translate-y-2 opacity-90 transition-all duration-700 ease-in-out">
                <p className="text-white font-serif text-xl sm:text-2xl drop-shadow-md tracking-wide">
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className={cn(
          "absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex justify-center items-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg transition-all hover:bg-white/40 hover:scale-110",
          !canScrollPrev && "opacity-50 cursor-not-allowed hover:scale-100 hover:bg-white/20"
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft strokeWidth={2} />
      </button>

      <button
        onClick={scrollNext}
        className={cn(
          "absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex justify-center items-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg transition-all hover:bg-white/40 hover:scale-110",
          !canScrollNext && "opacity-50 cursor-not-allowed hover:scale-100 hover:bg-white/20"
        )}
        aria-label="Next slide"
      >
        <ChevronRight strokeWidth={2} />
      </button>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              index === selectedIndex ? "bg-primary w-6" : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
