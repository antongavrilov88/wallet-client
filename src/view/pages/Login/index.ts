import { withThemeToggler } from 'view/hocs/withThemeToggler';
import { LoginView } from './Login.view';

const Login = withThemeToggler(LoginView);

export { Login };