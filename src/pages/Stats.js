import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

const Stats = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const keys = [
        'portfolio-visits',
        'home-visits',
        'about-visits',
        'stack-visits',
        'projects-visits',
        'contact-visits',
        'stats-visits'
      ];

      const newStats = {};

      for (const key of keys) {
        try {
          const response = await fetch(`https://api.counterapi.dev/v1/pradeep-portfolio/${key}`);
          if (response.ok) {
            const data = await response.json();
            newStats[key] = data.count;
          } else {
            // Probably doesn't exist yet
            newStats[key] = 0;
          }
        } catch (error) {
          console.error(`Failed to fetch stats for ${key}:`, error);
          newStats[key] = 0;
        }
      }

      setStats(newStats);
      setLoading(false);
    };

    fetchStats();
  }, []);

  const statCards = [
    { title: "Total Portfolio Visits", key: "portfolio-visits", color: "primary" },
    { title: "Home Page Views", key: "home-visits", color: "success" },
    { title: "About Page Views", key: "about-visits", color: "info" },
    { title: "Stack Page Views", key: "stack-visits", color: "warning" },
    { title: "Projects Page Views", key: "projects-visits", color: "danger" },
    { title: "Contact Page Views", key: "contact-visits", color: "secondary" },
    { title: "Stats Page Views", key: "stats-visits", color: "dark" }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 text-white">Portfolio Analytics</h2>
      <p className="text-center text-muted mb-5">
        Track how many users have viewed the portfolio and specific pages.
      </p>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <Row className="g-4">
          {statCards.map((card, index) => (
            <Col md={4} sm={6} xs={12} key={index}>
              <Card bg={card.color} text={card.color === 'light' ? 'dark' : 'white'} className="h-100 shadow-sm text-center">
                <Card.Body>
                  <Card.Title className="fs-5">{card.title}</Card.Title>
                  <Card.Text className="display-4 fw-bold">
                    {stats[card.key] || 0}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Stats;
