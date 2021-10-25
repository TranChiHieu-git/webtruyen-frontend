import '../styles/globals.scss'
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from '../reducers';

const composeEnhancers = composeWithDevTools({});
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function MyApp({Component, pageProps}) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
}

export default MyApp
