---
title: Facebook Ads FAQ and Advanced Options
description: An FAQ page of using Branch in your Facebook Ad campaigns.
path: tree/master/src/pages/deep-linked-ads
source: facebook-ads-faq.md
---

# Facebook Ads FAQ and Advanced Options

## FAQ

### What is Facebook MMP?

*"Work with a Facebook Marketing Partner to get deeper insights or measure across several ad networks" ([Facebook - "Measuring for App Ads"](https://developers.facebook.com/docs/app-ads/measuring){:target="\_blank"}).*

The acronym MMP is used to mean either the broad category of Facebook Mobile Marketing Partners, or more narrowly to mean Mobile Measurement Partners. The latter is a special subset of Facebook partners that have access to device-level attribution data. Branch has been vetted by Facebook and joined this group of partners in order to provide both granular analytics and true cross-channel reporting. We help you measure which installs, opens and conversion events should be attributed to Facebook ad campaigns versus other marketing efforts.

### How does Branch attribute events to Facebook ads?

Facebook is a self-attributing network. This means that Facebook claims credit for installs and other events. Branch then dedupes these claims against other ad networks, as well as traffic coming from email, your website, and other sources. This differs from some ad networks, which send a stream of impressions and clicks that Branch then matches to events.

The Branch SDK already helps you track installs and other events. When you enable the Facebook MMP integration, Branch sends events and advertising IDs to Facebook. Facebook then reports whether devices previously viewed or clicked a Facebook ad, including helpful information such as campaign, ad set, and ad. As stated above, Branch then dedupes these claims against other claims for attribution.

### How can I use deep links in Facebook ads?

Creating a deep link is easy! First, make sure you have [set up the integration with Facebook MMP](/pages/deep-linked-ads/facebook-app-install-ads/#enable-facebook-as-an-ad-partner) on the Branch Dashboard. Then navigate to the [Facebook page under Partner Management](https://dashboard.branch.io/ads/partner-management/a_facebook?tab=settings){:target="\_blank"} and click "Create Facebook Link".

Longer instructions can be found in the guides linked to from the [Facebook overview](/pages/deep-linked-ads/facebook-ads-overview/) page. For example, see [this section of the App Installs guide](/pages/deep-linked-ads/facebook-app-install-ads/#create-an-ad-link).

### How can I attribute conversion events to Facebook ads?

First, make sure you have [set up the integration with Facebook MMP](/pages/deep-linked-ads/facebook-app-install-ads/#enable-facebook-as-an-ad-partner) on the Branch Dashboard. Second, [set up tracking for Standard Events](/pages/apps/v2event/#v2-event). It's that simple! We will automatically attribute events to Facebook ads. 

There are advanced options for tracking events, which you can read more about [below](/pages/deep-linked-ads/facebook-ads-faq/#facebook-mmp-event-options).

### What is each piece of information needed during the onboarding process, and why?

| **Identifier** | **Why** |
| - | - |
| Ad account | Pulling marketing insights data (e.g. impressions, clicks) to present on the Branch Dashboard. |
| Facebook App ID | Sending installs, opens and other events to Facebook in order to see whether they were driven by a Facebook ad campaign. |

### What are the permissions you ask for as part of the onboarding process, and why?

| **Permissions (OAuth scopes)** | **Why** |
| - | - |
| ads_read | Pulling marketing insights data (e.g. impressions, clicks) to present on the Branch Dashboard. Also used for pulling creative name and id, etc., to provide richer analytics for installs, opens and other events. |
| business_management | (1) We pull in ad accounts for you to choose from. (2) At the end of the login process, we add our System User to your business and ad account with REPORTS_ONLY permissions. Then we deauthorize the access token that has all 3 of these permissions. In the future, we can easily quarantine/decommission the System User if we detect unusual or unauthorized activity. |

### What is the difference between your previous Facebook Ads product, and the new Facebook Ads product?

Branch is now a Facebook Mobile Measurement Partner (MMP). This means we are partnering with Facebook to more accurately attribute your installs, opens and custom events back to Facebook ad campaigns! 

The major differences: we can use this product with a Branch deep link. No need to manually create Branch links and add them to Facebook ads! 

If you use a Branch deep link, we will still return the Branch deep link information in app so that you can deep link your users to content. Attributed events will *not* have the Branch deep link information, but rather the Facebook ad campaign information. This info cannot be passed along to third parties via our Data Integrations.

## Facebook Ads Advanced Options

### Facebook MMP event options

!!! Note
	To see the options below on the Branch Dashboard, [click here](https://dashboard.branch.io/ads/partner-management/a_facebook?tab=events){:target="\_blank"}.

Branch + Facebook MMP allows you to attribute events back to your Facebook ad campaigns. Branch sends events to Facebook, along with metadata including advertising ID. Facebook then returns info on the ad that the user last viewed or clicked, if any. Branch then surfaces this on our Dashboard, and conditionally* makes this data available in our [Data Feeds](/pages/exports/data-feeds/) product.

Partners have several options when it comes to sending events to Facebook. These are discussed below.

 (*) You must have signed the [Data Use Terms for Advanced Mobile App Measurement](https://www.facebook.com/ads/manage/advanced_mobile_measurement/tos){:target="\_blank"}

#### Tracking installs

Branch sends all installs to Facebook. Facebook de-duplicates installs on their end. If you have the Facebook SDK and/or another MMP, these also send installs to Facebook's backend. This will not result in duplicate installs, since Facebook de-dupes them.

#### Tracking reinstalls and opens

!!! Warning
	Facebook does not de-duplicate custom app events on their backend. So if you have the Facebook SDK integrated or another MMP tracking app opens, choose option 1 below.

When tracking reinstalls and opens, you have 3 options:

1. *use Branch name (branch_open)*: This allows us to get attribution data from Facebook, but without it counting as an app open. Use this option if you have the Facebook SDK integrated or are testing with another MMP. Since the Facebook SDK or other MMP is already sending fb_mobile_activate_app, you do not want Branch to send this a second time. (Default)
2. *use Facebook name (fb_mobile_activate_app)*: Branch will send the exact event used by Facebook for tracking app opens. Use this option if you do not have the Facebook SDK and you are not tracking opens with another MMP, and you would like Branch to help Facebook record opens.
3. *disable*: Use this option if you do not want Branch attributing opens at all. In some cases, we may still be able to attribute opens based on previously retrieved attribution data from Facebook. But we will not send any opens to Facebook in order to get attribution data back.

#### Tracking other conversion events

!!! Warning
	Facebook does not de-duplicate custom app events on their backend. If you are tracking conversion events with the Facebook SDK or another MMP, choose option 1 below.

It's possible to track app events using only Branch! You can [track the events](/pages/apps/v2event/#v2-event) with Branch once, and then we send them to Facebook as well as other analytics systems. Use the [v2/event logging methods](/pages/apps/v2event/#v2-event) outlined here.

When tracking add to cart, purchase, and other Facebook app events, you have 3 options:

1. *use Branch name*: This allows us to get attribution data from Facebook, but without it counting as a purchase, add to cart, etc. Use this option if you have the Facebook SDK integrated or are testing with another MMP, and you already track app events via one of those two methods. Since the Facebook SDK or other MMP is already sending events to Facebook, you do not want Branch to send these a second time. (Default)
2. *use Facebook name*: Branch will send the exact event used by Facebook for tracking app events. Use this option if you are not already tracking app events with the Facebook SDK or another MMP, and you would like Branch to help Facebook record these events.
3. *disable*: Use this option if you do not want Branch attributing these conversion events. In some cases, we may still be able to attribute these conversion events based on previously retrieved attribution data from Facebook. But we will not send any conversion events to Facebook in order to get attribution data back.

#### Mapping of Branch event names to Facebook events

| Branch event name | Facebook MMP _eventName
| --- | ---
| ACHIEVE_LEVEL | fb_mobile_level_achieved
| ADD_PAYMENT_INFO | fb_mobile_add_payment_info
| ADD_TO_CART | fb_mobile_add_to_cart
| ADD_TO_WISHLIST | fb_mobile_add_to_wishlist
| COMPLETE_REGISTRATION | fb_mobile_complete_registration
| COMPLETE_TUTORIAL | fb_mobile_tutorial_completion
| INITIATE_PURCHASE | fb_mobile_initiated_checkout
| PURCHASE | fb_mobile_purchase
| RATE | fb_mobile_rate
| SEARCH | fb_mobile_search
| SPEND_CREDITS | fb_mobile_spent_credits
| UNLOCK_ACHIEVEMENT | fb_mobile_achievement_unlocked
| VIEW_ITEM | fb_mobile_content_view

#### Tracking custom events

In addition to tracking installs and Facebook app events (see [Tracking other conversion events](#tracking-other-conversion-events) above), you can also have Branch attribute custom events. To do so, we must send those events to Facebook.

When tracking custom events that have no equivalent [Facebook App Event](https://developers.facebook.com/docs/marketing-api/app-event-api){:target="\_blank"}, you have 2 options:

1. *enable*: Branch will send custom events to Facebook. this allows us to get attribution data from Facebook. (default)
2. *disable*: Use this option if you do not want Branch attributing custom events. In some cases, we may still be able to attribute these custom events based on previously retrieved attribution data from Facebook. But we will not send any custom events to Facebook in order to get attribution data back. 

### Migrating from the existing Facebook integration to MMP

!!! Note
	You can no longer see the previous Facebook onboarding flow that required you to copy-paste your Facebook app secret. Please use the "Authenticate with Facebook" option instead.

If you have been using our integration with Facebook prior to February 14, 2018, then we highly recommend that you upgrade to our new integration that includes MMP. 

We are now certified by Facebook as a Mobile Measurement Partner! Branch can now help you attribute installs, opens, and conversion events to Facebook like never before.

This integration includes full support for Facebook, Instagram, and the Audience Network. We also automatically pull in impressions and clicks from Facebook and surface those alongside your clicks on Branch links. The deep linking experience your users love is still supported. 

Instructions on how to get set up with Facebook MMP are [here](/pages/deep-linked-ads/facebook-app-install-ads/#enable-facebook-as-an-ad-partner). Note that this will replace your existing credentials on our backend. Instead of copy-pasting your Facebook app secret into the Branch Dashboard, you can now simply click through the normal Facebook login flow.

Branch will now automatically surface Facebook campaign, ad set, and ad information on the Branch Dashboard's visualizations! This isn't limited to [Ads Analytics](https://dashboard.branch.io/ads/analytics){:target="\_blank"} -- it also includes cross-channel analytics such as [Source Analytics](https://dashboard.branch.io/sources){:target="\_blank"}.

### Sources of Discrepancies between Facebook and Branch

When using Branch as your Facebook MMP, you may notice some data discrepancies between the Branch dashboard and the Facebook dashboard if not configured correctly. We have highlighted two main sources of discrepancies if they are present after you have onboarded with Facebook on the Branch dashboard: 

#### Attribution Windows

An attribution window is the maxiumum amount of time between an initial action (click or impression) and a conversion event (install or open) for which you attribute that conversion event as occuring _because of_ that initial action.

Example with 3 day view attribution window: If a user views your ad and 2 days later installs your app, that install would be attributed to that ad view. However if the user views your ad and 4 days later installs the app, that install would be considered an organic install and would NOT be attributed to that ad view.  You can read more in our documentation here: https://docs.branch.io/pages/dashboard/unified-analytics/#attribution-windows

If one of your attribution windows on the Branch dashboard is different than the corresponding window on the Facebook dashboard, the data between the two will not align. You can mitigate this by changing one of more of your attribution windows on the Branch dashboard, or changing your Facebook dashboard for the given ad account.

There are four Branch attribution windows, and two Facebook attribution windows. This chart shows which Facebook window name each Branch window name corresponds to:

| Branch window name  |  Facebook window name |
|---|---|
| Click to install | Click Window|
| Click to session start |  Click Window |
| Impression to install | View Window |
| Impression to session start | View Window |

##### Change your Facebook attribution windows
In order to update your Facebook Attribution window for a particular ad account, you can go to https://business.facebook.com/ads/manager/account_settings/information. Choose the account in the dropdown in the upper-left corner. As long as you're an admin on that account, you should see a section 'Attribution' at the top-right, and an ability to edit the Click or View window or both.

##### Change your Branch attribution windows
Alternatively or in addition, you could update any of your four Branch attribution windows. To do so go to the [Link Settings](https://dashboard.branch.io/link-settings) section of the Branch dashboard, and scroll down to the 'Attribution Windows' section and expand it. Alter any of the four windows listed in the chart above to match the corresponding Facebook window, and then save at the bottom of the page.

##### Reporting based on time of impression or time of conversion

Facebook and Branch may report the same install as occurring on different days, if the impression is on one day but the install is on another day.

Background:

Facebook by defaults reports installs based on the day that the impression occurred. They also allow you to see reports based on the day that the install occurred.

Branch always reports installs based on the date of install, never the date of impression.

Let's illustrate this with a scenario:

User views an ad on Apil 1, clicks it, then installs the app on April 2.

By default, Facebook reports the install as occurring on April 1. However, when pulling data from the insights API, you can specify option action_report_time=conversion. This causes Facebook to report that the install occurred on April 2.

Branch will always report the install as having occurred on April 2.

#### Timezones

More information coming soon!