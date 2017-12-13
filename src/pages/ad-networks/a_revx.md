## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/logo-1493256528887.png)	***RevX***
http://revx.io

Integration Status |  ***active***

###  Description
RevX is a technology company that offers mobile advertising products to help marketers acquire, engage, retain and drive transactions for their mobile users.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://data.atomex.net/data/{data_tagId}/1x1.gif?client_id={client_tagId}&os={OS}&advertising_id={advertising_id}&t={business_vertical}&tid=1&px={conversion_tagId}&event_name={event_name}&can_claim={can_claim} OPEN | http://data.atomex.net/data/{data_tagId}/1x1.gif?client_id={client_tagId}&os={OS}&advertising_id={advertising_id}&t={business_vertical}&tid=1&px={conversion_tagId}&event_name={event_name}&can_claim={can_claim} PURCHASE | http://data.atomex.net/data/{data_tagId}/1x1.gif?client_id={client_tagId}&os={OS}&advertising_id={advertising_id}&t={business_vertical}&tid=1&px={conversion_tagId}&event_name={event_name}&can_claim={can_claim}&sprc={sales_price}&event_value={event_value} custom_event | http://data.atomex.net/data/{data_tagId}/1x1.gif?client_id={client_tagId}&os={OS}&advertising_id={advertising_id}&t={business_vertical}&tid=1&px={conversion_tagId}&event_name={event_name}&can_claim={can_claim}&event_value={event_value}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{data_tagId} | ACCOUNT_CREDENTIAL |  | Data Tag ID | null | false | Unique data tag Id provided by RevX for each customer. Required {client_tagId} | ACCOUNT_CREDENTIAL |  | Client Tag ID | null | false | Unique client tag Id provided by RevX for each customer. Required {OS} | OS |  |  | null | false | android or ios. {advertising_id} | OS_DEVICE_ID |  |  | null | false | null {business_vertical} | ACCOUNT_CREDENTIAL |  | Business Vertical | ${(business_vertical)!} | false | Business Vertical- provided by RevX. Required {conversion_tagId} | ACCOUNT_CREDENTIAL |  | Conversion Tag ID | ${(conversion_tagid)!} | false | Unique conversion tag Id provided by RevX for each customer. {event_name} | EVENT_NAME |  |  | null | false | null {can_claim} | IS_CLAIMABLE |  |  | null | false | null {sales_price} | PURCHASE_REVENUE |  |  | null | false | null {event_value} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.event_value)!} | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




