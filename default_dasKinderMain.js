

(
function () {

    //https://developer.mozilla.org/en-US/docs/DOM/EventTarget.addEventListener#Why_use_addEventListener.3F

 //Code to change the song being played on the main page,
    // the funcations are attached to click events
    // Function to change the content of t2
    function modifyplayback1Track(trackid) {
        //var t2 = document.getElementById("t2");

        //if (t2.firstChild.nodeValue == "three") {
        //    t2.firstChild.nodeValue = "two";
        //} else {
        //    t2.firstChild.nodeValue = "three";
        //}

        var audioPlayer = document.getElementById("playback1");
       
        var playme = document.getElementById('playback1');
        playme.src = 'media/01_Susies_dnc_09-05-12.mp3';
        playme.load();
    }
    
    function registerclick(elmID, Song) {
        var link = document.getElementById(elmID);
        link.addEventListener("click", function () {
            var audioPlayer = document.getElementById("playback1");
            audioPlayer.src = Song;
            audioPlayer.play();
        });
    }
     
    document.body.onload = function () {
        //registerclick("track1", "media/01_Susies_dnc_09-05-12.mp3");
        registerclick("track2", "media/03_cjungirl.mp3");
        registerclick("track3", "media/07_mmorning.mp3");
        registerclick("track4", "media/10-song_between_us.mp3");

       // alert("LOADED!");
       

    //  Code to 
    // add click event handlers to image areas
    // add event listener to t
    //var track1Area = document.getElementById("track1");
    //track1Area.addEventListener("click", function () { modifyplayback1Track(this.id) }, false);
    //registerMusicWithPostIt(doc.getElementById("trackX"), "media\songName")

}

   



}
)()
