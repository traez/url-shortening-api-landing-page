export default function Dnav() {
  return (
    <nav className="desk-nav">
      <div className="desk-nav-div">
        <img src="./images/logo.svg" alt="" className="desk-nav-logo" />
        <ul className="desk-nav-div-ul">
          <li className="desk-nav-li">Features</li>
          <li className="desk-nav-li">Pricing</li>
          <li className="desk-nav-li">Resources</li>
        </ul>
      </div>

      <ul className="desk-nav-ul">
        <li className="desk-nav-li desk-nav-ul-li">Login</li>
        <li className="desk-nav-li desk-nav-ul-li">Sign Up</li>
      </ul>
    </nav>
  );
}
