import BestProduct from "../partial/BestProduct";
import Footer from "../partial/Footer";
import Header from "../partial/Header";
import LastProductsPublished from "../partial/LastProductsPublished";
import products from "../data";

const Home = () => {
  

  return (
    <>
      <Header />
      <BestProduct products={products} />
      <LastProductsPublished products={products} />
      <Footer />
    </>
  );
};

export default Home;
