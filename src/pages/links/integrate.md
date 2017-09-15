## Understand deep linking

- #### Default link behavior
    - App is installed
        -  User `clicks` on a Branch deep link
        -  Device `opens` app
        -  Branch passes deep link `data` into app
    - App is not installed
        - User `clicks` on a Branch deep link
        - Device `navigates` to the App Store, Google Playstore, or Fallback URL
        - User `installs` and `opens` app
        - Branch passes deep link `data` into app

- #### Custom link behavior
    - ##### Pass data from link to app
        - Add link data from [Configuring deep links](#configure-deep-links)
        - Add key-values pairs from [Quick Links](/pages/dashboard/analytics/#quick-links)
        - Add query string `https://example.app.link/fzmLEhobLD?$custom_data=123` 
    - #####  Open web instead of app
        - When app is not installed 
            - Add query string `https://example.app.link?$ios_url=https://example.com`
            - Add link data `$ios_url = 'https://example.com'` ([docs](/pages/links/integrate/#redirections))
            - Add link data `$fallback_url = 'https://example.com'` ([docs](/pages/links/integrate/#redirections))
            - Add link data for a deep view `$ios_deepview = 'deepviewId'`  ([docs](/pages/links/integrate/#deepview))
            - Enable a `Deep View` globally on the [Branch Dashboard](https://dashboard.branch.io/web/deepviews)
            - Add `iOS/Android Custom URL` on the [Branch Dashboard](https://dashboard.branch.io/link-settings)
            - Add `Default URL` (`$fallback_url`) on the [Branch Dashboard](https://dashboard.branch.io/link-settings)
            - *(ordered by precedence)*
        - When app is installed
            - *iOS:* need to override `Universal Links`
                - Add `$web_only = true` ([docs](/pages/links/integrate/#redirections))
                - Add redirect `$ios_url = 'https://google.com'` ([docs](/pages/links/integrate/#redirections))
                - *or:* Append `/e/` to the deep link
                - e.g. `https://example.app.link/fzmLEhobLD` -> `https://example.app.link/e/fzmLEhobLD`
            - *Android:* need to override `App Links`
                - TODO: validate. may need `Always open app` unchecked
                - Uncheck `Enable App Links` and `Save` the [Branch Dashboard](https://dashboard.branch.io/link-settings)
                - Add redirect `$android_url = 'https://google.com'` ([docs](/pages/links/integrate/#redirections))
                - Add a broken URI Scheme with `$android_deeplink_path = 'random'` ([docs](/pages/links/integrate/#deep-linking))

- #### Social link behavior
    - Use [OG Tags](#open-graph) to display content as a preview
        - Basics are `$og_title`, `$og_description`, and `$og_image_url`
    - Use [Deep Views]() to display content as a website
        - Increases [install attribution](https://branch.io/deepview/)
        - Completes deep linking experience in [certain apps](#expected-redirect-behavior)

- #### Expected redirect behavior

    - Default behavior of deep link clicks

        | App | iOS App Installed | iOS App Not Installed | Android App Installed| Android App Not Installed | Notes
        | --- | --- | --- | --- | --- | --- |
        | Facebook Newsfeed | Fallback | Fallback | App | Fallback | Can force open iOS app using [`$uri_redirect_mode`](#deep-linking)
        | Facebook browser | App | Fallback | App | Fallback |
        | Facebook Messenger | Fallback | Fallback | App | Fallback | Can force open iOS app using [`$uri_redirect_mode`](#deep-linking)
        | Facebook Messenger browser | App | Fallback | App | Fallback |
        | Instagram | Fallback | Fallback | App | Fallback | Can force open iOS app using [`$uri_redirect_mode`](#deep-linking)
        | Snapchat | Fallback | Fallback | App | Fallback |
        | Twitter | Fallback | Fallback | App | Fallback | Can force open iOS app using [`$uri_redirect_mode`](#deep-linking)
        | Pinterest | Fallback | Fallback | Fallback | Fallback |
        | Chrome browser | App | Fallback | App | Fallback |
        | Safari address bar | Fallback | Fallback | - | - |
        | Safari web page | App | Fallback | - | - |
        | Firefox browser | Fallback | Fallback | App | Fallback |
        | UC browser | - | - | App | Fallback |
        | Naver browser | - | - | App | Fallback |
        | Kakao browser | - | - | App | Fallback |
        | Opera browser | - | - | Fallback | Fallback | 
        | Hangouts | App | Fallback | App | Fallback |
        | iMessage | App | Fallback | - | - |
        | Slack | App | Fallback | App | Fallback |
        | WeChat | Fallback | Fallback | Fallback | Fallback | You can customize [WeChat fallback urls](#redirections)
        | WhatsApp | App | Fallback | App | Fallback | `app.link` require https/http to be clickable
        | Apple Mail | App | Fallback | - | - |
        | Gmail | App | Fallback | App | Fallback 

- #### Supported platforms

    - Open your app on deep link click if your app is installed

        | | iOS | Requirements | Android | Requirements |
        | --- | --- | --- | --- | --- |
        | Facebook NewsFeed | ✔ | Enable [Deep Views](https://dashboard.branch.io/settings/deepviews) | ✔ |
        | Facebook Messanger | ✔ | Enable [Deep Views](https://dashboard.branch.io/settings/deepviews) | ✔ |  |
        | Instagram | ✔ | Enable [Deep Views](https://dashboard.branch.io/settings/deepviews) | ✔ |  |
        | SnapChat | ✔ | Enable [Deep Views](https://dashboard.branch.io/settings/deepviews) | ✔ | `app.link` deep links are not clickable  |
        | Twitter | ✔ | Enable [Deep Views](https://dashboard.branch.io/settings/deepviews) | ✔ |
        | Pinterest | ✔ | Enable [Deep Views](https://dashboard.branch.io/settings/deepviews) | ✔ |
        | Line | ✔ | Enable [Deep Views](https://dashboard.branch.io/settings/deepviews) | ✔ |
        | Skype | ✔ | Enable [Deep Views](https://dashboard.branch.io/settings/deepviews) | ✔ |
        | Slack | ✔ | | ✔ | |
        | Chrome address bar | ✔ | | ✔ |
        | Chrome web page | ✔ | | ✔ |
        | FireFox address bar | ✘ | | ✔ |
        | FireFox web page | ✔ | | ✔ |
        | Safari address bar | ✘ | | |
        | Safari web page | ✔ | | |
        | WeChat | ✔ | Enable [Deep Views](https://dashboard.branch.io/settings/deepviews) | ✔ |
        | WhatsApp | ✔ | `app.link` require https/http to be clickable | ✔ | `app.link` require https/http to be clickable
        | Hangouts | ✔ | | ✔ |
        | iMessage | ✔ | | |
        | Apple Mail | ✔ | | |
        | Gmail | ✔ | | ✔ |


## Create deep links

- #### Short links
    - Use [Quick Links](/pages/dashboard/analytics/#quick-links) for fast link creation and easy tracking
    - Use our [App SDK](#dialog-code) to create and share links within your app
    - Use our [Web SDK](/pages/web/integrate/#create-deep-link) to create to links convert web to app users
    - Use our [HTTP API](/pages/apps/api/#link-create) to programmatically create links from your server

- #### Long links
    - If you don't need a short link and care to avoid a network call, you can create links by appending query parameters to the Branch domain.
        1. Start with an exiting Branch link, or your Branch link domain: **http://[branchsubdomain]**, like _yourapp.app.link_ or _links.yourdomain.com_.
        2. Append `?` to start the query params string: **http://[branchsubdomain]?**
            - If you're creating a new link and and you're using the legacy `bnc.lt` domain or a custom domain/subdomain as the base for your links, instead append `/a/your_Branch_key?`: `http://bnc.lt/a/your_branch_key?`
        3. Append any additional key/value pairs, and analytics or link control parameters.

    - Here's an example of a finalized dynamic link (line breaks added for legibility):

        ```sh
        https://[branchsubdomain]?
          %24deeplink_path=article%2Fjan%2F123&
          %24fallback_url=https%3A%2F%2Fgoogle.com&
          channel=facebook&
          feature=affiliate&
          user_id=4562&
          name=Alex
        ```

        The following keys have been embedded:

        | Key | Value |
        | --- | --- |
        | **$deeplink_path** | article/jan/123 |
        | **$fallback_url** | https://google.com |
        | **channel** | facebook |
        | **feature** | affiliate |
        | **user_id** | 4562 |
        | **name** | Alex |

## Configure deep links

- #### Analytical labels

    - These labels allow you to filter and organize your deep links

        | Key | Default | Usage
        | --- | --- | ---
        | channel | | Use channel to tag the route that your link reaches users. For example, tag links with `'Facebook'` or `'LinkedIn'` to help track clicks and installs through those paths separately
        | feature | | This is the feature of your app that the link might be associated with. For example, if you had built a referral program, you would label links with the feature 'referral'
        | campaign | | Use this field to organize the links by actual campaign. For example, if you launched a new feature or product and want to run a campaign around that
        | stage | | Use this to categorize the progress or category of a user when the link was generated. For example, if you had an invite system accessible on level 1, level 3 and 5, you could differentiate links generated at each level with this parameter
        | tags | | This is a free form entry with unlimited values `['string']`. Use it to organize your link data with labels that don't fit within the bounds of the above
        | alias | | Specify a link alias in place of the standard encoded short URL e.g. `yourdomain.com/youralias`. Link aliases are unique, immutable objects that cannot be deleted. You cannot change the alias of existing links. Aliases on the legacy `bnc.lt` domain are incompatible with Universal Links and Spotlight
        | type | `0` | Must be an `int`. Set to `1` to limit deep link to a single use. Set to `2` to make the link show up under [Quick Links](https://dashboard.branch.io/marketing) while adding `$marketing_title` to `data`. Does not work with the Native SDKs.

- #### Custom data

    - Pass any custom data to be read inside your app

        | Key | Value | Usage
        | --- | --- | ---
        | random | `123` | Any key-value pair
        | custom_data | `true` | Any key-value pair
        | any_value | `{ 'random': 'dictionary' }` | Any key-value pair
        | look_at | `[1,2,3,4,5,6]` | Any key-value pair
        | nav_here | `content/123` | Any key-value pair

- #### Redirections

    - Navigate to different locations based on device information
    - Navigation URLs must be websites, not deep links

        | Key | Default | Usage
        | --- | --- | ---
        | $fallback_url | | Change the redirect endpoint for all platforms - so you don't have to enable it by platform. Note that Branch will forward all robots to this URL, which **overrides any OG tags** entered in the link.  System-wide Default URL (set in Link Settings)
        | $fallback_url_xx | | Change the redirect endpoint for all platforms based on a lower-case Alpha-2 country code conforming to [ISO 3166](https://www.iso.org/obp/ui/#search). (e.g. `$fallback_url_de` for Germany)
        | $desktop_url | | Change the redirect endpoint on desktops Text-Me-The-App page (set in Link Settings)
        | $ios_url | | Change the redirect endpoint for iOS  App Store page for your app (set in Link Settings)
        | $ipad_url | | Change the redirect endpoint for iPads `$ios_url` value
        | $android_url  | | Change the redirect endpoint for Android  Play Store page for your app (set in Link Settings)
        | $windows_phone_url  | | Change the redirect endpoint for Windows OS Windows Phone default URL (set in Link Settings)
        | $blackberry_url | | Change the redirect endpoint for Blackberry OS  BlackBerry default URL (set in Link Settings)
        | $fire_url | | Change the redirect endpoint for Amazon Fire OS Fire default URL (set in Link Settings)
        | $ios_wechat_url | | Change the redirect endpoint for WeChat on iOS devices `$ios_url` value
        | $android_wechat_url | | Change the redirect endpoint for WeChat on Android devices  `$android_url` value
        | $after_click_url | | URL redirect to after the main click redirect has completed
        | $web_only | `false` | Force to open the `$fallback_url` instead of the app

- #### Redirection errors   

    - Prevent error messages from other apps when Branch deep links are clicked

        | Key | Value | Usage
        | --- | --- | ---
        | $uri_redirect_mode | **0** | This is the default value that yields the standard behavior where we don't try to open the app if the user can see an error.
        | $uri_redirect_mode | **1** | Smart redirect mode. Same behavior as 0 until we know the user has the app installed through Branch persona data. In that case, force URI schemes to open the app.
        | $uri_redirect_mode | **2** | Forceful redirect mode. Always try to force open the app, even if it risks showing an error message when the app is not installed. 

    - Supported Apps

        - Facebook newsfeed iOS
        - Instagram iOS
        - Twitter iOS
        - Safari iOS
        - Firefox iOS & Android

- #### Deep linking

    - Navigate to different locations based on device information

        | Key | Default | Usage
        | --- | --- | ---
        | $deeplink_path | `open?link_click_id=1234` | Set the deep link path for all platforms - so you don't have to enable it by platform. When the Branch SDK receives a link with this parameter set, it will automatically load the custom URI path contained within
        | $android_deeplink_path | | Set the deep link path for Android apps When the Branch SDK receives a link with this parameter set, it will automatically load the custom URI path contained within
        | $ios_deeplink_path | | Set the deep link path for iOS apps. When the Branch SDK receives a link with this parameter set, it will automatically load the custom URI path contained within
        | $match_duration | `7200` | Lets you control the snapshotting match timeout (the time that a click will wait for an app open to match) also known as attribution window. Specified in seconds
        | $always_deeplink | `true` | Set to `false` to make links always fall back to your mobile site. Does not apply to Universal Links or Android App Links.
        | $ios_redirect_timeout | `750` | Control the timeout that the client-side JS waits after trying to open up the app before redirecting to the App Store. Specified in milliseconds
        | $android_redirect_timeout | `750` | Control the timeout that the client side JS waits after trying to open up the app before redirecting to the Play Store. Specified in milliseconds
        | $one_time_use | `false` | Set to `true` to limit deep linking behavior of the generated link to a single use. Can also be set using type
        | $custom_sms_text | | Text for SMS link sent for desktop clicks to this link. Must contain `{{ link }}` Value of Text me the app page in Settings
        | $marketing_title | | The Marketing Title for the deep link in the [Quick Links](https://dashboard.branch.io/marketing)

- #### Content

    - Handle content properties

        | Key | Default | Usage
        | --- | --- | ---
        | $publicly_indexable | `1` | Cannot modify here. Needs to be set by the Branch Universal Object
        | $keywords | | Keywords for which this content should be discovered by. Just assign an array of strings with the keywords you'd like to use
        | $canonical_identifier | | This is the unique identifier for content that will help Branch dedupe across many instances of the same thing. Suitable options: a website with pathing, or a database with identifiers for entities
        | $exp_date | `0` | The date when the content will not longer be available or valid. Cannot modify here. Needs to be set by the Branch Universal Object. Must be epoch timestamp with milliseconds
        | $content_type | | This is a label for the type of content present. Apple recommends that you use uniform type identifier as described here

- #### DeepView

    - Enable / control [active deepview](/pages/web/deep-views/#active-deepviews) properties

        | Key | Default | Usage
        | --- | --- | ---
        | $ios_deepview | `default_template` | The name of the deepview template to use for iOS
        | $android_deepview | `default_template` | The name of the deepview template to use for Android
        | $desktop_deepview | `default_template` | The name of the deepview template to use for the Desktop

    - Control [passive deepview](/pages/web/deep-views/#passive-deepviews) templates

        | Key | Value | Default
        | --- | --- | ---
        | $ios_passive_deepview | The name of the template to use for iOS. | `default_template`
        | $android_passive_deepview | The name of the template to use for Android. | `default_template`

- #### Open Graph

    - Handle Facebook properties

        | Key | Default | Usage
        | --- | --- | ---
        | $og_title | Set on dashboard | Set the title of the link as it will be seen in social media displays
        | $og_description | Set on dashboard | Set the description of the link as it will be seen in social media displays
        | $og_image_url | Set on dashboard | Set the image of the link as it will be seen in social media displays
        | $og_image_width | | Set the image's width in pixels for social media displays
        | $og_image_height | | Set the image's height in pixels for social media displays
        | $og_video | | Set a video as it will be seen in social media displays
        | $og_url | | Set the base URL of the link as it will be seen in social media displays
        | $og_type | | Set the type of custom card format link as it will be seen in social media displays
        | $og_redirect | | (Advanced, not recommended) Set a custom URL that we redirect the social media robots to in order to retrieve all the appropriate tags
        | $og_app_id | Set on dashboard | (Rarely used) Sets the app id tag

- #### Twitter

    - Handle Twitter properties

        | Key | Default | Usage
        | --- | --- | ---
        | $twitter_card | | Set the Twitter card type of the link
        | $twitter_title | Set on dashboard | Set the title of the Twitter card
        | $twitter_description | Set on dashboard | Set the description of the Twitter card
        | $twitter_image_url | Set on dashboard | Set the image URL for the Twitter card
        | $twitter_site | | Set the site for Twitter
        | $twitter_app_country | | Set the app country for the app card
        | $twitter_player | | Set the video player's URL. Defaults to the value of `$og_video`.
        | $twitter_player_width | | Set the player's width in pixels
        | $twitter_player_height | | Set the player's height in pixels

- #### Universal Object

    - Properties for the Branch Universal Object within your [app](#dialog-code) integration

        | Key | Default | Usage | Link Property
        | --- | :-: | --- | :-:
        | canonicalIdentifier | | **(Required)** This is the unique identifier for content that will help Branch dedupe across many instances of the same thing. Suitable options: a website with pathing, or a database with identifiers for entities | `$canonical_identifier`
        | canonicalUrl | | The canonical URL, used for SEO purposes | `$canonical_url`
        | title | | The name for the piece of content | `$og_title`
        | contentDescription | | A description for the content | `$og_description`
        | contentImageUrl | | The image URL for the content. Must be an absolute path | `$og_image_url `
        | price | | The price of the item | `$amount`
        | currency | | The currency representing the price in ISO 4217 currency code | `$currency`
        | contentIndexingMode | `"public"` | Can be set to either `"public"` or `"private"`. Public indicates that you'd like this content to be discovered by other apps. | `$publicly_indexable`
        | contentMetadata | | Any custom key-value data e.g. `{ "custom": "data" }`

    - Best practices for the Branch Universal Object
        - Do
            - Set the `canonicalIdentifier` to a unique, de-duped value across instances of the app
            - Ensure that the `title`, `contentDescription` and `imageUrl` properly represent the object
            - Initialize the Branch Universal Object and call userCompletedAction with the `BranchEvent.VIEW` on page load
            - Call showShareSheet and createShortLink later in the life cycle, when the user takes an action that needs a link
            - Call the additional object events (purchase, share completed, etc) when the corresponding user action is taken
        - Do not
            - Set the same `title`, `contentDescription` and `imageUrl` across all objects
            - Wait to initialize the object and register views until the user goes to share
            - Wait to initialize the object until you conveniently need a link
            - Create many objects at once and register views in a `for` loop.


## Read deep links

- Deep link data gets sent from your link to your [app](#dialog-code) or [website](/pages/web/integrate/) integration

- #### Data structure

    - Example deep link data structure

        ```json
        {
          "identity_id": "427469360685348303",
          "link": "https://example.app.link?%24identity_id=427469360685348303",
          "session_id": "429691081177874743",
          "data": {
            "$canonical_identifier": "item/1503684554354.28",
            "$desktop_url": "http://example.com/home",
            "$exp_date": 0,
            "$identity_id": "427469360685348303",
            "$og_description": "My Content Description",
            "$og_image_url": "http://lorempixel.com/200/200/",
            "$og_title": "46D6D28E-0390-40E4-A856-BD74F34D24C8",
            "$one_time_use": false,
            "$publicly_indexable": 1,
            "+click_timestamp": 1503684563,
            "+clicked_branch_link": true,
            "+is_first_session": false,
            "+match_guaranteed": true,
            "custom": "blue",
            "random": "FE848A5B-78F7-42EC-A253-9F795FE91692",
            "added": "1503684554354.33",
            "~campaign": "new launch",
            "~channel": "facebook",
            "~creation_source": 3,
            "~feature": "sharing",
            "~id": 429691043152332059,
            "~referring_link": "https://example.app.link/X7OsnWv9TF",
            "~stage": "new person",
            "~tags": [
              "one",
              "two"
            ]
          }
        }
        ```

- #### Reserved prefixes

    - Branch adds additional properties to your deep link data to explain the link

        | Prefix | Usage |
        | --- | --- |
        | $ | Branch reserved keyword
        | ~ | Branch analytical data
        | + | Branch added values

- #### Callback values
    
    - Additional properties read from the `initSession` within your [app](#dialog-code) and [website](/pages/web/integrate/) integrations

        | Key | Default | Usage
        | --- | --- | ---
        | ~id | | Automatically generated 18 digit ID number for the link that drove the install/open, if present (0 for dynamic and 3P links)
        | ~referring_link | | The referring link that drove the install/open, if present
        | ~creation_source | |  Where the link was created (`0` API , `1` Quick Link, `2` SDK, `3` iOS SDK , `4` Android SDK , `5` Web SDK, `6` A links, `7` Dynamic, `8` Third party)
        | +match_guaranteed | | If the match was made with 100% accuracy
        | +referrer | | The referrer for the link click, if a link was clicked
        | +phone_number | | The phone number of the user, if the user texted himself/herself the app
        | +is_first_session | `false` | `true` if first session (install), `false` if any other session (open)
        | +clicked_branch_link | `false` | Whether or not the user clicked a Branch link that triggered this session
        | +non_branch_link | | App was opened from a non Branch link (third party, invalid Branch deep link, or Branch key mismatch)

## Troubleshoot issues

- #### Deep links do not open app
    - Make sure you have completed [Configure your dashboard](/pages/dashboard/integrate/) and [Configure your app](#dialog-code)
    - Make sure the `Branch key` in your app ([Configure your app](#dialog-code)) matches the `Branch key` in your deep link ([View deep link data](#view-deep-link-data))
    - Make sure you have not disabled deep linking ([Re-enable universal linking](/pages/apps/ios/#re-enable-universal-linking))
    - Make sure you meet the requirements for [Supported platforms](#expected-redirect-behavior)
    - Make sure the link the user is click on matches your `link domain` from the [Branch Dashboard](https://dashboard.branch.io/link-settings)

- #### View deep link data
    - Add `?debug=1` to the end of your deep link
    - For example: https://example.app.link/aQXXDHaxKF?debug=1
