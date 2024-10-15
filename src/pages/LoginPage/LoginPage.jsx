import { Helmet, HelmetProvider } from "react-helmet-async";
import { LoginForm } from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>Expense Tracker</title>
            </Helmet>
            <LoginForm />
        </HelmetProvider>
    )
}

export default LoginPage;