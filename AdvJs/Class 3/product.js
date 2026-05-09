let urlData=new URLSearchParams(window.location.search)
let id=urlData.get("id")
console.log(id)

let url=`https://dummyjson.com/products/${id}`
let main=document.querySelector("main")
fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
    let h1=document.createElement("h1")
    h1.innerHTML=data.title

    main.append(h1)
})