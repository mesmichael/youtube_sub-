<script>
window.location = "https://www.youtube.com/feed/channels"

var getFirst = document.getElementsByTagName('html')[0].innerHTML

var channelLinksString = getFirst.split("yt-simple-endpoint style-scope ytd-channel-renderer");
var outputFileText = "";
var ChannelHMDLtag = /(.*href=\"\s+)(.*)(\s+>.*)/;

for (var i = 0; i < arrayLength; i++) {
    channelLinksString[i] = channelLinksString.replace(ChannelHMDLtag, "$2");
    alert(channelLinksString[i]);
	outputFileText = outputFileText + channelLinksString[i] + "\n";
}




//saves the information scraped from the sub page into a file for getting videos
download(outputFileText, channelURL.txt, txt)


function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
</script>
