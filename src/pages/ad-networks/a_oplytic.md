## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/logo-1498155298417.png)	***Oplytic***
https://www.oplytic.com/

Integration Status |  ***active***

###  Description
Oplytic, formerly eMagazines, is a mobile marketing analytics and engagement software that improves sales and marketing effectiveness and helps enterprises run smarter mobile marketing, communication, and sales programs It is our mission to embolden marketers to pursue their enterprise mobile strategies by helping them analyze their marketing and communication efforts, execute powerful tactics to engage users, and optimize media in channels that map to their objectives.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://oplct.com/pb?t=55fa6e4f-d90f-4e61-826e-dee363470aca&appid={App_ID}&clid={Click_ID}&event={Event_Type}&subid={Affiliate_ID} PURCHASE | https://oplct.com/pb?t=55fa6e4f-d90f-4e61-826e-dee363470aca&appid={App_ID}&clid={Click_ID}&event={Event_Type}&subid={Affiliate_ID}&ordid={Order_ID}&itid={Item_ID}&itpx={Item_Price}&itcur={Item_Currency}&itqty={Item_Quantity}&orddt={Order_Date}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{App_ID} | OS_PACKAGE_NAME |  |  |  | false | Application ID {Click_ID} | CLICK_ID | {Click_ID} |  |  | false | ClickID {Event_Type} | EVENT_NAME |  |  |  | false | Event_Name {Affiliate_ID} | CUSTOM_LINK_MACRO | {Affiliate_ID} |  |  | false | Affiliate_ID {Order_ID} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.Order_ID)!} | false | TokenOrder_ID {Item_ID} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.Item_ID)!} | false | Item_ID {Item_Price} | PURCHASE_REVENUE |  |  | null | false | Price {Item_Currency} | PURCHASE_CURRENCY |  |  | null | false | Currency {Item_Quantity} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.Item_Quantity)!} | false | Quantity {Order_Date} | EVENT_TIMESTAMP |  |  | null | false | Order Date

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




