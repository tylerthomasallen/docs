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

- #### Install Branch Kit

    - Option 1: [CocoaPods](https://cocoapods.org/)

        ```sh hl_lines="7"
        platform :ios, '8.0'

        target 'APP_NAME' do
          # if swift
          use_frameworks!

          pod 'mParticle-BranchMetrics'
        end
        ```

    - Option 2: [Carthage](https://github.com/Carthage/Carthage)

        ```sh
        github "mparticle-integrations/mparticle-apple-integration-branchmetrics"
        ```

- #### Enable Branch on mParticle

    - Retrieve your Branch Key on the [Link Settings](https://dashboard.branch.io/settings/link) page of the Branch dashboard.
    - From your [mParticle dashboard](https://app.mparticle.com/) navigate to the Services page. (The paper airplane icon on the left side)
    - Scroll down to the Branch tile, or enter Branch in the search bar.
    - Click on the Branch tile and then select "Activate a Platform".
    - Click on the Apple icon, then toggle the status ON.
    - Enter your Branch key in the marked field and click "Save".

- #### Initialize Branch
    
    As with any kit, mParticle will automatically handle initializing Branch sessions. At this point you should start seeing your Branch session data - including installs, re-opens, and any custom events - in your Branch dashboard.

- #### Handle Incoming Links

    - Swift 3.0

        ```swift hl_lines="12 17 18 19 20 21 22 23 24 25 26 27 30 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60"
        import UIKit

        @UIApplicationMain
        class AppDelegate: UIResponder, UIApplicationDelegate {

        var window: UIWindow?

        func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
          
          // This observer must be added before initializing the mParticle session.
          // Failure to do so will cause some deep links to be missed.
          NotificationCenter.default.addObserver(self, selector: #selector(handleKitDidBecomeActive(_:)), name: Notification.Name.mParticleKitDidBecomeActive, object: nil)

          return true
        }

        func handleKitDidBecomeActive(_ notification: Notification) {
            guard let kitNumber = notification.userInfo?[mParticleKitInstanceKey] as? NSNumber else { return }
            guard let kitInstance = MPKitInstance(rawValue: kitNumber.uintValue) else { return }

            switch kitInstance {
                case .branchMetrics:
                    checkForDeeplink()
                default:
                    break
            }
        }

        func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([Any]?) -> Void) -> Bool {
            checkForDeeplink()
            return true
        }

        func checkForDeeplink() {
            MParticle.sharedInstance().checkForDeferredDeepLink { linkInfo, error in
                // A few typical scenarios where this block would be invoked:
                //
                // (1) Base case:
                //     - User does not tap on a link, and then opens the app (either after a fresh install or not)
                //     - This block will be invoked with Branch Metrics' response indicating that this user did not tap on a link
                //
                // (2) Deferred deep link:
                //     - User without the app installed taps on a link
                //     - User is redirected from Branch Metrics to the App Store and installs the app
                //     - User opens the app
                //     - This block will be invoked with Branch Metrics' response containing the details of the link
                //
                // (3) Deep link with app installed:
                //     - User with the app already installed taps on a link
                //     - Application opens via openUrl/continueUserActivity, mParticle forwards launch options etc to Branch
                //     - This block will be invoked with Branch Metrics' response containing the details of the link
                //
                // If the user navigates away from the app without killing it, this block could be invoked several times:
                // once for the initial launch, and then again each time the user taps on a link to re-open the app.

                guard let linkInfo = linkInfo else { return }

                print("params:" + linkInfo)
            }
        }
        ```

    - Objective-C

        ```objc hl_lines="14 15 16 17 18 23 24 25 26 27 28 29 30 31 34 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68"
        #import "AppDelegate.h"
        #import "Branch/Branch.h"

        @interface AppDelegate ()

        @end

        @implementation AppDelegate

        - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

          // This observer must be added before initializing the mParticle session.
          // Failure to do so will cause some deep links to be missed.
          NSNotificationCenter *notificationCenter = [NSNotificationCenter defaultCenter];
          [notificationCenter addObserver:self
                                 selector:@selector(handleKitDidBecomeActive:)
                                     name:mParticleKitDidBecomeActiveNotification
                                   object:nil];

          return YES;
        }

        - (void)handleKitDidBecomeActive:(NSNotification *)notification {
          NSDictionary *userInfo = [notification userInfo];
          NSNumber *kitNumber = userInfo[mParticleKitInstanceKey];
          MPKitInstance kitInstance = (MPKitInstance)[kitNumber integerValue];

          if (kitInstance == MPKitInstanceBranchMetrics) {
            [self checkForDeeplink];
          }
        }

        - (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler {
          [self checkForDeeplink];
          return YES;
        }

        - (void)checkForDeeplink {
          MParticle * mParticle = [MParticle sharedInstance];

          [mParticle checkForDeferredDeepLinkWithCompletionHandler:^(NSDictionary<NSString *,NSString *> * _Nullable params, NSError * _Nullable error) {
            //
            // A few typical scenarios where this block would be invoked:
            //
            // (1) Base case:
            //     - User does not tap on a link, and then opens the app (either after a fresh install or not)
            //     - This block will be invoked with Branch Metrics' response indicating that this user did not tap on a link
            //
            // (2) Deferred deep link:
            //     - User without the app installed taps on a link
            //     - User is redirected from Branch Metrics to the App Store and installs the app
            //     - User opens the app
            //     - This block will be invoked with Branch Metrics' response containing the details of the link
            //
            // (3) Deep link with app installed:
            //     - User with the app already installed taps on a link
            //     - Application opens via openUrl/continueUserActivity, mParticle forwards launch options etc to Branch
            //     - This block will be invoked with Branch Metrics' response containing the details of the link
            //
            // If the user navigates away from the app without killing it, this block could be invoked several times:
            // once for the initial launch, and then again each time the user taps on a link to re-open the app.

            if (params) {
              //Insert custom logic to inspect the params and route the user/customize the experience.
              NSLog(@"params: %@", params.description);
            }
          }];
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
        buo.canonicalUrl = "http://example.com/rawr_rawr"
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
