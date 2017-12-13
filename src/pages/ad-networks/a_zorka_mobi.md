## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/zorka-mobi-russian-mobile-ad-network_(1)-1508430617001-1508881386381.png)	***Zorka Mobi***
https://zorka.mobi/en

Integration Status |  ***in-review***

###  Description
Zorka.Mobi is a mobile advertising agency specialized in media buying and delivering of high quality mobile traffic.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://offers.zorka.affise.com/postback?clickid={click_id}&action_id={action_id}&goal={goal}&ip={ip}&device_id={device_id}&referrer=branch&ios_idfa={idfa}&android_id={aaid}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{click_id} | CLICK_ID | {click_id} |  |  | false | ClickID {action_id} | EVENT_ID |  |  |  | false | Event ID {goal} | GOAL_ID |  |  |  | false | Goal {ip} | IP_ADDRESS |  |  |  | false | Ip Adress {device_id} | OS_DEVICE_ID |  |  |  | false | Device ID {idfa} | IDFA |  |  |  | false | IDFA {aaid} | AAID |  |  |  | false | AAID

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
SECONDARY_PUBLISHER | {pid}



