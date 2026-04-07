import "./styles.css";
import {greeting} from "./Home.js";

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

console.log(greeting);


