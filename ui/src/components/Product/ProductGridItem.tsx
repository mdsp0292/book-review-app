import { Link } from 'react-router-dom'


type ProductGridItemProps = {
    id: number,
    title: string,
    description: string,
    // image: string,
    thumbnail: string,
    accentColor: string,
    backgroundColor: string,
    textColor: string

}

const ProductGridItem = (props : ProductGridItemProps ) => {
    const { id, title, description, thumbnail, backgroundColor, accentColor, textColor} = props
    const style = {
        // borderLeft: `solid 3px ${accentColor}`,
        borderRadius: '5px',
        padding: '10px',
        backgroundColor: '#F2F2F2',
        color: '#08070b',
    }

    const imgStyle = {
        borderRadius: '5px'
    }

    const priceStyle = {
        // textAlign: 'right',
        fontSize: '11px',
        fontWeight: 'bold',
        marginTop: '10px',
        marginRight: '10px',
        padding: '5px',
        backgroundColor: accentColor,
        borderRadius: '2px',
    }



    return (
        // <Link to={`/product/${id}`}>
            <div style={style}>
                <img src={thumbnail} style={imgStyle} alt={title} />
                <p>{title}</p>
                <p>{description}</p>
                <p style={priceStyle}></p>
            </div>
        // </Link>
    )
}
export default ProductGridItem