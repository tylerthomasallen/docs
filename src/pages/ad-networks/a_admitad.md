## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/logo-admitad-1493136873359.png)	***Admitad***
http://admitad.com

Integration Status |  ***active***

###  Description
A network of Cost-Per-Action affiliate programs, which provides advertisers with reliable sources of sales and publishers with new business models to monetize traffic.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://ad.admitad.com/r?pk={postback_key}&uid={admitad_uid}&publisher_id={publisher_id}&device={idfa}&app={app}&app_version={app_version}os={os}&os_version={os_version}&device={device}&country={country}&language={language}&tracking={event_name}&oid={event_id}&timestamp={timestamp} OPEN | https://ad.admitad.com/r?pk={postback_key}&uid={admitad_uid}&publisher_id={publisher_id}&tracking={event_name}&oid={event_id}&device={idfa}&app={app}&app_version={app_version}os={os}&os_version={os_version}&device={device}&country={country}&language={language}&timestamp={timestamp} PURCHASE | https://ad.admitad.com/r?pk={postback_key}&uid={admitad_uid}&publisher_id={publisher_id}&tracking={event_name}&oid={event_id}&device={idfa}&app={app}&app_version={app_version}os={os}&os_version={os_version}&device={device}&country={country}&language={language}&timestamp={timestamp}&price={revenue}&currency_code={currency}&transaction_id={transaction_id} custom_event | https://ad.admitad.com/r?pk={postback_key}&uid={admitad_uid}&publisher_id={publisher_id}&tracking={event_name}&oid={event_id}&device={idfa}&app={app}&app_version={app_version}os={os}&os_version={os_version}&device={device}&country={country}&language={language}&timestamp={timestamp}&price={revenue}&currency_code={currency}&transaction_id={transaction_id}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{postback_key} | ACCOUNT_CREDENTIAL |  | Postback Key | ${event.custom_data.postback_key} | false | Postback Key {admitad_uid} | CLICK_ID | {{admitad_uid}} |  | null | false | null {publisher_id} | SECONDARY_PUBLISHER | {{publisher_id}} |  | null | false | null {idfa} | OS_DEVICE_ID |  |  | null | false | null {app} | OS_PACKAGE_NAME |  |  | null | false | null {app_version} | APP_VERSION |  |  | null | false | null {os} | OS |  |  | null | false | null {os_version} | OS_VERSION |  |  | null | false | null {device} | DEVICE_MODEL |  |  | null | false | null {country} | COUNTRY |  |  | null | false | null {language} | LANGUAGE |  |  | null | false | null {event_name} | EVENT_NAME |  |  | null | false | null {event_id} | EVENT_ID |  |  | null | false | null {timestamp} | EVENT_TIMESTAMP |  |  | null | false | null {revenue} | PURCHASE_REVENUE |  |  | null | false | null {currency} | PURCHASE_CURRENCY |  |  | null | false | null {transaction_id} | PURCHASE_TRANSACTION_ID |  |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




