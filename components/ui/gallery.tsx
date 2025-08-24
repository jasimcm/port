"use client";

import { Ref, forwardRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

type Direction = "left" | "right";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Multiple backdrop videos
  const backdropVideos = [
    "/assets/backdrop.mp4",
    "/assets/backdrop-3.mp4",
    "/assets/backdrop-4.mp4"
  ];

  useEffect(() => {
    // Initial loading animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading for 2 seconds

    // Then make the container visible with a fade-in
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, (animationDelay + 2) * 1000);

    // Finally start the photo animations
    const animationTimer = setTimeout(
      () => {
        setIsLoaded(true);
      },
      (animationDelay + 2.4) * 1000
    );

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  // Function to cycle through videos
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => 
      (prevIndex + 1) % backdropVideos.length
    );
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1, // Reduced from 0.3 to 0.1 since we already have the fade-in delay
      },
    },
  };

  // Loading animation variants for circular motion
  const loadingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: { order: number }) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: custom.order * 0.1,
      },
    }),
    loading: (custom: { order: number }) => ({
      x: Math.cos((custom.order * 72) * (Math.PI / 180)) * 150,
      y: Math.sin((custom.order * 72) * (Math.PI / 180)) * 150,
      rotate: custom.order * 72,
      scale: 0.8,
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    }),
  };

  // Animation variants for each photo
  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: { x: any; y: any; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  // Photo positions - horizontal layout with random y offsets
  const photos = [
    {
      id: 1,
      order: 0,
      x: "-320px",
      y: "15px",
      zIndex: 50, // Highest z-index (on top)
      direction: "left" as Direction,
      src: "/assets/3.jpg",   
      alt: "Young man with climbing gear on mountain ledge",
    },
    {
      id: 2,
      order: 1,
      x: "-160px",
      y: "32px",
      zIndex: 40,
      direction: "left" as Direction,
      src: "/assets/1 (2).jpg",
      alt: "Man in winter gear with snow-capped mountains",
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: "8px",
      zIndex: 30,
      direction: "right" as Direction,
      src: "/assets/yellow-flowers.jpg",
      alt: "Man with climbing gear surrounded by yellow flowers",
    },
    {
      id: 4,
      order: 3,
      x: "160px",
      y: "22px",
      zIndex: 20,
      direction: "right" as Direction,
      src: "/assets/2 (2).jpg",
      alt: "Friends around black taxi on city street",
    },
    {
      id: 5,
      order: 4,
      x: "320px",
      y: "44px",
      zIndex: 10, // Lowest z-index (at bottom)
      direction: "left" as Direction,
      src: "/assets/5.jpg",
      alt: "Climber on rocky ledge overlooking deep valley",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          key={backdropVideos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          className="h-full w-full object-cover opacity-50"
          style={{ 
            opacity: 0.5,
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          onEnded={handleVideoEnd}
          onError={() => {
            // If video fails, move to next one
            setCurrentVideoIndex((prevIndex) => 
              (prevIndex + 1) % backdropVideos.length
            );
          }}
        >
          <source src={backdropVideos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Black Overlay Layer */}
      <div className="absolute inset-0 -z-15 bg-black opacity-50"></div>
      

      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 max-md:hidden top-[200px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      
             {/* Loading Animation Overlay */}
       {isLoading && (
         <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80">
           <div className="relative h-[400px] w-[400px]">
             {/* Circular loading photos */}
             {photos.map((photo) => (
               <motion.div
                 key={photo.id}
                 className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
                 variants={loadingVariants}
                 initial="hidden"
                 animate="loading"
                 custom={{ order: photo.order }}
               >
                 <motion.div 
                   className="h-full w-full overflow-hidden rounded-3xl shadow-lg border-2 border-white/20"
                   animate={{ rotate: [0, 360] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 >
                   <img
                     src={photo.src}
                     alt={photo.alt}
                     className="h-full w-full object-cover"
                     draggable={false}
                   />
                 </motion.div>
               </motion.div>
             ))}
           </div>
         </div>
       )}

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">


        <div className="relative mb-8 h-[350px] w-full items-center justify-center lg:flex">
          <motion.div
            className="relative mx-auto flex w-full max-w-7xl justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="relative flex w-full justify-center"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <div className="relative h-[220px] w-[220px]">
                {/* Render photos in reverse order so that higher z-index photos are rendered later in the DOM */}
                {[...photos].reverse().map((photo) => (
                  <motion.div
                    key={photo.id}
                    className="absolute left-0 top-0"
                    style={{ zIndex: photo.zIndex }} // Apply z-index directly in style
                    variants={photoVariants}
                    custom={{
                      x: photo.x,
                      y: photo.y,
                      order: photo.order,
                    }}
                  >
                    <Photo
                      width={220}
                      height={220}
                      src={photo.src}
                      alt={photo.alt}
                      direction={photo.direction}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

function getRandomNumberInRange(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

const MotionImage = motion(
  forwardRef(function MotionImage(
    props: React.ImgHTMLAttributes<HTMLImageElement>,
    ref: Ref<HTMLImageElement>
  ) {
    return <img ref={ref} {...props} />;
  })
);

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, []);

  function handleMouse(event: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing"
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-sm">
        <MotionImage
          className={cn("rounded-3xl object-cover")}
          src={src}
          alt={alt}
          width={width}
          height={height}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};
