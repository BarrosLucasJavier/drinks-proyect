import DrinkModal from "../../components/DrinkModal";
import DrinksList from "../../components/DrinksList";
import SearchForm from "../../components/SearchForm";
import BarUser from '../../components/BarUser'

const Home = () => {
    return (
        <main>
            <BarUser/>
            <SearchForm/>
            <DrinksList/>
            <DrinkModal/>
        </main>
    );
}

export default Home;
