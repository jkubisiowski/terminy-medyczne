import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Terminy medyczne</title>
        <link rel="icon" type="image/png" href="/image/favicon-bg.png"/>
        <link rel="stylesheet" href="/plugins/bootstrap-4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/plugins/meanmenu/meanmenu.css"/>
        <link rel="stylesheet" href="/fonts/ep-icon-fonts/css/style.css"/>
        <link rel="stylesheet" href="/fonts/fontawesome-5/css/all.min.css"/>
        <link rel="stylesheet" href="/css/settings.css"/>
        <link rel="stylesheet" href="/css/style.css"/>
        {process.env.NODE_ENV === 'production' && (
          <>
            <script id="mcjs"
              dangerouslySetInnerHTML={{
                __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/2754d6c462eeb3e54d2f33073/206ba6fc47eb8ad6d7867699d.js");`,
              }}
            />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-172432228-1"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'UA-172432228-1');
              `,
              }}
            />
          </>)}
      </Head>
      <div className="site-wrapper">
        <header className="site-header">
          <div className="container">
            <div className="row justify-content-left align-items-center position-relative">
              <div className="col-sm-3 col-6 col-lg-2 col-xl-2 order-lg-1">
                <div className="brand">
                  <a href="/"><img src="/image/main-logo.png" alt=""/></a>
                </div>
              </div>
              <div className="col-sm-1 col-6 col-lg-7 col-xl-6 offset-xl-1 position-static order-lg-2">
                <div className="main-navigation">
                  <ul className="main-menu">
                    <li className="menu-item"><a href="/">Sprawdź termin</a></li>
                    <li className="menu-item"><a href="#about-us">O nas</a></li>
                    <li className="menu-item"><a href="#about-project">O projekcie</a></li>
                    <li className="menu-item"><a href="/kategorie">Kategorie</a></li>
                    <li className="menu-item"><a href="#contact">Kontakt</a></li>
                  </ul>
                </div>
                <div className="mobile-menu"></div>
              </div>
            </div>
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

        <section id="about-us" className="content-section-01">
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
                    Lekarz w trakcie specjalizacji z radiologii i diagnostyki obrazowej. Studiował w Collegium Medicum
                    Uniwersytetu Jagiellońskiego w Krakowie oraz Julius-Maximilians-Universität w Würzburgu.
                  </p>
                  <ul className="content-list">
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Kierownik działu medycznego Instytutu IBSS BIOMED S.A.
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Tłumacz specjalistycznych tekstów medycznych z języka angielskiego i niemieckiego
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Laureat teleturnieju “Milionerzy”
                    </li>
                  </ul>
                  <p>
                  Interesują mnie zastosowania sztucznej inteligencji w medycynie, potencjał mikrobiomu oraz futurologia medyczna.
                  </p>
                  <p><b><i>Jeśli nie potrafisz czegoś prosto wytłumaczyć - to znaczy, że tak naprawdę tego nie rozumiesz.</i></b> ~ cytat przypisywany A. Einsteinowi</p>
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
                      <span><i className="icon icon-check-2"></i></span>Specjalista ds. Digital Marketingu w branży farmaceutycznej oraz wyrobów medycznych
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Doświadczenie jako Konsultant Medyczny w agencji marketingowej
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Autorka fakultetu Medycyna Przyszłości prowadzonego w Zakładzie Informatyki Medycznej i Telemedycyny WUM
                    </li>
                    <li>
                      <span><i className="icon icon-check-2"></i></span>Prelegentka na konferencjach oraz warsztatach związanych z telemedycyną i wykorzystaniem nowych technologii w medycynie
                    </li>
                  </ul>
                  <p>
                  Innowacje pomagają poprawić komfort i skuteczność leczenia, dlatego chcę je tworzyć oraz wykorzystywać w pracy lekarza.
                  </p>
                  <p><b><i>Pacjent, który lepiej rozumie swoją chorobę, łatwiej przechodzi proces leczenia i uzyskuje lepsze efekty zdrowotne. </i></b></p>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section id="about-project" className="content-section-03">
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
                    skomplikowane rezultaty badań, wyniki konsultacji i wyisy ze szpitala.
                  </p>
                  <p>
                    <b>Jesteś lekarzem?</b> Masz pod ręką wygodne narzędzie, które pomaga sprawnie wytłumaczyć
                    pacjentowi zaawiłe pojęcia.
                  </p>
                  {/* <div className="content-bottom-part">
                    <p></p>
                    <div className="content-btn">
                      <a href="#" className="btn btn--primary">Schedule A Demo</a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

        </section>

        <section id="contact" className="pricing-section">
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
                      <a href="" target="_blank">
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
        {/* <section className="pricing-section">
          <div className="shape">
            <img src="/image/landing-2-shape.svg" alt=""/>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2>Mark your next step</h2>
                  <p>We designed and tested prototypes that helped identify pain points in the account creation process.
                    Together, we shaped the new standard.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="btn--toggle-pricing" data-tab-target="#pricing-tab-7">
                  <p>Monthly</p>
                  <label className="switch">
                    <input type="checkbox"/>
                      <span className="slider round"></span>
                  </label>
                  <p>Yearly</p>
                </div>
              </div>

            </div>
            <div className="custom-tab-wrapper monthly" id="pricing-tab-7">
              <div className="row mb-d-30">
                <div className="col-lg-4">
                  <div className="pricing-card">

                    <div className="card-head">
                      <h6>Basic</h6>
                      <h2><span className="small-title">$</span><span className="big-txt" data-monthly='19'
                                                                      data-yearly='14'>19</span><span className="month"
                                                                                                      data-monthly='/month'
                                                                                                      data-yearly='/year'>/month</span>
                      </h2>
                      <p>Good for small business launching their products less then once a year</p>
                    </div>

                    <div className="card-content">
                      <ul className="pricing-list">
                        <li><span><i className="icon icon-check-2"></i></span>Unlimited Blocks</li>
                        <li><span><i className="icon icon-check-2"></i></span>5GB Clould Storages</li>
                        <li className="disable-opt"><span><i className="icon icon-check-2"></i></span>Custom Domain
                          Names
                        </li>
                        <li className="disable-opt"><span><i className="icon icon-check-2"></i></span>Unlimited
                          Emails
                        </li>
                      </ul>
                      <div className="card-btn">
                        <a href="" className="btn btn--primary">Start Free Trial</a>
                      </div>
                      <p>No credit card required</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="pricing-card active">

                    <div className="card-head">
                      <h6>Pro</h6>
                      <span className="card-badge">Popular</span>
                      <h2><span className="small-title">$</span><span className="big-txt" data-monthly='29'
                                                                      data-yearly='25'>29</span><span className="month"
                                                                                                      data-monthly='/month'
                                                                                                      data-yearly='/year'>/month</span>
                      </h2>
                      <p>Good for small business launching their products less then once a year</p>
                    </div>


                    <div className="card-content">
                      <ul className="pricing-list">
                        <li><span><i className="icon icon-check-2"></i></span>Unlimited Blocks</li>
                        <li><span><i className="icon icon-check-2"></i></span>5GB Clould Storages</li>
                        <li><span><i className="icon icon-check-2"></i></span>Custom Domain Names</li>
                        <li className="disable-opt"><span><i className="icon icon-check-2"></i></span>Unlimited
                          Emails
                        </li>
                      </ul>
                      <div className="card-btn">
                        <a href="" className="btn btn--primary">Start Free Trial</a>
                      </div>
                      <p>No credit card required</p>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4">
                  <div className="pricing-card">

                    <div className="card-head">
                      <h6>Exclusive</h6>
                      <h2><span className="small-title">$</span><span className="big-txt" data-monthly='59'
                                                                      data-yearly='49'>59</span><span className="month"
                                                                                                      data-monthly='/month'
                                                                                                      data-yearly='/year'>/month</span>
                      </h2>
                      <p>Good for small business launching their products less then once a year</p>
                    </div>


                    <div className="card-content">
                      <ul className="pricing-list">
                        <li><span><i className="icon icon-check-2"></i></span>Unlimited Blocks</li>
                        <li><span><i className="icon icon-check-2"></i></span>5GB Clould Storages</li>
                        <li><span><i className="icon icon-check-2"></i></span>Custom Domain Names</li>
                        <li><span><i className="icon icon-check-2"></i></span>Unlimited Emails</li>
                      </ul>
                      <div className="card-btn">
                        <a href="" className="btn btn--primary">Start Free Trial</a>
                      </div>
                      <p>No credit card required</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="pricing-extra-info">
                    <p><span>Still confused?</span><a href="#">Check our full feature list</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

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
              {/* <div className="col-xl-4 col-lg-5 col-margin">
                <div className="single-footer">
                  <div className="footer-title">
                    <img src="/image/footer-logo.png" alt=""/>
                  </div>
                  </div>
                  </div> */}
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
                    <li><a href="polityka-prywatnosci" target="_blank">Polityka prywatności</a></li>
                    <li><a href="regulamin-serwisu" target="_blank">Regulamin serwisu</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6 col-margin">
                <div className="single-footer">
                  <div className="footer-title">
                    <h6>Copyright</h6>
                  </div>
                  <ul className="footer-list">
                  <li><a href="https://iconscout.com/illustrations/doctor" target="_blank">Doctor
                      Illustration</a> by <a href="https://iconscout.com/contributors/manypixels-gallery"
                                             target="_blank">Manypixels Gallery</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6 col-margin">
                <div className="single-footer">
                  <div className="footer-title"></div>
                  <ul className="footer-social-list">
                    <li>
                      <a href="https://www.facebook.com/terminymedyczne/" target="_blank">
                        <i className="icon icon-logo-fb-simple"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/terminymedyczne/" target="_blank">
                        <i className="icon icon-logo-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="/plugins/jquery/jquery.min.js"></script>
      <script src="/plugins/jquery/jquery-migrate.min.js"></script>
      <script src="/plugins/bootstrap-4.3.1/js/bootstrap.bundle.js"></script>
      <script src="/plugins/meanmenu/jquery.meanmenu.js"></script>
    </>
  )
}

export default Layout
