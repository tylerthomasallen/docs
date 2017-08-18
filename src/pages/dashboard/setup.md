
## Integrate Branch

- #### Account settings
- #### Link settings
- #### DeepView previews
- #### Link Domain

## Troubleshoot issues

...


### Default app.link subdomain

Every app on the Branch platform is assigned a subdomain of the form `xxxx.app.link`. This is unique to your app and must be used in several places when integrating the SDK.

!!! tip
    Because of the way that Apple implements Universal Links, every app also has a shadow subdomain of the form `xxxx-alternate.app.link`. This is used in select places but will not be shown to your users.

#### Retrieving the subdomain assigned to your app

1. Go to the [Link Settings](https://dashboard.branch.io/#/settings/link) page on the dashboard.
1. Scroll down to the **Link Domain** area.
1. Copy the value listed there.

![image](/img/pages/links/subdomain-setting.png)

!!! warning "Test environment domain"
    The assigned subdomain for your test environment is of the form `xxxx.test-app-link` and must be configured separately. Branch automatically handles HTTPS traffic for custom subdomains and root domains. Branch will acquire the necessary SSL certificate if you follow the simple setup instructions below. Branch will also automatically renew the certificates when needed.

## Changing your app.link subdomain

You can brand your links with a custom subdomain like `you.app.link`. 

!!! warning "One change only"
    You can only change your app.link subdomain once. Keep in mind that if you change this and you have implemented [universal links](/pages/apps/ios/#configure-associated-domains) or [app links](/pages/apps/android/#configure-app), you must update your implementation. The links on your old subdomain will no longer work.

1. Go to [Link Settings](https://dashboard.branch.io/settings/link){:target="_blank"} in the dashboard.
1. Scroll to the **Link Domain** setting at the bottom.
1. Click `Change my app.link subdomain`.
1. Choose a subdomain that matches your brand. You cannot choose one that is in use by someone else, and it cannot have special characters. ![image](/img/pages/links/get-subdomain.png)
1. Press `Get`.

## Setting a custom link domain

If you want to use a custom domain or subdomain for your Branch links instead of the `XXXX.app.link` domain, setting one up is simple.

!!! warning "Avoid switching later"
    We recommend that you choose one domain or subdomain to use with Branch and stick with it, as switching can cause significant problems with your existing links.

!!! tip "Updates to Universal & App Links configuration"
    If you enable (or change) your link domain/subdomain, you will need to make updates to your Universal Links (iOS) and App Links (Android) configuration. Review the [iOS](/pages/apps/ios/) and [Android](/pages/apps/android/) integration guides.

### Custom SUBDOMAIN (go.branch.com)

!!! warning "Do not use www"
    Some browsers have special rules for processing URLs beginning with `www`. We strongly recommend you do not include a `www` prefix in your custom subdomain.

1. Create a CNAME for your subdomain and point it to `custom.bnc.lt`
1. Go to [Link Settings](https://dashboard.branch.io/#/settings/link){:target="_blank"} on the Branch dashboard, and find the **Link Domain** section.
1. Click `Use my own domain`.
1. You should see a message telling you the status of your domain under the domain field. If you don't, please type your domain in again. ![image](/img/pages/links/sub-custom-domain.png)
1. Click `Confirm`.

### Custom ROOT domain (branch.com)

!!! warning "Use this domain for Branch links only"
    Once you enable this root domain for Branch links, you will not be able to use it for hosting anything else. We recommend using a subdomain, or purchasing a new root domain for this purpose. **You cannot use your main website domain for hosting Branch links**.

1. Go to [Link Settings](https://dashboard.branch.io/#/settings/link){:target="_blank"} on the Branch dashboard, and find the **Link Domain** section.
1. Click `Use my own domain`. ![image](/img/pages/links/subdomain-setting.png)
1. Enter your custom domain into the text box. Resolve any errors. ![image](/img/pages/links/domain-error.png)
1. Work with your domain registrar to make the Branch-provided nameservers listed under the domain field authoritative for your domain. **Note that this means you cannot host anything else on this domain — only Branch links.** ![image](/img/pages/links/custom-domain-nameservers.png)
1. Click `Confirm`.

!!! tip "Heads Up!"
    1. The nameservers in the above image are for example purposes only. The nameservers you use will be unique to your application.
    2. If you are configuring the domain through AWS's Route 53, make sure you are editing the nameservers under the `"Registered Domains"` tab, and not the `"Hosted zones"` section.

## About the legacy bnc.lt domain

The bnc.lt domain is no longer available for new apps. If you have existing links with this domain as the base, they will continue to function.


## Overview

If your users are creating content in your app, they will probably want to share that content with their friends. You can encourage this by making it easy to generate sharing links that open your app *and* route back exactly to the piece of content that was originally shared. This will even work when the user who opens the link doesn't have your app installed yet. Since content is vital to your growth strategy, Branch's product--Content Sharing--facilitates sending and tracking your in-app content out of the box.

The Branch Content Sharing product features a baked-in share sheet native to the operating system that allows for some customizations, as well. Follow our guide to set your content growth channel.

## Setup

### Generate Links

To enable content sharing, you will need to use the proper SDK methods for link generation. These links will contain data about the content being shared. These links will generate analytics data and allow your app to route straight back to the content when clicked.

Links are created through Branch Universal Objects. These objects combine links with data (your content data, as well as anaytics information), and let you show a share sheet on each link.

```objective-c
// Adding content data to a link.
BranchUniversalObject *branchUniversalObject = [[BranchUniversalObject alloc] initWithCanonicalIdentifier:@"monster/12345"];
branchUniversalObject.title = @"Meet Mr. Squiggles";
branchUniversalObject.contentDescription = @"Your friend Josh has invited you to meet his awesome monster, Mr. Squiggles!";
branchUniversalObject.imageUrl = @"https://example.com/monster-pic-12345.png";
[branchUniversalObject addMetadataKey:@"userId" value:@"12345"];
[branchUniversalObject addMetadataKey:@"userName" value:@"Josh"];
[branchUniversalObject addMetadataKey:@"monsterName" value:@"Mr. Squiggles"];
```

```objective-c
// Adding analytics data to a link.
BranchLinkProperties *linkProperties = [[BranchLinkProperties alloc] init];
linkProperties.feature = @"share";
linkProperties.channel = @"facebook";
```

```objective-c
// Finally showing it.
[branchUniversalObject showShareSheetWithLinkProperties:linkProperties
                                           andShareText:@"Super amazing thing I want to share!"
                                     fromViewController:self
                                            completion:^(NSString* activityType, BOOL completed) {
    NSLog(@"finished presenting");
}];
```

!!! note "Properly identify your content"
    The `canonicalIdentifier` parameter greatly improves the content analytics data Branch captures. It should be unique to that piece of content and helps Branch dedupe across many instances of the same thing. Suitable options: a website with pathing, or a database with identifiers for entities.


### Track Analytics

The [Content Analytics](https://dashboard.branch.io/content) lets you view content-level data. This view will help answer questions like the most popular or shareable content. You can also use the [Live View page](https://dashboard.branch.io/liveview/content) to see content-links in real time.

!!! success "Track your influencers, too!"
    The [Influencers page](https://dashboard.branch.io/referrals/analytics) on the dashboard will automatically track which of your users drive the most conversions.

## Advanced

### Enable Custom Onboarding

When you generate links that point to content, you can also add data to provide personalized onboarding for users who click the link. By using Content Sharing, you can add metadata about the user who is doing the actual sharing, and surface their information when someone else clicks their link. Branch does not create the UI, but will pass information along, letting you construct a UI that personalizes a user's onboarding.

![image](/img/marketing-channels/content-sharing/custom-onboarding.png)

### Create Links Without Share Sheet

If you've built your own share sheet and you want to just create a Branch link for an individual share message or have another use case, you can create deep links directly with the following call:

```objective-c
[branchUniversalObject getShortUrlWithLinkProperties:linkProperties andCallback:^(NSString* url, NSError* error) {
    if (!error) {
        NSLog(@"got my Branch invite link to share: %@", url);
    }
}];
```

### Specifying an Email Subject with Share Sheet

The majority of share options only include one string of text, except email, which has a subject and a body. The share text will fill in the body and you can specify the email subject in the link properties as shown below.

```objective-c
BranchLinkProperties *linkProperties = [[BranchLinkProperties alloc] init];
linkProperties.feature = @"share";
linkProperties.channel = @"facebook";
[linkProperties addControlParam:@"$email_subject" withValue:@"Therapists hate him"];
```

## FAQ

### How can I see a preview or debug this link?

If you want to preview the link to see what it'll look like on social media websites, use the [OG Tag tester](https://developers.facebook.com/tools/debug/og/object).

If you want to see the data associated with your link, simply add a `?debug=1` to the end of the Branch link. For example, if your link was branch.app.link/abcde, you would enter `branch.app.link/abcde?debug=1` in your browser to see data.