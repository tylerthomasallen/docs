## Integrate Branch

- #### Configure Branch

    - Complete your [Branch Dashboard](https://dashboard.branch.io/settings/link)

        ![image](http://i.imgur.com/aFb69BS.png)
        ![image](http://i.imgur.com/Edpfn04.png)

- #### Configure bundle identifier

    - Bundle Id matches [Branch Dashboard](https://dashboard.branch.io/settings/link)

        ![image](http://i.imgur.com/BHAQIQf.png)

- #### Configure associated domains

    - Add [Branch Dashboard](https://dashboard.branch.io/settings/link) values

        ![image](http://i.imgur.com/67t6hSY.png)

- #### Configure entitlements

    - Confirm entitlements are within target

        ![image](http://i.imgur.com/vhwis7f.png)

- #### Configure info.pList

    - Add [Branch Dashboard](https://dashboard.branch.io/settings/link) values

        ![image](http://i.imgur.com/PwXnHWz.png)

- #### Confirm app prefix

    - From your [Apple Developer Account](https://developer.apple.com/account/ios/identifier/bundle)

        ![image](http://i.imgur.com/2EoN1i0.png)

- #### Install Branch

    - Option 1: [CocoaPods](https://cocoapods.org/)

        ```sh hl_lines="7"
        platform :ios, '8.0'

        target 'APP_NAME' do
          # if swift
          use_frameworks!

          pod 'Branch'
        end
        ```

    - Option 2: [Carthage](https://github.com/Carthage/Carthage)

        ```sh
        github "BranchMetrics/ios-branch-deep-linking"
        ```

    - Option 3: Manually install [source code](https://github.com/BranchMetrics/ios-branch-deep-linking/releases) and dependencies

        ![image](http://i.imgur.com/0NcOrkE.png)

- #### Initialize Branch

    - Swift 3.0

        ```swift hl_lines="2 10 11 12 13 14 15 16 21 22 27 28 33 34"
        import UIKit
        import Branch

        @UIApplicationMain
        class AppDelegate: UIResponder, UIApplicationDelegate {

        var window: UIWindow?

        func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
          // for debug and development only
          Branch.getInstance().setDebug() 
          // listener for Branch Deep Link data
          Branch.getInstance().initSession(launchOptions: launchOptions) { (params, error) in
            // do stuff with deep link data (nav to page, display content, etc)
            print(params as? [String: AnyObject] ?? {})
          }
          return true
        }

        func application(_ app: UIApplication, open url: URL, options: [UIApplicationOpenURLOptionsKey : Any] = [:]) -> Bool {
          // handler for URI Schemes (depreciated in iOS 9.2+, but still used by some Google apps)
          Branch.getInstance().application(app, open: url, options: options)
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
        ```

    - Objective-C

        ```objc hl_lines="2 11 12 13 14 15 16 17 22 23 28 29 34 35"
        #import "AppDelegate.h"
        #import "Branch/Branch.h"

        @interface AppDelegate ()

        @end

        @implementation AppDelegate

        - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
          // for debug and development only
          [[Branch getInstance] setDebug]; 
          // listener for Branch Deep Link data
          [[Branch getInstance] initSessionWithLaunchOptions:launchOptions andRegisterDeepLinkHandler:^(NSDictionary * _Nonnull params, NSError * _Nullable error) {
            // do stuff with deep link data (nav to page, display content, etc)
            NSLog(@"%@", params);
          }];
          return YES;
        }

        - (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
          // handler for URI Schemes (depreciated in iOS 9.2+, but still used by some Google apps)
          [[Branch getInstance] application:app openURL:url options:options];
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

- #### Test deep link

    - Create a deep link from the [Branch Marketing Dashboard](https://dashboard.branch.io/marketing)

    - Delete your app from the device

    - Compile your app *(`cordova run ios` `phonegap run ios` `ionic run ios`)*

    - Paste deep link in `Apple Notes`

    - Long press on the deep link *(not 3D Touch)*

    - Click `Open in "APP_NAME"` to open your app *([example](http://i.imgur.com/VJVICXd.png))*

## Implement features

- #### Create content reference

    - The `Branch Universal Object` encapsulates the thing you want to share 

    - Swift 3.0

        ```swift
        // only canonical identifier is required
        let buo = BranchUniversalObject(canonicalIdentifier: "item/12345")
        buo.title = UUID.init().uuidString
        buo.contentDescription = "My Content Description"
        buo.imageUrl = "http://lorempixel.com/200/200/"
        buo.canonicalUrl = "http://s3z3.app.link/rawr_rawr"
        buo.contentIndexMode = .public
        buo.addMetadataKey("property1", value: "blue")
        ```

    - Objective-C

        ```objc
        // only canonical identifier is required
        BranchUniversalObject *buo = [[BranchUniversalObject alloc] initWithCanonicalIdentifier:@"item/12345"];
        buo.title = @"My Content Title";
        buo.contentDescription = @"My Content Description";
        buo.imageUrl = @"https://example.com/mycontent-12345.png";
        [buo addMetadataKey:@"property1" value:@"blue"];
        [buo addMetadataKey:@"property2" value:@"red"];
        ```

- #### Create deep link

    - Generate a deep link within your app

    - Swift 3.0

        ```swift
        let lp: BranchLinkProperties = BranchLinkProperties()
        lp.feature = "sharing"
        lp.channel = "facebook"
        lp.campaign = "meow meow"
        lp.addControlParam("$desktop_url", withValue: "http://example.com/home")
        lp.addControlParam("random", withValue: UUID.init().uuidString)

        buo.getShortUrl(with: lp) { url, error in
          guard let url = url else { return }
          print(url)
        }
        ```

    - Objective-C

        ```objc
        BranchLinkProperties *lp = [[BranchLinkProperties alloc] init];
        lp.feature = @"sharing";
        lp.channel = @"facebook";
        [lp addControlParam:@"$desktop_url" withValue:@"http://example.com/home"];
        [lp addControlParam:@"$ios_url" withValue:@"http://example.com/ios"];

        [buo getShortUrlWithLinkProperties:lp andCallback:^(NSString* url, NSError* error) {
            if (!error) {
                NSLog(@"@", url);
            }
        }];
        ```

- #### Share deep link

    - Share deep links between users and apps

    - Swift 3.0

        ```swift
        // optional values
        let lp: BranchLinkProperties = BranchLinkProperties()
        lp.feature = "sharing"
        lp.channel = "facebook"
        lp.campaign = "meow meow"
        lp.addControlParam("$desktop_url", withValue: "http://example.com/home")
        lp.addControlParam("random", withValue: UUID.init().uuidString)

        // share link
        buo.showShareSheet(with: lp, andShareText: text , from: controller) { (activity, success) in
          print(activity ?? "none", success)
        }
        ```

    - Objective-C

        ```objc
        // optional values
        BranchLinkProperties *lp = [[BranchLinkProperties alloc] init];
        lp.feature = @"sharing";
        lp.channel = @"facebook";
        [lp addControlParam:@"$desktop_url" withValue:@"http://example.com/home"];
        [lp addControlParam:@"$ios_url" withValue:@"http://example.com/ios"];

        // share link
        [branchUniversalObject showShareSheetWithLinkProperties:lp andShareText:@"Super amazing thing I want to share!" fromViewController:self completion:^(NSString* activityType, BOOL completed) {
            NSLog(@"finished presenting");
        }];
        ```

- #### Read deep link

- #### Navigate to content

    - Navigate to any ViewController based on the deep link data from

    - Swift 3.0

        ```swift
        // within AppDelegate application.didFinishLaunchingWithOptions
        Branch.getInstance().initSession(launchOptions: launchOptions) { params , error in
          // catch deep link data
          guard let data = params as? [String: AnyObject] else { return }

          // save deep link data into global model to be referenced by any view controller
          BranchData.sharedInstance.data = data

          // navigate to view controller based on deep link data["type"] ("type" can be any custom key-value pair)
          guard let nav = data["type"] as? String else { return }
          switch nav {
              case "landing_page": self.window?.rootViewController?.present( SecondViewController(), animated: true, completion: nil)
              case "tutorial": self.window?.rootViewController?.present( SecondViewController(), animated: true, completion: nil)
              case "content": self.window?.rootViewController?.present( SecondViewController(), animated: true, completion: nil)
              default: break
          }
        }
        ```

    - Objective-C

        ```objc

        ```

- #### Display content
- #### Track content
- #### Track users
- #### Track events
- #### Track commerce
- #### Handle referrals

## Troubleshoot issues 

- #### Recommendations
- #### Sample app
- #### Simulate an install
- #### App not opening
- #### Data not pass through
- #### Deep links are long


