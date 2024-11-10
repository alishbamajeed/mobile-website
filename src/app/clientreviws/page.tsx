// Import the CSS file using the alias
import { FaSmile } from 'react-icons/fa';
import '@/styling/ClientReviwe.css'
const Client = () => {
  const reviews = [
    {
      name: 'Ahmed Khan',
      location: 'California',
      mobile: '+1 234-567-8901',
      review: 'Amazing service! The team went above and beyond my expectations. Highly recommend their professional approach.',
    },
    {
      name: 'Fatima Syed',
      location: 'Texas',
     
      mobile: '+1 345-678-9012',
      review: 'Outstanding quality and attention to detail. They delivered exactly what I needed, on time and within budget.',
    },
    {
      name: 'Muhammad Ali',
      location: 'Florida',
      mobile: '+1 456-789-0123',
      review: 'Excellent communication throughout the project. Their expertise and dedication made the whole process smooth.',
    },
    {
      name: 'Zainab Hassan',
      location: 'Chicago',
      mobile: '+1 567-890-1234',
      review: 'Truly impressed with their innovative solutions and customer service. Would definitely work with them again!',
    },
  ];

  return (
    <div className="reviews-container">
      <h2 className="reviews-heading">Client Reviews</h2>
      <div className="review-cards">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="happy-icon">
              <FaSmile size={40} color="#ffd700" />
            </div>
            <p className="review-text">&ldquo;{review.review}&rdquo;</p>
            <h3 className="reviewer-name">{review.name}</h3>
            <h4 className="reviewer-location">{review.location}</h4>
            <p className="reviewer-mobile">{review.mobile}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
