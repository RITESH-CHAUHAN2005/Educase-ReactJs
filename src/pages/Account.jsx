import { motion } from 'framer-motion';
import './Account.css';

const Account = () => (
  <motion.section
    className="screen account"
    initial={{ scale: 0.96 }}
    animate={{ scale: 1 }}
  >
    <header className="account-header">Account Settings</header>

    <div className="profile-card">
      <img src="https://i.pravatar.cc/100" alt="avatar" />
      <div>
        <h4>Marry Doe</h4>
        <span>Marry@gmail.com</span>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam.
        </p>
      </div>
    </div>
  </motion.section>
);

export default Account;
