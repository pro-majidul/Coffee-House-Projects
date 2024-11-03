/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Card = ({ coffe ,handerlRemoved }) => {
    const { name, image, category, origin, type, id, rating, popularity } = coffe || {};

    const { pathname } = useLocation();
    return (
        <div className="flex relative">
            <Link
                to={`/coffee/${id}`}
                className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden">
                <figure className="w-full h-48 overflow-hidden">
                    <img src={image} alt="" />
                </figure>
                <div className="p-4">
                    <h1 className="text-xl">Name : {name}</h1>
                    <p>Category : {category}</p>
                    <p>Type : {type}</p>
                    <p>Origin : {origin}</p>
                    <p>Rating : {rating}</p>
                    <p>Popular : {popularity}</p>
                </div>
            </Link>

            {pathname === '/dashboard' && <div onClick={()=>handerlRemoved(id)} className="absolute p-3 rounded-full bg-red-500 -top-5 -right-5"><FaTrashAlt size={20} /></div>}

        </div>
    );
};

export default Card;