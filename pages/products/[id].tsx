import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import itemList from '../../Assets/random_products_175.json'; // Verify path

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  rating: number;
  image_link: string;
};

type Props = {
  product: Product | null;
};

const products: Product[] = itemList as Product[];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = parseInt(context.params?.id as string);
  const product = products.find((p) => p.id === id) || null;
  return { props: { product } };
};

const ProductPage: React.FC<Props> = ({ product }) => {
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={`/Assets/Product_Images/${product.image_link}`} alt={product.name} />
      <p>Price: £{product.price.toFixed(2)}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
      <p>Quantity: {product.quantity}</p>
      <Link href="/search">
        <a>Back to Search Results</a>
      </Link>
    </div>
  );
}

export default ProductPage;
