import './scss/footercomponent.scss';

export const FooterComponent = () => {
    return (
        <footer className="footer-container">
            <div className="footer-image">
                <img src="/images/logo1.svg" alt="logo" />
            </div>
            <article className="footer-items">
                <h3>Features</h3>
                <ul>
                    <li>Link Shortening</li>
                    <li>Brandend Links</li>
                    <li>Analytics</li>
                </ul>
            </article>
            <article className="footer-items">
                <h3>Resources</h3>
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </article>
            <article className="footer-items">
                <h3>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Carers</li>
                    <li>Contact</li>
                </ul>
            </article>
            <article className="footer-redes">
                    <img src="/images/icon-facebook.svg" alt="facebook" />
                    <img src="/images/icon-twitter.svg" alt="twitter" />
                    <img src="/images/icon-pinterest.svg" alt="pinterest" />
                    <img src="/images/icon-instagram.svg" alt="instagram" />
            </article>
        </footer>
    )
}
