### Default app.link subdomain

Every app on the Branch platform is assigned a subdomain of the form `xxxx.app.link`. This is unique to your app and must be used in several places when integrating the SDK.

!!! tip
	Because of the way that Apple implements Universal Links, every app also has a shadow subdomain of the form `xxxx-alternate.app.link`. This is used in select places but will not be shown to your users.

#### Retrieving the subdomain assigned to your app

1. Go to the [Link Settings](https://dashboard.branch.io/#/settings/link) page on the dashboard.
1. Scroll down to the **Link Domain** area.
1. Copy the value listed there.

![image](/img/pages/links/subdomain-setting.png)

!!! note "Test environment domain"
	The assigned subdomain for your test environment is of the form `xxxx.test-app-link` and must be configured separately. Branch automatically handles HTTPS traffic for custom subdomains and root domains. Branch will acquire the necessary SSL certificate if you follow the simple setup instructions below. Branch will also automatically renew the certificates when needed.

## Changing your app.link subdomain

You can brand your links with a custom subdomain like `you.app.link`. 

!!! note "One change only"
	You can only change your app.link subdomain once. Keep in mind that if you change this and you have implemented [universal links](/pages/apps/ios/#configure-associated-domains) or [app links](/pages/apps/android/#configure-app), you must update your implementation. The links on your old subdomain will no longer work.

1. Go to [Link Settings](https://dashboard.branch.io/settings/link){:target="_blank"} in the dashboard.
1. Scroll to the **Link Domain** setting at the bottom.
1. Click `Change my app.link subdomain`.
1. Choose a subdomain that matches your brand. You cannot choose one that is in use by someone else, and it cannot have special characters. ![image](/img/pages/links/get-subdomain.png)
1. Press `Get`.

## Setting a custom link domain

If you want to use a custom domain or subdomain for your Branch links instead of the `XXXX.app.link` domain, setting one up is simple.

!!! note "Avoid switching later"
	We recommend that you choose one domain or subdomain to use with Branch and stick with it, as switching can cause significant problems with your existing links.

!!! tip "Updates to Universal & App Links configuration"
	If you enable (or change) your link domain/subdomain, you will need to make updates to your Universal Links (iOS) and App Links (Android) configuration. Review the [iOS](/pages/apps/ios/) and [Android](/pages/apps/android/) integration guides.

### Custom SUBDOMAIN (go.branch.com)

!!! note "Do not use www"
	Some browsers have special rules for processing URLs beginning with `www`. We strongly recommend you do not include a `www` prefix in your custom subdomain.

1. Create a CNAME for your subdomain and point it to `custom.bnc.lt`
1. Go to [Link Settings](https://dashboard.branch.io/#/settings/link){:target="_blank"} on the Branch dashboard, and find the **Link Domain** section.
1. Click `Use my own domain`.
1. You should see a message telling you the status of your domain under the domain field. If you don't, please type your domain in again. ![image](/img/pages/links/sub-custom-domain.png)
1. Click `Confirm`.

### Custom ROOT domain (branch.com)

!!! note "Use this domain for Branch links only"
	Once you enable this root domain for Branch links, you will not be able to use it for hosting anything else. We recommend using a subdomain, or purchasing a new root domain for this purpose. **You cannot use your main website domain for hosting Branch links**.

1. Go to [Link Settings](https://dashboard.branch.io/#/settings/link){:target="_blank"} on the Branch dashboard, and find the **Link Domain** section.
1. Click `Use my own domain`. ![image](/img/pages/links/subdomain-setting.png)
1. Enter your custom domain into the text box. Resolve any errors. ![image](/img/pages/links/domain-error.png)
1. Work with your domain registrar to make the Branch-provided nameservers listed under the domain field authoritative for your domain. **Note that this means you cannot host anything else on this domain — only Branch links.** ![image](/img/pages/links/custom-domain-nameservers.png)
1. Click `Confirm`.

!!! tip "Heads Up!"
	1. The nameservers in the above image are for example purposes only. The nameservers you use will be unique to your application.
	2. If you are configuring the domain through AWS's Route 53, make sure you are editing the nameservers under the `"Registered Domains"` tab, and not the `"Hosted zones"` section.

## About the legacy bnc.lt domain

The bnc.lt domain is no longer available for new apps. If you have existing links with this domain as the base, they will continue to function.