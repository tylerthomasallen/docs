
## Link behavior

#### Default behavior

- **App is installed**
    -  User `clicks` on a Branch deep link
    -  App `opens`
    -  Branch passes deep link `data` into app
- **App is not installed**
    - User `clicks` on a Branch deep link
    - App Store/Google Playstore/Fallback URL opens
    - User `installs` and `opens` app
    - Branch passes deep link `data` into app

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

#### Supported platforms

  - Apps which support Branch deep links

    | | iOS | Details | Android | Details
    | --- | :-: | --- | :-: | ---
    | Facebook NewsFeed | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews)must bee enabled | ✅ |
    | Facebook Messanger | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |  |
    | Twitter | ✅ | | ✅ |
    | Pinterest | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) must be enabled | ✅ |
    | Slack | ✅ | | ✅ | |
    | Chrome address bar | ✅ | | ✅ |
    | Chrome web page | ✅ | | ✅ |
    | FireFox address bar | 🅾️ | | ✅ |
    | FireFox web page | ✅ | | ✅ |
    | Safari address bar | 🅾️ | | |
    | Safari web page | ✅ | | |
    | WeChat | ✅ | [Deep Views](https://dashboard.branch.io/settings/deepviews) aremust beabled | ✅ |
    | WhatsApp | ✅ | | ✅ |
    | Hangouts | ✅ | | ✅ |
    | iMessage | ✅ | | |
    | Apple Mail | ✅ | | |
    | Gmail | ✅ | | ✅ |

## Link data

#### Universal Object properties

#### Link properties
