## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/vgfm8axwuhj2lcwybtzf-1492640396474.png)	***Remerge***
https://www.remerge.io/

Integration Status |  ***active***

###  Description
Re-engage your user base with app retargeting. Remerge is a secure, efficient and scalable solution to increase retention and boost user lifetime value.

### Postbacks
Event | Postback
--- | ---
OPEN | http://track.us2.remerge.io/event?app_id={app_id}&event={event}&ts={ts}&partner={partner}&key={key}&idfa={idfa}&aaid={aaid}&country={country}&os_name={os_name}&os_version={os_version}&app_version={app_version}&network=branch&campaign={campaign}&ad={ad}&creative={creative}&click_id={click_id}&is_attributed={is_attributed} INSTALL | http://track.us2.remerge.io/event?app_id={app_id}&event={event}&ts={ts}&partner={partner}&key={key}&idfa={idfa}&aaid={aaid}&country={country}&os_name={os_name}&os_version={os_version}&app_version={app_version}&network=branch&campaign={campaign}&ad={ad}&creative={creative}&click_id={click_id}&is_attributed={is_attributed} PURCHASE | http://track.us2.remerge.io/event?app_id={app_id}&event={event}&ts={ts}&partner={partner}&key={key}&idfa={idfa}&aaid={aaid}&country={country}&os_name={os_name}&os_version={os_version}&app_version={app_version}&revenue={revenue}&currency={currency}&network=branch&campaign={campaign}&ad={ad}&creative={creative}&click_id={click_id}&is_attributed={is_attributed} custom_event | http://track.us2.remerge.io/event?app_id={app_id}&event={event}&ts={ts}&partner={partner}&key={key}&idfa={idfa}&aaid={aaid}&country={country}&os_name={os_name}&os_version={os_version}&app_version={app_version}&network=branch&campaign={campaign}&ad={ad}&creative={creative}&click_id={click_id}&is_attributed={is_attributed}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{app_id} | CUSTOM_EVENT_METADATA |  |  | <@loop data=app.app_bundles val=\bundle\><#if user_data.os == bundle.os><#if bundle.os==\ANDROID\><@break/><#elseif bundle.os == \IOS\>${(bundle.ios.itunes_id?substring(2))!}</#if><@break/></#if></@loop> | false | iTunes or Google Play Store App ID {event} | EVENT_NAME |  |  | null | false | name of the event {ts} | EVENT_TIMESTAMP |  |  | null | false | event timestamp as unix epoch, timezone should be UTC {partner} | ACCOUNT_CREDENTIAL |  | Partner Name | null | false | name of the tracking partner {key} | ACCOUNT_CREDENTIAL |  | Password | null | false | key of the partner (provided by remerge) {idfa} | IDFA | {idfa} |  | null | false | Apple IDFA (uppercase) (if a aaid was provided not mandatory) {aaid} | AAID | {aaid} |  | null | false | Android Advertising ID (lowercase) (if a idfa was provided not mandatory) {country} | COUNTRY |  |  | null | false | ISO alpha 2 country code (lowercase) {os_name} | OS |  |  | null | false | OS name {os_version} | OS_VERSION |  |  | null | false | OS version {app_version} | APP_VERSION |  |  | null | false | App version {campaign} | CAMPAIGN | {campaign} |  | null | false | if the event is attributes to a partner, the campaign name or id {ad} | AD_SET_ID | {ad} |  | null | false | if the event is attributes to a partner , the ad name or id {creative} | CREATIVE_ID | {creative} |  | null | false | if the event is attributes to a partner, the creative name or id {click_id} | CLICK_ID | {click_id} |  | null | false | pass through parameter for the unique ad click id (usually appended to a click tracking url by remerge) {is_attributed} | IS_CLAIMABLE |  |  | ${event.custom_data.is_attributes} | false | null {revenue} | PURCHASE_REVENUE |  |  | null | false | Revenue {currency} | PURCHASE_CURRENCY |  |  | null | false | ISO 4217 currency code

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_AAID | {aaid} CLICK_IDFA | {idfa}



