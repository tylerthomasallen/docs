
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
