require('dotenv').config();  // Load environment variables
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';  // Fallback for testing

const payload = {
  userId: 12345,  // Example: user ID
  email: 'user@example.com'  // Example: user email
};

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

console.log('Generated JWT:', token);
