(function(){

    function Start(){

        let title = document.title
        let aboutButt = document.getElementById("AboutButton")

        aboutButt.addEventListener("click", ()=> console.log("About button was clicked"))
        console.log("App started")
        console.log("TItle" + title)
    }

    window.onload = Start
})();