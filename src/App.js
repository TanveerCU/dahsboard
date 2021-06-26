
import DrawerDashBoard from './components/drawer/DrawerDashBoard';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Analitycs from './components/pages/Analitycs';
import Transactions from './components/pages/Transactions';
import Sales from './components/pages/Sales';
import Users from './components/pages/Users'
import Products from './components/pages/Products'
import Reports from './components/pages/Reports'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Router>
      <DrawerDashBoard />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/home' component={Home} exact />
          <Route path='/analitycs' component={Analitycs} exact />
          <Route path='/sales' component={Sales} exact />
          <Route path='/analitycs' component={Analitycs} exact />
          <Route path='/users' component={Users} exact />
          <Route path='/products' component={Products} exact />
          <Route path='/transactions' component={Transactions} exact />
          <Route path='/reports' component={Reports} exact />
        </Switch>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
