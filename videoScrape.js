<script>
//window.location = ""

var subLinks = "";
const var txtFile = "channelURL.txt";
var file = new File(txtFile);

var videoData = {
    videoCode: "",
    timePublished: 0,
};

//get sublinks for scrape
file.open("r");

while (!file.eof) {
	// read each line of text
	subLinks += file.readln() + "\n";
}

file.close();

//TODO
for (var i = 0; i < arrayLength; i++) {
	var getFirst = document.getElementsByTagName('html')[0].innerHTML
}





</script>
