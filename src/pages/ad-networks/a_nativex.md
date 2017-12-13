## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/nativex-logo2-300x130-1493132886101.png)	***NativeX***
http://www.nativex.com/

Integration Status |  ***active***

###  Description
NativeX - The Leading Native Ad Technology for Mobile Games & Apps | NativeX - The Premiere Ad Technology Choice of Top Charting Mobile Games & Apps.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://next.mobvista.com/install?mobvista_campuuid={mobvista_campuuid}&mobvista_clickid={mobvista_clickid}&mobvista_type=branch&mobvista_device={device-brand}&mobvista_pl={platform}&mobvista_ip={ip}&mobvista_os={os-version}&mobvista_devid={mobvista_devid}&mobvista_gaid={mobvista_gaid}&mobvista_imei={android_imei}&mobvista_country={country_code} OPEN | http://stat.mobvista.com/event?mobvista_campuuid={mobvista_campuuid}&mobvista_clickid={mobvista_clickid}&mobvista_ip={ip}&mobvista_devid={mobvista_devid}&mobvista_gaid={mobvista_gaid}&mobvista_type=branch&event_name={eventName}&event_value={eventValue}&event_time={eventTime}&app_version={app_version}&mobvista_country={country_code}&mobvista_brand={device_brand}&mobvista_language={language}&event_type={event_type}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{mobvista_campuuid} | CUSTOM_LINK_MACRO | {mobvista_campuuid} |  | {mobvista_campuuid} | false | The mobvista_campuuid value passed under parameter mobvista_campuuid {mobvista_clickid} | CLICK_ID | {mobvista_clickid} |  | null | false | The mobvista_clickid value passed under parameter mobvista_clickid {device-brand} | DEVICE_MODEL |  |  | null | false | Device Model {platform} | OS |  |  | null | false | Device Platform {ip} | IP_ADDRESS |  |  | null | false | IP address of device {os-version} | OS_VERSION |  |  | null | false | Mobile OS version {mobvista_devid} | OS_DEVICE_ID |  |  | null | false | IDFA/AAID {mobvista_gaid} | AAID | {mobvista_gaid} |  | null | false | AAID {android_imei} | CUSTOM_EVENT_METADATA |  |  | ${(android_imei)!} | false | Android | Imei value of device IOS | null {country_code} | COUNTRY |  |  | null | false | Country {eventName} | EVENT_NAME |  |  | null | false | The name of the event {eventValue} | CUSTOM_EVENT_METADATA |  |  | ${(eventValue)!} | false | The value of the event {eventTime} | EVENT_TIMESTAMP |  |  | null | false | TimeStamp of event {app_version} | APP_VERSION |  |  | null | false | App Version {device_brand} | DEVICE_MODEL |  |  | null | false | Device Model {language} | LANGUAGE |  |  | null | false | Language {event_type} | EVENT_NAME |  |  | null | false | The type of the event

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




