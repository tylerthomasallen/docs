---
---

{! ingredients/email/email-configure-esp.md !}

You can retrieve your click tracking domains from your Sendgrid settings:

1. Log in to your SendGrid account.
1. Go to Settings > Whitelabels > Email Links.
1. Find your email link whitelabeled domain, click on the gear icon and click "View" (or create a new whitelabel).
   <br>
   ![image](/img/pages/email/sendgrid/sendgrid-view-domain.png)
1. Note the "Host" email click tracking domain (e.g. email.mydomain.com) and the SendGrid domain under "Data".
   <br>
   ![image](/img/pages/email/sendgrid/sendgrid-whitelabel.png)
1. Enter both the click tracking domain and the SendGrid domain in item 1 of this step:
   <br>
   ![image](/img/pages/email/sendgrid/configure-sendgrid-1.png)

On **Done** click, an AASA file - required for Universal Links - specific to that domain will be generated.

{! ingredients/email/email-technical-setup.md !}

{! ingredients/email/email-cname.md !}

{! ingredients/email/email-associated-domains.md !}

{! ingredients/email/email-validate-test.md !}

{! ingredients/email/email-usage.md !}

{! ingredients/email/email-link-options-menu.md !}

{! ingredients/email/email-link-options.md !}

### Flag your deep links

In order for Sendgrid to know that the email link should open the app, add `universal="true"` to the template HTML, for example:

```
<a href="https://vza3.app.link/3p?%243p=e_sg&%24original_url=http%3A%2F%2Fexample.com%2F%3Ffoo%3Dbar" universal="true">Link to your app!</a>
```

{! ingredients/email/email-support.md !}
