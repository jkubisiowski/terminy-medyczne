import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";
import MainContent from "../components/MainContent";

const Index = (props) => {
  return (
    <Layout>
      <section className="hero-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 order-lg-2">
              <div className="hero-image">
                <img src="/image/main-image.png" alt=""/>
              </div>
            </div>
            <div className="col-lg-7 order-lg-1">
              <div className="hero-content">
                <h2>Sprawdź, co lekarz miał na myśli</h2>
                <p>Tutaj lekarze tłumaczą trudne terminy i skróty medyczne na zrozumiały język.</p>
                <p>Tak po prostu.</p>
                <div className="hero-form">
                  <SearchForm></SearchForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainContent/>
    </Layout>
  )
}



export default Index
