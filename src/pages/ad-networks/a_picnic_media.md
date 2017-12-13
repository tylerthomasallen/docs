## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/Picnic_Media-1513137425026.png)	***Picnic Media***
https://www.picnic-media.com/

Integration Status |  ***active***

###  Description
Picnic is an interactive design studio specializing in campaign-driven advertising experiences for global agencies and beyond.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://data.picnic-media.com/engine/attr?src=brc&event_name={event_name}&~secondary_publisher={traf}&~click_id={token}&~campaign_id={pic_id_1}&pic_id_2={pic_id_2}&auc_id={auc_id}&app_id={app_id}&os={os}&$aaid={aaid}&$idfa={idfa}&timestamp={timestamp}&country={country}&ip={ip}&language={language} OPEN | https://data.picnic-media.com/engine/attr?src=brc&event_name={event_name}&~secondary_publisher={traf}&~click_id={token}&~campaign_id={pic_id_1}&pic_id_2={pic_id_2}&auc_id={auc_id}&app_id={app_id}&os={os}&$aaid={aaid}&$idfa={idfa}&timestamp={timestamp}&country={country}&ip={ip}&language={language} PURCHASE | https://data.picnic-media.com/engine/attr?src=brc&event_name={event_name}&~secondary_publisher={traf}&~click_id={token}&~campaign_id={pic_id_1}&pic_id_2={pic_id_2}&auc_id={auc_id}&app_id={app_id}&os={os}&$aaid={aaid}&$idfa={idfa}&timestamp={timestamp}&country={country}&currency={currency}&revenue={revenue}&ip={ip}&language={language} custom_event | https://data.picnic-media.com/engine/attr?src=brc&event_name={event_name}&~secondary_publisher={traf}&~click_id={token}&~campaign_id={pic_id_1}&pic_id_2={pic_id_2}&auc_id={auc_id}&app_id={app_id}&os={os}&$aaid={aaid}&$idfa={idfa}&timestamp={timestamp}&country={country}&ip={ip}&language={language}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{event_name} | EVENT_NAME |  |  |  | false |  {traf} | SECONDARY_PUBLISHER | {traf} |  |  | false |  {token} | CLICK_ID | {token} |  |  | false |  {pic_id_1} | CAMPAIGN_ID | {pic_id_1} |  | null | false | null {pic_id_2} | CUSTOM_LINK_MACRO | {pic_id_2} |  | null | false | null {auc_id} | CUSTOM_LINK_MACRO | {auc_id} |  | null | false | null {app_id} | OS_PACKAGE_NAME |  |  |  | false |  {os} | OS |  |  |  | false |  {aaid} | AAID |  |  |  | false |  {idfa} | IDFA |  |  |  | false |  {timestamp} | EVENT_TIMESTAMP |  |  |  | false |  {country} | COUNTRY |  |  | null | false | null {ip} | IP_ADDRESS |  |  | null | false | null {language} | LANGUAGE |  |  | null | false | null {currency} | PURCHASE_CURRENCY |  |  | null | false | null {revenue} | PURCHASE_REVENUE |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_AAID | {aaid} CLICK_IDFA | {idfa}



