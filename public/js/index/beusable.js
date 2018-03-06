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
    setBeusably.setAttribute('type', 'text/javascript');

    snippets.forEach(function(list){
        let setSnippets = document.createTextNode(list);
        setBeusably.appendChild(setSnippets);
    });
    
    getBody.appendChild(setBeusably);
})();