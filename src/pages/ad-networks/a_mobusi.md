## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/687474703a2f2f6d6f62757369617070732e6769746875622e696f2f4d6f6275736953444b2d694f532f696d616765732f6d6f627573695f6c6f676f5f6e6567726f2e706e67-1493247352015.png)	***Mobusi***
https://www.mobusi.com/

Integration Status |  ***active***

###  Description
mobusi is a technology media company with an expertise in performance advertising.

### Postbacks
Event | Postback
--- | ---
OPEN | http://pixel.leadzu.com/pixel.php?service={YOUR_SERVICE_ID}&hash={CLICK_ID}&type=EVENT&transaction_id={TransactionID}&id_event={EVENT_ID} INSTALL | http://pixel.leadzu.com/pixel.php?service={YOUR_SERVICE_ID}&hash={CLICK_ID} custom_event | http://pixel.leadzu.com/pixel.php?service={YOUR_SERVICE_ID}&hash={CLICK_ID}&type=EVENT&transaction_id={TransactionID}&id_event={EVENT_ID}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{YOUR_SERVICE_ID} | ACCOUNT_CREDENTIAL |  | Service ID | null | false | A unique ID related to you as our partner {CLICK_ID} | CLICK_ID | {CLICK_ID} |  | null | false | Click ID {TransactionID} | PURCHASE_TRANSACTION_ID |  |  | null | false | null {EVENT_ID} | EVENT_ID |  |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




