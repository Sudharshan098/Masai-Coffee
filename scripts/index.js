// Add the coffee to local storage with key "coffee"
let url="https://masai-mock-api.herokuapp.com/coffee/menu"

function coffee(){
    fetch(url)
    .then(function(res){                
        return res.json()   
    })
    .then(function(res){
        let x=(res.menu.data)
        var coffee=JSON.parse(localStorage.getItem("coffee"))||[]
        coffee.push("coffeelist")
        var coffeelist= localStorage.setItem("coffee", JSON.stringify(x))
        coffee.forEach(function(elem){
            let div=document.createElement("div")
           let img=document.createElement("img")
           img.src=elem.image
           let desc=document.createElement("p")
           desc.innerText=elem.description
           let type=document.createElement("h3")
           type.innerText=elem.title
           let cost=document.createElement("h5")
           cost.innerText=elem.price
           let btn=document.createElement("button")
           btn.innerText="Add to Bucket"
           btn.setAttribute("id","add_to_bucket")
           div.append(img,desc,type,cost,btn)
           let menulist=document.querySelector("#menu")
           menulist.append(div)
       })     
    })
}
coffee()
let btn=document.querySelector("#add_to_bucket")
btn.addEventListener("click",newFunction())



function newFunction() {
    console.log("insiide")
}

