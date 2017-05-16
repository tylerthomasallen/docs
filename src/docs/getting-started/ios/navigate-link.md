# Deferred Deep Linking for iOS
*Questions? [Contact us](https://support.branch.io/support/tickets/new)*

Below is an example of how to route to specific pages based on the data from a Branch deep link. I made a simple app for another partner today who was using Swift 2.3. Here is a gif of what the app looked like (was testing deep links with Twitter) http://i.imgur.com/vcqLCS3.gif.  If you need an Objective-C example, reach out and I'll see if I can create one.

1. Add logic in `initSessionWithLaunchOptions` to get the Branch data on a deep link click
1. Save the Branch data to a global model (ex `DeepLinkModel`)
1. Parse the Branch data to determine which View Controller to navigate to
1. Present the ViewController
1. In the `viewDidLoad` of the ViewController, pull the Branch Data from the model (ex `DeepLinkModel`)
1. Fill your View with the content from the model


> Swift 2.3

```swift
import UIKit
import Branch

// MARK: - App Delegate
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    
    var window: UIWindow?
    
    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject : AnyObject]?) -> Bool {
        // first view controller for the app (if no storyboard)
        navigateToFirstController()
        
        // recommend for testing
        Branch.getInstance().setDebug()
        
        // load Branch and listen for Deep link clicks
        Branch.getInstance().initSessionWithLaunchOptions(launchOptions, isReferrable: true) { (params, error) in
            // parse Branch data
            guard let data = params as? [String: AnyObject] else { return }
            
            // save Branch data into a model
            DeepLinkModel.sharedInstance.data = data
            
            // navigate to view controller based on data["nav_here"] (can be renamed to any custom key-value you want)
            guard let nav = data["nav_here"] as? String else { return }
            switch nav {
            case "tutorial": self.window?.rootViewController?.presentViewController(ViewControllerOne(), animated: true, completion: nil)
            case "content": self.window?.rootViewController?.presentViewController(ViewControllerTwo(), animated: true, completion: nil)
            default: break
            }
        }
        return true
    }
    
    func navigateToFirstController() {
        // default logic to navigate to the first view controller without a storyboard
        window = UIWindow(frame: UIScreen.mainScreen().bounds)
        guard let window = window else { return }
        window.backgroundColor = .whiteColor()
        window.rootViewController = ViewControllerMain()
        window.makeKeyAndVisible()
    }
    
    func application(application: UIApplication, continueUserActivity userActivity: NSUserActivity, restorationHandler: ([AnyObject]?) -> Void) -> Bool {
        // universal links
        Branch.getInstance().continueUserActivity(userActivity)
        return true
    }
    
    func application(app: UIApplication, openURL url: NSURL, options: [String : AnyObject]) -> Bool {
        // uri schemes
        Branch.getInstance().handleDeepLink(url)
        return true
    }
    
    func application(application: UIApplication, didReceiveRemoteNotification userInfo: [NSObject : AnyObject]) {
        // push notifications
        Branch.getInstance().handlePushNotification(userInfo)
    }
}

// MARK: - Models
class DeepLinkModel {
    // global deep link data singleton
    static let sharedInstance = DeepLinkModel()
    private init() {}
    var data: [String: AnyObject]?
}

// MARK: - View Controllers
class ViewControllerMain: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .whiteColor()
    }
}

class ViewControllerOne: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // fill the view with Branch data
        let label = UILabel(frame: CGRectMake(0, 0, view.frame.size.width, view.frame.size.height))
        label.textAlignment = .Center
        label.text = DeepLinkModel.sharedInstance.data?["random_text"] as? String ?? ""
        
        view.backgroundColor = .blueColor()
        view.addSubview(label)
        view.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(tap)))
    }
    func tap() {
        // dismiss for testing
        dismissViewControllerAnimated(true, completion: nil)
    }
}

class ViewControllerTwo: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // fill the view with Branch data
        let label = UILabel(frame: CGRectMake(0, 0, view.frame.size.width, view.frame.size.height))
        label.textAlignment = .Center
        label.text = DeepLinkModel.sharedInstance.data?["random_text"] as? String ?? ""
        
        view.backgroundColor = .greenColor()
        view.addSubview(label)
        view.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(tap)))
    }
    func tap() {
        // dismiss for testing
        dismissViewControllerAnimated(true, completion: nil)
    }
}
```

> Swift 3.0

```swift
import UIKit
import Branch

// MARK: - App Delegate
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    
    var window: UIWindow?
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
        // first view controller for the app (if no storyboard)
        navigateToFirstController()
        
        // recommend for testing
        Branch.getInstance().setDebug()
        
        // load Branch and listen for Deep link clicks
        Branch.getInstance().initSession(launchOptions: launchOptions) { (params, error) in
            // parse Branch data
            guard let data = params as? [String: AnyObject] else { return }
            
            // save Branch data into a model
            DeepLinkModel.sharedInstance.data = data
            
            // navigate to view controller based on data["nav_here"] (can be renamed to any custom key-value you want)
            guard let nav = data["nav_here"] as? String else { return }
            switch nav {
            case "tutorial": self.window?.rootViewController?.present(ViewControllerOne(), animated: true, completion: nil)
            case "content": self.window?.rootViewController?.present(ViewControllerTwo(), animated: true, completion: nil)
            default: break
            }
        }
        return true
    }
    
    func navigateToFirstController() {
        // default logic to navigate to the first view controller without a storyboard
        window = UIWindow(frame: UIScreen.main.bounds)
        guard let window = window else { return }
        window.backgroundColor = .white
        window.rootViewController = ViewControllerMain()
        window.makeKeyAndVisible()
    }
    
    func application(_ app: UIApplication, open url: URL, options: [UIApplicationOpenURLOptionsKey : Any] = [:]) -> Bool {
        // universal links
        Branch.getInstance().handleDeepLink(url)
        return true
    }
    
    func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([Any]?) -> Void) -> Bool {
        // uri schemes
        Branch.getInstance().continue(userActivity)
        return true
    }
    
    func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
        // push notifications
        Branch.getInstance().handlePushNotification(userInfo)
    }
}

// MARK: - Models
class DeepLinkModel {
    // global deep link data singleton
    static let sharedInstance = DeepLinkModel()
    private init() {}
    var data: [String: AnyObject]?
}

// MARK: - View Controllers
class ViewControllerMain: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
    }
}

class ViewControllerOne: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // fill the view with Branch data
        let label = UILabel(frame: CGRect(x: 0, y: 0, width: view.frame.size.width, height: view.frame.size.height))
        label.textAlignment = .center
        label.text = DeepLinkModel.sharedInstance.data?["random_text"] as? String ?? ""
        
        view.backgroundColor = .blue
        view.addSubview(label)
        view.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(tap)))
    }
    func tap() {
        // dismiss for testing
        dismiss(animated: true, completion: nil)
    }
}

class ViewControllerTwo: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // fill the view with Branch data
        let label = UILabel(frame: CGRect(x: 0, y: 0, width: view.frame.size.width, height: view.frame.size.height))
        label.textAlignment = .center
        label.text = DeepLinkModel.sharedInstance.data?["random_text"] as? String ?? ""
        
        view.backgroundColor = .green
        view.addSubview(label)
        view.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(tap)))
    }
    func tap() {
        // dismiss for testing
        dismiss(animated: true, completion: nil)
    }
}
```