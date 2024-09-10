import ProductGrid from "../Product/ProductGrid";
import React from "react";
import "./main.css";
import {Link, Route, Routes} from "react-router-dom";
import ProductCreate from "../Product/ProductCreate";

export default function Main() {
    return <section className="main">
        <Routes>
            <Route path="/" element={<ProductGrid />} />
            <Route path="/create" element={<ProductCreate />}/>
            <Route path="*" element={<NoMatchFound />}/>
        </Routes>
    </section>
}

function NoMatchFound() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}