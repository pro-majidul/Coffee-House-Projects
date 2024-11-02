/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                {
                    // eslint-disable-next-line react/prop-types
                    categories.map(category => <NavLink
                        to={`/category/${category.category}`}
                        key={category.category}
                        role="tab"
                        className={({isActive})=> `tab ${isActive? 'tab-active text-xl font-bold' : 'text-sm font-medium'}`}>
                        {category.category}
                    </NavLink>)
                }

            </div>
        </div>
    );
};

export default Categories;