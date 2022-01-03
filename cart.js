let foods = JSON.parse(localStorage.getItem("inCart"));
console.log(foods)
display();
function display(){
    let body = document.querySelector("#items");
    body.innerHTML=null;
    if(foods.length!==null){
        let p = 0;
        foods.forEach(function(ele,index){
            let div = document.createElement("div");
            let left = document.createElement("div");
            let right = document.createElement("div");
            let image = document.createElement("img");
            let name = document.createElement("h3");
            let price = document.createElement("p");
            let button = document.createElement("button");

            left.setAttribute("id","left")
            right.setAttribute("id","right")
            image.setAttribute("width","100%")
            div.setAttribute("id","div")

            image.src = ele.strMealThumb;
            name.innerText = ele.strMeal;
            price.innerText = `Price: ${ele.price} ₹`;
            button.innerText = "Remove";
            p += ele.price;

            left.append(image)
            right.append(name,price,button)
            div.append(left,right)
            body.append(div)

            button.addEventListener("click",removeItem);
            function removeItem(){
                foods.splice(index,1);
                localStorage.setItem("inCart",JSON.stringify(foods));
                display()
            }
        })
        myBag = document.querySelector("#bag")
        myBag.innerText=`My Bag: ${p}`
        localStorage.setItem("totalPrice",JSON.stringify(p));
        console.log(p);
    }
    else{
        let text = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerText="No item added in cart";
        text.setAttribute("id","text")
        text.append(h1);
        body.append(text);
    }
}
let check = document.createElement("button");
check.innerText = "Checkout"
document.querySelector("#check").append(check)
check.addEventListener("click",funcBag);
function funcBag(){
    window.location.href="checkout.html";
}
