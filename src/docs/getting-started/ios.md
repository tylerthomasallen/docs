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
        
- Objective-C

    ```objc hl_lines="2 11 12 13 14 15 21 22 27 28 33 34"
    #import "AppDelegate.h"
    #import "Branch/Branch.h"

    @interface AppDelegate ()

    @end

    @implementation AppDelegate

    + (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
        [[Branch getInstance] setDebug]; // for debug and development only
        [[Branch getInstance] initSessionWithLaunchOptions:launchOptions andRegisterDeepLinkHandler:^(NSDictionary * _Nonnull params, NSError * _Nullable error) {
            // listener for Branch Deep Link data
            NSLog(@"%@", params);
        }];

        return YES;
    }

    + (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
        // handler for URI Schemes (depreciated in iOS 9.2+, but still used by some Google apps)
        [[Branch getInstance] handleDeepLink:url];
        return YES;
    }

    + (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler {
        // handler for Universal Links
        [[Branch getInstance] continueUserActivity:userActivity];
        return YES;
    }

    + (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {
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


#### Create Deep Link

- Swift 3.0 

    ```swift
   
    ```
        
- Objective-C

    ```objc
    
    ```

#### Share Deep Link

- Swift 3.0 

    ```swift
   
    ```
        
- Objective-C

    ```objc
    
    ```


#### Navigate to ViewController

- Create deep link
- Add any custom key-value pair
- Read custom key-value pair

    + Swift 3.0

        ```swift
       
        ```
            
    + Objective-C

        ```objc
        
        ```



## iOS - Troubleshooting

#### Why does my app not open?
#### Why does my deep link data not pass through?
#### Why are my deep links long?
#### How do I create offline deep links?

