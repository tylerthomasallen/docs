## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/Pep_logo_red-1501274975350.png)	***Pepperjam***
https://www.pepperjam.com/

Integration Status |  ***active***

###  Description
Multichannel Performance Marketing & The Largest Affiliate Network. Pepperjam gives brands and retailers the resources and confidence needed to promote their brand and grow their business. With innovative technology platforms and services, bolstered by decades of commerce expertise, we connect data and analytics across all performance channels. Our end-to-end customer acquisition solutions help our clients take their ROI to new heights.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://oplct.com/pb?t=55fa6e4f-d90f-4e61-826e-dee363470aca&appid={App_ID}&clid={Click_ID}&event={Event_Type}&subid={Affiliate_ID} PURCHASE | https://oplct.com/pb?t=55fa6e4f-d90f-4e61-826e-dee363470aca&appid={App_ID}&clid={Click_ID}&event={Event_Type}&subid={Affiliate_ID}&ordid={Order_ID}&itid={Item_ID}&itpx={Item_Price}&itcur={Item_Currency}&itqty={Item_Quantity}&orddt={Order_Date}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{App_ID} | OS_PACKAGE_NAME |  |  |  | false | Application ID {Click_ID} | CLICK_ID | {Click_ID} |  |  | false | ClickID {Event_Type} | EVENT_NAME |  |  |  | false | Event_Name {Affiliate_ID} | CUSTOM_LINK_MACRO | {Affiliate_ID} |  |  | false | Affiliate_ID {Order_ID} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.Order_ID)!} | false | TokenOrder_ID {Item_ID} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.Item_ID)!} | false | Item_ID {Item_Price} | PURCHASE_REVENUE |  |  |  | false | Price {Item_Currency} | PURCHASE_CURRENCY |  |  |  | false | Currency {Item_Quantity} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.Item_Quantity)!} | false | Quantity {Order_Date} | EVENT_TIMESTAMP |  |  |  | false | Order Date

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




