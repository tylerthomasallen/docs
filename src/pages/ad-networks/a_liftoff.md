## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/liftoff-logo-1492801474909.png)	***Liftoff***
http://liftoff.io

Integration Status |  ***active***

###  Description
Liftoff is the leading mobile app marketing and retargeting platform for running true CPA-optimized mobile app install campaigns.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://analytics.liftoff.io/branch/v1/events?bundle_id={bundle_id}&app_store_id={app_store_id}&platform={device.metadata.os}&device_id={device.hardware_id}&os_version={device.metadata.os_version}&client_ip={event.metadata.ip}&event_name={event.name}&event_timestamp={event.date}&third_party_tracking_token={TRACKING_TOKEN}&is_attributed={is_attributed}&idfa={IDFA}&gaid={GOOGLE_AID} OPEN | https://analytics.liftoff.io/branch/v1/events?bundle_id={bundle_id}&app_store_id={app_store_id}&platform={device.metadata.os}&device_id={device.hardware_id}&os_version={device.metadata.os_version}&client_ip={event.metadata.ip}&event_name={event.name}&event_timestamp={event.date}&third_party_tracking_token={TRACKING_TOKEN}&is_attributed={is_attributed}&idfa={IDFA}&gaid={GOOGLE_AID} custom_event | https://analytics.liftoff.io/branch/v1/events?bundle_id={bundle_id}&app_store_id={app_store_id}&platform={device.metadata.os}&device_id={device.hardware_id}&os_version={device.metadata.os_version}&client_ip={event.metadata.ip}&event_name={event.name}&event_timestamp={event.date}&third_party_tracking_token={TRACKING_TOKEN}&is_attributed={is_attributed}&idfa={IDFA}&gaid={GOOGLE_AID}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{bundle_id} | OS_PACKAGE_NAME |  |  | <#list app.app_bundles as bundle><#if user_data.os == bundle.os><#if bundle.os==\ANDROID\>${(bundle.android.package_name)!}<#elseif bundle.os == \IOS\>${(bundle.ios.itunes_id?substring(2))!}</#if><#break></#if></#list> | false | bundle ID for the app. The bundle ID and app store ID on Android are the same. iOS apps have a separate bundle id.\n {app_store_id} | ITUNES_ID |  |  | null | false | as mentioned, this would be the same as bundle_id for Android. For iOS it would be a numeric ID like 284882215. NOTE |  If you could send us both the bundle_id and app_store_id params that would be great, but we would be fine with one or the other.\n {device.metadata.os} | OS |  |  | null | false | either \iOS\ or \Android\\n {device.hardware_id} | OS_DEVICE_ID |  |  | null | false | we'll expect either the IDFA or GAID depending on platform\n {device.metadata.os_version} | OS_VERSION |  |  | null | false | we'll accept whatever you send for device.metadata.os_version {event.metadata.ip} | IP_ADDRESS |  |  | null | false | IP {event.name} | EVENT_NAME |  |  | null | false |  we'll expect the event_name to be \install\ for installs, and a specific event name for events (eg, \purchase\, \registration\)\n {event.date} | EVENT_TIMESTAMP |  |  | null | false | we'll expect this to be a unix timestamp\n {TRACKING_TOKEN} | CLICK_ID | ${TRACKING_TOKEN} |  | null | false | Click ID {is_attributed} | IS_CLAIMABLE |  |  | ${(event.custom_data.uploaded_at)!} | false | as discussed earlier this would be a boolean or 0/1 indicating whether Liftoff drove the click that led to the event.  {IDFA} | IDFA | {IDFA} |  | null | false | IDFA {GOOGLE_AID} | AAID | {GOOGLE_AID} |  | null | false | AAID

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | ${IDFA} CLICK_AAID | ${GOOGLE_AID}



