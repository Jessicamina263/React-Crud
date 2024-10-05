import './App.css';
import { useState } from 'react';
import Form from './Form';
import Table from './Table';
import Warning from './Warning';
import Search from './Search';

function App() {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null); 
    const [searchTerm, setSearchTerm] = useState("");

    const addProduct = (product) => {
        if (currentProduct) {
            const updatedProducts = products.map((p) => (p === currentProduct ? product : p));
            setProducts(updatedProducts);
            setCurrentProduct(null);
        } else {
            setProducts([...products, product]);
        }
    };

    const handleEdit = (product) => {
        setCurrentProduct(product);
    };

    const handleDelete = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Form addProduct={addProduct} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} />
            <Table products={filteredProducts} onEdit={handleEdit} onDelete={handleDelete} />
            {filteredProducts.length === 0 && products.length > 0 && <Warning />}
            <Search setSearchTerm={setSearchTerm} />
        </>
    );
}

export default App;
