#### Debugging Common Count Discrepancies

While we should always expect around a 5% discrepancy due to time zone differences and the like, if you are seeing significant discrepancies, it could be an indication of a broader problem.

**Fewer Clicks Recorded in Branch**

The number of clicks on a link used inside of a Branch enabled Facebook Ad will be lower in Branch's dashboard than Facebook's. This is because Facebook routes users straight to the App/Play Store without letting Branch know that a link was clicked. If the user decides not to install the app/drops off at the App/Play Store, then Facebook will have recorded one more click than Branch. Branch does not increment the link's click count until the user enters into the app. This is why you'll see more clicks in Facebook's dashboard.

**Issue with iOS 10 and Limit Ad Tracking**

In iOS 10, Apple broke the ability for app developers to collect the `IDFA` if the user had enabled `Limit Ad Tracking`. In this case, Branch and Facebook cannot compare notes to see who drove the install. This will account for about 15% discrepancy in counts across both platforms, where Branch's tracked installs will be lower.

**Not Collecting Advertising ID**

If you see absolutely 0 data coming through from your integration, it's possible that you're not collecting Google Advertising ID (GAID) on Android or IDFA on iOS.

- iOS: Add the AdSupport.framework and read this extra info about [submitting](https://dev.branch.io/getting-started/sdk-integration-guide/guide/ios/#submitting-to-the-app-store TODO) to the store.
- Android: Add Google Play Services so that we can collect GAID. See [here](https://dev.branch.io/getting-started/sdk-integration-guide/advanced/android/#use-google-advertising-id TODO).

**Intercepting Deep Links Before Branch**

We recently discovered a discrepancy where an app was calling Facebook's SDK to fetch the deferred app link within their iOS and Android app. Branch calls uses this same mechanism via a direct API integration, but if Facebook's SDK retrieves it before we do, Branch will not see any deep link data. Please ensure to comment out any calls to the following API within your app:

- [Android: fetchDeferredAppLink](https://developers.facebook.com/docs/reference/android/current/class/AppLinkData/)
- [iOS: fetchDeferredAppLink](https://developers.facebook.com/docs/reference/ios/current/class/FBSDKAppLinkUtility/)

**Installs Counted as Opens on Branch**

One discrepancy root cause we've seen before is the scenario where Branch will classify an install as an 'open'. We remember the history of a particular user via their IDFA (in addition to using a few other methods) and will detect whether the user is actually a new user or a returning user who had previously uninstalled your app. Facebook doesn't do this.

We've seen Facebook classify 're-installs' as fresh installs, where Branch will correctly classify them as 're-opens'. If you're comparing the raw install numbers on Branch, and ignoring the 're-opens', it's possible you'll see a discrepancy. To check sum up the 'installs' and 'reopens' for the given link and compare it to Facebook's total installs.

![Installs and Opens](/img/ingredients/deep-linked-ads/fb-ads-support/installs_plus_opens.png)

If it's close, you know that this is the root cause.

**Don't Use setDebug**

Facebook ads are incompatible with [debug mode]({{base.url}}/getting-started/integration-testing/guide/ios/#use-debug-mode-to-simulate-fresh-installs TODO), as this prevents us from sending the correct hardware ID to Facebook.

**Conflicts with Facebook SDK (iOS)**

If your app integrates the FBSDK, be certain you are *not* using the [`FBSDKAppLinkUtility` method](https://developers.facebook.com/docs/reference/ios/current/class/FBSDKAppLinkUtility/ TODO). This has been known to cause conflicts with Branch when handling incoming deep links.

#### Testing Deep Linked Ads

Unfortunately, the demo/preview ads used during the ads creation flow on Facebook use a different mechanism than live Facebook ads. **This prevents you from testing deep linking from your Facebook ads**. Do not waste time trying to get this to work. We've confirmed with Facebook representatives that this is broken.

The only way to test the deep linking functionality is outside of the actual ads system is a helper tool from Facebook. Follow these instructions to test the deep linking functionality:

1. Head to the [Ads tester tool](https://developers.facebook.com/tools/app-ads-helper/){:target="_blank"}
1. Choose the app that you're advertising with
1. Scroll down to the button that says 'Test Deep Link'
1. Paste in the Branch link
1. Check 'Send Deferred'
1. Click 'Send to iOS/Android'
1. Install the app and it should deep link!

!!! note ""
	If you see that someone liked your ad, do not bother trying to click and test it. Clicking your own ad that shows up in notifications **will not deep link**.

#### Issues Reading Facebook App Links

If Facebook is having trouble reading the App Links from the Branch link, you might see messages like these while trying to test out the flow. This means that there is something corrupted in the OG tags causing Facebook to not parse your link.

<img src="/img/ingredients/deep-linked-ads/fb-ads-support/invalid-app-links-error.png" alt="Invalid App Links" class="center three-quarters">
<img src="/img/ingredients/deep-linked-ads/fb-ads-support/missing_applinks.png" alt="Troubleshooting" class="center half">

**Rescrape the OG Tags**

You can test the OG tags using the [OG tag tester tool](https://developers.facebook.com/tools/debug/og/object) provided by Facebook:

1. Paste the Branch Link into the Input URL box.
1. Click on the Show existing scrape information button.
1. Examine errors regarding App Links from the output window.
1. Click on the Fetch New Scrape Information button. This last step typically resolves this problem if you are certain that your Branch Link Settings are correct.

!!! tip ""
	You can further automate the rescraping process by using this command after you create a new link and before you use it for any ads:

	``` sh
	curl --insecure "https://graph.facebook.com/?id=[YOUR-URL-TO-SCRAPE]&scrape=true"
	```

**If the OG tag tester continues to report problems**

1. Examine your [Link Settings](https://dashboard.branch.io/#/settings/link){:target="_blank"} and ensure that for all platforms (for which an app is available), that a URI scheme and a link to the app in the Play/App Store is configured. If you are using a Custom URL for your iOS Redirect, then you need to append `?id[10-digit App Store ID]` to the URL. This is necessary in order to fully generate the App Links and OG tags that the Facebook scraper expects to find.
    - For example, if your App Store URL is `https://itunes.apple.com/us/app/my-app-name/id1234567890`, then your Custom URL value should be `https://example.com?id1234567890`
1. If errors from the output window pertain to OG tags i.e. missing title, description etc. then examine link OG tags by appending `?debug=true` as described on the [Integration Testing page]({{base.url}}/getting-started/integration-testing/guide/#debugging-an-individual-link).
1. If you haven't set OG tags on a per link level, then please check your Dashboard's global Social Media Display Customization settings from the [Link Settings](https://dashboard.branch.io/#/settings/link){:target="_blank"} page.

**Use a direct deep link**

As a last resort, you can manually input a direct deep link. To retrieve this:

1. Go to Facebook's [Open Graph Object Debugger](https://developers.facebook.com/tools/debug/og/object/)
1. Input the Branch link you want to use for your ad
1. Click **Fetch new scrape information**
1. Find the `al:ios:url` line (it should look like `<meta property="al:ios:url" content="myapp://open?link_click_id=link-242052337263342024" />`)
1. Copy the value of this (`myapp://open?link_click_id=link-242052337263342024`) and input it as the Deep Link value of your ad

If none of these approaches work, please reach out to integrations@branch.io immediately.

#### Known Issue with App Restrictions

We recently discovered a bug within the Facebook system that prevents App Links from being read by the robot if you change any of these values from the defaults in your Advanced Facebook App Settings tab. Please make sure

- Contains Alcohol is set to **No**
- Age Restriction is set to **Anyone (13+)**
- Social Discovery is set to **Yes**
- Country Restricted is set to **No**

It has to look like this **exactly**:
![App Restrictions Troubleshooting](/img/ingredients/deep-linked-ads/fb-ads-support/app_restrictions.png)

**No IP Whitelists**

Because Branch has a large distribution of API servers that will be making requests to Facebook on behalf of your app, you cannot have an IP whitelist in your [Facebook advanced settings](https://developers.facebook.com/apps/390736167768543/settings/advanced/) and still have this integration work. Please remove any IPs from this setting if they are present.

#### Common issues with Facebook Authentication

If you are having trouble authenticating with Facebook, please check the following:

**Be sure you have the correct App ID and App Secret**

Be sure you have the correct App ID and App Secret. This is the number one source of issues.

**App Secret embedded?**

If you have entered the correct App ID and Secret but are still getting issues, it may be related to how you are using your Secret. Visit the Settings > Advanced page on Facebook and check that you don't have the toggle enabled for "Is your App Secret embedded?" You will only have this option if you have enabled "Native or desktop app?" on this page.

So if you have enabled "Native or desktop app", then your advanced options should appear like the following:

![Client Secret](/img/ingredients/deep-linked-ads/fb-ads-support/facebook_secret.png)
