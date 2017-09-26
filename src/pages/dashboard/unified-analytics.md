# Unified analytics

## Overview

Branch has introduced a brand new way of counting analytics. The simplest way to describe the change is by saying that deep linking is no longer tied together with attribution, meaning that you will see different numbers on your Branch dashboard. Everything from unique counts to clicks and attributions are modified.

While we were at it, we decided to unify our events. Now, anytime you analyze data in the Branch dashboard, or export it out, you will receive consistent column names. The definitions for each column is found in the [data mapping](#data-mapping) section.

This document also covers every section where you can expect a difference when interacting with your data on the Branch dashboard, or exporting.

!!! protip "No changes required"
    We've changed the entire back-end of analytics without requiring any code or implementation changes on your end.

## Data Mapping

Previously, when you integrated the Branch SDK, and started clicking links, we automatically tracked clicks, installs, opens, and web session starts and pageviews (if you installed the web SDK). Ultimately, if you enabled Deepviews or Journeys, we counted clicks when a click didn't actually occur, such as when a Deepview displayed, a Journey automatically opened the app without any physical click. This caused confusion on our dashboard, as people would notice clicks occurring without anyone ever clicking a link! Fortunately, we've cleaned up our pre-defined events, and have introduced a new way to think of events.  

We now have classifications of events. Think of when you track when a user adds payment info, and initiates a purchase, and finally completes a purchase: those are all *commerce* events. The full mapping of events is below. What this means is that

impression
click
Branch CTA view
web to app auto redirect
SMS sent
install
open
reinstall
pageview
web session start
commerce event
content event
user lifecycle event
custom event


## What's changed?

### Deep Linking

The biggest change is the analytics associated with deep linking. Previously, when a user clicked your Branch links, and installed within a two hour window, they were deep linked *and* attributed. This means that their first time experience included your deep linked data, and we counted an install. If they installed four hours after clicking instead of two, they would not receive deep link data, and we would *not* attribute this user's install.

Now, we've separated this concept. Deep linking windows remain two hours, but attribution windows are adjustable. Going with the previous example, if someone clicks your link, and installs the app after 4 hours, they will *not* receive deep link data, but will be counted as an install.

Note: no code changes are needed, and if you want to expand the deep linking window, you can do so. Read the [attribution window](#attribution-windows) section for more information.

### Attribution Windows

Now that deep linking and attribution analytics are separate, we have attribution windows for analytics. As a reminder, an attribution window simply defines the window of time for  when an eligible attribution or deep link can occur. In order to make changes, navigate to the [link settings](https://dashboard.branch.io/link-settings) page, and scroll down to "Attribution Window".

![image](/img/pages/dashboard/unified-analytics/attribution-windows.png)

- `Deep Linking Duration` refers to the duration of time someone is eligible to receive deep link data. This includes anyone clicking a Branch link, or being automatically redirected to the app through a Branch Web SDK call. Measured in minutes.

- `Click to x` refers to events that occur after someone clicks a Branch link. If someone clicks and installs from a link, and comes back 10 days later to purchase, we would count that as a conversion, and it would surface in our dashboard.

- `Impression to x` refers to events that occur after someone views a Branch impression link.

Using the default value of 2 hours for deep linking and attribution under the old system, and 2 hours for deep linking with 7 days for install attribution, here's what you can expect.

<!--
Behavior | Old Analytics | New Analytics
| --- | --- | --- |
| User clicks link in
-->

### Unique behavior

We now default every visualization in the dashboard to be unique. This means that if you are testing Branch links, and click a link 5 times, we will display that as one click. If you'd like to see *all* clicks, export our data. This applies to all events, as well.

### Cutoff date

We have a cut off date -- September 16th -- which represents the data where you can't mix and match data. As we've introduced this new analytics platform, we've kept systems running in parallel. However, there is the above date which represents dates where you can't mix old data with new. You can query data from any time before September 16th up until September 16th. You can query data from September 16th onwards. If you wanted to do, say, September 15th to September 17th, you would need two separate queries.

## Changes to the Branch Dashboard

### Branch Summary Analytics

This section covers the changes found on the main page of the Branch [dashboard](https://dashboard.branch.io).  

#### Install Summary Section

This is the first chart found on the main page. This chart surfaces install counts for your app using the new analytics platform.

![image](/img/pages/dashboard/unified-analytics/installs-summary-old.png)

*old*

![image](/img/pages/dashboard/unified-analytics/installs-summary-old.png)

*new*

**Changes**

We've removed the pie chart from the old visualizations; this is simply removing a chart, not removing any data. This new install summary chart by default shows Branch only installs, that are powered by the new attribution [windows](#attribution-windows). If you want to see all installs, and not just Branch driven installs, simply click `Show All Installs`. You will likely notice a higher number of installs driven by Branch--this is because we have a bigger window to count an install.

Filtering is improved on this chart, as you can add additional query logic by clicking `Add Compare` and `Add Filter`. Previously, you could only filter by one dimension, and now you can filter with more dimensions, with more comparisons.

#### Click Flow Section

This section is visually the same, but different in terms of *how* clicks are tracked. First, we only track unique person clicks, so if you click the same link on your device 5 times, this chart will only reflect one click. Mobile deepview views or SMS sents do not count as clicks in this chart.

### Quick Link Analytics

Just like clow flow analytics, this section is visually the same, but clicks are tracked differently. These clicks are tracked by unique counts, and follow the model where only a click is counted when someone physically taps a link. Mobile deepview views or SMS sents do not count as clicks in this chart.

### Source Analytics

Visually, you will see the query selector that is present on Install Summary. This is the same component, and it will let you drill down and add filtering logic across all events, not just installs. This data is unique as well, and can be exported.

### Journeys

Journeys data will line up to what's viewed on Source Analytics.

### Universal Ads

Universal Ads were introduced using the new Analytics platform, so there is no expected change.

## Changes to exported data

### Liveview

Liveview hasn't changed much, but we've introduced an improved CSV export that reflects these new data models.

### Data Integrations

Data Integrations now mirrors the UI of our ads flow. The data we send is also utilizing the new mechanism of attribution, meaning we will send data within a proper attribution window instead of the same session. This means more of your attributed data will make it across automatically.

### Webhooks

Webhooks, like data integratons, is no longer session based. This means we will send more webhooks to you automatically. This update hasn't completed yet.
