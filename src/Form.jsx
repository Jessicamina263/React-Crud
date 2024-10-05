import { useState, useEffect } from "react";

export default function Form({ addProduct, currentProduct, setCurrentProduct }) {
    const [product, setProduct] = useState({
        name: "",
        cat: "",
        price: "",
        desc: "",
    });

    useEffect(() => {
        if (currentProduct) {
            setProduct(currentProduct);
        } else {
            setProduct({ name: "", cat: "", price: "", desc: "" });
        }
    }, [currentProduct]);

    function handleSubmit(e) {
        e.preventDefault();
        addProduct(product);
        setProduct({ name: "", cat: "", price: "", desc: "" });
    }

    function handleClear() {
        setProduct({ name: "", cat: "", price: "", desc: "" });
        setCurrentProduct(null);
    }

    return (
        <div className="container" style={{ marginTop: 50, marginLeft: 350 }}>
            <form id="productform" onSubmit={handleSubmit}>
                <label htmlFor="name" style={{ fontSize: 'large', marginLeft: 10, marginTop: '30px' }}>Product Name</label>
                <input required type="text" name="name" id="name" value={product.name} style={{ height: 40, marginLeft: 10 }} onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })} placeholder="Product Name" />
                
                <label htmlFor="cat" style={{ fontSize: 'large', marginLeft: 10 }}>Product Category</label>
                <input required type="text" name="cat" id="cat" value={product.cat} style={{ height: 40, marginLeft: 10 }} onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })} placeholder="Product Category" />

                <label htmlFor="price" style={{ fontSize: 'large', marginLeft: 10 }}>Product Price</label>
                <input required type="text" name="price" id="price" value={product.price} style={{ height: 40, marginLeft: 10 }} onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })} placeholder="Product Price" />

                <label htmlFor="desc" style={{ fontSize: 'large', marginLeft: 10 }}>Product Description</label>
                <textarea required name="desc" id="desc" rows={5} placeholder="Product Description" value={product.desc} style={{ marginLeft: 10 }} onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })}></textarea>

                <button type="submit" style={{ marginLeft: 10, height: 50, width: 120, background: 'blue', color: 'white', border: 0, borderRadius: '8px', marginBottom: '30px' }}>{currentProduct ? 'Update Product' : 'Add Product'}</button>

                <button type="button" onClick={handleClear} style={{ marginLeft: 10, height: 50, width: 80, background: 'blue', color: 'white', border: 0, borderRadius: '8px' }}>Clear</button>
            </form>
        </div>
    );
}
