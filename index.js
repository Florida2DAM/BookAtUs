/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {AddBook} from './screens/AddBook';
import {name as appName} from './app.json';
import { BookList } from './screens/BookList';
import { Login } from './screens/Login';
import { Register } from './screens/Register';

AppRegistry.registerComponent(appName, () => Login);
