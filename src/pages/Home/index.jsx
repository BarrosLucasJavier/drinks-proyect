import DrinkModal from "../../components/DrinkModal";
import DrinksList from "../../components/DrinksList";
import SearchForm from "../../components/SearchForm";
import BarUser from '../../components/BarUser'
import Themes from "../../components/Themes";

const Home = () => {
    return (
        <main>
            <BarUser/>
            <SearchForm/>
            <DrinksList/>
            <DrinkModal/>
            <Themes/>
        </main>
    );
}

export default Home;
