(function(){
    let urlLinkList = [
        {
            scLink: '303715697',
            href: 'Spemer%20-%20Autumn.mp3?alt=media&token=ec06227a-7411-429b-89ed-6c3773b1b3b7',
            download: 'Spemer - Autumn',
            itunes: 'autumn-single/id1180293069'
        },
        {
            scLink: '243891238',
            href: 'Spemer%20-%20Moonlight.mp3?alt=media&token=15e59503-0c65-40d9-90fa-c5bdfb680be8',
            download: 'Spemer - Moonlight',
            itunes: 'moonlight-single/id1119568599'
        },
        {
            scLink: '249514143',
            href: 'Spemer%20-%20Voyage%202016.mp3?alt=media&token=18e03399-a91d-4449-94e2-2a3a6dfdf0ce',
            download: 'Spemer - Voyage 2016',
            itunes: 'voyage-2016-single/id1119571183'
        },
        {
            scLink: '242878687',
            href: 'Spemer%20-%20Leaves.mp3?alt=media&token=a8089d8c-bd12-4b3a-b386-cd17eefb8430',
            download: 'Spemer - Leaves',
            itunes: 'leaves-single/id1119085900'
        },
        {
            scLink: '196121171',
            href: 'Spemer%20-%20Night.mp3?alt=media&token=60c2d1a3-0e13-4f97-be7e-af49ae36ee97',
            download: 'Spemer - Night',
            melon: '2319681'
        },
        {
            scLink: '184589593',
            href: 'Spemer%20-%20Voyage.mp3?alt=media&token=f4f299d6-113a-491f-afe6-d471a850389b',
            download: 'Spemer - Voyage',
            melon: '2319681'
        },
        {
            scLink: '115940942',
            href: 'Spemer%20-%20Yeouinaru%20of%20June.mp3?alt=media&token=59784bf8-7093-4633-abbf-b52cf487c62a',
            download: 'Spemer - Yeouinaru of June',
            melon: '2217624'
        },
        {
            scLink: '113970824',
            href: 'Owl%20City%20%26%20Carly%20Rae%20Jepsen%20-%20Good%20Time%20(Spemer%20Remix).mp3?alt=media&token=7e644b9e-0a3b-4deb-89e3-1e42d33b6e70',
            download: 'Owl City & Carly Rae Jepsen - Good Time (Spemer Remix)',
        },
        {
            scLink: '117093503',
            href: 'Spemer%20-%20You%20are%20the%20Apple%20of%20my%20eye.mp3?alt=media&token=fa592bbc-68ac-4687-8bf2-8699f53d61b3',
            download: 'Spemer - You are the Apple of my eye',
        }
    ];

    // set <center>
    let getParentDiv = document.querySelector('.musicHtml');
    let setCenter = document.createElement('center');
    getParentDiv.appendChild(setCenter);

    for (let i = 0; i < urlLinkList.length; i++)
    {
        // set '.musicEachBox' divs
        let setMusicEachBoxes = document.createElement('div');
        setMusicEachBoxes.className = 'musicEachBox';
        setCenter.appendChild(setMusicEachBoxes);

        let getMusicEachBoxes = document.querySelectorAll('.musicEachBox');

        // set <iframe> tags for SoundCloud
        (function(){
            let setIframe = document.createElement('iframe');
            setIframe.width = '100%';
            setIframe.height = 160;
            setIframe.scrolling = 'no';
            setIframe.setAttribute('frameborder','no');
            setIframe.src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'
             + urlLinkList[i].scLink
             +'&amp;color=999&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=true';

            getMusicEachBoxes[i].appendChild(setIframe);
        })();

        // set title text in <p> tag
        (function(){
            let setTitleP = document.createElement('p');
            let setTitlePText = document.createTextNode(urlLinkList[i].download);
            getMusicEachBoxes[i].appendChild(setTitleP);
            setTitleP.appendChild(setTitlePText);
        })();
        
        // set 'buy' links and <span> tags
        (function(){
            let setAMLink = document.createElement('a');
            let setSepSpan = document.createElement('span');
            let setSepText = document.createTextNode('||');

            if (urlLinkList[i].itunes || urlLinkList[i].melon)
            {
                if (urlLinkList[i].itunes)
                {
                    let setItunesIcon = document.createElement('i');
                    setItunesIcon.className = 'fa fa-apple';
                    let setItunesText = document.createTextNode('Buy on iTunes ');
                    setAMLink.href = 'https://itunes.apple.com/us/album/'
                     + urlLinkList[i].itunes;
                    setAMLink.target = '_blank';
                    setAMLink.title = 'via iTunes(new tab)';

                    getMusicEachBoxes[i].appendChild(setAMLink);
                    setAMLink.appendChild(setItunesText);
                    setAMLink.appendChild(setItunesIcon);
                }
                else if (urlLinkList[i].melon)
                {
                    let setMelonText = document.createTextNode('Buy on Melon');
                    setAMLink.href = 'http://www.melon.com/album/detail.htm?albumId='
                     + urlLinkList[i].melon;
                    setAMLink.target = '_blank';
                    setAMLink.title = 'via Melon(new tab)';

                    getMusicEachBoxes[i].appendChild(setAMLink);
                    setAMLink.appendChild(setMelonText);
                }
                getMusicEachBoxes[i].appendChild(setSepSpan);
                setSepSpan.appendChild(setSepText);
            }
        })();
        
        // set download links and icons
        (function(){
            let setDlLink = document.createElement('a');
            let setDlLinkText = document.createTextNode('Click here to download mp3(free) ');
            let setDlLinkIcon = document.createElement('i');
            setDlLinkIcon.className = 'fa fa-download';

            getMusicEachBoxes.forEach(function()
            {
                setDlLink.href = 'https://firebasestorage.googleapis.com/v0/b/spemer-bad39.appspot.com/o/'
                 + urlLinkList[i].href;
                setDlLink.download = urlLinkList[i].download + '.mp3';
                setDlLink.title = 'Download ' + urlLinkList[i].download + '.mp3';

                getMusicEachBoxes[i].appendChild(setDlLink);
                setDlLink.appendChild(setDlLinkText);
                setDlLink.appendChild(setDlLinkIcon);
            });
        })();
    }
})();