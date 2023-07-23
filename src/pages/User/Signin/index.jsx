import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import styles from './signin.module.css'
import { useTheme } from '../../../hooks/useTheme'


const defaultTheme = createTheme();

export default function SignIn() {

    const { theme } = useTheme()
    const { login } = useAuth()

    const colors = {
        main: theme.dark[1],
        secundary: theme.light[1]
    };

    

    return (
        <main className={styles.signIn}>
            <ThemeProvider theme={defaultTheme}>
                <Container maxWidth="xs" sx={{ backgroundColor: colors.main, mt:6, mb:5 }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: colors.secundary, color: colors.main }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Ingresar
                        </Typography>
                        <Formik
                            initialValues={{
                                password: "",
                                email: ""
                            }}
                            validate={
                                (values) => {
                                    const errors = {};
                                    const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

                                    if (!values.email) {
                                        errors.email = "Email requerido";
                                    } else if (!regexpEmail.test(values.email)) {
                                        errors.email = "Email invalido";
                                    }

                                    if (!values.password) {
                                        errors.password = "Constraseña requerida"
                                    }
                                    return errors;
                                }
                            }
                            onSubmit={(values) => {
                                login(values)
                            }}
                        >
                            {
                                ({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                }) => (
                                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} className={styles.inputSign}>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            autoFocus
                                            name="email"
                                            label="Email"
                                            type="email"
                                            id="email"
                                            value={values.email}
                                            error={errors.email && touched.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={errors.email && touched.email && errors.email}
                                            sx={{
                                                input: { color: colors.secundary },
                                                label: { color: colors.secundary },
                                            }}

                                        />
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            name="password"
                                            label="Contraseña"
                                            type="password"
                                            id="password"
                                            sx={{
                                                input: { color: colors.secundary },
                                                label: { color: colors.secundary }
                                            }}
                                            value={values.password}
                                            error={errors.password && touched.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={errors.password && touched.password && errors.password}
                                        />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3,
                                                mb: 2,
                                                backgroundColor:colors.secundary,
                                                "&_:hover":colors.main }}
                                        >
                                            Iniciar
                                        </Button>
                                        <Grid container sx={{mt:3,mb:4}}>
                                            <Grid item>
                                                <Link to="/register" variant="body2" className={styles.links}>
                                                    {"No tienes cuenta? Registrate"}
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )
                            }
                        </Formik>
                    </Box>
                </Container>
            </ThemeProvider>
        </main>
    );
}