let url="https://dummyjson.com/products?limit=500";
let main=document.querySelector("main")

let data=[]
fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    data=data.products
    // console.log(data) // ARRAY

    data.map((el)=>{
        // console.log(el)
        let outerdiv=document.createElement("div")
        let pTitle=document.createElement("h1")
        
        let imgLink=document.createElement("a")
        let image=document.createElement("img")
        let des=document.createElement("p")
    
        let price_cart=document.createElement("div")
        let price=document.createElement("p")
        let addToCart=document.createElement("button")
    
        imgLink.href=`Product.html?id=${el.id}`
        pTitle.innerText=el.title
        image.src=el.thumbnail
        des.innerText=el.description
        price.innerText=`Rs ${Math.ceil(el.price*93)}/-`
        addToCart.innerText="Add to Cart"

        outerdiv.classList.add("outerdiv")
        price_cart.classList.add("price_cart")
        addToCart.classList.add("addtocart")
        price.classList.add("price")
        
        imgLink.append(image)
        price_cart.append(price,addToCart)
        outerdiv.append(pTitle,imgLink,des,price_cart)

        main.append(outerdiv)

        // In Local Storage Data is stored in key value Pair and data is in string format. 
        let cart=JSON.parse(localStorage.getItem("mycart") || "[]")

        addToCart.addEventListener("click",()=>{
            window.location.href="cart.html"

            // find() : true verna false

            let existing=cart.find((item)=> item.id===el.id)
            if(existing){
                existing.qty+=1;
            }
            else{
                cart.push({...el,qty:1});
            }

            localStorage.setItem("mycart",JSON.stringify(cart))
        })


    })

})
.catch((err)=>{
    console.log(err)
})
