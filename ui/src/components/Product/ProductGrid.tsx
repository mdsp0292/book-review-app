import {useEffect, useState} from "react";
import {retrieveProducts} from "../../common/ApiUtils";
import "./products.css"


type ProductGridItemProps = {
    id: number,
    title: string,
    author: string,
    publish_date: string,
}

export default function ProductGrid() {
    const [productList, setProductList] = useState<ProductGridItemProps[]>([]);


    useEffect(() => {
        const getProducts = async () => {
            const result: ProductGridItemProps[] = await retrieveProducts()
            setProductList(result)
        }
        getProducts()
    }, [])

    return (
        <div className="styled-table">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publish date</th>
                </tr>
                </thead>
            <tbody>
            {productList.map(product => {
                return (
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.author}</td>
                        <td>{product.publish_date}</td>
                    </tr>
                )
            })}
                </tbody>
            </table>
        </div>

)
}