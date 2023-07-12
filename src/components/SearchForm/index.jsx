import { Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useCategories } from '../../hooks/useCategory';
import { useDrinks } from '../../hooks/useDrinks';

const SearchForm = () => {

    const { categories } = useCategories();
    const { getDrink, loading } = useDrinks();

    const initialValues = {
        name:"",
        categories:""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("El campo nombre es obligatorio"),
        category: Yup.string().required("Selecciona una categoria")
    })

    const handleSubmit = (values) =>{
        getDrink(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {
                (formik)=>(
                    <form onSubmit={formik.handleSubmit}>
                        {
                            formik.status && (
                                <p>{formik.status}</p>
                            )
                        }
                        <div>
                            <label htmlFor='name'>Nombre Bebida</label>
                            <Field
                                id="name"
                                type="text"
                                placeholder="Ej: Tequila, Vodka, etc."
                                name="name"
                                as="input"
                            />
                            <ErrorMessage
                                name="name"
                                className='text-danger'
                            />
                        </div>
                        <div>
                            <label htmlFor='category'>Categoria Bebida</label>
                            <Field
                                id="category"
                                placeholder="- Seleccione Categoria -"
                                name="category"
                                as="select"
                            >
                                <option disabled>-Seleccione Categoria-</option>
                                {
                                    categories.map((category)=>(
                                        <option key={category.strCategory} value={category.strCategory}>
                                            {category.strCategory}
                                        </option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage
                                name='category'
                                className='text-danger'
                            />
                        </div>
                        <div>
                            <button
                                className=''
                                type='submit'
                                disabled={loading}
                            >{ loading ? "Buscando..." : "Buscar Bebidas" }</button>
                        </div>
                    </form>
                )
            }
        </Formik>
    );
}

export default SearchForm;
