import 'babel-polyfill';
import $ from 'jquery';
import injectTapEventPlugin from 'react-tap-event-plugin'
import render from 'react-dom';
import Cont from './components/Cont.jsx'

injectTapEventPlugin();

render(<Cont />, document.getElementById('App'));
