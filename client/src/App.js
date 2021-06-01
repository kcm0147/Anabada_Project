import 'assets/css/App.css';

import Homeview from 'components/home/Homeview.js'
import Loginview from 'components/login/Loginview.js'
import UserRegistration from 'components/login/UserRegistration.js'
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className='body-div'>
      <Switch>
        <Route path='/login' component={Loginview} />
        <Route path='/register' component={UserRegistration} />
        <Route path='/' component={Homeview} />
      </Switch>
    </div >
  );
}

export default App;
