var typed = new Typed('#element', {
    strings: ['Engineer', 'Coder', 'Gamer'],
    typeSpeed: 50,
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");  //jo bhi content hai vo remove ho rhe hai click krke
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");    //bs ussi tab k contents dikhenge
}
