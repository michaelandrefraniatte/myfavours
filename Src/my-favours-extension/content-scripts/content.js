chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

document.getElementsByTagName('html')[0].innerHTML = '<head></head><body></body>';

var script = document.createElement('script'); 
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'; 
document.head.appendChild(script);

var stringinject = `
    <link rel="shortcut icon" href="${request.favicon}" type="image/png" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.css">
    <style>

body {
    font-family: sans-serif;
    height: 100%;
    background-image: url("${request.url}");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    overflow-x:hidden;
}

.row {
    display: grid;
    grid-template-columns: 21% 21% 21% 21% 21%;
    margin-left: 5%;
    justify-content: center;
}
    .btn-group-vertical > .btn-group:after, .btn-group-vertical > .btn-group:before, .btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container-fluid:after, .container-fluid:before, .container:after, .container:before, .dl-horizontal dd:after, .dl-horizontal dd:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .modal-footer:after, .modal-footer:before, .modal-header:after, .modal-header:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before, .pager:after, .pager:before, .panel-body:after, .panel-body:before, .row:after, .row:before {
        content:none;
    }

    .list img {
        object-fit: cover;
        min-height: 100%;
        width: 100%;
        cursor: pointer;
        padding-bottom: 9%;
        padding-right: 9%;
    }

#myModal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.9);
}

.modal-content {
    margin: auto;
    display: block;
    vertical-align: middle;
}

.modal-content {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
    from {
        -webkit-transform: scale(0)
    }

    to {
        -webkit-transform: scale(1)
    }
}

@keyframes zoom {
    from {
        transform: scale(0)
    }

    to {
        transform: scale(1)
    }
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

@media only screen and (max-width: 700px) {
    .modal-content {
        width: 100%;
    }
}

* {
    box-sizing: border-box
}

.slideshow-container {
    justify-content: center;
    display: flex;
}

.menushow-container a {
    align-items: center;
    color: #FFFFFF;
}

.menushow-container div {
    align-items: center;
    color: #FFFFFF;
}

.slideshow-container .mySlides img, .slideshow-container .mySlides iframe {
    padding-left: 10%;
    padding-right: 10%;
    border: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.goto, .gotochannel, .collaspse, .folderminus, .foldersave, .folderopen, .fileminus, .folderplus, .fileplus, .filechange, .filelink {
    cursor: pointer;
    text-align: center;
    color: white;
    overflow: hidden;
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}

.centered:hover {
    background-color: black;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    text-decoration: none;
}

.prev {
    left: 0;
    border-radius: 3px 0 0 3px;
    text-decoration: none;
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
    text-decoration: none;
}

    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
        text-decoration: none;
    }

.active, .dot:hover {
    background-color: #717171;
}

.icon-upload > input {
    display: none;
}

.icon-download > input {
    display: none;
}

.hide {
    display: none;
}

.show {
    display: flex;
}

.spinner {
    position: absolute;
    top: calc(50% - 10vh);
    left: calc(50% - 10vh);
    text-align: center;
    font-size: 20vh;
}

a {
    color: #FFFFFF;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #000;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #eee;
}

.ad-showing, .ad-container, .ytp-ad-overlay-open, .video-ads, .ytp-ad-overlay-image, .ytp-ad-overlay-container {
    display: none !important;
}
    
</style>`;

document.getElementsByTagName('head')[0].innerHTML = stringinject;

stringinject = `
    <div class="bg">
        <div class="menu"></div>
        <div class="list"></div>
        <div id="myModal" class="">
            <div class="slideshow-container"></div>
            <div class="menushow-modal-container"></div>
            <span class="close" title="close contents">&times;</span>
        </div>
        <div class="fa fa-spinner fa-spin spinner hide"></div>
    </div>

    <script>

var myfavours = {};
var obj = {};
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var slideIndex = 1;
var tempclass = "";
var resindicex = window.screen.availWidth;
var resindicey = window.screen.availHeight;

function changeTitle() {
    document.title = "my-favours";
}

$.ajax({
    url: 'https://www.youtube.com/iframe_api',
    dataType: 'script'
}).done(function() {
    loadPlayer();
});

function loadPlayer() {
    var getitem = localStorage.getItem("playlists");
    if (getitem == "" | getitem == null | getitem == "undefined") {
        localStorage.setItem("playlists", "[]");
    }
    window.onYouTubePlayerAPIReady = function() {
		changeTitle();
		var getitem = localStorage.getItem("myfavours");
		if (getitem == "" | getitem == null | getitem == "undefined") {
		    localStorage.setItem("my-favours", "[]");
		}
		createMyfavours();
    };
}

function reLoadPlayer() {
    $(".close").click();
    $(".menu").empty();
    $(".list").empty();
    $("#myModal").attr("class", "");
    myfavours = {};
    obj = {};
    span = document.getElementsByClassName("close")[0];
    modal = document.getElementById("myModal");
    slideIndex = 1;
    tempclass = "";
    resindicex = window.screen.availWidth;
    resindicey = window.screen.availHeight;
	createMyfavours();
}

span.onclick = function() { 
    modal.style.display = "none";
    $(".slideshow-container").empty();
    $("body").css("overflow-y", "auto");
}

function openModal(x) {
    x.onclick = function(){
        createModal(x);
        modal.style.display = "block";
        slideIndex = 1;
        showSlides(slideIndex);
    }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  var link = $(".mySlides:visible").data("link"); 
  var a = document.getElementById("download");
  a.href = link.replace("https://www.youtube.com/embed/", "https://www.youtube.com/watch?v=");
}

function createModal(x) {
    $(".menushow-modal-container").html("");
    var htmlString = "";
    htmlString = "<div class=\'bg-light fileminus\' style=\'display:float;position:absolute;float:right;right:100px;\' onclick=\'contentminus();\' title=\'remove a content\'><i class=\'fa fa-minus\'></i></div><div class=\'bg-light fileplus\' style=\'display:float;position:absolute;float:right;right:70px;\' onclick=\'contentplus();\' title=\'add a content\'><i class=\'fa fa-plus\'></i></div><div class=\'bg-light filechange\' style=\'display:float;position:absolute;float:right;right:40px;\' onclick=\'changefavour();\' title=\'change favour\'><i class=\'fa fa-pencil\'></i></div><a href=\'\' target=\'_blank\' class=\'bg-light\' style=\'display:float;position:absolute;float:right;right:10px;\' id=\'download\' title=\'go to content\'><i class=\'fa fa-download\'></i></a>";
    var element = document.getElementById("myModal");
    if (tempclass != "") {
        element.classList.remove(tempclass);
    }
    element.classList.add(x.src);
    tempclass = x.src;
    $(".menushow-modal-container").html(htmlString);
    var files = obj[x.src] || [];
    $(".slideshow-container").html("");
    htmlString = "";
    for (let file of files) {
        if (!file.includes("www.youtu")) {
            htmlString += "<div class=\'mySlides\' onload=\'checkSize(this)\' onerror=\'checkLoad(this)\' data-link=\'" + file + "\'><img src=\'" + file + "\' class=\'content\' style=\'width:80%\'></div>";
        }
    }
    for (let file of files) {
        if (file.includes("www.youtu")) {
            file = file.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
            htmlString += "<div class=\'mySlides\' data-link=\'" + file + "\'><iframe src=\'" + file + "\' frameborder=\'0\' allowfullscreen class=\'content\' style=\'width:" + resindicex * 80 / 100 + "px;height:" + 6.6 / 16 * resindicex * 80 / 100 + "px;\'></iframe></div>";
        }
    }
    htmlString += "<a class=\'prev\' onclick=\'plusSlides(-1)\'>&#10094;</a><a class=\'next\' onclick=\'plusSlides(1)\'>&#10095;</a>";
    $(".slideshow-container").html(htmlString);
    $("body").css("overflow-y", "hidden");
}

async function checkSize(img) {
    var imgblob = await fetchBlob(img.src);
    if (parseInt(parseInt(imgblob.size)) < 100) {
        img.parentElement.remove();
    }
}

async function fetchBlob(url) {
    const response = await fetch(url);
    return response.blob();
}

function checkLoad(img) {
    img.parentElement.remove();
}

function contentminus() {
    var element = document.getElementById("myModal");
    var folder = element.className;
    if (folder != "") {
        var item = prompt("Please enter a content link to delete from " + folder + " favour:", "");
        if (!(item == null || item == "")) {
            myfavours = JSON.parse(localStorage.getItem("myfavours") || "[]");
            myfavours = transformObj(myfavours);
            var newmyfavours = [];
            myfavours.forEach(function(val, index) {
                if ((val.content != item & val.myfavour == folder) | val.myfavour != folder) {
                    newmyfavours.push({content: val.content, myfavour: val.myfavour});
                }
            });
            var tempgrouper = newmyfavours;
            var grouped = transformArr(tempgrouper);
            grouped = transformInpand(grouped);
            localStorage.setItem("myfavours", JSON.stringify(grouped));
            reLoadPlayer();
        }
    }
}

function contentplus() {
    var element = document.getElementById("myModal");
    var folder = element.className;
    if (folder != "") {
        var item = prompt("Please enter a content link to add in " + folder + " favour:", "");
        if (!(item == null || item == "")) {
            myfavours = JSON.parse(localStorage.getItem("myfavours")) || [];
            myfavours = transformObj(myfavours);
            myfavours.push({content: item, myfavour: folder});
            var tempgrouper = myfavours;
            var grouped = transformArr(tempgrouper);
            grouped = transformInpand(grouped);
            localStorage.setItem("myfavours", JSON.stringify(grouped));
            reLoadPlayer();
        }
    }
}

function transformInpand(orig) {
    var grouped = [];
    orig.forEach(function(val, index) {
        var name = val.myfavour;
        var files = val.contents;
        var tempgrouped = [];
        for (let file of files) {
            var content = file.content;
            tempgrouped.push(content);
         };
        grouped.push({contents : tempgrouped, myfavour: name});
    });
    return grouped;
}

function transformObj(orig) {
    myfavours = [];
    orig.forEach(function(val, index) {
        var name = val.myfavour;
        var files = val.contents;
        for (let file of files) {
             myfavours.push({content: file, myfavour: name});
         };
    });
    return myfavours;
}

function transformArr(orig) {
    var newArr = [], myfavours = {}, i, j, cur;
    for (i = 0, j = orig.length; i < j; i++) {
        cur = orig[i];
        if (!(cur.myfavour in myfavours)) {
            myfavours[cur.myfavour] = {myfavour: cur.myfavour, contents: []};
            newArr.push(myfavours[cur.myfavour]);
        }
        myfavours[cur.myfavour].contents.push({content: cur.content});
    }
    return newArr;
}

function createMyfavours() {
    $(".spinner").removeClass("hide");
    $(".spinner").addClass("show");
    myfavours = JSON.parse(localStorage.getItem("myfavours") || "[]");
    myfavours = transformObj(myfavours);
    try {
        var grouped = transformArr(myfavours);
        grouped.forEach(function(val, index) {
            var name = val.myfavour;
            var files = val.contents;
            var array = [];
            var n = 0;
            for (let file of files) {
                if (file.content != "") {
                    var content = file.content;
    	            array.push(content);
                }
             };
             obj[name] = array;
        });
    }
    catch {
        localStorage.setItem("my-favours", "[]");
    }
    var keyNames = Object.keys(obj);
    let htmlString = "";
    $(".menu").html("");
    htmlString = "<div class=\'bg-light folderminus\' style=\'display:float;position:absolute;left:10px;top:0px;\' onclick=\'listminus();\' title=\'remove a favour\'><i class=\'fa fa-minus\'></i></div><div class=\'bg-light folderplus\' style=\'display:float;position:absolute;left:40px;top:0px;\' onclick=\'listplus();\' title=\'add a favour\'><i class=\'fa fa-plus\'></i></div><div class=\'icon-download\' style=\'display:float;\'><label for=\'filename\'><div class=\'bg-light foldersave\' style=\'display:float;position:absolute;left:70px;top:0px;\'><i class=\'fa fa-save\' title=\'save favours\'></i></div></label><input type=\'button\' onClick=\'handleFilename()\' value=\'Save\' class=\'button\' id=\'filename\'></div><div class=\'icon-upload\' style=\'display:float;\'><label for=\'txtFileInput\'><div class=\'bg-light folderopen\' style=\'display:float;position:absolute;left:100px;top:0px;\'><i class=\'fa fa-folder-open\' title=\'open favours\'></i></div></label><input type=\'file\' id=\'txtFileInput\' onchange=\'handleFiles(this.files)\' accept=\'.txt\'></div>";
    $(".menu").html(htmlString);
    htmlString = "";
    $(".list").html("");
    var countlength = 0;
    var keylength = keyNames.length;
    for (let keyName of keyNames) {
        if (keyName.length > 5) {
            countlength++;
            if (countlength == 1) {
                htmlString = "<div class=\'row\'>";
            }
            htmlString += "<img onmouseover=\'openModal(this)\' class=\'\' src=\'" + keyName + "\' style=\'width:80%\'>";
            if (countlength >= keylength) {
                htmlString += "</div>";
            }
        }
    }
    $(".list").html(htmlString);
    $(".spinner").removeClass("show");
    $(".spinner").addClass("hide");
}

function handleFilename() {
	exportTableToTXT("my-favours.txt");
}

function exportTableToTXT(filename) {
    var txt = localStorage.getItem("myfavours");
    downloadTXT(txt, filename);
}

function downloadTXT(txt, filename) {
    var txtFile;
    var downloadLink;
	if (window.Blob == undefined || window.URL == undefined || window.URL.createObjectURL == undefined) {
		return;
	}
    txtFile = new Blob([txt], {type:"text/txt"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(txtFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function handleFiles(files) {
    $(".spinner").removeClass("hide");
    $(".spinner").addClass("show");
	getAsText(files[0]); 
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	reader.onload = loadHandler;
	reader.onerror = errorHandler;   
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var txt = event.target.result;
	processData(txt);     
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
	}
}

function processData(txt) {
    localStorage.setItem("myfavours", txt);
    reLoadPlayer();
}

function listminus() {
    var item = prompt("Please enter a favour to delete:", "");
    if (!(item == null || item == "")) {
        myfavours = JSON.parse(localStorage.getItem("myfavours") || "[]");
        myfavours = transformObj(myfavours);
        var newmyfavours = [];
        myfavours.forEach(function(val, index) {
            if (val.myfavour != item) {
                newmyfavours.push({content: val.content, myfavour: val.myfavour});
            }
        });
        var tempgrouper = newmyfavours;
        var grouped = transformArr(tempgrouper);
        grouped = transformInpand(grouped);
        localStorage.setItem("myfavours", JSON.stringify(grouped));
        reLoadPlayer();
    }
}

function listplus() {
    var item = prompt("Please enter a favour to add:", "");
    if (!(item == null || item == "")) {
        myfavours = JSON.parse(localStorage.getItem("myfavours")) || [];
        myfavours = transformObj(myfavours);
        myfavours.push({content: "", myfavour: item});
        var tempgrouper = myfavours;
        var grouped = transformArr(tempgrouper);
        grouped = transformInpand(grouped);
        localStorage.setItem("myfavours", JSON.stringify(grouped));
        reLoadPlayer();
    }
}

function changefavour() {
    var element = document.getElementById("myModal");
    var folder = element.className;
    if (folder != "") {
        var item = prompt("Please enter a new favour link to change from " + folder + " favour:", "");
        if (!(item == null || item == "")) {
            myfavours = JSON.parse(localStorage.getItem("myfavours") || "[]");
            myfavours = transformObj(myfavours);
            var newmyfavours = [];
            myfavours.forEach(function(val, index) {
                if (val.myfavour == folder) {
                    newmyfavours.push({content: val.content, myfavour: item});
                }
                if (val.myfavour != folder) {
                    newmyfavours.push({content: val.content, myfavour: val.myfavour});
                }
            });
            var tempgrouper = newmyfavours;
            var grouped = transformArr(tempgrouper);
            grouped = transformInpand(grouped);
            localStorage.setItem("myfavours", JSON.stringify(grouped));
            reLoadPlayer();
        }
    }
}

</script>`;

    (function () {
        // more or less stolen form jquery core and adapted by paul irish
        function getScript(url, success) {
            var script = document.createElement('script');
            script.src = url;
            var head = document.getElementsByTagName('head')[0],
                done = false;
            // Attach handlers for all browsers
            script.onload = script.onreadystatechange = function () {
                if (!done && (!this.readyState
                    || this.readyState == 'loaded'
                    || this.readyState == 'complete')) {
                    done = true;
                    success();
                    script.onload = script.onreadystatechange = null;
                    head.removeChild(script);
                }
            };
            head.appendChild(script);
        }
        getScript('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', function () {
            $(document).ready(function () {
                var script = document.createElement('script');
                script.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';
                document.head.appendChild(script);
                $('body').html(stringinject);
            });
        });
    })();

  sendResponse({ fromcontent: "This message is from content.js" });
});
