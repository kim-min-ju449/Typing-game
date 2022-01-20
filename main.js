const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");

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
    item.innerText = inputText.value;

    //manage
    const check = document.createElement("span");
    const checkIcon = document.createElement("i");
    const clearIcon = document.createElement("i");
    
    const li = document.createElement("li");
    li.innerText = inputText.value;
    li.appendChild(like)
    li.appendChild(item)
    list.appendChild(li)
})