import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './ConfigureStore';
import {} from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

/* import React from 'react';
    import { render } from 'react-dom';
    import { Provider } from 'react-redux';
    import configureStore from './store/configureStore';

    import ItemList from './components/ItemList';

    const store = configureStore();

    render(
        <Provider store={store}>
            <ItemList />
        </Provider>,
        document.getElementById('app')
    );*/
