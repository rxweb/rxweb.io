function collapse(event) {
    setClass(event.srcElement.parentElement);
}
function setClass(parentElement) {
    var element = $(parentElement).find("i")[0];
    if (element != undefined) {
        var openElement = $(parentElement.offsetParent).find("div")[0];

        if (element.classList.contains("fa-angle-down")) {
            openElement.classList.remove("show");
            element.classList.remove("fa-angle-down");
            element.classList.add("arrow");
        }
        else {
            openElement.classList.add("show");
            element.classList.add("fa-angle-down");
            element.classList.remove("arrow");
        }
    }

}

function setActiveLink() {
    var innerElement = "";
    var path = window.location.href.split('/');
    path.splice(0, 2);
    for (var i = 0; i < path.length; i++) {
        if (!path[i].includes(".html")) {
            var element = document.getElementById(path[i])
            if (element) {
                setClass(element.parentElement);
            }
        }
        else {
            var innerId = path[i].replace(".html", "");
            if (path.includes('data-operations')) {
                var link = "data-operations" + '-' + innerId;
                innerElement = document.getElementById(link);
            }
            else {
                innerElement = document.getElementById(innerId);
            }
            if (innerElement)
                innerElement.classList.add("active");
        }
    }
}

function setHashActive() {
    var element = document.getElementsByClassName("active");
    if(element && element.length > 0){
        element[0].classList.remove("active");
    }
    var t = setTimeout(() => {
    
        var hashlinkItems = window.location.href.split('#');
        var startingNode = hashlinkItems[0].split('/')[4].replace('.html', '');
        var endingNode = hashlinkItems[1]
        var hashInnerElement = document.getElementById(startingNode + "-" + endingNode);
        if (hashInnerElement)
            hashInnerElement.classList.add("active");

    }, 100)
}

$(document).ready(function () {
    setActiveLink();
})