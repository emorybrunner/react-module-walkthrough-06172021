import {
    Route, 
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalcomponent'>Functional Component</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch> {/*like a vanilla switch statement, only one condition is true at a time, so only one thing shows at a time */}
                    <Route exact path='/home'><Home /></Route> {/* possible error: extra spaces in route?   ONLY ONE child component per route--could wrap multiple components in a div, however */}
                    <Route exact path='/resources'><Resources /></Route>
                    <Route exact path='/'><Home /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;