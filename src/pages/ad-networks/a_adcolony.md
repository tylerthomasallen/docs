## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/image_(10)-1495741573911.png)	***AdColony***
https://www.adcolony.com/

Integration Status |  ***active***

###  Description
AdColony is a mobile video ad network offering full-screen quality video ads through its Instant-Playâ„¢ technology for brands and apps.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://cpa.adcolony.com/on_user_action?api_key=AmfpbZYY4WUzJVEgFEJMLF5Xd4n49RxU&product_id={product_id}&raw_advertising_id={idfa}&google_ad_id={aaid}&click_id={clickid} OPEN | https://cpa.adcolony.com/on_user_action?api_key=AmfpbZYY4WUzJVEgFEJMLF5Xd4n49RxU&product_id={product_id}&raw_advertising_id={idfa}&google_ad_id={aaid}&click_id={clickid} custom_event | https://pie.adcolony.com/api/v1/{event_name}?api_key=AmfpbZYY4WUzJVEgFEJMLF5Xd4n49RxU&product_id={product_id}&raw_advertising_id={idfa}&google_ad_id={aaid}&click_id={clickid}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{product_id} | CUSTOM_EVENT_METADATA |  |  | <@loop data=app.app_bundles val=\bundle\><#if user_data.os == bundle.os><#if bundle.os==\ANDROID\>${(bundle.android.package_name)!}<#elseif bundle.os == \IOS\>${(bundle.ios.itunes_id?substring(2))!}</#if><@break/></#if></@loop> | false | null {idfa} | IDFA |  |  | null | false | null {aaid} | AAID |  |  | null | false | null {clickid} | CLICK_ID | [CLICK_ID] |  |  | false | Click ID {event_name} | EVENT_NAME |  |  |  | false | The name of event

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | [IDFA] CLICK_AAID | [AAID]



