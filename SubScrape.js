<script>
window.location = "https://www.youtube.com/feed/channels"

var getFirst = document.getElementsByTagName('html')[0].innerHTML

const var txtFile = "channelURL.txt";
var file = new File(txtFile);

var channelLinksString = getFirst.split("yt-simple-endpoint style-scope ytd-channel-renderer");
var outputFileText = "";
var ChannelHMDLtag = /(.*href=\"\s+)(.*)(\s+>.*)/;

for (var i = 0; i < channelLinksString.length; i++) {
    channelLinksString[i] = channelLinksString.replace(ChannelHMDLtag, "$2");
    alert(channelLinksString[i]);
	outputFileText = outputFileText + channelLinksString[i];
}

file.open("w");
for (var i = 0; i < channelLinksString.length; i++) {
	file.writeln(channelLinksString[i]);
}
file.close();
//saves the information scraped from the sub page into a file for getting videos




</script>
