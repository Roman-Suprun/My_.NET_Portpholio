function LoadAnimation() {
    var c=0;
    var el = document.getElementById('percent');
    function count() {
        c++;
        el.innerHTML = c +"%";
        if(c==100)
        {
            clearInterval(resresh);

            panel.className += 'PanelVisbility';
            logo.className+= 'logoVisible';
            percent.className+= 'percentHidden';
            console.log(logo.className);
        }
    }
    var random = Math.random() * (70-10) + 10;
    var resresh = setInterval(count, random);

}


function slider() {
    $('.slick-slider').slick();
}




