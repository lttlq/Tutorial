var tutorials = new Vue({
    el: '#tutorial',
    data: { data: CONTENTTR },
    methods: {
        changeVideo: function (videoName) {
            var video = document.getElementById("video");
            video.src = './assets/videos/' + videoName + '.mp4';
        }
    }

});