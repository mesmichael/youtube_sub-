<script>
//script is used to change the Subscriptions page
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) 
  {
	if (window.location.href == "https://www.youtube.com/feed/subscriptions")
	{
		alert("correct page");
	}
  }
})
</script>