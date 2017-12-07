## Overview

Branch’s new webhook system for Unified Analytics allows you to export install and down-funnel event data as it occurs. You can import this data into your internal systems for analysis. You simply need to specify a URL for the POST or GET requests.

If you are looking for postback integrations for ad networks, please visit our [Universal Ads documentation](/pages/deep-linked-ads/universal-ads). For pre-configured integrations into popular analytics tools, please visit our [Data Integrations documentation](/pages/integrations/amplitude/).

The webhook system is highly customizable. You can register to only receive notifications for specific events, as well as specific subsections of events, filtered by link data, user data or event properties.

Our new webhook infrastructure supports for all Branch events. The data is formatted according to our updated event naming and metadata format which will get you through implementation and onto analysis in no time.

## Setup

### Register webhook

1. Open the [Webhooks](https://dashboard.branch.io/data-import-export/webhooks) page on the Branch dashboard.
1. Click **+ Add New Webhook**:

![image](/img/pages/exports/ua-webhooks/add-new-webhook.png)

### Configure webhook criteria

![image](/img/pages/exports/ua-webhooks/edit-webhook.png)

As you fill out the configuration, you'll see the following options:

- **Send a webhook to:** Enter the URL where you would like the events to be sent. This URL can be written with Freemarker syntax to dynamically populate parameters and execute simple, logical expressions. There is more information on Freemarker support below.
- **using a GET/POST:** Events can be sent either via POST or GET. POST events will be created with a default POST body. There is more information on POST bodies below.
- **users trigger event:** When the selected event occurs, a webhook will fire:

| Event | Description
| --- | ---
| **install** | Triggered the first time a user ever launches your app on their device. 
| **reinstall** | Triggered if a user deletes and reinstalls your app on their device.
| **open** | Triggered whenever the app is opened (and the open is neither an install or reinstall)
| **web session start** | Triggered when the user views a webpage using the Branch Web SDK
| **click** | Triggered whenever a Branch link is clicked on any platform
| **-- additional events --** | A complete list of events you track through the Branch Web or App SDKs.

!!! tip
    Events will only appear in the event dropdown if at least one of those events has been recorded in the past 30 days.

For an exhaustive list of events and more detailed definitions of each event, please see the [Event Ontology Data Schema](/pages/exports/event_ontology_data_schema/).

- **NB**: Event frequency is not yet supported. At this time webhooks can only be sent every time an event occurs. The option to send webhooks **the first time** an event occurs is roadmapped for release in Q1 2018.

#### Basic filtering

In the **Advanced** section of the page you can create a filter. Only events that *pass the filter criteria* will be sent. 

You'll notice a default filter that checks to see whether the event is **not** triggered by a known crawler/robot. To do this, we check if the Operating System does not equal "robots." With that filter applied, only events without OS equal to robots (i.e. iOS and Android) will trigger a webhook.

The most popular filter options are available in a dropdown. This should help you get up and running quickly, while also providing an example structure for more [advanced filtering](#advanced-filtering) if you need it.

To create a filter:

1. Click the **Add Filter** button
1. Select the metadata you'd like to filter on. For example, if you only want **iOS** installs, select "Operating System" from the dropdown. You'll see the text field to the right populate with the correct key. When doing advanced filtering later you will select "Custom" and manually set this key.
1. Select "equals" or "does not equal" from next dropdown.
1. Finally, set the **value** of the key that you'd like to filter in or out. For example, if you want iOS installs, you'll have set up "equals" and "IOS" in the dropdowns. In this example, the robots filter is redundant, so let's remove it using the minus button.

This should be your final view before saving:

![image](/img/pages/exports/ua-webhooks/basic-filtering.png)

!!! note "Example: Filtering installs by attributed link campaign"
    Let’s say you’re interested in receiving a webhook for every **install** event that is referred from a Branch link where you set the **Campaign** field to **App Install Campaign**. You would configure a filter to fire a webhook only when **Campaign** is equal to **"App Install Campaign"**. You would select **Campaign** from the dropdown, the key would be be autofilled and would equal **last_attributed_touch_data.~campaign**. Finally, you'd set the value equal to **App Install Campaign**.

    ![image](/img/pages/exports/ua-webhooks/campaign-install-filter.png)

!!! note "Example: Filtering clicks by link channel"
    Let’s say you’re interested in receiving a webhook for every **click** event that is referred from a Branch link where you set the **Channel** field to **AppLovin**. You would configure a filter to fire a webhook only when **Channel** is equal to **AppLovin**. You would select **Channel** from the dropdown, the key would be be autofilled and would equal **last_attributed_touch_data.~channel**. Finally, you'd set the value equal to **AppLovin**.

    ![image](/img/pages/exports/ua-webhooks/channel-click-filter.png)


See the [Advanced Filtering](#advanced-filtering) page to read more about customizing when events are sent.


### Testing

To test whether your webhook is configured correctly, you can use [requestb.in](https://requestb.in/). RequestBin gives you a URL that accepts events for 24 hours and allows you to see exactly what Branch is sending.

1. Go to [requestb.in](https://requestb.in/) and click **+ Create a RequestBin**:

	![image](/img/pages/exports/requestbin_create.png)

1. Copy the **Bin URL**:

	![image](/img/pages/exports/requestbin_inspect.png)

1. Paste this into the URL field of your Branch webhook's configuration screen:

    ![image](/img/pages/exports/ua-webhooks/requestbin.png)

1. Now whenever your webhook is triggered, you will see a full report on RequestBin:

	![image](/img/pages/exports/requestbin_response.png)

    !!! caution
        Please archive your Requestbin webhook when you have finished testing. Requestbins only last for 24 hours and return errors once they expire.


## Unified Analytics Data Format

One of the major advantages of Unified Analytics is that metadata is consistently located across all events. We call this schema the [Event Ontology Data Schema](/pages/exports/event_ontology_data_schema/). This consistent schema makes it easy to replicate Branch dashboards in your internal warehouse and compare large sets of data for different events.

Setting up Advanced Filters or Freemarker macros requires an understanding of the Event Ontology data format. Before diving into the schema, you should understand some high level concepts about event metadata structure:

- Each event has top level fields, such as "name" and "id" that are not nested
- Link data is generally nested in "Last Attributed Touch Data"
- User data (including device and OS data) is nested in "User Data"
- Product or content level data is nested in "Content Items"
- Transaction and generic content data is nested in "Event Data"
- Journeys or Deepviews view data (e.g. Journey banners loads, not clicks) is "Last CTA View Data"
- Client-specified custom data (e.g. internal fields your company requires on specific events) is nested in "Custom Data"

You can find an [overview of critical fields](/pages/exports/event_ontology_data_schema/#fields-included) in that documentation, as well as an [exhaustive list of fields](/pages/exports/event_ontology_data_schema/#full-list-of-fields).

### Sample webhook POST body syntax

The POST body for all webhooks follows the same structure:


```javascript
POST
User-agent: Branch Metrics API
Content-Type: application/json
{
    "name": "<event name e.g. open>",
    "user_data": {},
    "last_cta_view_data": {},
    "last_attributed_touch_data": {},
    "custom_data": {},
    "event_data": {},
    "content_items": {},
    "timestamp": 'example timestamp (int)'
}
```

If any of these objects are empty, they will not appear in the POST body.

Here's a POST body with example data for an attributed open:

```javascript

// Attributed open
POST
User-agent: Branch Metrics API
Content-Type: application/json

{
  "name": "open",
  "user_data": {
    "os": "IOS",
    "os_version": "11.1.2",
    "environment": "FULL_APP",
    "platform": "IOS_APP",
    "idfa": "F520B35A-4165-4426-98F6-64F12F47E9BZ",
    "idfv": "C6B869E7-7B0A-4A93-1C3D-960E8859DP5D",
    "limit_ad_tracking": false,
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_1_2 like Mac OS X) AppleWebKit/604.3.5 (KHTML, like Gecko) Mobile/15B202",
    "ip": "50.200.105.218",
    "developer_identity": "DB8C86A6-8B7C-4192-BD29-8107A5B788A1",
    "country": "US",
    "language": "EN",
    "brand": "Apple"
  },
  "last_cta_view_data": {
    "~id": 457624031399716729,
    "~campaign": "_test",
    "~feature": "journeys",
    "+domain": "branchster.app.link",
    "+url": "https://branchster.app.link/jeMczRn5XH",
    "$deeplink_path": "open/item/1234",
    "~creation_source": 5,
    "+referrer": "https://store.com/products/green-table",
    "foo": "bar",
    "$canonical_url": "https://store.com/products/green-table",
    "mydata": "set_branch_view_data_value",
    "~tags": [
      "tag1",
      "tag2",
      "bottom_banner_style"
    ]
  },
  "last_attributed_touch_data": {
    "~id": 467391383381228204,
    "~feature": "marketing",
    "~campaign": "december_test",
    "~channel": "Facebook Organic",
    "product_id": "XBA8198j",
    "product_name": "Green Table AB10",
    "+url": "https://branchster.app.link/test_linking",
    "$marketing_title": "Deep Link Testing",
    "$ios_deepview": "branch_default",
    "+via_features": [
      "QUICK_LINKS"
    ]
  },
  "custom_data": {
    "reinstall": "false",
    "ip": "50.200.105.218",
    "referred": "false"
  },
  "timestamp": 1512681005807
}
```

### Advanced Filtering

In [Basic Filtering](#basic-filtering) we covered what filters do, and how to set basic filters. Branch supports more advanced filtering which allows customers to set filters based on almost any event metadata.

Make sure you've taken a look at the [Unified Analytics data format](#unified-analytics-data-format) before you attempt to set advanced filters.

To create a filter:

1. Click the **Add Filter** button
1. Select the metadata you'd like to filter on. For advanced filtering, choose "Custom"
1. Type in the key that you'd like to filter on. To find the key you'd like to filter on, check out our quick introduction to [Unified Analytics data format and the Event Ontology schema](#unified-analytics-data-format) to figure out where your key is likely nested. Another foolproof way to find your key is looking at your data in full before setting up your filter. You can do this by doing a [CSV export](https://dashboard.branch.io/data-import-export/csv-exports), [API export](/pages/exports/api-v3/) or send a single webhook with a POST body, and locate your key in that POST body.
1. Unless your key is part of the top level data (e.g. **timestamp** or **id**), it will likely be nested one level deep. Most keys will be of the format **object_name.key**. For example, if you want to filter for a custom key in deep link data called "product_deeplink_id", that would take the form **last_attributed_touch_data.product_deeplink_id**.

!!! note "Example: Filtering purchases for a specific coupon"
	Let’s say you’re interested in receiving a webhook for every **Purchase** event using a specific coupon. When you set up the Purchase event in your app or on your website, you [added a specific piece of metadata for "coupon"](/pages/apps/v2event/#track-commerce-events). In the [Event Ontology Schema](/pages/exports/event_ontology_data_schema/#full-list-of-fields) you saw that "coupon" is inside "event_data". To configure your filter to fire a webhook only when **coupon** is equal to **SUMMERDEALS10** you will:

    1. Select "Custom" from the filter key dropdown
    1. Make the key **event_data.coupon**
    1. Select "equals" on the equivalency dropdown
    1. Enter a value of **SUMMERDEALS10**

	![image](/img/pages/exports/ua-webhooks/coupon-filter-purchase.png)

!!! caution "Array filtering not yet available"
	Currently, webhooks do not support filtering on values inside arrays. Example arrays that cannot be filtered are **tags**, **+via_features** and **content_items**

	![image](/img/pages/exports/click-filter.png)

!!! note "Example: Filtering custom signup event by location"
	Let’s say you’re interested in receiving a webhook for every **sign_up** event that is triggered via the **userCompletedAction** method in the SDKs, but only in a specific market, like Chicago. Your event metadata will look something like the following:

	```javascript
	event: {
    	name: "sign_up",
    	metadata: {
        	"city" : "Chicago",
        	"username" : "john_smith_1",
    	}
	}
	```

	You would configure a filter to fire a webhook only when **city** is equal to **Chicago**. The key would equal **event.metadata.city** and the value would equal **Chicago**.

	![image](/img/pages/exports/filters.png)

### Templating your Postback URL

If you plan on sending click or install data to a third party, you’ll likely need to create one of our templated Postback URLs along side the aforementioned filters. These work very similarly to filters and use the same liquid tags structure: `{{ param.name }}`. Once the webhook is eligible, the correct value will be filled in to the slot.

!!! note "Example: Creating a dynamic conversion postback for an ad agency"
    Let’s say you have created a Branch link in the Ads tab specifically for SEM campaigns and you’re going to give the link to an advertising agency. This ad agency wants to receive install conversion events from Branch by tracking your Branch link with specific query parameters. Your Branch link might potentially look something like this: `http://branch.app.link/my-sf-campaign?clickId=12345`.

    Now, you want to report conversions back to the agency or your backend, and you know the structure of the desired Postback URL. For example, lets say you want to send a Postback to `http://myagency.com/tracking?event=install&clickId=12345&idfa=`.

    With that information, it’s very easy to setup the correct, dynamic Postback URL using our templates. In this case, you need 3 fields to be dynamically populated:

    - event name
    - clickId
    - IDFA value

    Branch can easily populate those fields dynamically (and potentially add a lot more as described in the next section) using the following template keys:

    - `{{ event.name }}`
    - `{{ session.link_click.query.clickId }}`
    - `{{ device.hardware_id }}`

    You can create your dynamic Postback URL by using those above tags in place of where the value should go. So, in keeping with the example, the dynamic Postback URL to give to Branch would be and should be pasted into the webhook creation URL field:

    - `http://myagency.com/tracking?event={{ event.name }}&clickId={{ session.link_click.query.clickId }}&idfa={{ device.hardware_id }}`

    ![image](/img/pages/exports/templates.png)

    Additionally, since you don’t want to send them _every_ install event, let’s add a [filter](#filtering-which-webhooks-are-sent) to only send the installs that are referred by links which have a **clickId** in the query parameter. In this case, we use a wildcard parameter (`*`) for the key **session.link_click.query.clickId**, which tells Branch to only trigger this webhook when an **install** event was referred by a link with a **clickId**.

    ![image](/img/pages/exports/template-filters.png)

    And with that, we’re finished creating our postback!

    ![image](/img/pages/exports/template-finished.png)

### Keys available for templating/filtering **Click** webhooks

When a Branch link is opened, triggering a **click** event, you may access:

- Properties of the visitor who opened the link.
- Properties of the link that was opened.

| Key | Description
| --- | ---
| **click.query.key** | Any key that was appended to the link when opened. To retrieve **value1** from **https://[branchsubdomain]/test?param1=value1**, you would use **click.query.param1**
| **click.browser.branch_id** | The Branch ID we have for a user's unique broswer
| **click.browser.metadata.userAgent** | The user agent of the browser
| **click.device.hardware_id** | For iOS, this is the Advertising ID. For Android, this is the Android ID
| **click.device.metadata.google_advertising_id** | Android only. The Google Advertising ID, if known
| **click.device.metadata.os** | The OS of the device
| **click.device.metadata.os_version** | The OS version
| **click.date** | Time of link click

!!! note ""
    **click.device** will only be available for Universal/App Links without a browser redirect. Similarly, **click.browser** will only be available for non-Universal/App Links. Handle this appropriately in your code.

| Key | Description
| --- | ---
| **click.link_data.~id** | ID of the link (0 for dynamic and 3P links)
| **click.link_data.~creation_source** | How the link was created, e.g. iOS SDK, API, etc.
| **click.link_data.~tags** | Tags of the link
| **click.link_data.~campaign** | Campaign of the link
| **click.link_data.~channel** | Channel of the link
| **click.link_data.~feature** | Feature of the link
| **click.link_data.~stage** | Stage of the link
| **click.link_data.$one_time_use** | Whether this was a one time use link of not
| **click.link_data.$one_time_use_used** | Whether this one time use link was used or not
| **click.link_data.$identity_id** | Branch internal identity of user who generated the link
| **click.link_data.$match_duration** | Length of time (in milliseconds) that a match could have occured
| **click.link_data.+url** | The full URL of the link, e.g. [branchsubdomain]/m/abcde12345
| **click.link_data.key** | Any key value you specified in the link’s data dictionary
| **click.referring_identity.id** | ID you set for the user who created this link

### Keys available for templating/filtering **Event** webhooks

When a user triggers an event inside your app, either one [created by you](https://dev.branch.io/cross-channel-analytics/user-value-attribution/) or one tracked by Branch automatically (**install**, **open**, **referred session**, and **web session start**), you may access:

- Properties of the event.
- Identity properties of the user who triggered the event.
- Session properties of the user who triggered the event.

!!! Note "Identity vs. Session"
    **Identity properties** are _set once_, the very first time Branch sees a user. Once set for each user, these are never changed. **Session properties** are the data of the _most recent_ record Branch has for a user.

    For an initial **install** event, identity and session properties will be the same. For **open** events, session properties will be different if the user has subsequently opened another Branch link.

Event Data

| Key | Description
| --- | ---
| **event.name** | The name of the event (e.g., **install** or **my_custom_event**)
| **event.metadata.referred** | Equals **true** if user installed app after opening a Branch link
| **event.metadata.ip** | The IP address of the user
| **event.metadata.key** | Data defined as **key** when creating a custom event
| **event.date** | Timestamp of when the event occurred

Device Data

- Device data provides access to the device snapshot. Branch collects this snapshot both when a user is in the browser (via a click on a Branch link) and then after the user opens the app.

| Key | Description
| --- | ---
| **device.metadata.os** | The OS of the device
| **device.metadata.os_version** | The OS version of the device
| **device.metadata.ip** | The IP address of the device
| **device.metadata.model** | The model of the device

Identity Data

- Identity data is unique for each user Branch tracks. These values are permanently tied to that user, meaning if a link with a campaign of 'google' drives an install, then that user will have a permanent **identity.link_data.~campaign** value equal to 'google'.

!!! note ""
    Except for identity.id, these will not be populated if the user installed your app without opening a Branch link first.

| Key | Description
| --- | ---
| **identity.link_data.~id** | ID of the link (0 for dynamic and 3P links)
| **identity.link_data.~creation_source** | How the link was created, e.g. iOS SDK, API, etc.
| **identity.link_data.~tags** | Tags of the link
| **identity.link_data.~campaign** | Campaign of the link
| **identity.link_data.~channel** | Channel of the link
| **identity.link_data.~feature** | Feature of the link
| **identity.link_data.~stage** | Stage of the link
| **identity.link_data.$one_time_use** | Whether this was a one time use link of not
| **identity.link_data.$one_time_use_used** | Whether this one time use link was used or not
| **identity.link_data.$identity_id** | Branch internal identity of user who generated the link
| **identity.link_data.$match_duration** | Length of time (in milliseconds) that a match could have occured
| **identity.link_data.+url** | The full URL of the link, e.g. [branchsubdomain]/m/abcde12345
| **identity.link_data.key** | Any key value you specified in the link’s data dictionary

Session Data

- Session data refers to the _most recent_ record Branch has for each user, regardless of whether it reflects an **install** or an **open** event. These will not be populated if the session was not initiated by opening a Branch link.

| Key | Description
| --- | ---
| **session.link_click.query.key** | Any key that was appended to the link when opened. To retrieve **value1** from **https://[branchsubdomain]/test?param1=value1**, you would use **session.click.query.param1**.

| Key | Description
| --- | ---
| **session.link_data.~id** | ID of the link (0 for dynamic and 3P links)
| **session.link_data.~creation_source** | How the link was created, e.g. iOS SDK, API, etc.
| **session.link_data.~tags** | Tags of the link
| **session.link_data.~campaign** | Campaign of the link
| **session.link_data.~channel** | Channel of the link
| **session.link_data.~feature** | Feature of the link
| **session.link_data.~stage** | Stage of the link
| **session.link_data.$one_time_use** | Whether this was a one time use link of not
| **session.link_data.$one_time_use_used** | Whether this one time use link was used or not
| **session.link_data.$identity_id** | Branch internal identity of user who generated the link
| **session.link_data.$match_duration** | Length of time (in milliseconds) that a match could have occured
| **session.link_data.+url** | The full URL of the link, e.g. [branchsubdomain]/m/abcde12345
| **session.link_data.key** | Any key value you specified in the link’s data dictionary

### Authenticating webhook events

If you need to whitelist the webhook server IP addresses for security purposes, they are listed below.

- 52.9.159.121/32
- 52.9.176.205/32

Reserved for future use:

- 52.9.188.221/32
- 52.9.188.236/32

You can also create events through the Branch SDK, and specify a secret key inside the event metadata to pass into the URL of the webhook itself.

## Support

### FAQs

##### Why is my app not sending a device ID?

Check to see if you are in [Test Mode](https://dev.branch.io/getting-started/integration-testing/) with your SDK. If we are sending a fake ID to simulate installs, we will not send it inside a webhook.

##### What is the difference between first referring data and session referring data?

Because webhooks are event based, and tie back to a unique user, we send you data from the link that first drove this unique user into your app. Then, if they click another Branch link later, we also send you session referring data from this second link. For an initial install event, these should be the same. For any subsequent events, session referring data may be different.
