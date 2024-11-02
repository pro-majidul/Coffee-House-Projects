import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                {
                    categories.map(categori =><Link to='/cards' key={categori.category} role="tab" className="tab">{categori.category}</Link>)
                }

            </div>
        </div>
    );
};

export default Categories;