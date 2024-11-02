import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const Coffees = () => {
    const data = useLoaderData()
    return (
        <div className="grid md:grid-cols-2 py-3 my-12 gap-10 lg:grid-cols-3">
            {
                 data.map(coffe => <Card key={coffe.id} coffe={coffe}></Card>)
            }
        </div>
    );
};

export default Coffees;