import { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import { getDataToLocalStorage } from "../Utilities/Utilities";
import Card from "../Components/Card";

const Dashboard = () => {
    const [coffees , setCoffees] = useState([]);
    useEffect(()=>{
        const favorite = getDataToLocalStorage();
        setCoffees(favorite)
    },[])
    return (
        <div>
            <Heading title='Wellcome to dashboard'
            subtitle='Manage coffee that you have previously added as favorite , You can view or remove  theme from here'></Heading>
             <div className="grid md:grid-cols-2 py-3 my-12 gap-10 lg:grid-cols-3">
                {
                    coffees.map(coffe => <Card key={coffe.id} coffe={coffe}></Card>)
                }
            </div>
        </div>
    );
};

export default Dashboard;