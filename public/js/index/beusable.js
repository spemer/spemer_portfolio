// beusably snippets
(function(){
    let snippets = [
        '(function(w, d, a){',
        'w.__beusablerumclient__ = {',
        'load : function(src){',
        'var b = d.createElement("script");',
        'b.src = src; b.async=true; b.type = "text/javascript";',
        'd.getElementsByTagName("head")[0].appendChild(b);',
        '}',
        '};w.__beusablerumclient__.load(a);',
        "})(window, document, '//rum.beusable.net/script/b180307e033029u30/f33cc9f572');"
    ];

    let getBody = document.querySelector('body');
    let setBeusably = document.createElement('script');
    setBeusably.setAttribute('defer', '');
    setBeusably.setAttribute('type', 'text/javascript');

    snippets.forEach(function(list){
        let setSnippets = document.createTextNode(list);
        setBeusably.appendChild(setSnippets);
    });
    
    getBody.appendChild(setBeusably);
})();


//
// cdns
// (function(){
//     let cdnUrl = [
//         "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
//         "https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.7/jquery.lazy.min.js",
//         "https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.7/jquery.lazy.plugins.min.js",
//         "https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/12.1.5/js/smooth-scroll.min.js"
//     ]

//     let getBody = document.querySelector('body');
    
//     for (let i = 0; i < cdnUrl.length; i++){
//         let setScript = document.createElement('script');
//         setScript.setAttribute('async', '');
//         setScript.setAttribute('src', cdnUrl[i]);
//         getBody.appendChild(setScript);
//     }
// })();