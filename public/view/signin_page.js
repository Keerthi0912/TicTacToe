import { root } from "./elements.js"
import { signinfirebase } from "../controller/firebase_auth.js";

export async function signinPageView() {
    const response = await fetch('/view/templates/signin_page_template.html',
        {cache: 'no-store'}
    );

    const divwrapper = document.createElement('div');
    divwrapper.style.width = "400px";
    divwrapper.classList.add('m-4','p-4');
    divwrapper.innerHTML = await response.text();

    //attach form submit event listner
    const form = divwrapper.getElementsByTagName('form')[0];
    form.onsubmit = signinfirebase;
    root.innerHTML = ""; // clear current page rendering
    root.appendChild(divwrapper);

}