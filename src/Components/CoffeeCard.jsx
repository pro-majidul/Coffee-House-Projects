import { useParams } from "react-router-dom";

const CoffeeCard = () => {
    const {category} = useParams()
    return (
        <div>
            <h3>Coffee Card {category}</h3>
        </div>
    );
};

export default CoffeeCard;