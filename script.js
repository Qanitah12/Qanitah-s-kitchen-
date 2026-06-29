alert ("Welcome to Qanitah's Kitchen! We are delighted to have you here. Explore our delicious dishes, check out our schedule for upcoming food, and feel free to contact us for any inquiries. Enjoy your culinary journey with us!");

let menuButton = document.getElementById("menuButton");
let hiddenItems =document.querySelectorAll(".hidden");

menuButton .addEventListener("click",() => {
    hiddenItems.forEach(Item => {
        if (Item.style.display === "block") {
       Item.style.display = "none"
       menuButton.textContent= "more menu"
        } else{
            Item.style.display ="block"
            menuButton.textContent="hide menu"
        }
    })
})