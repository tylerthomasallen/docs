# Integrating Branch for iOS
*Questions? [Contact us](https://support.branch.io/support/tickets/new)*

1. [Configure Branch Dashboard](#configure-branch-dashboard)
1. [Configure Bundle Identifier](#configure-bundle-identifier)
1. [Configure Associated Domains](#configure-associated-domains)
1. [Configure Entitlements](#configure-entitlements)
1. [Configure Info.pList](#configure-infoplist)
1. [Confirm App Prefix](#confirm-app-prefix)
1. [Install Branch](#install-branch)
1. [Initialize Branch](#initialize-branch)
1. [Test Deep Link](#test-deep-link)
1. [More Documentation](#more-documentation)

# 

### Configure Branch Dashboard

> [Branch Dashboard](https://dashboard.branch.io/settings/link)
  
![image](http://i.imgur.com/aFb69BS.png)
![image](http://i.imgur.com/Edpfn04.png)

### Configure Bundle Identifier

![image](http://i.imgur.com/BHAQIQf.png)

### Configure Associated Domains

![image](http://i.imgur.com/67t6hSY.png)

### Configure Entitlements

![image](http://i.imgur.com/vhwis7f.png)
  
### Configure Info.pList

![image](http://i.imgur.com/PwXnHWz.png)

### Confirm App Prefix

> [Apple Developer Account](https://developer.apple.com/account/ios/identifier/bundle)

![image](http://i.imgur.com/2EoN1i0.png)

### Install Branch

> [CocoaPods](https://cocoapods.org/) pod Branch

> [Carthage](https://github.com/Carthage/Carthage) github "BranchMetrics/iOS-Deferred-Deep-Linking-SDK"

> [Source code](https://github.com/BranchMetrics/ios-branch-deep-linking/releases) Branch.framework

![image](http://i.imgur.com/0NcOrkE.png)

### Initialize Branch

> Swift 2.3

```swift
import UIKit
import Branch

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    
    var window: UIWindow?
    
    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject : AnyObject]?) -> Bool {
        Branch.getInstance().setDebug() // recommend for testing
        Branch.getInstance().initSessionWithLaunchOptions(launchOptions, isReferrable: true) { (params, error) in
            // listener for Branch Deep Link data
            print(params)
        }
        return true
    }
    
    func application(app: UIApplication, openURL url: NSURL, options: [String : AnyObject]) -> Bool {
        // handler for URI Schemes (depreciated in iOS 9.2+, but still used by some Google apps)    
        Branch.getInstance().handleDeepLink(url)
        return true
    }    
    
    func application(application: UIApplication, continueUserActivity userActivity: NSUserActivity, restorationHandler: ([AnyObject]?) -> Void) -> Bool {
        // handler for Universal Links    
        Branch.getInstance().continueUserActivity(userActivity)
        return true
    }
    
    func application(application: UIApplication, didReceiveRemoteNotification userInfo: [NSObject : AnyObject]) {
        // handler for Push Notifications
        Branch.getInstance().handlePushNotification(userInfo)
    }
}
```

> Swift 3.0

```swift
import UIKit
import Branch

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

  var window: UIWindow?

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
        Branch.getInstance().setDebug() // for debug and development only
        Branch.getInstance().initSession(launchOptions: launchOptions) { (params, error) in
            // listener for Branch Deep Link data
            print(params as! [String: Any])
        }
        return true
    }

    func application(_ app: UIApplication, open url: URL, options: [UIApplicationOpenURLOptionsKey : Any] = [:]) -> Bool {
        // handler for URI Schemes (depreciated in iOS 9.2+, but still used by some Google apps)
        Branch.getInstance().handleDeepLink(url)
        return true
    }

    func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([Any]?) -> Void) -> Bool {
        // handler for Universal Links
        Branch.getInstance().continue(userActivity)
        return true
    }

    func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
        // handler for Push Notifications
        Branch.getInstance().handlePushNotification(userInfo)
    }
}
```
    
> Objective-C

```objc
#import "AppDelegate.h"
#import "Branch/Branch.h"

@interface AppDelegate ()

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [[Branch getInstance] setDebug]; // for debug and development only
    [[Branch getInstance] initSessionWithLaunchOptions:launchOptions andRegisterDeepLinkHandler:^(NSDictionary * _Nonnull params, NSError * _Nullable error) {
        // listener for Branch Deep Link data
        NSLog(@"%@", params);
    }];

    return YES;
}

- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    // handler for URI Schemes (depreciated in iOS 9.2+, but still used by some Google apps)
    [[Branch getInstance] handleDeepLink:url];
    return YES;
}

- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler {
    // handler for Universal Links
    [[Branch getInstance] continueUserActivity:userActivity];
    return YES;
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {
    // handler for Push Notifications
    [[Branch getInstance] handlePushNotification:userInfo];
}

@end
```

### Test Deep Link

  - Wait 15 minutes after saving changes on the [Branch Dashboard](https://dashboard.branch.io/settings/link).
  - Create a deep link from the [Branch Marketing Dashboard](https://dashboard.branch.io/marketing).
  - Delete and reinstall the app.
  - Compile and test on a device.
  - Paste deep link in Apple Notes. 
  - Long press on the deep link (not 3D Touch).
  - Click `Open in "APP_NAME"` to open app.
  - ![image](http://i.imgur.com/VJVICXd.png)

### More Documentation

  - [Integrate Branch](https://dev.branch.io/getting-started/sdk-integration-guide/guide/ios/)
  - [Integrate Universal Links](https://dev.branch.io/getting-started/universal-app-links/guide/ios/)
  - [Create Deep Links](https://dev.branch.io/getting-started/creating-links/apps/ios/)
  - [GitHub Repo](https://github.com/BranchMetrics/ios-branch-deep-linking)
