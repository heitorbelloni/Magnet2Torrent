javascript:(
  function() {
    var mUrl = document.URL;
    var splited = mUrl.split("/");
    var tUrl = "http://torrents.thepiratebay.se/" + splited[4]+ "/" + splited[5] + ".torrent";
    location = tUrl;
  }
)()
