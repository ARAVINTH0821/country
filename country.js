async function getData(place){
const url=`https://timezone.abstractapi.com/v1/current_time/?api_key=8e4a828cbd894481a102e5ff60e97649&location=${place}`
const res=await fetch(url)
data=await res.json()
time=data.datetime

document.getElementById("time").innerText=`${place}'s time=${time} ${data.timezone_abbreviation}`
}
document.querySelectorAll(".allpaths").forEach(e=>{
e.addEventListener("mouseover",function(){
window.onmousemove=function(j){
x=j.clientX
y=j.clientY
document.getElementById("name").style.top=y-20+"px"
document.getElementById("name").style.left=x+10+"px"
}
e.style.fill="pink"
document.getElementById("name").style.opacity=1
document.getElementById("namep").innerText=e.id
})
e.addEventListener("mouseleave",function(){
e.style.fill="#ececec"
document.getElementById("name").style.opacity=0
})
e.addEventListener("click",function(){
getData(e.id)
})
})