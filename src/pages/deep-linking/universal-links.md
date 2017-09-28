## Overview

iOS Universal Links route directly to your app when opened, bypassing the web browser and URI scheme combination typically used for the redirection process. Universal Links were introduced with iOS 9, and became the only fully-functional deep linking option on iOS after [Apple stopped supporting URI schemes for deep linking in iOS 9.2](https://blog.branch.io/ios-9.2-redirection-update-uri-scheme-and-universal-links).

!!! warning "Universal Links are critical on iOS!"
	You must enable Universal Links before Branch can function correctly on iOS 9.2+ but note that pure iMessage apps don't support Universal Links.

Branch makes it simple to enable Universal Links all while greatly improving on them, offering full attribution, supporting edge cases where Universal Links fail (common) and allowing you to deep link when the user doesn't have your app installed.

![image](/img/pages/deep-linking/universal-links/how_branch_improves.png)

### Enable Universal Links on the Branch dashboard

1. Navigate to [Link Settings](https://dashboard.branch.io/link-settings) in the Branch Dashboard.
1. Check the box to `Enable Universal Links` from iOS redirects.
1. Type in your App’s Bundle Identifier.
1. Type in your Apple App Prefix (found by clicking your app on [this page](https://developer.apple.com/account/ios/identifier/bundle) in Apple's Developer Portal).
1. Scroll down and click on the `Save` button.

![image](/img/pages/deep-linking/universal-links/dashboard_enable_universal_links.png)

### Enable Associated Domains in Xcode

1. Go to the `Capabilities` tab of your project file.
1. Scroll down and enable `Associated Domains`. ![image](/img/pages/deep-linking/universal-links/enable_ass_domains.png

!!! tip "If you see an error after this step"
	![image](/img/pages/deep-linking/universal-links/enable_ass_domains_error.png
	Please ensure...

	- The right team selected for your Xcode project.
	- The Bundle Identifier of your Xcode project matches the one used to register the App Identifier with Apple.
