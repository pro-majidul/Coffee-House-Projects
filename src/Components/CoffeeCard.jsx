import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCard = () => {
    const { category } = useParams()
    const data = useLoaderData();
    const [coffee, setCoffee] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if (category) {

            const coffees = [...data].filter(coffe => coffe.category === category);
            setCoffee(coffees)
        } else {
            setCoffee(data.slice(0, 6))
        }
    }, [data, category])


    return (
        <>
            <div className="grid md:grid-cols-2 py-3 my-12 gap-10 lg:grid-cols-3">
                {
                    coffee.map(coffe => <Card key={coffe.id} coffe={coffe}></Card>)
                }
            </div>
            <button onClick={()=> navigate('/coffees')} className='text-xl font-bold btn btn-warning'>Show All</button>
        </>
    );
};

export default CoffeeCard;