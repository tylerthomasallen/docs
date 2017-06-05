## iOS - Integrate Branch

#### Configure Branch Dashboard

- Complete your [Branch Dashboard](https://dashboard.branch.io/settings/link)

    ![image](http://i.imgur.com/aFb69BS.png)
    ![image](http://i.imgur.com/Edpfn04.png)

#### Configure Bundle Identifier

- Bundle Id matches [Branch Dashboard](https://dashboard.branch.io/settings/link)

    ![image](http://i.imgur.com/BHAQIQf.png)

#### Configure Associated Domains

- Add [Branch Dashboard](https://dashboard.branch.io/settings/link) values

    ![image](http://i.imgur.com/67t6hSY.png)

#### Configure Entitlements

- Confirm entitlements are within target

    ![image](http://i.imgur.com/vhwis7f.png)
      
#### Configure Info.pList

- Add [Branch Dashboard](https://dashboard.branch.io/settings/link) values

    ![image](http://i.imgur.com/PwXnHWz.png)

#### Confirm App Prefix

- From your [Apple Developer Account](https://developer.apple.com/account/ios/identifier/bundle)

    ![image](http://i.imgur.com/2EoN1i0.png)

#### Install Branch

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

- Option 3: Manually install [source code](https://github.com/BranchMetrics/ios-branch-deep-linking/releases) 

    ![image](http://i.imgur.com/0NcOrkE.png)

#### Initialize Branch

- Swift 3.0 

    ```swift hl_lines="2 10 11 12 13 14 19 20 25 26 31 32"
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

    ```objc hl_lines="2 11 12 13 14 15 21 22 27 28 33 34"
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

#### Test Deep Link

  - Wait 15 minutes after saving changes on the [Branch Dashboard](https://dashboard.branch.io/settings/link).
  - Create a deep link from the [Branch Marketing Dashboard](https://dashboard.branch.io/marketing).
  - Delete and reinstall the app.
  - Compile and test on a device.
  - Paste deep link in Apple Notes. 
  - Long press on the deep link (not 3D Touch).
  - Click `Open in "APP_NAME"` to open app.
  - ![image](http://i.imgur.com/VJVICXd.png)

## iOS - Features

#### Create Content Reference

- The `Branch Universal Object` encapsulates the thing you want to share (content or user)

  - Swift 3.0 

    ```swift
    // only canonical identifier is required
    let branchUniversalObject = BranchUniversalObject(canonicalIdentifier: "item/12345")
    branchUniversalObject.title = UUID.init().uuidString
    branchUniversalObject.contentDescription = "My Content Description"
    branchUniversalObject.imageUrl = "http://lorempixel.com/200/200/"
    branchUniversalObject.canonicalUrl = "http://s3z3.app.link/rawr_rawr"
    branchUniversalObject.contentIndexMode = .public
    branchUniversalObject.addMetadataKey("property1", value: "blue")
    ```
        
  - Objective-C

    ```objc
    // only canonical identifier is required
    BranchUniversalObject *branchUniversalObject = [[BranchUniversalObject alloc] initWithCanonicalIdentifier:@"item/12345"];
    branchUniversalObject.title = @"My Content Title";
    branchUniversalObject.contentDescription = @"My Content Description";
    branchUniversalObject.imageUrl = @"https://example.com/mycontent-12345.png";
    [branchUniversalObject addMetadataKey:@"property1" value:@"blue"];
    [branchUniversalObject addMetadataKey:@"property2" value:@"red"];
    ```

#### Create Deep Link

- Generate a deep link within your app

  - Swift 3.0 

    ```swift
    let linkProperties: BranchLinkProperties = BranchLinkProperties()
    linkProperties.feature = "sharing"
    linkProperties.channel = "facebook"
    linkProperties.campaign = "meow meow"
    linkProperties.addControlParam("$desktop_url", withValue: "http://example.com/home")
    linkProperties.addControlParam("random", withValue: UUID.init().uuidString)

    branchUniversalObject.getShortUrl(with: linkProperties) { url, error in
      guard let url = url else { return }
      print(url)
    }
    ```
        
  - Objective-C

    ```objc
    // optional values
    BranchLinkProperties *linkProperties = [[BranchLinkProperties alloc] init];
    linkProperties.feature = @"sharing";
    linkProperties.channel = @"facebook";
    [linkProperties addControlParam:@"$desktop_url" withValue:@"http://example.com/home"];
    [linkProperties addControlParam:@"$ios_url" withValue:@"http://example.com/ios"];

    // generate link
    [branchUniversalObject getShortUrlWithLinkProperties:linkProperties andCallback:^(NSString *url, NSError *error) {
        if (!error) {
    NSLog(@"success getting url! %@", url);
        }
    }];
    ```

#### Share Deep Link

- Share deep links between users and apps

  - Swift 3.0 

    ```swift
    // optional values
    let linkProperties: BranchLinkProperties = BranchLinkProperties()
    linkProperties.feature = "sharing"
    linkProperties.channel = "facebook"
    linkProperties.campaign = "meow meow"
    linkProperties.addControlParam("$desktop_url", withValue: "http://example.com/home")
    linkProperties.addControlParam("random", withValue: UUID.init().uuidString)
    
    // share link
    branchUniversalObject.showShareSheet(with: linkProperties, andShareText: text , from: controller) { (activity, success) in
      print(activity ?? "none", success)
    }
    ```
        
  - Objective-C

    ```objc
    // optional values
    BranchLinkProperties *linkProperties = [[BranchLinkProperties alloc] init];
    linkProperties.feature = @"sharing";
    linkProperties.channel = @"facebook";
    [linkProperties addControlParam:@"$desktop_url" withValue:@"http://example.com/home"];
    [linkProperties addControlParam:@"$ios_url" withValue:@"http://example.com/ios"];

    // share link
    [branchUniversalObject showShareSheetWithLinkProperties:linkProperties andShareText:@"Super amazing thing I want to share!" fromViewController:self completion:^(NSString *activityType, BOOL completed) {
        NSLog(@"finished presenting");
    }];
    ```

#### Navigate to Content

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



## iOS - Troubleshooting

#### Why does my app not open?
#### Why does my deep link data not pass through?
#### Why are my deep links long?
#### How do I create offline deep links?

