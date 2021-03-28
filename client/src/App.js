import 'assets/css/App.css';

import Homeview from 'components/home/Homeview.js'
import Loginview from 'components/login/Loginview.js'
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className='body-div'>
      <Switch>
        <Route path='/login' component={Loginview}></Route>
        <Route path='/' component={Homeview}></Route>
      </Switch>
    </div>
  );
}

export default App;
