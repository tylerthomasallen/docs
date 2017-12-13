## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/cross_install_logo-1493241188265.png)	***CrossInstall***
http://crossinstall.com

Integration Status |  ***active***

###  Description
A holistic ad solution for mobile app companies combining programmatic bidding with interactive ad experiences

### Postbacks
Event | Postback
--- | ---
INSTALL | http://convert.crossinstall.com/convert/device?click_id={click_id}&ip={ip}&platform={platform}&did={did} PURCHASE | http://convert.crossinstall.com/convert/event?click_id={click_id}&event={event}&value={value} custom_event | http://convert.crossinstall.com/convert/event?click_id={click_id}&event={event} OPEN | http://convert.crossinstall.com/convert/event?click_id={click_id}&event={event}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{click_id} | CLICK_ID | {click_id} |  | null | false | This is the \sub\ value we passed you on the user's click. {ip} | IP_ADDRESS |  |  | null | false | The IP address of the user's mobile device. While the actual IP address is preferred, you may opt to pass an MD5 of the user's mobile device IP address if desired. md5(ip_address). {platform} | OS |  |  | null | false | May be one of the following |  iphone, ipad, ipod, android {did} | OS_DEVICE_ID |  |  | null | false | The advertisingIdentifier (aka IDFA) (iOS) or Android Advertising ID (Android). Improved conversion matching as well as being useful for you to receive reporting back from CrossInstall on your conversions. {event} | EVENT_NAME |  |  | null | false | Event Name {value} | PURCHASE_REVENUE |  |  | null | false | Purchase amount

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




