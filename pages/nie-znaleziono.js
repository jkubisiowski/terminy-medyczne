import Layout from "../components/Layout";
import MainContent from "../components/MainContent";

const NotFound = () => {
  return (
    <Layout>
      <section className="hero-area term">
        <div className="container">
          <div className="section-title text-center">
            <h2>Nie znaleźliśmy szukanego przez Ciebie terminu.</h2>
            <h4>Nasz zespół został poinformowany o brakującym tłumaczeniu.</h4>
          </div>
        </div>
      </section>
      <MainContent/>
    </Layout>
  )
}

export default NotFound;
