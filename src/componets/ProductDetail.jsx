import styles from "./productDetails.module.csss";

const ProductDetail = ({ product }) => {
  return (
    <div className={styles.root}>
      <h2>{product.node.title}</h2>
      <p>I AM PRODUCT DETAIL COMPONENT</p>
      <div className="card-image"></div>
      <figure style={{ maxWidth: "200px" }}>
        <img
          src={product.node.featuredImage.url}
          alt={product.node.title}
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </figure>
    </div>
  );
};
export default ProductDetail;
