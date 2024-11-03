import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData()
    const [coffees , setCoffees]= useState(data)
    const handelSort = sortby =>{
        if(sortby === 'popularity'){
            const sortPopularity = [...data].sort((a,b)=> b.popularity - a.popularity);
            setCoffees(sortPopularity)
        }
        else if( sortby === 'rating'){
            const sortRating = [...data].sort((a,b)=> b.rating -a.rating);
            setCoffees(sortRating)

        }
    }
    return (
        <>  
            <div className=" md:flex text-center space-y-5 items-center justify-between ">
                <h3 className="md:text-3xl  text-xl">Sort Coffee's by Popularity & Rating-> </h3>
                <div className=" space-x-5 space-y-5">
                    <button onClick={()=> handelSort('popularity')} className="btn bg-yellow-300 font-bold text-black">Sort by Popularity</button>
                    <button onClick={()=> handelSort('rating')} className="btn bg-yellow-300 font-bold text-black">Sort by Rating</button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 py-3 my-12 gap-10 lg:grid-cols-3">
                {
                    coffees.map(coffe => <Card key={coffe.id} coffe={coffe}></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;