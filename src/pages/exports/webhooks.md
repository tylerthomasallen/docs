
## Overview

Branch’s webhook system allows you to receive install and down funnel event data from us as it occurs, for install attribution or conversion funnels in your own database. You simply need to specify a URL for us to send all this data to.

The webhook system is very powerful and customizable. You can register to only receive notifications for specific events, or you can register a wildcard and receive all events. You can specify to only receive an event for the first time a user completes it, or every time. You can also specify receive events only in the case of referrals.

## Setup

### Register webhook

1. Open the [Webhooks](https://dashboard.branch.io/data-import-export/webhooks) page on the Branch dashboard.
1. Click **Add A New Webhook**.

![image](/img/pages/exports/add.png)

### Configure webhook criteria

![image](/img/pages/exports/edit.png)

Here are explanations of what each field on this screen controls:

- **Webhook URL:** Enter the URL where you would like the events to be sent.
- **Postback Method:** Events can be sent either via POST or GET.
- **Event Frequency:** You can choose to receive a webhook for ever single event occurence, or only for the first time that even is triggered for each unique user.
- **Event Trigger:** You may select between the following default events:

| Event | Description
| --- | ---
| **install** | Triggered the first time a user launches your app
| **open** | Triggered whenever the app becomes active
| **referred session** | Triggered in _addition_ to install, open or web session start if a user comes from a Branch link
| **web session start** | Triggered when the user views a webpage using the Branch Web SDK
| **click** | Triggered whenever a Branch link is clicked on any platform
| **-- other --** | Enter an event you [created through the Branch SDK](https://dev.branch.io/cross-channel-analytics/user-value-attribution/), or a wildcard (*****) to return ever single event tracked through Branch.

!!! tip
	The **referred session** and **web session start** options will only appear after at least one event of that type has been recorded.

- **Filter (Advanced):** See the [Advanced](https://dev.branch.io/data-exchange/webhooks/advanced/) page to read about customizing when events are sent.

### Testing

To test whether your webhook is configured correctly, you can use [requestb.in](https://requestb.in/). RequestBin gives you a URL that accepts events and allows you to see exactly what Branch is sending.

1. Go to [requestb.in](https://requestb.in/) and click **+ Create a RequestBin**:

	![image](/img/pages/exports/requestbin_create.png)

1. Copy the **Bin URL:**

	![image](/img/pages/exports/requestbin_inspect.png)

1. Paste this into the URL field of your Branch webhook's configuration screen:

	![image](/img/pages/exports/requestbin_add_webhook.png)

1. Now whenever your webhook is triggered, you will see a full report on RequestBin:

	![image](/img/pages/exports/requestbin_response.png)

## Advanced

### Sample webhook POST body syntax

There are two types of events that you can listen for, and each has a different format of webhook POST. The two are:

- **Click** webhooks: Clicks are the way users interact with your Branch links. Please note that a click does not always have to take place in a browser. For example, clicking a Universal Link will open up the app directly, and therefore no browser metadata information will be present.
- **Event** webhooks: Events are user events that either Branch generates or you generate via a call to our event tracking API. Examples are shown on the previous page of this guide.

### Sample POST body for **Click** webhooks

```
POST
User-agent: Branch Metrics API
Content-Type: application/json
{
    click_id: <a unique identififer>,
    event: 'click',
    event_timestamp: '<link click timestamp>',
    os: 'iOS' | 'Android',
    os_version: 'the OS version',
    metadata: {
        ip: '<click IP>',
        userAgent: '<click UA>',
        browser: '<browser>',
        browser_version: '<browser version>',
        brand: '<phone brand>',
        model: '<phone model>',
        os: '<browser OS>',
        os_version: '<OS version>'
    },
    query: { <any query parameters appeneded to the link> },
    link_data: { <link data dictionary - see below> }
}

// link data dictionary example
{
    branch_id: '<unique identifier for unique link>',
    date_ms: '<link creation date with millisecond>',
    date_sec: '<link creation date with second>',
    date: '<link creation date>',
    domain: '<domain label>',
    data: {
        +url: <the Branch link>,
        ... <other deep link data>
    },
    campaign: '<campaign label>',
    feature: '<feature label>',
    channel: '<channel label>'
    tags: [<tags array>],
    stage: '<stage label>',
}
```

### Sample POST body for all **Event** (install, open, custom...) webhooks

```
POST
User-agent: Branch Metrics API
Content-Type: application/json
{
    event: '<event name>'
    event_timestamp: '<time stamp for the event>'
    os: 'iOS' | 'Android',
    os_version: '<the OS version>',
    metadata: {
        '< ... event metadata  - specified in userCompletedAction withState >'
        ip: '<IP of the user>',
        referred: 'true' | 'false', // if event is install / open / web session start
        reinstall: 'true' | 'false', if event is install / open
    },
    hardware_id: 'IDFA' (iOS) | 'Android ID' (Android),
    google_advertising_id: 'GAID' (Android if present),


    // optionally included:
    identity: '<user ID>', // specified in setIdentity

    // the referrer who created the new user
    first_referring_click_timestamp: '<the first click timestamp>',
    first_referring_click_query: { <any query parameters appeneded to the link> },
    first_referring_identity: '<user ID who created the referring link>' - specified in setIdentity
    first_referring_hardware_id: '<hardware identifier who created the referring link'
    first_referring_link_data: { <link data dictionary - see below> }

    // the referrer who referred this session
    session_referring_click_timestamp: '<the session click timestamp>',
    session_referring_click_query: { <any query parameters appeneded to the link> },
    session_referring_identity: '<user ID who created the referring link>'
    session_referring_hardware_id: '<hardware identifier who created the referring link'
    session_referring_link_data: { <link data dictionary - see below> }
}

// link data dictionary example
{
    branch_id: 'unique identifier for unique link',
    date_ms: 'link creation date with millisecond',
    date_sec: 'link creation date with second',
    date: 'link creation date',
    domain: 'domain label',
    data: {
        +url: <the Branch link>,
        ... <other deep link data>
    },
    campaign: 'campaign label',
    feature: 'feature label',
    channel: 'channel label'
    tags: [tags array],
    stage: 'stage label',
}
```

### Filtering which webhooks are sent

Filters allow you to specify when a webhook gets sent to your URL based off criteria matches. You can configure your filters to use any webhook keyword value by using liquid tags following this convention: `{{ param.name }}`.

!!! tip "Wildcard Filtering"
	If you want to filter on just a key being present, you can put a `*` in the value box.

!!! note "Example: Filtering installs by referring link campaign"
	Let’s say you’re interested in receiving a webhook for every **install** event that is referred from a Branch link where you set the **Campaign** field to **App Install Campaign**. You would configure a filter to fire a webhook only when **~campaign** is equal to **App Install Campaign**. The key would equal **session.link_data.~campaign** and the value would equal **App Install Campaign**.

	![image](/img/pages/exports/session-filter.png)












