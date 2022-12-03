

import Dashboared from "./pages/dashboared.js";
import post from "./pages/post.js.";
import product from "./pages/product.js";
import NotFound from "./pages/notfound.js";


function router(params){
const routes =[
    {
        path:"/",view: Dashboared},
    {
        path:"/post",view:post},
    {
        path:"/product",view:product}
]


const potencialRoutes =routes.map((item)=>{
    return{
        route:item,
        isMatch:location.pathname===item.path,

    };
});
 let match =potencialRoutes.find((route)=> route.isMatch);

 if(!match){
    match ={
        route:{path:"/not-found",view:() => console.log("not-found page")},
        isMatch:true,
    }
 }

 document.querySelector("#app").innerHTML =match.route.view();
}

document.addEventListener("DOMContentLoaded",()=>{
    document.body.addEventListener("click",(e)=>{
        if(e.target.hasAttribute("data-link")){
            e.preventDefault();
            console.log(e.target.href);
            navigateTo(e.target.href);
        }
    })
    router();
});

function navigateTo(url){
    history.pushState(null,null,url);
    router();
}

window.addEventListener("popstate",router);