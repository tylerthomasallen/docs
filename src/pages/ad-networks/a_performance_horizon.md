## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/PH_LOGO-1493341199816.png)	***Performance Horizon***
https://performancehorizon.com

Integration Status |  ***active***

###  Description
Performance Horizon, the leading provider of SaaS solutions for digital partner marketing, enables brands to directly connect with their marketing partners to dramatically increase customer acquisition and drive high margin revenues from online marketing channels.

### Postbacks
Event | Postback
--- | ---
OPEN | https://prf.hn/conversion/tracking_mode:api/tsource:Mobile/tmetric:{event_name}/clickref:{CLICKREF} custom_event | https://prf.hn/conversion/tracking_mode:api/tsource:Mobile/tmetric:{event_name}/clickref:{CLICKREF}/conversionref:{ORDERID}/currency:{currency}/%5Bcategory:{CAT}/sku:{SKU}/value:{VALUE}/quantity:{QTY}%5D INSTALL | https://prf.hn/conversion/tracking_mode:api/tsource:Mobile/tmetric:{event_name}/clickref:{CLICKREF} PURCHASE | https://prf.hn/conversion/tracking_mode:api/tsource:Mobile/tmetric:{event_name}/clickref:{CLICKREF}/conversionref:{ORDERID}/currency:{currency}/%5Bcategory:{CAT}/sku:{SKU}/value:{VALUE}/quantity:{QTY}%5D"}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{event_name} | EVENT_NAME |  |  | null | false | null {CLICKREF} | CLICK_ID | {CLICKREF} |  | null | false | null {ORDERID} | PURCHASE_TRANSACTION_ID |  |  | null | false | null {currency} | PURCHASE_CURRENCY |  |  | ${(custom_data.currency)!} | false |  {CAT} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.category)!} | false | null {SKU} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.custref)!} | false | null {VALUE} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.value)!} | false | null {QTY} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.quantity)!} | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




