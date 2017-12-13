## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/top-logo1-1500342833490.png)	***Connected Interactive***
http://connectedinteractive.com/

Integration Status |  ***active***

###  Description
Connected Interactive is a Canadian digital media agency with offices in Toronto, Vancouver, Mexico City, and Rio de Janeiro. We are a performance/acquisition-based media company with device-agnostic advertising solutions.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://ads.connectedinteractive.com/callbacks/attribution/event/branchio/install/{app_id}?idfa={idfa}&advertising_id={advertising_id}&device_ip={device_ip}&device_model={device_model}&device_os={device_os}&event_name=install&app_id={app_id}&device_ua={device_ua}&country_code={country}&language={language}&click_ts={click_ts}&install_ts={install_ts}&can_claim={can_claim}&click_id={click_id} PURCHASE | https://ads.connectedinteractive.com/callbacks/attribution/event/branchio/event/{app_id}?idfa={idfa}&advertising_id={advertising_id}&device_ip={device_ip}&device_model={device_model}&device_os={device_os}&event_name={event_name}&app_id={app_id}&device_ua={device_ua}&country_code={country}&language={language}&click_ts={click_ts}&can_claim={can_claim}&click_id={click_id} custom_event | https://ads.connectedinteractive.com/callbacks/attribution/event/branchio/event/{app_id}?idfa={idfa}&advertising_id={advertising_id}&device_ip={device_ip}&device_model={device_model}&device_os={device_os}&event_name={event_name}&app_id={app_id}&device_ua={device_ua}&country_code={country}&language={language}&click_ts={click_ts}&can_claim={can_claim}&click_id={click_id}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{app_id} | OS_PACKAGE_NAME |  |  |  | false |  {idfa} | IDFA |  |  |  | false |  {advertising_id} | AAID |  |  |  | false |  {device_ip} | IP_ADDRESS |  |  |  | false |  {device_model} | DEVICE_MODEL |  |  |  | false |  {device_os} | OS |  |  |  | false |  {app_id} | OS_PACKAGE_NAME |  |  |  | false |  {device_ua} | USER_AGENT |  |  |  | false |  {country} | COUNTRY |  |  |  | false |  {language} | LANGUAGE |  |  |  | false |  {click_ts} | EVENT_TIMESTAMP |  |  |  | false |  {install_ts} | EVENT_TIMESTAMP |  |  |  | false |  {can_claim} | IS_CLAIMABLE |  |  |  | false |  {click_id} | CLICK_ID | {click_id} |  |  | false |  {event_name} | EVENT_NAME |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | {idfa} CLICK_AAID | {advertising_id}



