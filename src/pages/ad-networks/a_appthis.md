## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/appthis-logo-final400x102-1493163565270.png)	***AppThis***
http://appthis.com

Integration Status |  ***in-review***

###  Description
AppThis is a global app distribution platform that helps publishers monetize their mobile traffic while providing advertisers with high-value users.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://pixel.appthis.com/event/640a3a503498b3728d1ac1f298a72128?clickid={clickid}&event={event_name}&event_value={event_value}&idfa={idfa}&androidid={androidid} OPEN | http://pixel.appthis.com/event/640a3a503498b3728d1ac1f298a72128?clickid={clickid}&event={event_name}&event_value={event_value}&idfa={idfa}&androidid={androidid} PURCHASE | http://pixel.appthis.com/event/640a3a503498b3728d1ac1f298a72128?clickid={clickid}&event={event_name}&event_value={event_value}&idfa={idfa}&androidid={androidid}&p={payout} custom_event | http://pixel.appthis.com/event/640a3a503498b3728d1ac1f298a72128?clickid={clickid}&event={event_name}&event_value={event_value}&idfa={idfa}&androidid={androidid}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{clickid} | CLICK_ID | {clickid} |  | null | false | The click id sent to the advertiser at the time of the app install. This must be retained on the adertiser's side and sent back to AppThis for each tracked event. {event_name} | EVENT_NAME |  |  | null | false | The name of the event the advertiser wishes to track. e.g. survey_viewed, open, shared, etc. {event_value} | CUSTOM_EVENT_METADATA |  |  | ${(event_value)!} | false | The value of the event the advertiser wishes to track. {idfa} | IDFA | {idfa} |  | null | false | The idfa of the Apple device. {androidid} | ANDROID_ID |  |  | null | false | The androidid of the Android device. {payout} | PURCHASE_REVENUE |  |  | null | false | Revenue

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




