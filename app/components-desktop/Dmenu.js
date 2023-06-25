export default function Dmenu() {
  return (
    <menu className="desk-men">
      <div className="desk-men-sho">Shortly</div>
      <div className="desk-men-div">
        <i className="desk-men-i">Features</i>
        <small className="desk-men-s">Link Shortening</small>
        <small className="desk-men-s">Branded Links</small>
        <small className="desk-men-s">Analytics</small>
      </div>
      <div className="desk-men-div">
        <i className="desk-men-i">Resources</i>
        <small className="desk-men-s">Blog</small>
        <small className="desk-men-s">Developers</small>
        <small className="desk-men-s">Support</small>
      </div>
      <div className="desk-men-div">
        <i className="desk-men-i">Company</i>
        <small className="desk-men-s">About</small>
        <small className="desk-men-s">Our Team</small>
        <small className="desk-men-s">Careers</small>
        <small className="desk-men-s">Contact</small>
      </div>
      <div className="desk-men-pics">
        <div className="desk-men-sm">
          <img src="./images/icon-facebook.svg" alt="" />
        </div>
        <div className="desk-men-sm">
          <img src="./images/icon-twitter.svg" alt="" />
        </div>
        <div className="desk-men-sm">
          <img src="./images/icon-pinterest.svg" alt="" />
        </div>
        <div className="desk-men-sm">
          <img src="./images/icon-instagram.svg" alt="" />
        </div>
      </div>
    </menu>
  );
}
