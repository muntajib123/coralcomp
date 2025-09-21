// src/components/IncidentCarousel.js

import React from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Keep your incidentData here or import from another file
const incidentData = [
  {
    title: "Air France 447",
    date: "1st June 2009",
    reason: "Ice crystals obstructing the aircraft's pitot tubes which caused the autopilot to disconnect",
    fatalities: 228,
    site: "Atlantic Ocean",
    image: "/images/crashes/af447.jpg",
    link: "https://en.wikipedia.org/wiki/Air_France_Flight_447"
  },
  {
    title: "Delta Air Lines Flight 191",
    date: "2nd August 1985",
    reason: "Microburst-induced wind shear during landing",
    fatalities: 137,
    site: "Dallas/Fort Worth International Airport",
    image: "/images/crashes/dl191.jpg",
    link: "https://en.wikipedia.org/wiki/Delta_Air_Lines_Flight_191"
  },
  {
    title: "Pan Am Flight 759",
    date: "9th July 1982",
    reason: "Wind shear shortly after takeoff",
    fatalities: 153,
    site: "New Orleans, Louisiana",
    image: "/images/crashes/pa759.jpg",
    link: "https://en.wikipedia.org/wiki/Pan_Am_Flight_759"
  },
  {
    title: "Yeti Airlines Flight 691",
    date: "15th January 2023",
    reason: "Crashed on final approach (under investigation)",
    fatalities: 69,
    site: "Pokhara, Nepal",
    image: "/images/crashes/yeti691.jpg",
    link: "https://en.wikipedia.org/wiki/Yeti_Airlines_Flight_691"
  },
  {
    title: "Tara Air Flight 197",
    date: "29th May 2022",
    reason: "Crashed into mountainous terrain",
    fatalities: 22,
    site: "Near Jomsom, Nepal",
    image: "/images/crashes/tara197.jpg",
    link: "https://en.wikipedia.org/wiki/Tara_Air_Flight_197"
  },
  {
    title: "USAir Flight 1016",
    date: "2nd July 1994",
    reason: "Wind shear on approach",
    fatalities: 37,
    site: "Charlotte, North Carolina",
    image: "/images/crashes/usair1016.jpg",
    link: "https://en.wikipedia.org/wiki/USAir_Flight_1016"
  },
  {
    title: "Southern Airways Flight 242",
    date: "4th April 1977",
    reason: "Dual engine failure due to hail ingestion",
    fatalities: 72,
    site: "New Hope, Georgia",
    image: "/images/crashes/southern242.jpg",
    link: "https://en.wikipedia.org/wiki/Southern_Airways_Flight_242"
  },
  {
    title: "Pan Am Flight 214",
    date: "8th December 1963",
    reason: "Lightning strike caused fuel tank explosion",
    fatalities: 81,
    site: "Elkton, Maryland",
    image: "/images/crashes/panam214.jpg",
    link: "https://en.wikipedia.org/wiki/Pan_Am_Flight_214"
  },
  {
    title: "NLM CityHopper Flight 431",
    date: "6th October 1981",
    reason: "Encountered tornado mid-flight",
    fatalities: 17,
    site: "Moerdijk, Netherlands",
    image: "/images/crashes/nlm431.jpg",
    link: "https://en.wikipedia.org/wiki/NLM_CityHopper_Flight_431"
  },
  {
    title: "Bhoja Air Flight 213",
    date: "20th April 2012",
    reason: "Crashed in bad weather during approach",
    fatalities: 127,
    site: "Islamabad, Pakistan",
    image: "/images/crashes/bhoja213.jpg",
    link: "https://en.wikipedia.org/wiki/Bhoja_Air_Flight_213"
  },
  {
    title: "Aero Caribbean Flight 883",
    date: "4th November 2010",
    reason: "Crashed in stormy weather",
    fatalities: 68,
    site: "Central Cuba",
    image: "/images/crashes/caribbean883.jpg",
    link: "https://en.wikipedia.org/wiki/Aero_Caribbean_Flight_883"
  }
];

const IncidentCard = ({ incident }) => (
  <Card sx={{ width: 300, mx: 2, borderRadius: 2, boxShadow: 3 }}>
    <CardMedia
      component="img"
      height="180"
      image={incident.image}
      alt={incident.title}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent>
      <Typography variant="h6">{incident.title}</Typography>
      <Typography><strong>Date:</strong> {incident.date}</Typography>
      <Typography><strong>Reason of crash:</strong> {incident.reason}</Typography>
      <Typography><strong>Fatalities:</strong> {incident.fatalities}</Typography>
      <Typography><strong>Site of incident:</strong> {incident.site}</Typography>
    </CardContent>
    <Box textAlign="center" pb={2}>
      <Button
        variant="contained"
        href={incident.link}
        target="_blank"
        rel="noopener"
        sx={{ mt: 1, backgroundColor: '#1976d2' }}
      >
        Read more
      </Button>
    </Box>
  </Card>
);

const IncidentCarousel = () => {
  const settings = {
    infinite: true,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden", py: 4 }}>
      <Slider {...settings}>
        {incidentData.map((incident, index) => (
          <IncidentCard key={index} incident={incident} />
        ))}
      </Slider>
    </Box>
  );
};

export default IncidentCarousel;
