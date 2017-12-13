## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/0000014b-6f75-2b16-6984-3be17d5c7b30-1500341129317.png)	***MundoMedia***
https://www.mundomedia.com/

Integration Status |  ***active***

###  Description
MUNDOmedia is a global ad technology company, based in the growing tech hub of Toronto. We are passionate about the connection between data & mobile advertising, which makes our MUNDOTrack data platform and proprietary technology key to everything that we do. With more than 125 dedicated employees located in 3 continents worldwide, we offer our clients around the clock services and unparalleled mobile marketing expertise.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://www.mlinktracker.com/lead/{campaign}/{idfa}&cookieid={click_id}&mobileOSVersion={os_version}&country={country_code}&secondary_publisher={secondary_publisher} custom_event | http://www.mlinktracker.com/lead/{eventhash}/{idfa}_{click_id}&pid={publisher}&pietHash={campaign}&pietCookie={click_id}&mobileOSVersion={os_version}&country={country_code}&secondary_publisher={secondary_publisher}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{campaign} | CAMPAIGN | %HASH_CODE |  |  | false |  {idfa} | OS_DEVICE_ID |  |  |  | false |  {click_id} | CLICK_ID | %COOKIEID |  |  | false |  {os_version} | OS_VERSION |  |  |  | false |  {country_code} | COUNTRY |  |  |  | false |  {secondary_publisher} | PLACEMENT | %PLACEMENT |  | null | false | null {eventhash} | CUSTOM_LINK_MACRO | {eventhash} |  |  | false |  {publisher} | SECONDARY_PUBLISHER | %ADD_CODE |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | %DEVICE_ID CLICK_AAID | %DEVICE_ID



