async function foodsInMenu(){
    try{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        let data = await response.json();
        showData(data.meals)
        console.log(data.meals)
    }
    catch(err){
        console.log("err:", err);
    }
    
}
let span = document.createElement("span");
let cart = JSON.parse(localStorage.getItem("inCart")) || [];
function showData(foods){
    let body = document.getElementById("allFood");
    body.innerHTML=null;
    foods.forEach(function(ele){
        let div = document.createElement("div");
        let top = document.createElement("div");
        let buttom = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let price = document.createElement("p");
        let button = document.createElement("button");
        let rupees = Math.round(Math.random()*500+100);

        image.setAttribute("width","100%")

        image.src = ele.strMealThumb
        button.innerText = "Add to cart"
        name.innerText = ele.strMeal
        price.innerText = `Price: ${rupees} ₹`
        
        top.append(image)
        buttom.append(name,price,button)
        div.append(top,buttom)
        body.append(div)

        button.addEventListener("click",addToCart)
        function addToCart(){
            ele.price=rupees;
            span.innerText=`(${cart.length})`
            cart.push(ele);
            console.log(cart);
            document.querySelector("#menu").append(span);
            localStorage.setItem("inCart",JSON.stringify(cart));
        }
    })
    let btnCart = document.createElement("button");
    btnCart.innerText="Go to cart"
    document.querySelector(".navBar").append(btnCart);
    btnCart.addEventListener("click",goToCart);
    function goToCart(){
        window.location.href="cart.html";
    }
}