/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                {
                    // eslint-disable-next-line react/prop-types
                    categories.map(category => <Link
                        to={`/category/${category.category}`}
                        key={category.category}
                        role="tab"
                        className="tab">
                        {category.category}
                    </Link>)
                }

            </div>
        </div>
    );
};

export default Categories;