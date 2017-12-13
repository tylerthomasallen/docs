## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/logo_mobrain_iso-1495753098283.png)	***MoBrain***
http://mobrain.headwaydigital.com

Integration Status |  ***active***

###  Description
The Mobile Media Buying Platform The one stop mobile solution is brought to you by global programmatic media company Headway Digital, who connects media buyers directly with multiple real-time display advertising marketplaces all around the world.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://lead.mobra.in/{clickid}?event={event_name}&device_id={android_id-idfa}&payout={payout} custom_event | https://lead.mobra.in/{clickid}?event={event_name}&device_id={android_id-idfa}&payout={payout} PURCHASE | https://lead.mobra.in/{clickid}?event={event_name}&device_id={android_id-idfa}&payout={payout} OPEN | https://lead.mobra.in/{clickid}?event={event_name}&device_id={android_id-idfa}&payout={payout}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{clickid} | CLICK_ID | {clickid} |  |  | false | This macro should be replaced with Mobrain's click ID - we will send you a unique click id on every click {event_name} | EVENT_NAME |  |  |  | false | This macro should be replaced with the event name, eg |  install, open_app, etc {android_id-idfa} | OS_DEVICE_ID |  |  |  | false | This macro should be replaced with the user IDFA (for iOS) or Android ID {payout} | CUSTOM_LINK_MACRO | {payout} |  | {payout} | false | This macro can be used for dynamically passing back the payout

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




