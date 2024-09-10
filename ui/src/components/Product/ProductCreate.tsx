import {Link} from "react-router-dom";
import React, {useState, ChangeEvent, FormEvent} from "react";
import {createProduct} from "../../common/ApiUtils";
import "./products.css"
import {CreateProductData} from "@/interfaces/form_interfaces";

export default function ProductCreate() {
    const defaultState = {
        title: '',
        author: '',
        publish_date: '',
    }
    const [data, setData] = useState<CreateProductData>(defaultState)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({...data, [name]: value});
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            let response = await createProduct(data)

            if (!response.ok) {
                const result = await response.json();
                console.log(result)
                setError(result.message)
                throw new Error("HTTP status " + response.status);
            }
            const result = await response.json();
            setData(defaultState)
            setSuccess("Book created successfully")
        } catch (error) {
            console.error('Error creating book:', error);
        }


    };

    return (
        <div>
            <p>
                <Link to="/">Home/</Link> Add new Book
            </p>
            <div className="create-form">
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Book Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="title.."
                            value={data.title}
                            onChange={handleInputChange}
                            required={true}
                        />

                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            placeholder="author.."
                            value={data.author}
                            onChange={handleInputChange}
                            required={true}
                        />

                        <label htmlFor="publish_date">Publish date</label>
                        <input
                            type="date"
                            id="publish_date"
                            name="publish_date"
                            placeholder="Publish date.."
                            value={data.publish_date}
                            onChange={handleInputChange}
                            required={true}
                        />


                        <input type="submit" value="Create"/>
                        {error.length > 0 && <div className="error">Error: {error}</div>}
                        {success.length > 0 && <div className="success">{success}</div>}
                    </form>
                </div>
            </div>
        </div>
    )
}