function myname()
{
  var name=document.getElementById("user");
  name.innerHTML="sweatha";
}
window.onload=myname();

function change()
{
  var change=document.getElementById("btn-click")

  change.onclick=()=>{
    change.style.backgroundColor="pink";
  }
}
change();

var btn=document.getElementById("build-button").addEventListener("click",makesentence)
function makesentence()
{
  var n=document.getElementById("noun").value;
  var v=document.getElementById("verb").value;
  var ad=document.getElementById("adverb").value;
  var sen=n+ " "+v+" "+ad;
  document.getElementById("statement").textContent=sen;

}
makesentence()

const grandparent=document.querySelector("#grandparent")
const parent=document.querySelector("#parent")
const child=document.querySelector("#child")

grandparent.addEventListener("click",e=>{
   console.log("Grandparent clicked")
 })

 parent.addEventListener("click",e=>{
   console.log("parent clicked")
 })

 child.addEventListener("click",e=>{

   console.log("child clicked")
 })


grandparent.addEventListener("click",e=>{
  console.log("Grandparent clicked")
},{capture:true}
)

parent.addEventListener("click",e=>{
  console.log("parent clicked")
},{capture:true}
)

child.addEventListener("click",e=>{
  
  console.log("child clicked")
},{capture:true}
)

var cat=document.getElementById("category").addEventListener('click',e=>{
  if(e.target.id=='blazers')
  console.log("blazers")
})