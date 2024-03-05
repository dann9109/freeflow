import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer() {
    return (
      <>
        <footer className="footer">
            <div>
                <a href="#">
                    <img src="/images/icons8-facebook-48.png" alt="" />
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="/images/icons8-instagram-48.png" alt="" />
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="/images/icons8-linkedin-48.png" alt="" />
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="/images/icons8-twitter-48.png" alt="" />
                </a>
            </div>
            <p>© 2024 freeLance. All rights reserved.</p>
        </footer>
      </>
    )
}