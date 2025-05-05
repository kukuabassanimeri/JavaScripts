//* Modules 
import playGuitar from "./jsmodule.js";
console.log(playGuitar());

//* import named exports
import { shredding, plucking } from "./jsmodule.js";

//* rename the imported functions
import { shredding as shred, plucking as pluck } from "./jsmodule.js";
console.log(shredding());
console.log(plucking());

//* import all
import * as Guitar from "./jsmodule.js";
console.log(Guitar.shredding());

//* exporting class
import User from "./JsClasses.js";
//* create instance of class
const me = new User("XXXXXXXXXXXXXXX", "Abass");
console.log(me.greeting());
console.log(me);