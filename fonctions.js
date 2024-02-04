let user = [{
    nom : "Tal",
    mdp : "1234"
},
{
    nom : "Yair",
    mdp : "4567"
},
{
    nom : "Shiloh",
    mdp : "7890"
}];

function checkForm (){
    let a = document.getElementById("username").value;
    let b = document.getElementById("pass").value;
   
    for (i=0; i<user.length; i++){
        if ((a==user[i].nom) && (b==user[i].mdp)){
        console.log (true);
        return true;
    } 
    /*else {
        
        console.log (false);
        return false;
    }*/
}}


function saveForm (){


    let a = document.getElementById("username").value;
    let b = document.getElementById("pass").value;

    if (checkForm()){

        localStorage.setItem("username", a);
        localStorage.setItem("pass", b);
    }
    else {
        console.log ("vous n'existez pas");
    }
}

function getForm (){
    document.getElementById("username").value=localStorage.getItem("username");
    document.getElementById("pass").value=localStorage.getItem("pass");

}

function affiche (){

    if (document.getElementById("pass").type=="password"){
        document.getElementById("pass").type="text";
    }
    else 
    {
        document.getElementById("pass").type="password";
    }
}

function getAffichage(){


    
    document.getElementsByTagName("div")[0].remove();
    document.getElementsByTagName("div")[1].remove();

    console.log ("bb" + a);
    var newItem = document.createElement("Bienvenue" + a);
    newItem.innerHTML= "Bonjour";
}

