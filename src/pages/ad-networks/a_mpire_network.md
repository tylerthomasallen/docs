## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/78e199f17cd2c80f31e430eec689-1493246692632.png)	***Mpire Network***
https://www.mpirenetwork.com/

Integration Status |  ***active***

###  Description
Mpire Network is the Performance Marketing company focused on maximising the impact and reach of every dollar invested in online advertising.

### Postbacks
Event | Postback
--- | ---
custom_event | http://mpire.postnx.us/?click_id={click_id}&step=2&adv_payout={adv_payout}&sale_amount={sale_amount}&reference_id={reference_id}&user_ip={user_ip}&adv_transaction_id={adv_transaction_id} INSTALL | http://mpire.postnx.us/?click_id={click_id}&adv_payout={adv_payout}&sale_amount={sale_amount}&reference_id={reference_id}&user_ip={user_ip}&adv_transaction_id={adv_transaction_id}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{click_id} | CLICK_ID | {click_id} |  | null | false | Click ID {adv_payout} | PURCHASE_REVENUE |  |  | null | false | The evenue we can expect to receive for this conversion. This parameter is accepted only if 'Specify revenue on conversion' is set. The value passed must be a number (using a period as the decimal separator) without currency symbols. {sale_amount} | PURCHASE_REVENUE |  |  | null | false | Amount of the sale. The value passed must be a number (using a period as the decimal separator) without currency symbols.  {reference_id} | CAMPAIGN_ID | {reference_id} |  | null | false | Advertiser campaign reference id {user_ip} | IP_ADDRESS |  |  | null | false | The user IP address on the conversion {adv_transaction_id} | PURCHASE_TRANSACTION_ID |  |  | null | false | Unique transaction id, used to allow CPS duplicates

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




