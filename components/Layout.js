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
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
        <section className="feature-section">
          <div className="shape">
            <img src="/image/landing-1-shape.svg" alt=""/>
          </div>
          <div className="container">
            <div className="section-title text-center">
              <h3>Najczęściej wyszukiwane hasła</h3>
            </div>
            <div className="row mb-d-30">
              <div className="col-md-6 col-lg-4 mb--30">
                <div className="feature-card">
                  <div className="card-icon">
                    <i className="fas fa-stethoscope"></i>
                  </div>
                  <div className="card-content">
                    <h3>ZUM</h3>
                    <p>Zakażenie układu moczowego, proces zapalny może znajdować się w układzie moczowym czyli w
                      nerkach, pęcherzu lub cewce moczowej.</p>
                    <a href="/terminy/zum" className="btn btn-link right-icon">Czytaj dalej <i
                      className="icon icon-minimal-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb--30">
                <div className="feature-card">
                  <div className="card-icon">
                    <i className="fas fa-syringe"></i>
                  </div>
                  <div className="card-content">
                    <h3>Insulinooporność</h3>
                    <p>Stan, w którym tkanki organizmu są za mało wrażliwe na insulinę, co skutkuje nadmiernym
                      wydzielaniem insuliny by osiągnąć odpowiedni efekt.</p>
                    <a href="/terminy/insulionoopornosc" className="btn btn-link right-icon">Czytaj dalej <i
                      className="icon icon-minimal-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb--30">
                <div className="feature-card">
                  <div className="card-icon">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                  <div className="card-content">
                    <h3>Torbiel</h3>
                    <p>Nieprawidłowa przestrzeń w tkance wypełniona płynem. Torbiele mogą wystepować w różnych tkankach
                      np. w jajniku, nerkach, tkance podskórnej.</p>
                    <a href="/terminy/torbiel" className="btn btn-link right-icon">Czytaj dalej <i
                      className="icon icon-minimal-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section id="o-nas" className="content-section-01">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5  col-sm-6 col-10">
                <div className="content-img">
                  <img src="/image/Konrad.png" alt=""/>
                </div>
              </div>

              <div className="col-xl-5 offset-xl-1 col-sm-6">
                <div className="content-right-content">
                  <h2>Konrad Janik</h2>
                  <p>
                    Lekarz w trakcie specjalizacji z&nbsp;radiologii i&nbsp;diagnostyki obrazowej. Studiował w Collegium Medicum
                    Uniwersytetu Jagiellońskiego w&nbsp;Krakowie oraz Julius-Maximilians-Universität w&nbsp;Würzburgu.
                  </p>
                  <ul className="content-list">
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Kierownik działu medycznego Instytutu IBSS BIOMED S.A.
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Tłumacz specjalistycznych tekstów medycznych z&nbsp;języka angielskiego i&nbsp;niemieckiego
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Laureat teleturnieju “Milionerzy”
                    </li>
                  </ul>
                  <p>
                  Interesują go zastosowania sztucznej inteligencji w&nbsp;medycynie, potencjał mikrobiomu oraz futurologia medyczna.
                  </p>
                  <p><i> Jeśli nie potrafisz czegoś prosto wytłumaczyć - to znaczy, że tak naprawdę tego nie rozumiesz.</i></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section-02">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 offset-xl-1 col-sm-6 col-10 order-sm-2">
                <div className="content-img">
                  <img src="/image/Gosia.png" alt=""/>
                </div>
              </div>
              <div className="col-xl-5  col-sm-6 order-sm-1">
                <div className="content-left-content">
                  <h2>Małgorzata Łukaszewicz</h2>
                  <p>
                  Lekarka stażystka w Uniwersyteckim Centrum Klinicznym WUM.
                  Ukończyła I Wydział Lekarski Warszawskiego Uniwersytetu Medycznego.
                  </p>
                  <ul className="content-list">
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Specjalista ds. Digital Marketingu w&nbsp;branży farmaceutycznej oraz wyrobów medycznych
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Doświadczenie jako Konsultant Medyczny w&nbsp;agencji marketingowej
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Autorka fakultetu Medycyna Przyszłości prowadzonego w&nbsp;Zakładzie Informatyki Medycznej i&nbsp;Telemedycyny WUM
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Prelegentka na konferencjach oraz warsztatach związanych z&nbsp;telemedycyną i&nbsp;wykorzystaniem nowych technologii w&nbsp;medycynie
                    </li>
                  </ul>
                  <p>
                  Innowacje pomagają poprawić komfort i&nbsp;skuteczność leczenia, dlatego chce je tworzyć oraz wykorzystywać w pracy lekarza.
                  </p>
                  <p><i>Pacjent, który lepiej rozumie swoją chorobę, łatwiej przechodzi proces leczenia i&nbsp;uzyskuje lepsze efekty zdrowotne. </i></p>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section id="o-projekcie" className="content-section-03">
          <div className="shape">
            <img src="/image/landing-4.svg" alt=""/>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6 col-10">
                <div className="content-img">
                  <img src="/image/doctor.png" alt=""/>
                </div>
              </div>
              <div className="col-xl-5  offset-xl-1 col-lg-6 col-md-7 col-sm-6 ">
                <div className="content-left-content">
                  <h2>Naszą misją jest usprawnienie komunikacji na linii lekarz-pacjent</h2>
                  <p>
                    <b>Jesteś pacjentem?</b> Masz dostęp do rzetelnych, sprawdzonych informacji by lepiej zrozumieć
                    skomplikowane rezultaty badań, wyniki konsultacji i wypisy ze szpitala.
                  </p>
                  <p>
                    <b>Jesteś lekarzem?</b> Masz pod ręką wygodne narzędzie, które pomaga sprawnie wytłumaczyć
                    pacjentowi zawiłe pojęcia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="pricing-section">
          <div className="shape">
            <img src="/image/landing-2-shape.svg" alt=""/>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 offset-xl-1 col-sm-6 col-10 order-sm-2">
                <div className="content-img">
                  <img src="/image/kontakt.png" alt=""/>
                </div>
              </div>
              <div className="col-xl-5  col-sm-6 order-sm-1">
                <div className="content-left-content section-title">
                  <h2>Masz pytania?</h2>
                  <p>
                    Chętnie na nie odpowiemy!
                  </p>
                  <p>
                    Napisz do nas:<br/>
                    <a href="mailto:kontakt@terminymedyczne.pl">kontakt@terminymedyczne.pl</a>
                    <a href="mailto:malgorzata@terminymedyczne.pl">malgorzata@terminymedyczne.pl</a>
                    <a href="mailto:konrad@terminymedyczne.pl">konrad@terminymedyczne.pl</a>
                  </p>
                  <ul className="footer-social-list">
                    <li>
                      <a href="https://www.facebook.com/terminymedyczne/" target="_blank">
                        <i className="icon text-white icon-logo-fb-simple icon-white"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/terminymedyczne/" target="_blank">
                        <i className="icon text-white icon-logo-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    <li><a href="polityka-prywatnosci">Polityka prywatności</a></li>
                    <li><a href="regulamin-serwisu">Regulamin serwisu</a></li>
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
