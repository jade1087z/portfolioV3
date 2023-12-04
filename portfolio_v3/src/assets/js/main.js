import '../scss/style.scss'

import { smooth } from "./smooth";
import { hover } from "./hover";
import { toggle } from "./toggle";

import { arrow } from "./arrow";

window.addEventListener("load", function(){
    smooth();
    hover();
    toggle();
    arrow();
})