## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/Tapjoy-acquires-5Rocks-1493129616390.png)	***Tapjoy***
http://tapjoy.com

Integration Status |  ***active***

###  Description
Tapjoy is a mobile advertising and monetization platform that allows mobile app users to select ads to engage with in exchange for virtual rewards and premium.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://api.tapjoy.com/v3/tpat_app_events?tracker_partner_id=branch&app_id={tp_app_id}&advertising_id={advertising_id}&tjcid={tjcid}&event_time={event_time}&event_name={event_name}&tapjoy_attributed={tapjoy_attributed}&bundle_id={bundle_id}&app_version={app_version}&platform={platform}&device_type={device_type}&os_version={os_version}&country_code={country_code}&user_agent={user_agent} PURCHASE | https://api.tapjoy.com/v3/tpat_app_events?tracker_partner_id=branch&app_id={tp_app_id}&advertising_id={advertising_id}&tjcid={tjcid}&event_time={event_time}&event_name={event_name}&tapjoy_attributed={tapjoy_attributed}&bundle_id={bundle_id}&app_version={app_version}&platform={platform}&device_type={device_type}&os_version={os_version}&country_code={country_code}&user_agent={user_agent}&purchase_amount={purchase_amount}&purchase_currency_code={purchase_currency_code} custom_event | https://api.tapjoy.com/v3/tpat_app_events?tracker_partner_id=branch&app_id={tp_app_id}&advertising_id={advertising_id}&tjcid={tjcid}&event_time={event_time}&event_name={event_name}&tapjoy_attributed={tapjoy_attributed}&bundle_id={bundle_id}&app_version={app_version}&platform={platform}&device_type={device_type}&os_version={os_version}&country_code={country_code}&user_agent={user_agent}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{tp_app_id} | CUSTOM_LINK_MACRO | TAPJOY_APP_ID |  | null | false | null {advertising_id} | OS_DEVICE_ID |  |  | null | false |  {tjcid} | CLICK_ID | TAPJOY_TJCID |  | null | false | null {event_time} | EVENT_TIMESTAMP |  |  | null | false | null {event_name} | EVENT_NAME |  |  | null | false | null {tapjoy_attributed} | IS_CLAIMABLE |  |  | null | false | null {bundle_id} | OS_PACKAGE_NAME |  |  | null | false | null {app_version} | APP_VERSION |  |  | null | false | null {platform} | OS |  |  | null | false | null {device_type} | DEVICE_MODEL |  |  | null | false | null {os_version} | OS_VERSION |  |  | null | false | null {country_code} | COUNTRY |  |  | null | false | null {user_agent} | USER_AGENT |  |  | null | false | null {purchase_amount} | PURCHASE_REVENUE |  |  | null | false | null {purchase_currency_code} | PURCHASE_CURRENCY |  |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
SECONDARY_PUBLISHER | TAPJOY_GENERIC_SOURCE CLICK_IDFA | TAPJOY_RESTORED_RAW_ADVERTISING_ID CLICK_AAID | TAPJOY_RESTORED_RAW_ADVERTISING_ID S2S | true



