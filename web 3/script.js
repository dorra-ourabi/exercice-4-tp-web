

function getMycolor(){
    //string to generate the code of a color
    var color="#";
    //every color is composed of one of these chararcters
    var possibilities="0123456789ABCDEF";
    //every color is composed of 6 characters
    for(var i=0;i<6;i++){
        //generer un nombre aléatoire entre 0 et 100
        var index=Math.ceil(Math.random()*100);
        // si le nombre généré est supérieur a 15(nombre de characteres possibles) on regenere un autre nombre
        while(index>15){
            index=Math.ceil(Math.random()*100);
        }
        //on concaténe la nouvelle chaine
        color=color+possibilities[index];
    }
    return color;
  }


function colorChange(event){

     
event.currentTarget.style.color=getMycolor();
}




console.log(getMycolor());
var listElement=document.querySelectorAll(".el");
for(var j=0;j<listElement.length;j++){
listElement[j].addEventListener('click',colorChange);}