import { motion } from 'framer-motion';
import "./Form.css";

const Login = () => (
  <motion.section
    className="screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h2>Signin to your <span className="brand">PopX</span> account</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

    <input type="email"     placeholder="Email Address" />
    <input type="password"  placeholder="Password" />

    <button className="btn primary">Login</button>
  </motion.section>
);

export default Login;
