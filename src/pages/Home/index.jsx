import DrinkModal from "../../components/DrinkModal";
import DrinksList from "../../components/DrinksList";
import SearchForm from "../../components/SearchForm";


const Home = () => {
    return (
        <main>
            <SearchForm/>
            <DrinksList/>
            <DrinkModal/>
        </main>
    );
}

export default Home;
