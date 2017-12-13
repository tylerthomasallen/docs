## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/169744LOGO-1493150262933.png)	***Digital Turbine***
http://digitalturbine.com

Integration Status |  ***active***

###  Description
Digital Turbine simplifies app advertising, recommendation, delivery and tracking. Maximize revenue, increase user engagement and save cost.

### Postbacks
Event | Postback
--- | ---
OPEN | http://data.appia.com/v2/user/event?referrer={ClickID}&source=branch&event={event_name}&appId={package.name}&timestamp={timestamp}&deviceIp={deviceIp}&&deviceModel={deviceModel}&countryCode={countryCode}&language={language} INSTALL | http://convs.appia.com/v2/installAd.jsp?referrer={ClickID}&packageName={package.name}&aaid={AAID}&idfa={IDFA} custom_event | http://data.appia.com/v2/user/event?referrer={ClickID}&source=branch&event={event_name}&appId={package.name}&timestamp={timestamp}&deviceIp={deviceIp}&&deviceModel={deviceModel}&countryCode={countryCode}&language={language}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{ClickID} | CLICK_ID | {ClickID} |  | null | false | The Digital Turbine Click ID passed in the click event URL. {event_name} | EVENT_NAME |  |  | null | false | Set to \open\, \purchase\, \registration\, \level\, \tutorial\, \completion\, \session\, or \search\. {package.name} | OS_PACKAGE_NAME |  |  | null | false | For Android this is the applicationâ€™s package name. For iOS this is the applicaion's Bundle ID. (i.e. com.google.example)  {timestamp} | EVENT_TIMESTAMP |  |  | null | false | Unix time stamp of the event {deviceIp} | IP_ADDRESS |  |  | null | false | IP Address of users device {deviceModel} | DEVICE_MODEL |  |  | null | false | Device model like iPad, iPhone, Nexus 7 {countryCode} | COUNTRY |  |  | null | false | Two character ISO country code like US, GB, AU {language} | LANGUAGE |  |  | null | false | Two character ISO language code like en, es, de {AAID} | AAID | {AAID} |  | null | false | Android Advertising ID. {IDFA} | IDFA | {IDFA} |  | null | false | Identifier For Advertisers for iOS

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




