import { motion } from 'framer-motion';
import './Form.css';

const Signup = () => (
  <motion.section
    className="screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h2>Create your <span className="brand">PopX</span> account</h2>

    <input type="text"     placeholder="Full Name*" />
    <input type="text"     placeholder="Phone number*" />
    <input type="email"    placeholder="Email address*" />
    <input type="password" placeholder="Password*" />
    <input type="text"     placeholder="Company name" />

    <label className="radio-label">Are you an Agency?*</label>
    <div className="radio-row">
      <label><input type="radio" name="agency" /> Yes</label>
      <label><input type="radio" name="agency" /> No</label>
    </div>

    <button className="btn primary">Create Account</button>
  </motion.section>
);

export default Signup;
