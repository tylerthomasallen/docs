---
---

{! ingredients/email/email-overview.md !}

### Prerequisites

- This guide requires you to have already integrated the Branch SDK into your app.

{! ingredients/email/email-set-up-deep-linking.md !}

You can retrieve your click tracking domains from your {{page.title}} settings. On **Done** click, an AASA file - required for Universal Links - specific to that domain will be generated.

{! ingredients/email/email-technical-setup.md !}

{! ingredients/email/email-cname.md !}

{! ingredients/email/email-associated-domains.md !}

{! ingredients/email/email-validate-test.md !}

{! ingredients/email/email-usage.md !}

{! ingredients/email/email-link-options-menu.md !}

{! ingredients/email/email-link-options.md !}

### Flag your deep links

In order for {{page.title}} to know that the email link should open the app, add `universal="true"` to the template HTML, for example:

```
<a href="https://vza3.app.link/3p?%243p={{ page.machine_name }}&%24original_url=http%3A%2F%2Fexample.com%2F%3Ffoo%3Dbar" universal="true">Link to your app!</a>
```

{! ingredients/email/email-support.md !}
