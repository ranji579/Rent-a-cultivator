import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Dashboard = ({ username }) => {
  const [selectedTractor, setSelectedTractor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deliveryDistance, setDeliveryDistance] = useState(10); // in km, user can change
  const [village, setVillage] = useState(''); // user's village
  const [showLoginModal, setShowLoginModal] = useState(false);
  const distanceRate = 20; // ₹ per km
  const distanceAmount = deliveryDistance * distanceRate;

  const tractorDetails = {
    'Paddy_tresher': {
      name: 'Paddy Thresher',
      price: '₹2,500/day',
      power: '15 HP',
      capacity: '500-800 kg/hour',
      fuel: 'Diesel',
      description: 'Efficient paddy threshing machine for rice harvesting. Suitable for small to medium farms.',
      features: ['High threshing efficiency', 'Low grain damage', 'Easy operation', 'Durable construction']
    },
    'Dick Harrow': {
      name: 'Disc Harrow',
      price: '₹1,800/day',
      power: '35-50 HP',
      capacity: '2-3 acres/day',
      fuel: 'Tractor mounted',
      description: 'Heavy-duty disc harrow for primary and secondary tillage operations.',
      features: ['Deep soil penetration', 'Adjustable disc angle', 'Heavy-duty construction', 'Suitable for all soil types']
    },
    'Mahindra 275 DI tu': {
      name: 'Mahindra 275 DI TU',
      price: '₹3,200/day',
      power: '27.5 HP',
      capacity: '3-4 acres/day',
      fuel: 'Diesel',
      description: 'Powerful tractor for various farming operations with excellent fuel efficiency.',
      features: ['High torque engine', 'Multi-speed transmission', 'Comfortable operator seat', 'Low maintenance']
    },
    'Rotary tiller': {
      name: 'Rotary Tiller',
      price: '₹2,000/day',
      power: '18 HP',
      capacity: '1-2 acres/day',
      fuel: 'Diesel',
      description: 'Versatile rotary tiller for soil preparation and seedbed preparation.',
      features: ['Fine soil preparation', 'Adjustable depth', 'Easy to operate', 'Suitable for small farms']
    },
    'Plough Cultivator 5 Teeth': {
      name: 'Plough Cultivator 5 Teeth',
      price: '₹1,500/day',
      power: '25-35 HP',
      capacity: '2-3 acres/day',
      fuel: 'Tractor mounted',
      description: 'Efficient cultivator with 5 teeth for primary tillage operations.',
      features: ['Deep ploughing', '5 hardened teeth', 'Adjustable depth', 'Durable steel construction']
    },
    'Plough Cultivator': {
      name: 'Plough Cultivator',
      price: '₹1,600/day',
      power: '30-40 HP',
      capacity: '2-3 acres/day',
      fuel: 'Tractor mounted',
      description: 'Standard plough cultivator for soil preparation and weed control.',
      features: ['Versatile design', 'Easy depth adjustment', 'Robust construction', 'Suitable for various crops']
    },
    'Garden Tiller': {
      name: 'Garden Tiller',
      price: '₹800/day',
      power: '6.6 kW',
      capacity: '0.5-1 acre/day',
      fuel: 'Petrol',
      description: 'Compact garden tiller perfect for small gardens and vegetable plots.',
      features: ['Lightweight design', 'Easy maneuverability', 'Suitable for small spaces', 'Low fuel consumption']
    },
    'Round Baler': {
      name: 'Round Baler',
      price: '₹4,000/day',
      power: '50-75 HP',
      capacity: '20-30 bales/hour',
      fuel: 'Tractor mounted',
      description: 'High-capacity round baler for hay and straw baling operations.',
      features: ['Automatic bale ejection', 'Adjustable bale size', 'High capacity', 'Durable construction']
    },
    'Paddy - Multi Thresher': {
      name: 'Paddy Multi Thresher',
      price: '₹3,500/day',
      power: '20 HP',
      capacity: '800-1200 kg/hour',
      fuel: 'Diesel',
      description: 'Advanced multi-crop thresher suitable for paddy, wheat, and other grains.',
      features: ['Multi-crop capability', 'High threshing efficiency', 'Low grain loss', 'Easy maintenance']
    },
    'Basket Thresher': {
      name: 'Basket Thresher',
      price: '₹2,800/day',
      power: '15 HP',
      capacity: '400-600 kg/hour',
      fuel: 'Diesel',
      description: 'Traditional basket thresher for gentle threshing of delicate crops.',
      features: ['Gentle threshing', 'Low grain damage', 'Simple operation', 'Cost-effective']
    },
    'Straw Reaper': {
      name: 'Straw Reaper',
      price: '₹3,800/day',
      power: '45-60 HP',
      capacity: '2-3 acres/day',
      fuel: 'Tractor mounted',
      description: 'Efficient straw reaper for harvesting and collecting crop residues.',
      features: ['High cutting efficiency', 'Adjustable cutting height', 'Collector attachment', 'Versatile operation']
    },
    'Mounted Combine Harveste': {
      name: 'Mounted Combine Harvester',
      price: '₹8,000/day',
      power: '75-100 HP',
      capacity: '3-5 acres/day',
      fuel: 'Diesel',
      description: 'Complete harvesting solution that cuts, threshes, and cleans grain in one operation.',
      features: ['Complete harvesting', 'High efficiency', 'Grain storage', 'Advanced controls']
    }
  };

  const handleRentClick = (tractorName) => {
    setSelectedTractor(tractorDetails[tractorName] || {
      name: tractorName,
      price: '₹2,000/day',
      power: '25 HP',
      capacity: '2-3 acres/day',
      fuel: 'Diesel',
      description: 'Professional farming equipment for various agricultural operations.',
      features: ['High efficiency', 'Durable construction', 'Easy operation', 'Low maintenance']
    });
    setShowModal(true);
    setDeliveryDistance(10); // Reset to default when opening modal
    setVillage(''); // Reset village when opening modal
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTractor(null);
  };

  // Add handler for login success (optional: update username)
  const handleLoginSuccess = (user) => {
    // You can update username here if you want
    // setUsername(user);
    setShowLoginModal(false);
  };

  return (
    <div style={styles.page}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <div style={styles.logo}>
            <span style={styles.logoText}>🚜 Rent-A-Cultivator</span>
          </div>
        </div>
        
        <div style={styles.navRight}>
          <div style={styles.navCenter}>
            <a href="#home" style={styles.navLink}>Home</a>
            <a href="#equipment" style={styles.navLink}>Equipment</a>
            <a href="#about" style={styles.navLink}>About</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </div>
          
          <span style={styles.userInfo}>Welcome, {username}</span>
          <button 
            style={styles.loginBtn} 
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </button>
          <button style={styles.logoutBtn}>Logout</button>
        </div>
      </nav>

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>🚜 RENT-A-CULTIVATOR</h1>
        <p style={styles.subtitle}>
          Hello {username}, welcome to your tractor rental dashboard!
        </p>
        <p style={styles.description}>
          Explore a wide range of tractors suitable for all your farming needs. All models available on a rental basis.
        </p>
      </header>
      
      {/* Tractor Cards */}
      <div style={styles.imageContainer}>
        {/* Tractor 1 */}
        <div style={styles.card}>
          <img
            // src="https://cdn.tractorsdekho.com/in/mahindra /255-di-power-plus/mahindra-255-di-power-plus-48822.jpg"
            src = "image\AG400_Paddy_tresher.webp"
            alt="Paddy_tresher"
            style={styles.tractorImage}
          />
          <p style={styles.caption}>Paddy_tresher</p>
          <button style={styles.rentButton} onClick={() => handleRentClick('Paddy_tresher')}>Rent Now</button>
        </div>

        {/* Tractor 2 */}
        <div style={styles.card}>
          <img
            src="image\AG056_Disc_harrow (1).webp"
            alt="Dick Harrow"
            style={styles.tractorImage}
          />
          <p style={styles.caption}>Dick Harrow</p>
          <button style={styles.rentButton} onClick={() => handleRentClick('Dick Harrow')}>Rent Now</button>
        </div>
        {/* Tractor 3 */}
        <div style={styles.card}>
          <img
            src="image\agricultural-machinery-agriculture-disc-harrow-cultivator-png-favpng-vqU6Yp8dKD5RFEYF3gMPtQ628.jpg"
            alt="Mahindra 275 DI TU"
            style={styles.tractorImage}
          />
          <button style={styles.rentButton} onClick={() => handleRentClick('Mahindra 275 DI tu')}>Rent Now</button>
        </div>

        

        
         {/* Tractor 4 */}
        <div style={styles.card}>
          <img
            src="image\tractor-rotavator-power-18-hp-2216880342-7ln43l72.avif"
            alt="Rotary tiller"
            style={styles.tractorImage}
          />
          <p style={styles.caption}>Rotary tiller</p>
          <button style={styles.rentButton} onClick={() => handleRentClick('Rotary tiller')}>Rent Now</button>
        </div>
        <div style={styles.imageContainer}>
        {/* Tractor 5 */}
        <div style={styles.card}>
          <img
            src="image\mild-steel-blue-painted-highly-durable-5-teeth-tractor-driven-plough-cultivator-for-agriculture-248.jpg"
            alt="Plough Cultivator 5 Teeth"
            style={styles.tractorImage}
          />
          <p style={styles.caption}>Plough Cultivator 5 Teeth</p>
          <button style={styles.rentButton} onClick={() => handleRentClick('Plough Cultivator 5 Teeth')}>Rent Now</button>
        </div>
      </div>

      {/* Tractor 6 */}
      <div style={styles.card}>
        <img
          src="image\istockphoto-1096903098-612x612.jpg"
          alt="Plough Cultivator"
          style={styles.tractorImage}
          />
          <p style={styles.caption}>Plough Cultivator</p>
          <button style={styles.rentButton} onClick={() => handleRentClick('Plough Cultivator')}>Rent Now</button>
        </div>

        {/* Tractor 7 */}
      <div style={styles.card}>
        <img
          src="image\garden_tiller_85kg_6.6kw.webp"
          alt="Garden Tiller "
          style={styles.tractorImage}
          />
          <p style={styles.caption}>Garden Tiller</p>
          <button style={styles.rentButton} onClick={() => handleRentClick('Garden Tiller')}>Rent Now</button>
        </div>

        {/* Tractor 8 */}
      <div style={styles.card}>
        <img
          src="image\A3f142b0374814f3e95c4ad4d5ecbf91eY.avif"
          alt=" "
          style={styles.tractorImage}
          />
          <p style={styles.caption}>Garden Tiller</p>
          <button style={styles.rentButton} onClick={() => handleRentClick('Garden Tiller')}>Rent Now</button>
        </div>

         {/* Tractor 9 */}
      <div style={styles.card}>
        <img
          src="image\Loaders_desktop 1.png"
          alt=" "
          style={styles.tractorImage}
          />
          <p style={styles.caption}>Garden Tiller</p>
          <button style={styles.rentButton} onClick={() => handleRentClick('Garden Tiller')}>Rent Now</button>
        </div>

         {/* Tractor 10 */}
      <div style={styles.card}>
        <img
          src="image\mahindra-round-straw-baler.jpg"
          alt="Round Baler"
          style={styles.tractorImage}
          />
          <p style={styles.caption}>Round Baler </p>
          <button style={styles.rentButton} onClick={() => handleRentClick('Round Baler')}>Rent Now</button>
        </div>
        </div>

      
      <div style={styles.imageContainer}>
      {/* Tractor 10 */}
      <div style={styles.card}>
        <img
          src="image\Mahindra Paddy - Multi Thresher P-80 2.png"
          alt="Paddy - Multi Thresher"
          style={styles.tractorImage}
        />
        <p style={styles.caption}>Paddy - Multi Thresher </p>
        <button style={styles.rentButton} onClick={() => handleRentClick('Paddy - Multi Thresher')}>Rent Now</button>
      </div>
     
      {/* Tractor 11*/}
      <div style={styles.card}>
        <img
          src="image\Mahindra Basket Thresher P-990 1.png"
          alt="Basket Thresher"
          style={styles.tractorImage}
        />
        <p style={styles.caption}>Basket Thresher</p>
        <button style={styles.rentButton} onClick={() => handleRentClick('Basket Thresher')}>Rent Now</button>
      </div>

      {/* Tractor 12*/}
      <div style={styles.card}>
        <img
          src="image\Mahindra Straw Reaper 2.png"
          alt="Straw Reaper"
          style={styles.tractorImage}
        />
        <p style={styles.caption}>Straw Reaper</p>
        <button style={styles.rentButton} onClick={() => handleRentClick('Straw Reaper')}>Rent Now</button>
      </div>

      {/* Tractor 13*/}
      <div style={styles.card}>
        <img
          src="image\Mahindra Paddy - Multi Thresher P-80 1.png"
          alt="Paddy - Multi Thresher"
          style={styles.tractorImage}
        />
        <p style={styles.caption}>Paddy - Multi Thresher</p>
        <button style={styles.rentButton} onClick={() => handleRentClick('Paddy - Multi Thresher')}>Rent Now</button>
      </div>

      {/* Tractor 14*/}
      <div style={styles.card}>
        <img
          src="image\Mahindra Round baler 1.png"
          alt="Round Baler"
          style={styles.tractorImage}
        />
        <p style={styles.caption}>Round Baler</p>
        <button style={styles.rentButton} onClick={() => handleRentClick('Round Baler')}>Rent Now</button>
      </div>
      </div>

      <div style={styles.imageContainer}>
      {/* Tractor 15 */}
      <div style={styles.card}>
        <img
          src="image\product-jpeg-500x500.webp"
          alt="Paddy - Multi Thresher"
          style={styles.tractorImage}
        />
        <p style={styles.caption}>Paddy - Multi Thresher </p>
        <button style={styles.rentButton} onClick={() => handleRentClick('Paddy - Multi Thresher')}>Rent Now</button>
      </div>

      {/* Tractor 16 */}
      <div style={styles.card}>
        <img
          src="image\standard-tractor-mounted-combine-harvester.jpg"
          alt="Mounted Combine Harvester"
          style={styles.tractorImage}
        />
        <p style={styles.caption}>Mounted Combine Harveste </p>
        <button style={styles.rentButton} onClick={() => handleRentClick('Mounted Combine Harveste')}>Rent Now</button>
      </div>
      </div>

      {/* Contact Section */}
      <footer style={styles.footer}>
        <h3>Contact Us</h3>
        <p>Email: support@rentacultivator.com</p>
        <p>Phone: +91-9876543210</p>
        <p>Location: MITE, Moodbidri, Karnataka</p>
        <p>We are here to help you 24/7 with your farming needs.</p>
      </footer>

      {/* Modal for Tractor Details */}
      {showModal && selectedTractor && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>{selectedTractor.name}</h2>
            <p>Price: {selectedTractor.price}</p>
            <p>Power: {selectedTractor.power}</p>
            <p>Capacity: {selectedTractor.capacity}</p>
            <p>Fuel: {selectedTractor.fuel}</p>
            <p>Description: {selectedTractor.description}</p>
            <h3>Features:</h3>
            <ul>
              {selectedTractor.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <hr />
            <div style={styles.distanceSection}>
              <label style={styles.distanceLabel}>
                <strong>Delivery Distance (km):</strong>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={deliveryDistance}
                  onChange={(e) => setDeliveryDistance(parseInt(e.target.value) || 1)}
                  style={styles.distanceInput}
                />
              </label>
              <label style={styles.villageLabel}>
                <strong>Your Village:</strong>
                <input
                  type="text"
                  placeholder="Enter your village name"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  style={styles.villageInput}
                />
              </label>
              <p><strong>Distance Amount:</strong> ₹{distanceAmount}</p>
            </div>
            <button style={styles.closeModalButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Login/Register Modal */}
      <LoginForm
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    background: '#f9f9f9',
    minHeight: '100vh',
  },
  navbar: {
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  navCenter: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  userInfo: {
    fontSize: '0.9rem',
    color: '#fff',
  },
  logoutBtn: {
    backgroundColor: '#e60000',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  loginBtn: {
    backgroundColor: '#006400',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  header: {
    textAlign: 'center',
    margin: '40px 0 20px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#006400',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#333',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginTop: '10px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    padding: '30px 0',
    alignItems: 'stretch', // Ensures all cards stretch to same height
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '15px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '220px',
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '320px', // Ensures minimum height for all cards
  },
  tractorImage: {
    width: '100%',
    height: '180px', // Fixed height for images
    objectFit: 'cover', // Ensures image covers the area without stretching
    borderRadius: '10px',
    marginBottom: '10px',
  },
  caption: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#004d00',
  },
  rentButton: {
    backgroundColor: '#006400',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  footer: {
    marginTop: '50px',
    textAlign: 'center',
    backgroundColor: '#dff0d8',
    padding: '20px',
    borderRadius: '8px',
    color: '#333',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'left',
  },
  closeModalButton: {
    backgroundColor: '#e60000',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '20px',
  },
  distanceSection: {
    marginTop: '20px',
    paddingTop: '15px',
    borderTop: '1px solid #eee',
  },
  distanceLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#555',
  },
  distanceInput: {
    width: '80px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  villageLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#555',
  },
  villageInput: {
    width: '150px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  loginModalContent: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'left',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  modalTitle: {
    fontSize: '1.8rem',
    color: '#006400',
    margin: '0',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#555',
    padding: '5px',
  },
  tabContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    borderBottom: '1px solid #eee',
  },
  tab: {
    flex: 1,
    padding: '10px 15px',
    border: 'none',
    borderBottom: '2px solid transparent',
    background: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#555',
    transition: 'color 0.3s ease, border-bottom-color 0.3s ease',
  },
  activeTab: {
    color: '#006400',
    borderBottomColor: '#006400',
  },
  formSection: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '1.4rem',
    color: '#333',
    marginBottom: '10px',
  },
  sectionSubtitle: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '20px',
  },
  accountTypeContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  accountTypeButton: {
    flex: 1,
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#f0f0f0',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
  },
  activeAccountType: {
    background: '#006400',
    color: '#fff',
    borderColor: '#006400',
  },
  accountIcon: {
    fontSize: '1.2rem',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  inputLabel: {
    display: 'block',
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#006400',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default Dashboard;