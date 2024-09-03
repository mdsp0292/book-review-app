import { Link } from 'react-router-dom'


type ProductGridItemProps = {
    id: number,
    title: string,
    description: string,
    thumbnail: string,
    accentColor: string,

}

const ProductGridItem = (props : ProductGridItemProps ) => {
    const { id, title, description, accentColor} = props
    let thumbnail = "/default_book_avatar.png"
    if (props.thumbnail != null){
        thumbnail = props.thumbnail
    }
    const style = {
        borderRadius: '5px',
        padding: '10px',
        // backgroundColor: "rgb(34,193,195)",
        // background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        color: '#08070b',
    }

    const imgStyle = {
        borderRadius: '5px'
    }

    const priceStyle = {
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