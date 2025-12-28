'use client';

/**
 * VideoHero Component - Atlan Reserve
 * Hero section con video de fondo, overlay y animaciones elegantes
 */

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { fadeInUp, fadeIn } from '@/lib/animations/variants';
import { Button } from '@/app/components/ui/Button';

interface VideoHeroProps {
  videoUrl: string;
  title: string;
  subtitle?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  overlayOpacity?: number;
  height?: string;
  className?: string;
  textAlign?: 'left' | 'center' | 'right';
}

export function VideoHero({
  videoUrl,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  overlayOpacity = 0.4,
  height = '100vh',
  className = '',
  textAlign = 'center',
}: VideoHeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      console.error('❌ Video ref is null');
      return;
    }

    console.log('🎬 VideoHero mounted, video URL:', videoUrl);

    const playVideo = async () => {
      try {
        console.log('🎬 Attempting to play video...', {
          readyState: video.readyState,
          networkState: video.networkState,
        });
        video.muted = true;
        video.playsInline = true;
        const playPromise = await video.play();
        console.log('✅ Video playing successfully', playPromise);
        setIsVideoLoaded(true);
      } catch (error) {
        console.error('❌ Video autoplay failed:', error);
      }
    };

    // Intentar reproducir inmediatamente si ya está listo
    if (video.readyState >= 2) {
      console.log('🎬 Video already has enough data, playing now');
      playVideo();
    }

    // Event listeners
    const handleLoadedData = () => {
      console.log('✅ Video loadeddata event');
      setIsVideoLoaded(true);
      playVideo();
    };

    const handleCanPlay = () => {
      console.log('✅ Video canplay event');
      if (video.paused) {
        playVideo();
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Solo ejecutar una vez al montar

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      console.log('🔊 Video muted:', !isMuted);
    }
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    console.error('❌ Video error:', {
      error: video.error,
      code: video.error?.code,
      message: video.error?.message,
      networkState: video.networkState,
      readyState: video.readyState,
      src: videoUrl,
    });
    setVideoError(true);
  };

  const handleLoadStart = () => {
    console.log('🎬 Video loadstart - comenzando descarga');
  };

  const handleProgress = () => {
    const video = videoRef.current;
    if (video && video.buffered.length > 0) {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      const duration = video.duration;
      if (duration > 0) {
        const bufferedPercent = (bufferedEnd / duration) * 100;
        console.log(`⏳ Video buffered: ${bufferedPercent.toFixed(1)}%`);
      }
    }
  };

  const textAlignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[textAlign];

  const justifyClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[textAlign];

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        {!videoError ? (
          <>
            {/* Loading indicator mientras carga el video */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>
                  <p className="text-sm text-white/70">Loading experience...</p>
                </div>
              </div>
            )}
            
            <video
              ref={videoRef}
              className={`h-full w-full object-cover transition-opacity duration-1000 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onError={handleVideoError}
              onLoadStart={handleLoadStart}
              onProgress={handleProgress}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-900 text-white">
            <div className="text-center">
              <p className="text-xl mb-4">Video unavailable</p>
              <p className="text-sm text-gray-400">Check console for details</p>
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Mute/Unmute Button */}
      {!videoError && isVideoLoaded && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={toggleMute}
          className="absolute right-6 bottom-6 z-20 flex h-12 w-12 items-center justify-center border border-white/30 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 md:right-8 md:top-8"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          <span className="text-white">
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </span>
        </motion.button>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-12">
        <div className={`max-w-5xl ${textAlignClass}`}>
          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl font-light tracking-wide text-white md:text-7xl lg:text-8xl"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg font-light tracking-wide text-white/90 md:text-xl lg:text-2xl"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className={`mt-10 flex flex-col md:flex-row flex-wrap gap-4 ${justifyClass}`}
            >
              {primaryButton && (
                <Button
                  className='w-full md:w-fit'
                  href={primaryButton.href}
                  variant="primary"
                  size="large"
                >
                  {primaryButton.text}
                </Button>
              )}
              {secondaryButton && (
                <Button
                  className='w-full md:w-fit'
                  href={secondaryButton.href}
                  variant="secondary"
                  size="large"
                >
                  {secondaryButton.text}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5, 
          duration: 0.8, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/70">Scroll</span>
          <div className="h-8 w-px bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
