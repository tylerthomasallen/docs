## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/Vungle-Logo-Primary-Navy-Transparent-Padded-1493068923084.png)	***Vungle***
https://vungle.com/

Integration Status |  ***active***

###  Description
The leading in-app video advertising platform for performance marketers. Our mission is to deliver the highest value users through engaging ad experiences.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://api.vungle.com/api/v3/new?app_id={v_app_id}&ifa={ifa}&aaid={aaid}&isu={isu}&conversion={conversion}&event_id={event_id}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{v_app_id} | CUSTOM_LINK_MACRO | {v_app_id} |  | null | false | null {ifa} | IDFA | {ifa} |  | null | false | The identifierForAdvertising, a UUID provided by Apple for iOS devices since iOS 6. This is the preferred device identifier for iOS. {aaid} | AAID | {aaid} |  | null | false | The Advertising ID, a UUID provided by Google Play Services 4.0+, compatible with Android 2.3+. This is the preferred device identifier for Android. {isu} | ANDROID_ID |  |  | null | false | A parameter for when preferred device identifiers cannot be used.  {conversion} | IS_CLAIMABLE |  |  | null | false | Required parameter used for attribution. Setting conversion=1 means that Vungle will attempt to attribute the install. Setting conversion=0 means that Vungle will not attempt to attribute it.  {event_id} | CUSTOM_LINK_MACRO | {event_id} |  | null | false | Parameter used for attribution. This is used across events such as clicks, installs and views, to help Vungle attribute installs.

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | {ifa} CLICK_AAID | {aaid}



