## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/mobio_logofooter1-1498863703378.png)	***Mobio***
http://mobioinc.com/

Integration Status |  ***active***

###  Description
http://mobioinc.com/company/

### Postbacks
Event | Postback
--- | ---
INSTALL | http://pb-rts.mobio.ru:8080/{app_id}?install_time={install_time}&event_time={event_time}&event_name=Install&event_revenue={event_revenue}&event_revenue_currency={currency}&media_source={media_source}&campaign={campaign}&creative={creative}&device_id={branch_device_id}&advertising_id={idfa}&android_id={android_id}&device_type={device_model}&os_version={os_version}&country_code={country_code} custom_event | http://pb-rts.mobio.ru:8080/{app_id}?install_time={install_time}&event_time={event_time}&event_name={event_name}&event_revenue={event_revenue}&event_revenue_currency={currency}&media_source={media_source}&campaign={campaign}&creative={creative}&device_id={branch_device_id}&advertising_id={idfa}&android_id={android_id}&device_type={device_model}&os_version={os_version}&country_code={country_code} PURCHASE | http://pb-rts.mobio.ru:8080/{app_id}?install_time={install_time}&event_time={event_time}&event_name={event_name}&event_revenue={event_revenue}&event_revenue_currency={currency}&media_source={media_source}&campaign={campaign}&creative={creative}&device_id={branch_device_id}&advertising_id={idfa}&android_id={android_id}&device_type={device_model}&os_version={os_version}&country_code={country_code} OPEN | http://pb-rts.mobio.ru:8080/{app_id}?install_time={install_time}&event_time={event_time}&event_name={event_name}&event_revenue={event_revenue}&event_revenue_currency={currency}&media_source={media_source}&campaign={campaign}&creative={creative}&device_id={branch_device_id}&advertising_id={idfa}&android_id={android_id}&device_type={device_model}&os_version={os_version}&country_code={country_code}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{app_id} | OS_PACKAGE_NAME |  |  |  | false |  {install_time} | EVENT_TIMESTAMP |  |  |  | false |  {event_time} | EVENT_TIMESTAMP |  |  |  | false |  {event_revenue} | PURCHASE_REVENUE |  |  |  | false |  {currency} | PURCHASE_CURRENCY |  |  |  | false |  {media_source} | SECONDARY_PUBLISHER | {media_source} |  |  | false | Media Source {campaign} | CAMPAIGN | {campaign} |  |  | false | Campaign {creative} | CREATIVE_NAME | {creative} |  |  | false |  {branch_device_id} | OS_DEVICE_ID |  |  |  | false |  {idfa} | IDFA |  |  |  | false |  {android_id} | AAID |  |  |  | false |  {device_model} | DEVICE_MODEL |  |  |  | false |  {os_version} | OS_VERSION |  |  |  | false |  {country_code} | COUNTRY |  |  |  | false |  {event_name} | EVENT_NAME |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_AAID | {android_id} CLICK_IDFA | {idfa}



