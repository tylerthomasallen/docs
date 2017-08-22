
## Basic Setup

- #### Find the Branch Key

    - Go to [Account settings](https://dashboard.branch.io/account-settings/app) on the Branch Dashboard
    - `Branch Keys` allow you to interact with your Branch SDKs and create deep links
    - These keys are unique to your Branch app
    - Never expose your `Branch Secret` as it can be maliciously used
     <img src="/img/pages/dashboard/branch-keys.png" width="500px" />

- #### Configure default behavior

    - Go to [Link Settings](https://dashboard.branch.io/link-settings) on the Branch Dashboard

    - ##### Set iOS

        - Use these settings to control the default behavior of your deep links on iOS
        <img src="/img/pages/dashboard/ios.png" width="500px" />

    - ##### Set Android
        - Use these settings to control the default behavior of your deep links on Android
        <img src="/img/pages/dashboard/android.png" width="500px" />
    
    - ##### Set desktop
        - Use these settings to control the default behavior of your deep links on Desktop browsers
        <img src="/img/pages/dashboard/desktop.png" width="500px" />
    
    - ##### Set fallback
        - Use these settings to control the default behavior of your deep links on any other platform
        <img src="/img/pages/dashboard/fallback.png" width="500px" />
    
    - ##### Set link domain
        - Choose a `link domain` which will be used for all your links
        - The `link domain` is the website which hosts your deep links
        - The `link domain` is not a deep link
            - The deep links will have an `alias` behind them to uniquely identify content
                - https://example.app.link/VZsTctoINF
                - https://example.app.link/custom-alias
        <img src="/img/pages/dashboard/link-domain.png" width="500px" />
    
    - ##### Save
        - Make sure you commit any changes
        <img src="/img/pages/dashboard/save.png" width="500px" />

- #### Enable Deepview

    - Go to [Deepview Previews](https://dashboard.branch.io/web/deepviews) on the Branch Dashboard
    - Toggle `Enabled` for `branch_default` for `iOS` and `Android`
    - This will make your deep links before optimally on all [Supported platforms](/pages/links/setup/#supported-platforms)
    - Additional details about [Deepviews](/pages/web/deep-views/)
    <img src="/img/pages/dashboard/deepview.png" width="200px" />
   
- #### Set advanced link settings

    - Go to [Link Settings](https://dashboard.branch.io/link-settings) on the Branch Dashboard
    - TODO

- #### Authenticate for Facebook App Invites
    - Go to [Link Settings](https://dashboard.branch.io/link-settings) on the Branch Dashboard    
    - TODO
- #### Social Media Display Customization 
    - Go to [Link Settings](https://dashboard.branch.io/link-settings) on the Branch Dashboard
    - TODO
- #### Change link domain
    - ##### Use app.link domain
        - Understand [Domain change warning](#domain-change-warning) 
        - Make changes to [Link settings](https://dashboard.branch.io/link-settings) or contact support
    - ##### Use custom sub domain
        - Understand [Domain change warning](#domain-change-warning)
        - Understand [Custom domain warning](#custom-domain-warning)
        - Understand [Custom domain issues](#custom-domain-issues)
        - Change your link domain to your custom sub domain on [Link settings](https://dashboard.branch.io/link-settings)
        - Update your `CNAME` record on your custom sub domain
            - `CNAME` = `custom.bnc.lt`
        - Click `Confirm` on [Link settings](https://dashboard.branch.io/link-settings) 
    - ##### Use custom root domain
        - Understand [Domain change warning](#domain-change-warning)
        - Understand [Custom domain warning](#custom-domain-warning)
        - Understand [Custom domain issues](#custom-domain-issues)
        - Change your link domain to your custom root domain on [Link settings](https://dashboard.branch.io/link-settings)
        - Update your `NS` records on your custom root domain
            - These values are unique per app, below is an example
                - `ns-1371.awsdns-43.org`
                - `ns-1695.awsdns-19.co.uk`
                - `ns-991.awsdns-59.net`
                - `ns-428.awsdns-53.com`
        - Click `Confirm` on [Link settings](https://dashboard.branch.io/link-settings)

## Troubleshoot issues

- #### Domain change warning
    - Used for [Change link domain](#change-link-domain)
    - From `app.link` to `app.link`
        - Your old `app.link` deep links will fail
        - Your old `app.link` deep links will navigate to a File Not Found website and not open your app.
        - Your new `app.link` deep links will open your app after your [update your code](#dialog-code) to append the new link domain
        - If your old `app.link` are active, it is recommend to switch to a `custom link domain instead`
    - From `app.link` to `custom link domain`
        - Your old `app.link` deep links will navigate to your `$fallback_url` instead of opening the app
        - Your old `app.link` deep links will still pass data once the user opens the app
        - Your old `app.link` deep links will need to be remade to your new `custom link domain`
        - Your new `custom link domain` deep links will open your app after your [update your code](#dialog-code) to append the new link domain
    - From `custom link domain` to `custom link domain`
        - Your old `custom link domain` deep links will fail
        - Your new `custom link domain` deep links will open your app after your [update your code](#dialog-code) to append the new link domain
    - From legacy `bnc.lt` to `custom link domain`
        - Both your `bnc.lt` and `custom link domain` deep links will work
        - Your new `custom link domain` deep links will open your app after your [update your code](#dialog-code) to append the new link domain

- #### Custom domain warning
    - Used for [Change link domain](#change-link-domain)
    - The `NS` or `CNAME` records of your `custom link domain` will need to point to Branch if you want to use your own domain for your deep links.
    - Whenever you change your `NS` or `CNAME` records of a domain, you are making Branch the authoritative registrar for your domain. This will grant Branch control of your domain and you will lose all access to that `custom root domain` or `custom sub domain`. The web page will become blank, and the control of the domain will change to Branch.
    - Branch will use your domain to route all deep linked traffic. Branch will also host your AASA file and SSL certificates.
    - If you have content on your `custom root domain` (e.g. https://example.com/), Branch recommends using an unused `custom sub domain` instead (e.g. https://link.example.com/).

- #### Custom domain issues 
    - Used for [Change link domain](#change-link-domain)
    - You can test your domain record changes with `dig ns <domain>` or `dig cname <domain>`
    - We recommend that you choose one domain or subdomain to use with Branch and stick with it, as switching can cause significant problems with your existing links
    - If you are configuring the domain through AWS's Route 53, make sure you are editing the nameservers under the `Registered Domains` tab, and not the `Hosted zones` section
    - You cannot use your main website domain for hosting Branch links
    - Do not include `www` when adding your custom link domain

## Dashboard and User Administration

- #### Update your user account settings 
    - Go to [Account settings](https://dashboard.branch.io/account-settings/user) on the Branch Dashboard
    - Update your contact information, password
    - Link your Github account to your Branch dashboard for easier sign in

!!! protip "The following sections require Admin access to the Branch Dashboard"

- #### Configure billing
    - Go to [Account settings](https://dashboard.branch.io/account-settings/billing) on the Branch Dashboard
    - Add your billing information and start using Branch's premium solutions

- #### Configure team 
    - Go to [Account settings](https://dashboard.branch.io/account-settings/team) on the Branch Dashboard
    - Add new team members to your Branch dashboard 
     - Update existing team members' access to Branch dashboard
    <img src="/img/pages/dashboard/add_team.png" width="200px" />
