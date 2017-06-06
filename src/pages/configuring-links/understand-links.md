
## Link behavior

#### Default behavior

- App is installed
    -  User `clicks` on a Branch deep link
    -  Device `opens` app
    -  Branch passes deep link `data` into app
- App is not installed
    - User `clicks` on a Branch deep link
    - Device navigates to the App Store, Google Playstore, or Fallback URL
    - User `installs` and `opens` app
    - Branch passes deep link `data` into app

#### Custom behavior

- Pass custom data from URL to app
    + TODO

- Redirect to website when app is installed
    - [iOS] Override `Universal Links` open by using `$web_only = true` 
    - [Android] Override `App Links` open by TODO

- Redirect to website when app is not installed (ordered by precedence)
    - Set `https://name.app.link?$ios_url=https://example.com`
    - Set `$ios_url = 'https://example.com'` within [link data](#redirections)
    - Set `$fallback_url = 'https://example.com'` within [link data](#redirections)
    - Set `$ios_deepview = 'deepviewId'` within [link data](#deepview)
    - Enable a `global Deep view` on the [Branch Dashboard](https://dashboard.branch.io/web/deepviews)
    - Add a `iOS Custom URL` on the [Branch Dashboard](https://dashboard.branch.io/link-settings)
    - Add a `Default URL` on the [Branch Dashboard](https://dashboard.branch.io/link-settings)

#### Social behavior

- OG Tags TODO
- Deep view TODO

#### Supported platforms

  - Apps which support Branch deep links

    | | iOS | Usage | Android | Usage |
    | --- | --- | --- | --- | --- |
    | Facebook NewsFeed | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |
    | Facebook Messanger | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |  |
    | Instagram | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |  |
    | SnapChat | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | 🅾️  | `app.link` deep links are not clickable  |
    | Twitter | ✅ | | ✅ |
    | Pinterest | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |
    | Slack | ✅ | | ✅ | |
    | Chrome address bar | ✅ | | ✅ |
    | Chrome web page | ✅ | | ✅ |
    | FireFox address bar | 🅾️ | | ✅ |
    | FireFox web page | ✅ | | ✅ |
    | Safari address bar | 🅾️ | | |
    | Safari web page | ✅ | | |
    | WeChat | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must enabled | ✅ |
    | WhatsApp | ✅ | | ✅ |
    | Hangouts | ✅ | | ✅ |
    | iMessage | ✅ | | |
    | Apple Mail | ✅ | | |
    | Gmail | ✅ | | ✅ |

## Analytical behavior

#### Analytical tracking

  - Whenever a user `clicks` on a deep link and `opens` the app
  - This triggers either an `install` or an `open`
      + `installs` represent Branch recognizing the app_id and device_id for the first time
      + `installs` represent new app users and the success rate of your Branch deep links
      + `installs` do **not** represent App Store downloads
      + `non-Branch installs` are installs outside of Branch deep link clicks
      + `opens` are non-installs
      + If a user uninstalls and reinstalls the app, this will be an `open` because Branch recognizes the device
      + If a user has the app and clicks a Branch deep link, this will be an `open` because the user is not new



## Link data

#### Structure

  - Deep link data structure

    ```js
    {
      tags: [ 'tag1', 'tag2' ],
      channel: 'facebook',
      feature: 'dashboard',
      stage: 'new user',
      alias: 'myalias',
      data: {
        mydata: 'something',
        foo: 'bar',
        $desktop_url: 'http://myappwebsite.com',
        $ios_url: 'http://myappwebsite.com/ios',
        $android_url: 'http://myappwebsite.com/android',
        $og_app_id: '12345',
        $og_title: 'My App',
        $og_description: 'My app\'s description.',
        $og_image_url: 'http://myappwebsite.com/image.png'
      }
    }
    ```

  - Branch reserved keys

    | Prefix | Usage |
    | --- | --- |
    | $ | Branch reserved keyword
    | ~ | Branch analytical data
    | + | Branch added values

#### Analytical labels

  - For [Create Deep Link](#create-deep-link) and [Share Deep Link](#share-deep-link)

    | Key | Default | Usage
    | --- | --- | ---
    | channel | | Use channel to tag the route that your link reaches users. For example, tag links with `'Facebook'` or `'LinkedIn'` to help track clicks and installs through those paths separately
    | feature | | This is the feature of your app that the link might be associated with. For example, if you had built a referral program, you would label links with the feature ‘referral’
    | campaign | | Use this field to organize the links by actual campaign. For example, if you launched a new feature or product and want to run a campaign around that
    | stage | | Use this to categorize the progress or category of a user when the link was generated. For example, if you had an invite system accessible on level 1, level 3 and 5, you could differentiate links generated at each level with this parameter
    | tags | | This is a free form entry with unlimited values `['string']`. Use it to organize your link data with labels that don’t fit within the bounds of the above
    | alias | | Specify a link alias in place of the standard encoded short URL e.g. `yourdomain.com/youralias`. Link aliases are unique, immutable objects that cannot be deleted. You cannot change the alias of existing links. Aliases on the legacy `bnc.lt` domain are incompatible with Universal Links and Spotlight
    | type | `0` | Must be an `int`. Set to `1` to limit deep link to a single use. Set to `2` to make the link show up under [Quick Links](https://dashboard.branch.io/marketing) while adding `$marketing_title` to `data`. Does not work with the Native SDKs.

#### Custom data

- Pass any custom data to be read inside your app

      | Key | Value | Usage
      | --- | --- | ---
      | random | `123` | Any key-value pair
      | hello | `'world'` | Any key-value pair
      | custom_data | `true` | Any key-value pair
      | any_value | `{ 'random': 'dictionary' }` | Any key-value pair
      | look_at | `[1,2,3,4,5,6]` | Any key-value pair
      | nav_here | `content/123` | Any key-value pair

#### Redirections

- Navigate to different locations based on device information

      | Key | Default | Usage
      | --- | --- | ---
      | $fallback_url | | Change the redirect endpoint for all platforms - so you don’t have to enable it by platform. Note that Branch will forward all robots to this URL, which **overrides any OG tags** entered in the link.  System-wide Default URL (set in Link Settings)
      | $desktop_url | | Change the redirect endpoint on desktops Text-Me-The-App page (set in Link Settings)
      | $ios_url | | Change the redirect endpoint for iOS  App Store page for your app (set in Link Settings)
      | $ipad_url | | Change the redirect endpoint for iPads `$ios_url` value
      | $android_url  | | Change the redirect endpoint for Android  Play Store page for your app (set in Link Settings)
      | $windows_phone_url  | | Change the redirect endpoint for Windows OS Windows Phone default URL (set in Link Settings)
      | $blackberry_url | | Change the redirect endpoint for Blackberry OS  BlackBerry default URL (set in Link Settings)
      | $fire_url | | Change the redirect endpoint for Amazon Fire OS Fire default URL (set in Link Settings)
      | $ios_wechat_url | | Change the redirect endpoint for WeChat on iOS devices `$ios_url value`
      | $android_wechat_url | | Change the redirect endpoint for WeChat on Android devices  `$android_url` value
      | $after_click_url | | URL redirect to after the main click redirect has completed
      | $web_only | `false` | Force to open the `$fallback_url` instead of the app

#### Deep linking

- Navigate to different locations based on device information

      | Key | Default | Usage
      | --- | --- | ---
      | $deeplink_path | `open?link_click_id=1234` | Set the deep link path for all platforms - so you don’t have to enable it by platform. When the Branch SDK receives a link with this parameter set, it will automatically load the custom URI path contained within
      | $android_deeplink_path | | Set the deep link path for Android apps When the Branch SDK receives a link with this parameter set, it will automatically load the custom URI path contained within
      | $ios_deeplink_path | | Set the deep link path for iOS apps. When the Branch SDK receives a link with this parameter set, it will automatically load the custom URI path contained within
      | $match_duration | `7200` | Lets you control the snapshotting match timeout (the time that a click will wait for an app open to match) also known as attribution window. Specified in seconds
      | $always_deeplink | `true` | Set to `false` to make links always fall back to your mobile site. Does not apply to Universal Links or Android App Links.
      | $ios_redirect_timeout | `750` | Control the timeout that the client-side JS waits after trying to open up the app before redirecting to the App Store. Specified in milliseconds
      | $android_redirect_timeout | `750` | Control the timeout that the client side JS waits after trying to open up the app before redirecting to the Play Store. Specified in milliseconds
      | $one_time_use | `false` | Set to `true` to limit deep linking behavior of the generated link to a single use. Can also be set using type
      | $custom_sms_text | | Text for SMS link sent for desktop clicks to this link. Must contain `{{ link }}` Value of Text me the app page in Settings
      | $marketing_title | | The Marketing Title for the deep link in the [Quick Links](https://dashboard.branch.io/marketing)

#### Content

- set

      | Key | Default | Usage
      | --- | --- | ---
      | $publicly_indexable | `1` | Cannot modify here. Needs to be set by the Branch Universal Object
      | $keywords | | Keywords for which this content should be discovered by. Just assign an array of strings with the keywords you’d like to use
      | $canonical_identifier | | This is the unique identifier for content that will help Branch dedupe across many instances of the same thing. Suitable options: a website with pathing, or a database with identifiers for entities
      | $exp_date | `0` | Cannot modify here. Needs to be set by the Branch Universal Object. Must be epoch timestamp with milliseconds
      | $content_type | | This is a label for the type of content present. Apple recommends that you use uniform type identifier as described here

#### DeepView

- set 

      | Key | Default | Usage
      | --- | --- | ---
      | $ios_deepview | `default_template` | The name of the deepview template to use for iOS
      | $android_deepview | `default_template` | The name of the deepview template to use for Android
      | $desktop_deepview | `default_template` | The name of the deepview template to use for the Desktop

#### Open Graph

- set
 
      | Key | Default | Usage
      | --- | --- | ---
      | $og_title | | Set the title of the link as it will be seen in social media displays
      | $og_description | | Set the description of the link as it will be seen in social media displays
      | $og_image_url | | Set the image of the link as it will be seen in social media displays
      | $og_image_width | | Set the image’s width in pixels for social media displays
      | $og_image_height | | Set the image’s height in pixels for social media displays
      | $og_video | | Set a video as it will be seen in social media displays
      | $og_url | | Set the base URL of the link as it will be seen in social media displays
      | $og_type | | Set the type of custom card format link as it will be seen in social media displays
      | $og_redirect | | (Advanced, not recommended) Set a custom URL that we redirect the social media robots to in order to retrieve all the appropriate tags
      | $og_app_id | | (Rarely used) Sets the app id tag

#### Twitter

- set

      | Key | Default | Usage
      | --- | --- | ---
      | $twitter_card | | Set the Twitter card type of the link
      | $twitter_title | | Set the title of the Twitter card
      | $twitter_description | | Set the description of the Twitter card
      | $twitter_image_url | | Set the image URL for the Twitter card
      | $twitter_site | | Set the site for Twitter
      | $twitter_app_country | | Set the app country for the app card
      | $twitter_player | | Set the video player’s URL. Defaults to the value of `$og_video`.
      | $twitter_player_width | | Set the player’s width in pixels
      | $twitter_player_height | | Set the player’s height in pixels
