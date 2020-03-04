import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './containers/app'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const render = Component => {
    ReactDOM.render(
        <Router>
            <AppContainer>
                <React.Fragment>
                    <App />
                </React.Fragment>
            </AppContainer>
        </Router>
        , document.getElementById('root')
    )
}

render(App)


if (module.hot) {
    module.hot.accept('./containers/app', () => render(App))
}
