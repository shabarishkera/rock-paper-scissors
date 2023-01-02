var userscore=get("userscore");
var botscore=get("botscore");
var usr=0;
var bot=0;
var max=10;
var x;
var array=["paper","scissor","rock"];
function get(id)
{
return document.getElementById(id);
}

function init()
{
usr=0;
bot=0;
userscore.innerHTML=usr;
botscore.innerHTML=bot;

}
function eval(z)
{
  x=z;
var name=x.id;
var random=Math.floor(Math.random()*3);
id=array[random];
 y=get(id);

x.style.border="3px lightblue solid";
y.style.border="3px lightblue solid";
if(x.id==y.id)
{
  usr+=0;
  bot+=0;
}
else if((x.id=="paper"&&y.id=="scissor")||(x.id=="scissor"&&y.id=="rock")||(x.id=="rock"&&y.id=="paper"))
bot++;
else
usr++;
update();


setTimeout(reset,500);
if(bot==max||usr==max)
init();
}
function reset()
{

  x.style.border="none";
  y.style.border="none";


}
function update()
{
  userscore.innerHTML=usr;
  botscore.innerHTML=bot;

}
