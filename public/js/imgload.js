//
// after page fully load & before image load
(function(){
    window.addEventListener('load', function()
    {
        let allimages= document.getElementsByTagName('img');
        for (let i = 0; i < allimages.length; i++)
        {
            if (allimages[i].getAttribute('data-src'))
            {
                allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
                allimages[i].classList.remove('imgBlur');
            }
        }
    }, false)
})();