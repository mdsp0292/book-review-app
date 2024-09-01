import ProductGridItem from "./ProductGridItem";
import {useEffect, useState} from "react";
import {retrieveProducts} from "../../common/ApiUtils";


type ProductGridItemProps = {
    id: number,
    title: string,
    description: string,
    image: string,
    // thumbnail: string,
    accentColor: string,
    backgroundColor: string,
    textColor: string

}
export default function ProductGrid() {
    const style = {
        padding: '40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
        gridGap: '20px',
        rowGap: '20px',
        columnGap: '20px',
    }

    const [productList, setProductList] = useState<ProductGridItemProps[]>([]);


    useEffect(() => {
        const getProducts = async () => {
            const result: ProductGridItemProps[] = await retrieveProducts()
            setProductList(result)
        }
        getProducts()
    }, [])



    // const { products} = props


    return (
        <div style={style}>
            {productList.map(product => (
                <ProductGridItem
                    key={product.id}
                    id={product.id}
                    accentColor={product.accentColor}
                    backgroundColor={product.backgroundColor}
                    description={product.description}
                    thumbnail={product.image}
                    textColor={product.textColor}
                    title={product.title} />
            ))}
        </div>
    )
}