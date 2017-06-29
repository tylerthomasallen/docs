## Default behavior

- #### App is installed
    +  User `clicks` on a Branch deep link
    +  Device `opens` app
    +  Branch passes deep link `data` into app

- #### App is not installed
    + User `clicks` on a Branch deep link
    + Device navigates to the App Store, Google Playstore, or Fallback URL
    + User `installs` and `opens` app
    + Branch passes deep link `data` into app

## Custom behavior

- #### Pass data from link to app
    + `https://s3z3.app.link/fzmLEhobLD?$custom_data=123` 
    + TODO dashboard TODO sdks

- #### Redirect when app is not installed 
    + `https://name.app.link?$ios_url=https://example.com` query string
    + `$ios_url = 'https://example.com'` added to [link data](#redirections)
    + `$fallback_url = 'https://example.com'` added to [link data](#redirections)
    + `$ios_deepview = 'deepviewId'` added to [link data](#deepview)
    + `Deep view` enabled globally on the [Branch Dashboard](https://dashboard.branch.io/web/deepviews)
    + `iOS Custom URL` added on the [Branch Dashboard](https://dashboard.branch.io/link-settings)
    + `Default URL` added on the [Branch Dashboard](https://dashboard.branch.io/link-settings)
    + *(ordered by precedence)*

- #### Redirect when app is installed
    * *iOS:* need to override `Universal Links`
        - Add `$web_only = true` [docs](#redirections)
        - Add redirect `$ios_url = 'https://google.com'`
        - *or* Append `/e/` by `https://s3z3.app.link/fzmLEhobLD` -> `https://s3z3.app.link/e/fzmLEhobLD`
    * *Android:* need to override `App Links`
        - Uncheck `Enable App Links` and `Save` the [Branch Dashboard](https://dashboard.branch.io/link-settings)
        - Add redirect `$android_url = 'https://google.com'`
        - Add a broken URI Scheme with `$android_deeplink_path = 'random'`

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