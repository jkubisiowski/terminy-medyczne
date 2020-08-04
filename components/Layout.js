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
                <Nav.Link href="#newsletter">Newsletter</Nav.Link>
                <Nav.Link href="#kontakt">Kontakt</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
      {props.children}

      <div className="footer-section">
        <div className="container">
          {<div id="newsletter" className="footer-newsletter-section">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="footer-newsletter-content">
                  <h3>Newsletter - ciekawe słówko tygodnia</h3>
                  <p>Zapisz się do newslettera i poznawaj co tydzień nowy, ciekawy termin medyczny!</p>
                </div>
              </div>
                <div className="footer-newsletter-form">
                  <div id="mc_embed_signup">
                    <form
                      action="https://terminymedyczne.us10.list-manage.com/subscribe/post?u=2754d6c462eeb3e54d2f33073&amp;id=0b5fde6c50"
                      method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                      className="validate"
                      target="_blank" noValidate>
                      <div id="mc_embed_signup_scroll" className="newsletter-container">
                          <div className="mc-field-group form-group">
                            <label htmlFor="mce-EMAIL"></label>
                            <input placeholder="Wpisz adres email" type="email" name="EMAIL" className="required email" id="mce-EMAIL"/>
                          </div>
                          <div className="mc-field-group form-group">
                            <label htmlFor="mce-IMIE"></label>
                            <input placeholder="Wpisz imię" type="text" name="IMIE" id="mce-IMIE"/>
                          </div>
                        <div id="mce-responses" className="clear">
                          <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                          <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                        </div>
                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                          <input type="text" name="b_2754d6c462eeb3e54d2f33073_0b5fde6c50" tabIndex="-1"/>
                        </div>
                        <div className="clear"><input type="submit" value="Zapisz się" name="subscribe" id="mc-embedded-subscribe" className="form-control search-form-submit"/></div>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>}

          <div className="row margin-decrese">
            <div className="col-lg-3 col-sm-4 col-6 col-margin">
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
            <div className="col-lg-3 col-sm-4 col-6 col-margin">
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
            <div className="col-lg-3 col-sm-4 col-6 col-margin">
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
            <div className="col-lg-3 col-sm-4 col-6 col-margin">
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
