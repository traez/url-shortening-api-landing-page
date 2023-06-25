export default function Mmenu() {
  return (
    <menu className="mob-men">
      <div className="mob-men-sho">Shortly</div>
      <div className="mob-men-div">
        <i className="mob-men-i">Features</i>
        <small className="mob-men-s">Link Shortening</small>
        <small className="mob-men-s">Branded Links</small>
        <small className="mob-men-s">Analytics</small>
      </div>
      <div className="mob-men-div">
        <i className="mob-men-i">Resources</i>
        <small className="mob-men-s">Blog</small>
        <small className="mob-men-s">Developers</small>
        <small className="mob-men-s">Support</small>
      </div>
      <div className="mob-men-div">
        <i className="mob-men-i">Company</i>
        <small className="mob-men-s">About</small>
        <small className="mob-men-s">Our Team</small>
        <small className="mob-men-s">Careers</small>
        <small className="mob-men-s">Contact</small>
      </div>
      <div className="mob-men-pics">
        <div className="mob-men-sm">
          <img src="./images/icon-facebook.svg" alt="" />
        </div>
        <div className="mob-men-sm">
          <img src="./images/icon-twitter.svg" alt="" />
        </div>
        <div className="mob-men-sm">
          <img src="./images/icon-pinterest.svg" alt="" />
        </div>
        <div className="mob-men-sm">
          <img src="./images/icon-instagram.svg" alt="" />
        </div>
      </div>
    </menu>
  );
}
