/**
 * A single place to create the “phone / iOS” frame
 * so every route automatically sits inside the same shell.
 */
const PhoneShell = ({ children }) => (
    <div className="phone-shell">
      {children}
    </div>
  );
  
  export default PhoneShell;
  