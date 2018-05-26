console.log("Scrape Start");
var sent_finished = false;
var request = new XMLHttpRequest();
request.open("GET", "https://www.youtube.com/feed/channels");
request.onreadystatechange = function () 
{
	if(request.readyState === 4 && request.status === 200) 
	{
		console.log("request to feed successfull");
		var getFirst = request.responseText
		var channelLinksString = getFirst.split("yt-simple-endpoint style-scope ytd-channel-renderer");

		//var videoCode = videoCode[0];
		//var videoMeteData = videoMetaData[0];
		
		for (var i = 0; i < channelLinksString.length; i++) 
		{
			//var URL = "https://www.youtube.com/channel/UCAql2DyGU2un1Ei2nMYsqOA/videos"; // REPACED WITH PARSED URLS
			console.log(channelLinksString[i])
			var requestch = new XMLHttpRequest();
			requestch.open("GET", channelLinksString[i]);
			requestch.onreadystatechange = function () 
			{
				if(request.readyState === 4 && request.status === 200) 
				{
					console.log("request to feed successfull");
					//get page data for each subscriber NEEDS TARGET
					var videoInfoTxt = document.getElementsByTagName('html')[0].innerHTML
					var dataArray = getFirst.split("style-scope ytd-section-list-renderer>");
					//for each video on the page
					var ChannelHMDLtag = /(.*video-title=\"\s+)(.*)(\s+>.*)/;
					for (var videoNumb = 0; i < dataArray.length; i++)
					{
						//videoData[i].videoCode[videoNumb].push(dataArray[videoNumb]);
						//videoData[i].videoMeteData[videoNumb].push(videoData[i].videoCode[videoNumb].replace(ChannelHMDLtag, "$2"));
					}
				}
			}
			requestch.send();
		}

	}
}
request.send();
console.log("Finished");
/*
//get data from page still NEEDS TARGET
var getFirst = document.getElementsByTagName('html')[0].innerHTML;
//splits on tags in html
var channelLinksString = getFirst.split("yt-simple-endpoint style-scope ytd-channel-renderer");

var videoData[channelLinksString.length] = {
    videoCode[]: "",
    videoMeteData[]: "",
};

for (var i = 0; i < channelLinksString.length; i++) {
	//get page data for each subscriber NEEDS TARGET
	var videoInfoTxt = document.getElementsByTagName('html')[0].innerHTML
	var dataArray = getFirst.split("style-scope ytd-section-list-renderer>");
	//for each video on the page
	var ChannelHMDLtag = /(.*video-title=\"\s+)(.*)(\s+>.*)/;
	for (var videoNumb = 0; i < dataArray.length; i++)
	{
		videoData[i].videoCode[videoNumb] = dataArray[videoNumb];
		videoData[i].videoMeteData[videoNumb] = videoData[i].videoCode[videoNumb].replace(ChannelHMDLtag, "$2");
	}
}
*/