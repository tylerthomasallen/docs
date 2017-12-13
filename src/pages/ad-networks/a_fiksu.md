## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/Fiksu_Registered_Logo_RGB_Large_(1)-1492639196446.png)	***Fiksu***
https://fiksu.com/

Integration Status |  ***in-review***

###  Description
Fiksu is a provider of mobile marketing technology that helps app and brand marketers reach their target audiences on mobile

### Postbacks
Event | Postback
--- | ---
INSTALL | https://a.fiksu.com/20071/{Platfrom_id}/{Package_ID}/external?event=conversion&appid={appid}&app_version={app_version}&app_name={app_name}&system_name={system_name}&system_version={system_version}&ip_address={ip_address}&country={country}&lang={lang}&user_agent={user_agent}&fvalue={fvalue}&tvalue={tvalue}&device={device}&a_enabled={a_enabled}&appt_enabled={appt_enabled}&a_id={a_id}&udid={udid} OPEN | https://a.fiksu.com/20071/{Platfrom_id}/{Package_ID}/external?event=launch&appid={appid}&app_version={app_version}&app_name={app_name}&system_name={system_name}&system_version={system_version}&ip_address={ip_address}&country={country}&lang={lang}&user_agent={user_agent}&fvalue={fvalue}&tvalue={tvalue}&device={device}&a_enabled={a_enabled}&appt_enabled={appt_enabled}&a_id={a_id}&udid={udid} PURCHASE | https://a.fiksu.com/20071/{Platfrom_id}/{Package_ID}/external?event=purchase&appid={appid}&app_version={app_version}&app_name={app_name}&system_name={system_name}&system_version={system_version}&ip_address={ip_address}&country={country}&lang={lang}&user_agent={user_agent}&fvalue={fvalue}&tvalue={tvalue}&device={device}&a_enabled={a_enabled}&appt_enabled={appt_enabled}&a_id={a_id}&udid={udid}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{Platfrom_id} | OS |  |  | null | false | Platform iOS/Android {Package_ID} | OS_PACKAGE_NAME |  |  | null | false | BundleID {appid} | OS_PACKAGE_NAME |  |  | null | false | 9-10 digit iTunes Application Identifier (e.g. 849856615). {app_version} | APP_VERSION |  |  | null | true | Version number of your app. {app_name} | APP_NAME |  |  | null | true | Name of your app. {system_name} | OS |  |  | null | true | Name of the OS. {system_version} | OS_VERSION |  |  | null | false | Version of the OS. {ip_address} | IP_ADDRESS |  |  | null | false | The client device's ip address. Retrieved from server side. {country} | COUNTRY |  |  | null | false | Country name. {lang} | LANGUAGE |  |  | null | false | Preferred Language. {user_agent} | USER_AGENT |  |  | ${(event.custom_data.user_agent)!} | false | \tThe client device's user agent. Retrieved from server side.\t {fvalue} | PURCHASE_REVENUE |  |  | null | false | Floating type value sent for a purchase event. {tvalue} | PURCHASE_CURRENCY |  |  | null | false | \tCurrency value sent for a purchase event. {device} | DEVICE_MODEL |  |  | null | false | Device type. {a_enabled} | LIMIT_AD_TRACKING_ENABLED |  |  | null | false | Limit Ad Tracking setting available from iOS 6 onward. 0 if user enabled 'Limit Ad Tracking' on device, 1 if not. {appt_enabled} | LIMIT_AD_TRACKING_ENABLED |  |  | ${(event.custom_data.appt_enabled)!} | false | If you allow a user to limit ad tracking for your app, please use this parameter to send this setting. 0 if user has opted to limit ad tracking at the app level, 1 if not. {a_id} | AAID | {a_id} |  | null | false | The Android Advertising ID {udid} | ANDROID_ID |  |  | null | false | The Android ID specified for the Android Device

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_AAID | {aaid} CLICK_IDFA | {idfa}



