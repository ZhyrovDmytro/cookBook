import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/main.scss';
import '../src/style/mixins.scss';
import '../src/style/components/header.scss';
import '../src/style/components/dropZone.scss';
import '../src/style/components/imageDrawer.scss';
import '../src/style/components/modal.scss';
import '../src/style/common/input.scss';
import '../src/style/common/textArea.scss';
import '../src/style/common/button.scss';
import '../src/style/common/fieldArray.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store';

ReactDOM.render(
    <Provider store={configureStore()}>
     <App />
    </Provider>,
    document.getElementById('root')
);
