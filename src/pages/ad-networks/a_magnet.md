## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/logo-1500342359816.png)	***Magnet***
https://magnetadservices.com/

Integration Status |  ***active***

###  Description
Magnet is an online ad network, focusing on smart advertising in web and mobile. We are aiming to help advertisers target their audience among millions of Iranians and publishers to monetize their medias. With Magnet, advertise, monetize and grow your business.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://track.magnetadservices.com/api/tracking/v2/data?productid={magnet_product_id}&group={magnet_line_id}&action={magnet_media_id}&label={event_name}&ClientTokenId={magnet_click_id}&ClientIp={ip_address}&DeviceModel={device_metadata}&AppDomain={developer_identity}&AppVersion={app_version}&OsVersion={device_os_version} custom_event | http://track.magnetadservices.com/api/tracking/v2/data?productid={magnet_product_id}&group={magnet_line_id}&action={magnet_media_id}&label={event_name}&ClientTokenId={magnet_click_id}&ClientIp={ip_address}&DeviceModel={device_metadata}&AppDomain={developer_identity}&AppVersion={app_version}&OsVersion={device_os_version} OPEN | http://track.magnetadservices.com/api/tracking/v2/data?productid={magnet_product_id}&group={magnet_line_id}&action={magnet_media_id}&label={event_name}&ClientTokenId={magnet_click_id}&ClientIp={ip_address}&DeviceModel={device_metadata}&AppDomain={developer_identity}&AppVersion={app_version}&OsVersion={device_os_version}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{magnet_product_id} | ACCOUNT_CREDENTIAL |  | Product ID | null | false | null {magnet_line_id} | CUSTOM_LINK_MACRO | {magnet_line_id} |  | null | false | null {magnet_media_id} | CUSTOM_LINK_MACRO | {magnet_media_id} |  | null | false | null {event_name} | EVENT_NAME |  |  | null | false | null {magnet_click_id} | CLICK_ID | {magnet_click_id} |  | null | false | null {ip_address} | IP_ADDRESS |  |  | null | false | null {device_metadata} | DEVICE_MODEL |  |  | null | false | null {developer_identity} | OS_PACKAGE_NAME |  |  | null | false | null {app_version} | APP_VERSION |  |  | null | false | null {device_os_version} | OS_VERSION |  |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




