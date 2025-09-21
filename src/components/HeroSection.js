// src/components/HeroSection.js
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container } from "@mui/material";

/**
 * HeroSection (timed video carousel)
 *
 * Videos must be placed in public/videos/ with these exact names:
 *  - earth-hero-1080.mp4   (plays 15s)
 *  - earth-hero-720.mp4    (plays 10s)
 *  - earth2-hero-1080.mp4  (plays 13s)
 *
 * Posters (optional) in public/images/:
 *  - earth1-poster.webp
 *  - earth2-poster.webp
 *  - earth3-poster.webp
 */

const videoList = [
  { src: "/videos/earth-hero-1080.mp4", duration: 15000, poster: "/images/earth1-poster.webp" }, // 15s
  { src: "/videos/earth-hero-720.mp4",  duration: 10000, poster: "/images/earth2-poster.webp" }, // 10s
  { src: "/videos/earth2-hero-1080.mp4", duration: 13000, poster: "/images/earth3-poster.webp" }, // 13s
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  // play and schedule switching whenever index changes
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // ensure autoplay works on mobile
    v.muted = true;
    v.playsInline = true;

    // load and attempt to play current video
    try {
      v.load();
      // play may be blocked by browser but will work because muted
      v.play().catch(() => {});
    } catch (e) {
      // ignore
    }

    // clear previous timer and set a new one for this video's duration
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % videoList.length);
    }, videoList[currentIndex].duration);

    // cleanup
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentIndex]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const current = videoList[currentIndex];

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        height: { xs: "60vh", md: "75vh" },
        overflow: "hidden",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        ref={videoRef}
        key={current.src + currentIndex} // ensure reload when changed
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={current.poster}
        aria-label="Background video showing CoralComp aerospace capabilities"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.85)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src={current.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.35))",
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          data-aos="fade-up"
          sx={{
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          We provide Weather Intelligence to Aerospace Industry.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
