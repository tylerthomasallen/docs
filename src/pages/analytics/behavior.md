
## Analytical behavior
- Whenever a user `clicks` on a deep link and `opens` the app
- This triggers either an `install` or an `open`
    - `installs` represent Branch recognizing the app_id and device_id for the first time
    - `installs` represent new app users and the success rate of your Branch deep links
    - `installs` do **not** represent App Store downloads
    - `non-Branch installs` are installs outside of Branch deep link clicks
    - `opens` are non-installs
    - If a user uninstalls and reinstalls the app, this will be an `open` because Branch recognizes the device
    - If a user has the app and clicks a Branch deep link, this will be an `open` because the user is not new

