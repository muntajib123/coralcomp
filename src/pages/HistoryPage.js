import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const sections = [
  {
    title: "Our Journey Through Time",
    content: `CoralComp started as a vision to bring safety and innovation to aviation through cutting-edge weather technology. From our humble beginnings, we've grown into a leader in real-time weather intelligence, trusted by airlines and aerospace firms alike.

Over the years, we've expanded our capabilities—detecting microbursts, forecasting lightning strikes, and helping prevent dangerous incidents before they happen. Each milestone is a testament to our relentless commitment to safer skies.

Today, we continue to innovate and push the boundaries of aerospace safety, powered by AI, data, and a dedicated team.`,
    image: '/images/news1.jpg',
  },
  {
    title: "CoralComp Private Limited",
    content: `In the heart of Hyderabad, CoralComp Private Limited has been pioneering innovative consumer electronics solutions since 2017. Founded by Bakthyaruddin Ahmed Syed and Hafsa Mohsina, this startup has carved a niche in the tech landscape with its focus on artificial intelligence and cutting-edge technology.

With a vision to revolutionize the consumer electronics industry, CoralComp has been steadily building its portfolio and expanding its reach. As a testament to its commitment to innovation, the company continues to explore new frontiers in AI and technology, making it a promising player in the Indian startup ecosystem.`,
    image: '/images/news2.avif',
  },
  {
    title: "Company Evolution & Technology",
    content: `CoralComp began with a vision to provide innovative IT solutions. Based in Hyderabad since 2017, it initially focused on cloud infrastructure and security. The founders—Bakthyaruddin Syed and Hafsa Mohsina—brought deep IT experience, shaping CoralComp into a company with scalable cloud services and secure, agile platforms.

Over the years, it has evolved from offering basic IT services to becoming a recognized name in cloud infrastructure and business workflow customization. Its platform supports editing, project management, templates, and secure workspace environments tailored for diverse business operations.`,
    image: '/images/news3.avif',
  },
  {
    title: "Market Impact & Financial Growth",
    content: `CoralComp has built a solid market presence through strategic partnerships and consistent innovation. It expanded its user base by offering tailored services and excellent support, helping small and medium businesses with financial inclusion initiatives like training, funding access, and advisory services.

Financially, the company has shown strong growth—beginning with modest capital and scaling steadily. Key revenue boosts came from product expansion, collaborations, and efficient service delivery. Profitability has been achieved through smart investments and customer-focused solutions.`,
    image: '/images/news4.avif',
  },
  {
    title: "Strategic Partnerships & Future",
    content: `Strategic partnerships have propelled CoralComp forward. Collaborations with banks enabled seamless financial services; alliances with merchants helped diversify offerings; and partnerships with tech companies supported innovation and operational efficiency.

The future looks promising with ongoing R&D, new service launches, and deeper market penetration. CoralComp continues to stay ahead of industry trends by investing in talent, infrastructure, and AI-driven solutions.`,
    image: '/images/news5.avif',
  },
];

const HistoryPage = () => {
  return (
    <Container sx={{ py: 6 }}>
      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: 8 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {section.title}
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
            {section.content}
          </Typography>
          <Box
            component="img"
            src={section.image}
            alt={`Section ${index + 1}`}
            sx={{
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 2,
              display: 'block',
              mx: 'auto',
            }}
          />
        </Box>
      ))}
    </Container>
  );
};

export default HistoryPage;
