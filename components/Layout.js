import TMHead from "./TMHead";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

function Layout(props) {
  return (
    <>
      <TMHead></TMHead>
      <header className="site-header">
        <div className="container">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
              <img className="navbar-logo" src="/image/main-logo.png" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Sprawdź termin</Nav.Link>
                <Nav.Link href="#o-nas">O nas</Nav.Link>
                <Nav.Link href="#o-projekcie">O projekcie</Nav.Link>
                <Nav.Link href="/kategorie">Kategorie</Nav.Link>
                <Nav.Link href="#kontakt">Kontakt</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
      {props.children}

      <div className="footer-section">
        <div className="container">
          {/* <div className="footer-newsletter-section">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="footer-newsletter-content">
                    <h2>Zapisz się do newslettera</h2>
                    <p>Dołącz do naszej listy mailingowej i bądź na bieżąco z najnowszymi ciekawostkami ze świata
                      medycznego</p>
                  </div>
                </div>
                <div className="col-lg-7 col-xl-6">
                  <div className="footer-newsletter-form">
                    <form action="">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Wpisz adres email"/>
                        <button className="submit-btn">Zapisz się</button>
                      </div>
                      <p className="form-text"><i className="icon icon-lock"></i>Your data is protected. We never spam
                        in your inbox</p>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}

          <div className="row margin-decrese">
            <div className="col-lg-2 col-sm-4 col-6 col-margin">
              <div className="single-footer">
                <div className="footer-title">
                  <h6>Menu</h6>
                </div>
                <ul className="footer-list">
                  <li><a href="/">Znajdź termin</a></li>
                  <li><a href="#about-us">O nas</a></li>
                  <li><a href="#about-project">O projekcie</a></li>
                  <li><a href="kategorie">Kategorie</a></li>
                  <li><a href="#contact">Kontakt</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 col-margin">
              <div className="single-footer">
                <div className="footer-title">
                  <h6>Linki</h6>
                </div>
                <ul className="footer-list">
                  <li className="social-media">
                    <a href="https://www.facebook.com/terminymedyczne/" target="_blank">
                      <i className="icon icon-logo-fb-simple"></i>
                    </a>
                    <a href="https://instagram.com/terminymedyczne/" target="_blank">
                      <i className="icon icon-logo-instagram"></i>
                    </a>
                  </li>
                  <li><a href="/polityka-prywatnosci">Polityka prywatności</a></li>
                  <li><a href="/regulamin-serwisu">Regulamin serwisu</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 col-margin">
              <div className="single-footer">
                <div className="footer-title">
                  <h6>Powered by</h6>
                </div>
                <ul className="footer-list">
                  <li><a href="https://karolinavirtualassistant.com/" target="_blank">KarolinaVA</a></li>
                  <li><a href="https://www.jakubkubisiowski.pl/" target="_blank">jakubkubisiowski.pl</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 col-margin">
              <div className="single-footer">
                <div className="footer-title">
                  <h6>Copyright</h6>
                </div>
                <ul className="footer-list">
                  <li><a href="/">TerminyMedyczne.pl</a></li>
                  <li><a href="https://iconscout.com/illustrations/doctor" target="_blank">Doctor
                    Illustration</a> by <a href="https://iconscout.com/contributors/manypixels-gallery"
                                           target="_blank">Manypixels Gallery</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 col-margin">
              <div className="single-footer">
                <div className="footer-title"></div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="/plugins/jquery/jquery.min.js"></script>
      <script src="/plugins/jquery/jquery-migrate.min.js"></script>
      <script src="/plugins/bootstrap-4.3.1/js/bootstrap.bundle.js"></script>
    </>
  )
}

export default Layout
