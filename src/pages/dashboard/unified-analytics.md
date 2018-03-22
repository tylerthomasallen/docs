# People-Based Attribution

## Overview

Branch is introducing a new and improved analytics platform for you to preview.

While the most visible impact of this change is our new and visually improved Summary Graph, it is important to understand that we have fundamentally changed the underlying model we use for counting events. This is the result of consistent feedback from Branch partners who have requested we provide deeper insights and clarity around campaigns powered by Branch links. As you want to understand the events associated with clicks on Branch links beyond the course of one user session and across all types of Branch links, we developed a new attribution engine to accurately attribute user events across interaction platforms and across channels.

The biggest change is that we decoupled deep linking and attribution. Now you can measure the impact of events that are not directly associated with the user session in which the click occurred and this means you will now see different numbers on your Branch dashboard.

In some cases, a user may click a link and only open the app several hours or days later. With this new analytics platform, we are still able to attribute both the open and any subsequent events, even though we did not deep link the user.
Also and from now on, anytime you analyze data in the Branch dashboard, or export it out, you will see consistency in naming across all our reports and products, for all events.

This document highlights each of the section where you can expect to see differences between our old analytics and new People-Based Attribution.

!!! protip "No changes required"
    We've changed the entire back-end of analytics without requiring any code or implementation changes on your end.

## Data Mapping

From now, Branch provides you a well defined standard to keep track of and categorize events.

This is different than previous behavior from when you integrated the Branch SDK. Once you created and clicked links, we automatically tracked clicks, installs, opens, and web session starts and pageviews (if you installed the web SDK). If you enabled Deepviews or Journeys, we counted clicks when a click didn't actually occur, such as when a Deepview displayed, a Journey automatically opened the app without any physical click. This caused confusion on our dashboard, as users would noticed clicks occurring without anyone ever clicking a link! Fortunately, thanks to a well-defined standard and categorization of events, this will no longer be the case.

Below is the new classification of events. Think of when you track when a user adds payment info, and initiates a purchase, and finally completes a purchase: those are all *commerce* events. Similarly, we now have *content* events and *user lifecycle* events.

- impression
- click
- Branch CTA view
- web to app auto redirect
- SMS sent
- install
- open
- reinstall
- pageview
- web session start
- commerce event
- content event
- user lifecycle event
- custom event

## What's changed?

### Deep Linking

The biggest change is the analytics associated with deep linking. Previously, when a user clicked your Branch links, and installed within a two hour window, they were deep linked *and* attributed. This means that their first time experience included your deep linked data, and we counted an install. If they installed four hours after clicking instead of two, they would not receive deep link data, and we would *not* attribute this user's install.

Now, we've separated this concept. Deep linking windows remain two hours, but attribution windows are adjustable. Going with the previous example, if someone clicks your link, and installs the app after 4 hours, they will *not* receive deep link data, but will be counted as an install.

Note: no code changes are needed, and if you want to change the deep linking window, you can do so. Read the [attribution window](#attribution-windows) section for more information.

### Attribution Windows

Now that deep linking and attribution analytics are separate, we have attribution windows for analytics. As a reminder, an attribution window simply defines the window of time for  when an eligible attribution or deep link can occur. In order to make changes, navigate to the [link settings](https://dashboard.branch.io/link-settings) page, and scroll down to "Attribution Window".

![image](/img/pages/dashboard/people-based-attribution/attribution-windows.png)

- `Deep Linking Duration` refers to the duration of time someone is eligible to receive deep link data. This includes anyone clicking a Branch link, or being automatically redirected to the app through a Branch Web SDK call. Measured in minutes.

- `Click to x` refers to events that occur after someone clicks a Branch link. If someone clicks and installs from a link, and comes back 10 days later to purchase, we would count that as a conversion, and it would surface in our dashboard. Measured in days.

- `Impression to x` refers to events that occur after someone views a Branch impression link. Measured in days.

Using the default value of 2 hours for deep linking and attribution under the old system, and 2 hours for deep linking with 7 days for install attribution, here's what you can expect.

<!--
Behavior | Old Analytics | new People-Based Attribution
| --- | --- | --- |
| User clicks link in
-->

### Unique behavior

We now default every visualization in the dashboard to be unique. This means that if you are testing Branch links, and click a link 5 times, we will display that as one click. This applies to events as well. This applies to all events, as well.

Select visualizations also allow you to see total (i.e. non-unique) numbers as well. If you'd like to see total numbers on a visualization that does not support it, you can also export raw data.

### Cutoff date

As far as the deployment of People-Based Attribution, we created our cut off date on October 14th 2017 and we kept the old and new analytical systems running in parallel since then and will continue to do this for a short while. This mean you can query data from any time before October 14th up until October 14th with old analytics. You can query data from October 14th onwards with both analytics. But if you wanted to do reports across this line, say, October 13th to October 15th, you would need two separate queries.

#### Differences From Cutoff Date

If you are tracking Purchase events, and want to see unique values for Purchases before the cut off date of October 14th 2017, those values will display as 0. This is because the Purchase event hasn't stored unique counts before October 14th. However, we are now storing this information since then.

## Changes to the Branch Dashboard

### Branch Summary Analytics

This section covers the changes found on the main page of the Branch [dashboard](https://dashboard.branch.io).  

#### Install Summary Section

This is the first chart found on the main page. This chart surfaces install counts for your app using the new People-Based Analytics.

![image](/img/pages/dashboard/people-based-attribution/installs-summary-old.png)

*old*

![image](/img/pages/dashboard/people-based-attribution/installs-summary-new.png)

*new*

**Changes**

We've removed the pie chart from the old visualizations; this is simply removing a chart, not removing any data. You can see the same breakdowns by campaign, channel, etc on the new install summary chart, making the pie chart redundant. (See also this article on why [pie charts](http://www.businessinsider.com/pie-charts-are-the-worst-2013-6) are misleading.)

This new install summary chart by default shows Branch only installs, that are powered by the new attribution [windows](#attribution-windows). If you want to see all installs, and not just Branch driven installs, simply click `Show All Installs`. You will likely notice a higher number of installs driven by Branch--this is because we have a bigger window to count an install.

Filtering is improved on this chart, as you can add additional query logic by clicking `Add Compare` and `Add Filter`. Previously, you could only filter by one dimension, and now you can filter with more dimensions, with more comparisons.

#### Click Flow Section

This section is visually the same, but different in terms of *how* clicks are tracked. First, we only track unique person clicks, so if you click the same link on your device 5 times, this chart will only reflect one click. Mobile deepview views or SMS sents do not count as clicks in this chart.

### Quick Link Analytics

Just like click flow analytics, this section is visually the same, but clicks are tracked differently. These clicks are tracked by unique counts, and follow the model where only a click is counted when someone physically taps a link. Mobile deepview views or SMS sents do not count as clicks in this chart. The data can be exported.

### Source Analytics

Visually, you will see the query selector that is present on Install Summary. This is the same component, and it will let you drill down and add filtering logic across all events, not just installs. This data is unique as well, and can be exported.

### Journeys

Journeys data has also changed substantially. Previously, Journeys only included paid Journeys. Now it includes all of our Web SDK's web-to-app offerings. So it also includes analytics from the .banner() and .deepview() functions.

### Universal Ads

Universal Ads were introduced using the new People-Based Analytics platform, so there is no expected change. The data is unique as well, and can be exported.

### Sharing reports

On Summary, Sources, Journeys Analytics, Ads Analytics, and Email Analytics, when you navigate away and come back later, the dashboard will retain the date ranges and filters you last used. You can reset these filters to dashboard defaults by either clearing them one by one, or by pressing the reset button at the top of the page:

![image](/img/pages/dashboard/people-based-attribution/share-reset.png)

You can also share your analytics view with a teammate. Simply click the share button at the top of the page, copy the Branch link, and send it to your team:

![image](/img/pages/dashboard/people-based-attribution/share-link.png)

!!! tip "Sharing reports FAQ"
    **Will my last used analytics filters persist across apps?**
    No. If you belong to multiple apps, your filters for a certain page will only be retained for you on that app.
    
    **Do shared analytics links work across apps?**
    Yes they do! A shared analytics link will apply filters to whichever app you are currently viewing in the dashboard.

## Changes to exported data

### Liveview

Liveview hasn't changed much, but we've introduced an improved CSV export that reflects these new data models.

### Data Integrations

Data Integrations now mirrors the UI of our ads flow. The data we send is also utilizing the new mechanism of attribution, meaning we will send data within a proper attribution window instead of the same session. This means more of your attributed data will make it across automatically.

### Webhooks

Webhooks, like data integratons, is no longer session based. This means we will send more webhooks to you automatically. This update hasn't completed yet.

## Changes to Install, Re-installs, and Opens

Prior to the rollout of People-Based Attribution, Branch classified “re-installs” as opens. With People-Based Attribution, we now split out re-installs from opens. As a result, we can show you installs vs reinstalls vs opens.

Our SDK uses an identifier, which we persist between app opens, to know whether the app was previously installed. This identifier is for internal use only. When an app is first installed, this identifier is not yet stored on the device. Then our SDK makes a request to our install endpoint. On our backend, Branch determines whether this is an install, a reinstall, or in some cases, an open. Then it returns this identifier. The SDK persists this identifier, and all future requests will be made to our servers with it present.

Overall, how does Branch determine whether an app open is an install, reinstall, or open?

When Branch first launched, every partner who integrated the Branch SDK saw Branch measure an artificially high number of installs. As an example, if a user had an app installed on their phone before without the Branch SDK, and then upgraded to a version of the app that had the Branch SDK, Branch would count this upgrade as an install, even though the user had the app previously. Branch attempted to solve for this use case.

Branch introduced a field to the SDK, called “update”, which used complex, OS-specific logic. The SDK indicated, based on either OS-provided methods or traces left by the file system, whether this particular install or open was actually just an update. In other words, the app was already installed, but the user just updated what version of the app they had. If the SDK indicated that for this particular app session, the app was updated, we would not count an install, but rather an open.

Now, how does Branch translate this update, within the context of installs, opens, and reinstalls?

If we see the flag “update” sent by the SDK set to “fresh install” (this is set to an enum value of `0` in our SDK logs), then we know that the user was not updating the app. In this case, it’s either an install or a reinstall. Given this information, our backend must decide between install and reinstall. Our backend performs a lookup to our People Based Attribution database and finds whether this device, using the device identifier, ever had the app installed. If so, we count this as a re-install, instead of an install. If the app was never installed on this device, we track an install.

The device identifier is a unique Branch ID assigned to each persona in our database. This Branch ID will tie together a device ID, like an IDFA or GAID, and web cookies in order to attribute and deduplicate a users actions across the web and native app.

If we see the flag “update” sent by the SDK set to “just updated” (this is an enum value of `2` in our SDK logs), then we know that the user updated the app, as opposed to freshly installing. This event is not tracked as an install. This event is tracked as an open.

With the introduction and adoption of iOS 11, we uncovered an intermittent issue with install tracking. It appears that on newer versions of the OS, app installs have been inconsistently counted as opens rather than fresh installs. The logic causing this was intended to detect when apps had been installed on a device prior to the Branch SDK being integrated and to register opens instead of installs, as described above. However, as more devices have updated to newer versions of iOS, install discrepancies have increased and we believe this logic is the cause. In response, we have removed this logic.

The resultant impact for apps using Branch for over three months is that installs should increase to reflect correct numbers, starting January 5th. There should be no adverse impact. Partners who have newly integrated the Branch SDK will notice a large spike of installs when first releasing the SDK but no impact beyond that.

## FAQ

### Data Speed

This new People-Based Analytics platform introduces a slight delay compared to the old dashboard analytics, and it may now take a few minutes for events to appear. We're continually improving the speed and plan to significantly decrease the delay in Q1 2018.

### Unique Counts

One thing to be aware of is that unique counts may be within a 4% window of error across the dashboard. For example, if you have 100 total clicks, and 90 were truly unique, it's possible that the dashboard could report within 4% of that 90 number. If you want true uniques, you can export raw data and de-dupe across events.

One consequence of this is that if you compare by different dimensions and sum the results, the total may not add up. As an example, if you compare all attributed installs by campaign and by channel (careful: be sure to include where the install is attributed and campaign/channel is null), then the totals may not line up. They should be nearly identical, varying *at most* by 4%. 

### Differing Installs

As part of People-Based Attribution, your install numbers will likely not line up one to one. What this means is that if you see 200 Branch driven installs on the old Analytics Platform, it's ok to see 190 Branch driven installs (or even 210) on the same day. This is due to the way we have fundamentally changed the way we count attributions.

Some installs on the old analytics platform were actually "reinstalls", but were not counted as such, which would be one reason why installs are lower. Some campaigns will count higher installs, because they may be clicked on a variety of browsers and platforms, and Branch is able to connect those touch points to accurately count an install.

If the difference in numbers is still concerning, reach out to your Branch account manager, or send us a message at integrations@branch.io

### New Dashboard Accounts

Accounts created on or after December 15th, 2017 (UTC time zone) will run exclusively on the People-Based Attribution platform.

## Support

### Discrepancies

#### SDK Version

While different install numbers are to be expected, there may be some discrepancies not related to the new attribution platform counting methodologies. You may notice numbers are off if you are on version 0.12.4 or below on the iOS SDK. If that is the case, please upgrade to the latest version of the SDK, or at least 0.12.5. There is no cut off for Android.
