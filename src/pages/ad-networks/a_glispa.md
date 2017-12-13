## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/logo-glispa@2x-1493323107286.png)	***Glispa***
https://www.glispa.com

Integration Status |  ***active***

###  Description
Glispa Global Group is a global mobile ad tech company empowering clients to activate global audiences and move markets.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://trk.glispa.com/event/conversion/{click_id}?oid={oid}&m.device_ip={device_ip}&m.idfa={idfa}&m.gaid={google_aid}&country={country_code}&m.androidid={android_id}&os={os}&os_version={os_version}&m.device_model={device_model}&m.app_id={store_app_id}&m.locale={language}&conversionts={timestamp_milliseconds}&mmp=Branch custom_event | http://trk.glispa.com/event/00000000-0000-0000-0000-000000000E00/{click_id}?oid={oid}&m.device_ip={device_ip}&event_oid={event_oid}&event_id={event_id}&revenue_amount={revenue_amount}&revenue_country={revenue_country}&revenue_currency={revenue_currency}&m.idfa={idfa}&m.gaid={google_aid}&country={country_code}&m.androidid={android_id}&os={os}&os_version={os_version}&m.device_model={device_model}&m.app_id={store_app_id}&m.locale={language}&event_timestamp={timestamp_milliseconds}&mmp=Branch"}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{click_id} | CLICK_ID | {{clickidv1}} |  |  | true | Parameter generated on click {oid} | CUSTOM_LINK_MACRO | {{oid}} |  | null | false | null {device_ip} | IP_ADDRESS |  |  |  | true | IP address of the end user device {idfa} | IDFA | %SUBID5 |  | null | false | The advertiser identifier for Apple devices on iOS 6.0 and later {google_aid} | AAID | %SUBID2 |  |  | false | Google advertising ID (gaid), preferred parameter since 2014-08-01 {country_code} | COUNTRY |  |  |  | false | Full country name recorded by advertiser {android_id} | AAID | {android_id} |  |  | false | Android ID for identifying Android devices {os} | OS |  |  |  | false | OS {os_version} | OS_VERSION |  |  |  | false | Version {device_model} | DEVICE_MODEL |  |  |  | false | Model {store_app_id} | OS_PACKAGE_NAME |  |  |  | false | Package name of the tracked App {language} | LANGUAGE |  |  |  | false | Language {timestamp_milliseconds} | EVENT_TIMESTAMP |  |  |  | false | Event Timestamp {event_oid} | EVENT_ID |  |  | null | false | null {event_id} | EVENT_NAME |  |  |  | true | Type of event e.g. Install, Tutorial Complete, In-App Purchase, etc. {revenue_amount} | PURCHASE_REVENUE |  |  |  | false | Monetization amount {revenue_country} | COUNTRY |  |  |  | false | Monetization country, ISO 3166 alpha2 compliant {revenue_currency} | PURCHASE_CURRENCY |  |  |  | false | ISO 4217 compliant currency code

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




