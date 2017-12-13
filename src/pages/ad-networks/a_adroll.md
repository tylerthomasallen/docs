## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/AdRoll-logo-1493162532817.png)	***AdRoll***
https://www.adroll.com/

Integration Status |  ***in-review***

###  Description
Attract new prospects, convert customers, & grow customer value with AdRoll â€” the retargeting + prospecting platform of choice for over 30000 businesses.

### Postbacks
Event | Postback
--- | ---
OPEN | http://data.adroll.com/mmp/MMP/?advertisable_eid={ADVERTISABLE_ID}&pixel_eid={PIXEL_ID}&event_name={EVENT}&ios_ifa={IDFA}&google_aid={AAID}&timestamp={TIMESTAMP_MS}&mobile_app_type={PLATFORM}&app_version={APPVERSION}&site_name={APPNAME}&package_name={APPID}&device_type={DEVICE_TYPE}&device_ip={IPADDRESS} INSTALL | http://data.adroll.com/mmp/MMP/?advertisable_eid={ADVERTISABLE_ID}&pixel_eid={PIXEL_ID}&event_name={EVENT}&ios_ifa={IDFA}&google_aid={AAID}&timestamp={TIMESTAMP_MS}&mobile_app_type={PLATFORM}&app_version={APPVERSION}&site_name={APPNAME}&package_name={APPID}&device_type={DEVICE_TYPE}&device_ip={IPADDRESS}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{ADVERTISABLE_ID} | ACCOUNT_CREDENTIAL |  | Advertisable ID | null | false | Customer specific on our platform, we will provide for each customer at the account level {PIXEL_ID} | ACCOUNT_CREDENTIAL |  | Pixel ID | null | false | Customer specific on our platform, we will provide for each customer at the account level\n {EVENT} | EVENT_ID |  |  | null | false | human readable version of the event (if available, if not use this for event ID) {IDFA} | IDFA | {IDFA} |  | null | false | IDFA/Advertising ID, clear (uppercase, hyphens) preferred.\n {AAID} | AAID | {AAID} |  | null | false | AAID {TIMESTAMP_MS} | EVENT_TIMESTAMP |  |  | null | false | Timestamp of the event (integer in milliseconds) {PLATFORM} | OS |  |  | null | false | ios, android (if you use different values, let us know and weâ€™ll do the conversion).\n {APPVERSION} | APP_VERSION |  |  | null | false | Application Version {APPNAME} | APP_NAME |  |  | null | false | Application Name {APPID} | OS_PACKAGE_NAME |  |  | null | false | Bundle ID or package name on Android\n {DEVICE_TYPE} | DEVICE_MODEL |  |  | null | false | tablet, phone (if you use different values, let us know and weâ€™ll do the conversion).\n {IPADDRESS} | IP_ADDRESS |  |  | null | false | device ip

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




