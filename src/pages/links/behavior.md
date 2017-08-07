## Default behavior

- #### App is installed
    +  User `clicks` on a Branch deep link
    +  Device `opens` app
    +  Branch passes deep link `data` into app

- #### App is not installed
    + User `clicks` on a Branch deep link
    + Device `navigates` to the App Store, Google Playstore, or Fallback URL
    + User `installs` and `opens` app
    + Branch passes deep link `data` into app

## Custom behavior

- #### Pass data from deep link to app
    + Add query string `https://s3z3.app.link/fzmLEhobLD?$custom_data=123` 
    + Add link data (TODO)
    + Add quick link key-values (TODO)

- #### Change redirect when app is not installed 
    + Add query string `https://s3z3.app.link?$ios_url=https://example.com`
    + Add link data `$ios_url = 'https://example.com'` ([docs](/pages/links/data/#redirections))
    + Add link data `$fallback_url = 'https://example.com'` ([docs](/pages/links/data/#redirections))
    + Add link data for a deep view `$ios_deepview = 'deepviewId'`  ([docs](/pages/links/data/#deepview))
    + Enable a `Deep View` globally on the [Branch Dashboard](https://dashboard.branch.io/web/deepviews)
    + Add `iOS/Android Custom URL` on the [Branch Dashboard](https://dashboard.branch.io/link-settings)
    + Add `Default URL` (`$fallback_url`) on the [Branch Dashboard](https://dashboard.branch.io/link-settings)
    + *(ordered by precedence)*

- #### Change redirect when app is installed
    * *iOS:* need to override `Universal Links`
        - Add `$web_only = true` ([docs](/pages/links/data/#redirections))
        - Add redirect `$ios_url = 'https://google.com'` ([docs](/pages/links/data/#redirections))
        - *or:* Append `/e/` to the deep link
            - e.g. `https://s3z3.app.link/fzmLEhobLD` -> `https://s3z3.app.link/e/fzmLEhobLD`
    * *Android:* need to override `App Links`
        - Uncheck `Enable App Links` and `Save` the [Branch Dashboard](https://dashboard.branch.io/link-settings)
        - Add redirect `$android_url = 'https://google.com'` ([docs](/pages/links/data/#redirections))
        - Add a broken URI Scheme with `$android_deeplink_path = 'random'` ([docs](/pages/links/data/#deep-linking))

## Social behavior

- OG Tags TODO
- Deep view TODO

## Supported platforms

  - Apps which support Branch deep links

    | | iOS | Usage | Android | Usage |
    | --- | --- | --- | --- | --- |
    | Facebook NewsFeed | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |
    | Facebook Messanger | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |  |
    | Instagram | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |  |
    | SnapChat | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | 🅾️  | `app.link` deep links are not clickable  |
    | Twitter | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |
    | Pinterest | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |
    | Line | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |
    | Skype | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |
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