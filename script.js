let stars=document.querySelectorAll(".star")
let emojis=document.querySelectorAll(".emoji")
let vishwa=["pink","blue","green","orange","black"]

stars.forEach((star1,index)=>{
     star1.addEventListener("click",()=>{
          // console.log("hklo", index);
          updaterating(index)
     })
})

function updaterating(index){
stars.forEach((starEL, idx)=>{
     if (idx <= index) {
          starEL.classList.add("active")
     }else{
          starEL.classList.remove("active")
     }

})
emojis.forEach(emoji=>{
     emoji.style.transform=`translateX(-${index * 50}px)`
     // emoji.style.background= vishwa[index]
})
}


