import { 
    createAppContainer, 
    createStackNavigator
} from 'react-navigation'

import Login from './pages/Login'
import Main from './pages/Main'
import SignUp from './pages/SignUp'
import Todo from './pages/Todo'

const Routes = createAppContainer(
    createStackNavigator({
        SignUp,
        Login,
        Main,
        Todo
    })
)

export default Routes