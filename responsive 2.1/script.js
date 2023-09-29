var button=document.querySelectorAll(".game")
var change=document.getElementById("change")
var button1 = document.querySelectorAll(".button")
var sum=0

for(let i=0;i<button.length;i++){
    button[i].onclick = () =>{
    sum+=1
    change.textContent=sum
    console.log(sum)
    }
    
}

for(let i=0;i<button1.length;i++){
    button1[i].onclick = () =>{
    sum+=1
    change.textContent=sum
    console.log(sum)
    }
    
}


