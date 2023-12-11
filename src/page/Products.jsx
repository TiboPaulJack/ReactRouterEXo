import Footer from "../partial/Footer";
import Header from "../partial/Header";
import ProductCard from "../partial/ProductCard";
import products from "../data";




const Products = () => {


  const productList = products.map((product, index) => {
    return (
      <ProductCard key={index} product={product} />
    )
  });

  return (
    <>
      <Header />
      <h1>Products</h1>
      {productList}
      <Footer />
    </>
  )

}

export default Products;