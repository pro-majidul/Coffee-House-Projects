import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Heading from "../Components/Heading";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div >
            <Banner></Banner>
            <Heading title={'Browse Coffee by Category'}
                subtitle={'Choice your desert Coffee category to browse through specific coffees that fit in your taste'}></Heading>
                <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;