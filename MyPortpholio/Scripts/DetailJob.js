function showDetail(namechildid) {

    document.getElementById('showdetail').className ='showdetailNew';


    $( "#showdetail" ).show( "fade");

    var name = document.getElementById(namechildid).parentNode.id;
    // console.log(document.getElementById(namechildid).parentNode.childNodes('p'));

    var i = document.getElementById(name).style.backgroundImage;

    document.getElementById('showdetail-content').style.backgroundImage = i;
    document.getElementById('showdetail-content').style.backgroundSize = "contain";
    document.getElementById('showdetail-content').style.backgroundRepeat = "no-repeat";
    document.getElementById('showdetail-content').style.backgroundPosition = "center";

    var description = document.getElementById('description-in-showdetail-container');
    var descriptionh1 = document.getElementById('description-in-showdetail-container-h1');


    switch (namechildid) {
        case "1":
            descriptionh1.innerHTML = "Site-portfolio";
            description.innerHTML = " This site is for me, my development and also for people who want to learn something new for themselves.";
            break;
        case "2":
            descriptionh1.innerHTML = "Site-parsing";
            description.innerHTML = "Parsing site of Formula 1. Parsing race results.";
            break;
        case "3":
            descriptionh1.innerHTML = "R.H.I.V.W.U.N.N";
            description.innerHTML = "Software implementation of information technology is created in C # in the development environment Visual Studio 2015. The program provides a pleasant and intuitive interface and contains all the necessary documentation and instructions for proper use. To study the neural network used a representative sample of the cost of various apartments in different parts of the city of Vinnytsia, taken from the site dom.ria.ua";
            break;
        case "4":
            descriptionh1.innerHTML = "Spichki";
            description.innerHTML = "Board game. A game that will help you distract from work and routine. In this game two modes are implemented, named Two Players and PC Game. You can see your results in the statistic of the game. There is a training section which helps you to use the game correctly.";
            break;
        case "5":
            descriptionh1.innerHTML = "Style-picker";
            description.innerHTML = "This site will help to determine the interier of your own house.";
            break;
        case "6":
            descriptionh1.innerHTML = "Integration";
            description.innerHTML = "This site was created for the customer.";
            break;
        case "7":
            descriptionh1.innerHTML = "ZombieCar";
            description.innerHTML = "Now it's time to face the apocalypse and blow the crap out of thousands of zombies! The goal is to survive... but you wont. How long will you last? It's you, you're heavily armed passenger, against a boatload of super-strong, attacking zombies. Improve your skills. Forget the boring dialogs and the endless words. Is all about the bloody action and the fun to kill zombies in many crazy ways.";
            break;
    }

    // if(namechildid==1)
    // {
    //     description.innerHTML = "111111";
    // }
    // if(namechildid==2)
    // {
    //     description.innerHTML = "111111";
    // }








}

function onClickExit() {
    $( "#showdetail" ).hide( "fade");
}