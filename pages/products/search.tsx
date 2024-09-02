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

const SearchPage = () => {
    const products: Product[] = itemList as Product[];

    return (
        <div>
            <h1>Search Results</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`} passHref>
                            <a>{product.name} - £{product.price.toFixed(2)}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchPage;
