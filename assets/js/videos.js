var tutorials = new Vue({
    el: '#tutorial',
    data: { data: CONTENT },
    methods: {
        changeVideo: function (videoName) {
            var video = document.getElementById("video");
            video.src = './assets/videos/' + videoName + '.mp4';
        }
    }

});
var tutorialsTr = new Vue({
    el: '#tutorial',
    data: { data: CONTENTTR },
    methods: {
        changeVideo: function (videoName) {
            var video = document.getElementById("video");
            video.src = './assets/videos/' + videoName + '.mp4';
        }
    }

});

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



   
