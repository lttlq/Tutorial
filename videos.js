
const video = document.getElementById('video');
var myContent =[
   {
       "software": "Designer V5",
       "header": [
           {
               "name": "Login",
               "video": [
                   {
                       "name": "Login Page",
                       "url": "#"
                   },
                   {
                       "name": "Register Page",
                       "url": "#"
                   }
               ]
           },
           {
               "name": "Home",
               "video": [
                   {
                       "name": "Home Page",
                       "url": "#"
                   },
                   {
                       "name": "System Start Page",
                       "url": "#"
                   }
               ]
           }
       ]
   },
   {
       "software": "Designer S",
       "header": [
           {
               "name": "Login",
               "video": [
                   {
                       "name": "Login Page",
                       "url": "#"
                   },
                   {
                       "name": "Register Page",
                       "url": "#"
                   }
               ]
           },
           {
               "name": "Home",
               "video": [
                   {
                       "name": "Home Page",
                       "url": "#"
                   },
                   {
                       "name": "System Start Page",
                       "url": "#"
                   }
               ]
           }
       ]
   }
];

function changeVideo(videoName) {
   video.src = './videos/' + videoName + '.mp4';
   console.log("video change")
}


