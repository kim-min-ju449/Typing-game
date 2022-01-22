const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");

const likeButtons = document.querySelectorAll(".like");
likeButtons.forEach((like)=>{
    like.addEventListener("click",()=>{
        console.log("clicked")
    })
})


function addItem (){
    if(inputText.value.trim() ==="") return;

}

inputText.addEventListener("keypress",(e)=>{
    if(e.keyCode ===13){
        addItem()
    }
})

addButton.addEventListener("click", function() {


    //like
    const like = document.createElement("span");
    const likeIcon = document.createElement("i");
    like.classList.add("like");
    likeIcon.classList.add("material-icons");
    likeIcon.innerText = "favorite_border";
    like.appendsChild(likeIcon);

    //item
    const item = document.createElement("span");
    item.classList.add("item");
    item.innerText = inputText.value;

    //manage
    const check = document.createElement("span");
    const checkIcon = document.createElement("i");
    const clearIcon = document.createElement("i");
    checkIcon.classList.add("material-icons","check");
    checkIcon.classList.add("material-icons","clear");
    checkIcon.innerText="check"
    clearIcon.innerText="clear"
    manage.classList.add("manage")
    manage.appendChild(checkIcon)
    manage.appendChild(clearIcon)
    
    const li = document.createElement("li");

    like.addEventListener("click", ()=>{
        const target = e.target;
        if(target.innerText ==="favorite"){
            target.innerText = "favorite_border"
        }else{
            target.innerText="favorite"
        }
        
    })
    clearIcon.addEventListener("click", (e)=>{
        const target = e.target.parentNode.parentNode;
        target.classList.add("done")

    })
    clearIcon.addEventListener("click", (e)=>{
        const target = e.target.parentNode.parentNode;
        list.removeChild(target)

    })
    li.innerText = inputText.value;
    li.appendChild(like)
    li.appendChild(item)
    list.appendChild(li)

    inputText.value="";
})

addButton.addEventListener("click", addItem)