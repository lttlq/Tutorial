var tutorials = new Vue({
    el: '#tutorial',
    data: { data: CONTENT ,lang:"en"},
    methods: {
        changeVideo: function (videoName) {
            var video = document.getElementById("video");
            video.src = './assets/videos/' + videoName + '.mp4';
        },
        setLanguage: function (lang){
            addUrlParameter("lang",lang);
        }
    }
});
$(document).ready(function() {
    console.log( "ready!" );
    tutorials.lang=getQueryVariable("lang");
    console.log(getQueryVariable("lang"));
});
function addUrlParameter(name, value) {
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set(name, value)
    window.location.search = searchParams.toString();
  }
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

/*
var language={
    eng:{tutorials},
    tr:{tutorialsTr}
};
if(window.location.hash){
    if(window.location.hash =="#en"){
        siteContent.textContent = language.eng;
    }
    else if(window.location.hash=="#tr")
    {
        siteContent.textContent=language.tr;
    }
}

*/

   
