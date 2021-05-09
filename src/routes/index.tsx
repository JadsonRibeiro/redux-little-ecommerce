import {
    BrowserRouter as Router
} from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import CommonRoutes from './CommonRoutes';

export default function Routes() {
    return (
        <Router>
            <CommonRoutes />
            <AuthRoutes />
        </Router>
    )
}
