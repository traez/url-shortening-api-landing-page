export default function Mnav({ isOpen, onToggleDialog }) {
  return (
    <nav className="mob-nav">
      <img src="./images/logo.svg" alt="" className="mob-nav-logo" />
      <img
        src="./images/icon-dropdown.png"
        alt=""
        className="mob-nav-icondd"
        id="icondd"
        onClick={onToggleDialog}
      />
      {isOpen && (
        <dialog open onClick={onToggleDialog}>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <hr />
          <ul>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </dialog>
      )}
    </nav>
  );
}
