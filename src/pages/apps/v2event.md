# V2 Event

## Overview

With Branch's SDKs, it's always been possible to track events, including installs, opens, purchases, and more. We're introducing a new way to track events that make reporting and analytics a whole lot easier. We're standardizing the way you track "classes" of events. For example: all events related to a customer purchasing are bucketed into a purchase class, and all events related to users interacting with your in-app content are linked to a "content" class.

Find the event you're interested in tracking, and we'll show you the way to track through our SDKs.

## Prerequisites

With event tracking, it's important to track the objects related to the event occurring. Branch provides a map for all your in-app objects, and wraps them around a class called the [Branch Universal Object](/pages/apps/ios/#create-content-reference). For any of the events tracked below, make sure to include the universal object(s) involved. For example, if you want to track when someone purchases 3 items, you'd want to create a Branch Universal Object per item, and pass them along when saving the event.

Refer to the above document to set up Branch Universal Objects.

## Track Commerce Events

Commerce events describe events that relate to a customer interacting with your products and converting by purchasing. These are events like adding payment information, purchasing, viewing products, etc. If you have enabled Branch Universal Ads, these events will automatically map to certain Ad Partners.

### Add to cart

Fire this event when your users add a product to their cart.

#### iOS

```objc
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventAddToCart];
event.transactionID   = @"12344555";
    event.currency        = BNCCurrencyUSD;
    event.revenue         = [NSDecimalNumber decimalNumberWithString:@"1.5"];
    event.shipping        = [NSDecimalNumber decimalNumberWithString:@"10.2"];
    event.tax             = [NSDecimalNumber decimalNumberWithString:@"12.3"];
    event.coupon          = @"test_coupon";
    event.affiliation     = @"test_affiliation";
    event.eventDescription= @"Event _description";
    event.searchQuery     = @"Query";
    event.customData      = (NSMutableDictionary*) @{
        @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
        @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
    };
    event.contentItems = @[ buo ];
    [event logEvent];
```

#### Android

```java
BranchUniversalObject branchUniversalObject = new BranchUniversalObject(); // Continue adding data to the BUO.

new BranchEvent(BRANCH_STANDARD_EVENT.ADD_TO_CART)
    .setAffiliation("test_affiliation")
    .setCoupon("Coupon Code")
    .setCurrency(CurrencyType.USD)
    .setDescription("Customer added item to cart")
    .setShipping(0.0)
    .setTax(9.75)
    .setRevenue(1.5)
    .setSearchQuery("Test Search query")
    .addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .addContentItems(branchUniversalObject)
    .logEvent(context);
```

### Add to wishlist

Fire this event when your users add your product to a wishlist.

#### iOS

```objc
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventAddToWishlist];
event.transactionID   = @"12344555";
    event.currency        = BNCCurrencyUSD;
    event.revenue         = [NSDecimalNumber decimalNumberWithString:@"1.5"];
    event.shipping        = [NSDecimalNumber decimalNumberWithString:@"10.2"];
    event.tax             = [NSDecimalNumber decimalNumberWithString:@"12.3"];
    event.coupon          = @"test_coupon";
    event.affiliation     = @"test_affiliation";
    event.eventDescription= @"Event _description";
    event.searchQuery     = @"Query";
    event.customData      = (NSMutableDictionary*) @{
        @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
        @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
    };
    event.contentItems = @[ buo ];
    [event logEvent];
```

#### Android

```Java
BranchUniversalObject branchUniversalObject = new BranchUniversalObject(); // Continue adding data to the BUO.

new BranchEvent(BRANCH_STANDARD_EVENT.ADD_TO_WISHLIST)
	.setCurrency(CurrencyType.USD)
	.setDescription("Customer added item to wishlist")
	.setRevenue(1.5)
	.addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.addContentItems(branchUniversalObject)
	.logEvent(context);
```

### View cart

Fire this event when a user views a cart.

#### iOS

```objc
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventViewCart];
event.transactionID   = @"12344555";
    event.currency        = BNCCurrencyUSD;
    event.revenue         = [NSDecimalNumber decimalNumberWithString:@"1.5"];
    event.shipping        = [NSDecimalNumber decimalNumberWithString:@"10.2"];
    event.tax             = [NSDecimalNumber decimalNumberWithString:@"12.3"];
    event.coupon          = @"test_coupon";
    event.affiliation     = @"test_affiliation";
    event.eventDescription= @"Event _description";
    event.searchQuery     = @"Query";
    event.customData      = (NSMutableDictionary*) @{
        @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
        @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
    };
    event.contentItems = @[ buo ];
    [event logEvent];
```

#### Android

```Java
BranchUniversalObject branchUniversalObject = new BranchUniversalObject(); // Continue adding data to the BUO.

new BranchEvent(BRANCH_STANDARD_EVENT.VIEW_CART)
	.setCurrency(CurrencyType.USD)
	.setDescription("Customer Viewed Cart")
	.setShipping(10.2)
	.setTax(12.3)
	.setRevenue(100.50)
	.addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.addContentItems(branchUniversalObject)
	.logEvent(context);
```

### Initiate purchase

Fire this event when a user begins a purchase, but doesn't complete. This is equivalent to when someone hits the 'checkout' button, but doesn't complete the act of purchasing. For that, see [#purchase](purchase).

#### iOS

```objc
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventInitiatePurchase];
event.transactionID   = @"12344555";
    event.currency        = BNCCurrencyUSD;
    event.revenue         = [NSDecimalNumber decimalNumberWithString:@"1.5"];
    event.shipping        = [NSDecimalNumber decimalNumberWithString:@"10.2"];
    event.tax             = [NSDecimalNumber decimalNumberWithString:@"12.3"];
    event.coupon          = @"test_coupon";
    event.affiliation     = @"test_affiliation";
    event.eventDescription= @"Event _description";
    event.searchQuery     = @"Query";
    event.customData      = (NSMutableDictionary*) @{
        @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
        @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
    };
    event.contentItems = @[ buo ];
    [event logEvent];
```

#### Android

```Java
BranchUniversalObject branchUniversalObject = new BranchUniversalObject(); // Continue adding data to the BUO.

new BranchEvent(BRANCH_STANDARD_EVENT.INITIATE_PURCHASE)
	.setCoupon("Coupon Code")
	.setCurrency(CurrencyType.USD)
	.setDescription("Purchase flow initiated with applied coupon")
	.setShipping(10.2)
	.setTax(12.3)
	.setRevenue(1.5)
	.addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.addContentItems(branchUniversalObject)
	.logEvent(context);
```

### Add payment info

Fire this event anytime someone adds payment information.

#### iOS

```objc
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventAddPaymentInfo];
event.transactionID   = @"12344555";
    event.currency        = BNCCurrencyUSD;
    event.revenue         = [NSDecimalNumber decimalNumberWithString:@"1.5"];
    event.shipping        = [NSDecimalNumber decimalNumberWithString:@"10.2"];
    event.tax             = [NSDecimalNumber decimalNumberWithString:@"12.3"];
    event.coupon          = @"test_coupon";
    event.affiliation     = @"test_affiliation";
    event.eventDescription= @"Event _description";
    event.searchQuery     = @"Query";
    event.customData      = (NSMutableDictionary*) @{
        @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
        @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
    };
    event.contentItems = @[ buo ];
    [event logEvent];
```

#### Android

```Java
BranchUniversalObject branchUniversalObject = new BranchUniversalObject(); // Continue adding data to the BUO.

new BranchEvent(BRANCH_STANDARD_EVENT.ADD_PAYMENT_INFO)
	.setAffiliation("Amazon Prime")
	.setCurrency(CurrencyType.USD)
	.setDescription("Customer added payment info")
	.addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.logEvent(context);
```

### Purchase

Fire this event when a purchase occurs.

#### iOS

```objc
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventPurchase];
event.transactionID   = @"12344555";
    event.currency        = BNCCurrencyUSD;
    event.revenue         = [NSDecimalNumber decimalNumberWithString:@"1.5"];
    event.shipping        = [NSDecimalNumber decimalNumberWithString:@"10.2"];
    event.tax             = [NSDecimalNumber decimalNumberWithString:@"12.3"];
    event.coupon          = @"test_coupon";
    event.affiliation     = @"test_affiliation";
    event.eventDescription= @"Event _description";
    event.searchQuery     = @"Query";
    event.customData      = (NSMutableDictionary*) @{
        @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
        @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
    };
    event.contentItems = @[ buo ];
    [event logEvent];
```

#### Android

```Java
BranchUniversalObject branchUniversalObject = new BranchUniversalObject(); // Continue adding data to the BUO.

new BranchEvent(BRANCH_STANDARD_EVENT.PURCHASE)
	.setAffiliation("test_affiliation")
	.setCoupon("Coupon Code")
	.setCurrency(CurrencyType.USD)
	.setDescription("Purchase occurred")
	.setShipping(10.2)
	.setTax(12.3)
	.setRevenue(1.5)
	.setTransactionID("12344555")
	.setSearchQuery("Test Search query")
	.addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.addContentItems(branchUniversalObject)
	.logEvent(context);
```

### Spend credits

Fire this event any time someone applies credits or a promo code to a purchase.

#### iOS

```objc
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventSpendCredits];
event.transactionID   = @"12344555";
    event.currency        = BNCCurrencyUSD;
    event.revenue         = [NSDecimalNumber decimalNumberWithString:@"1.5"];
    event.shipping        = [NSDecimalNumber decimalNumberWithString:@"10.2"];
    event.tax             = [NSDecimalNumber decimalNumberWithString:@"12.3"];
    event.coupon          = @"test_coupon";
    event.affiliation     = @"test_affiliation";
    event.eventDescription= @"Event _description";
    event.searchQuery     = @"Query";
    event.customData      = (NSMutableDictionary*) @{
        @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
        @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
    };
    event.contentItems = @[ buo ];
    [event logEvent];
```

#### Android

```Java
BranchUniversalObject branchUniversalObject = new BranchUniversalObject(); // Continue adding data to the BUO.

new BranchEvent(BRANCH_STANDARD_EVENT.SPEND_CREDITS)
	.setCoupon("Coupon Code")
	.setCurrency(CurrencyType.USD)
	.setDescription("Credits applied to purchase")
	.setShipping(10.2)
	.setTax(12.3)
	.setRevenue(1.5)
	.setTransactionID("12344555")
	.setSearchQuery("Test Search query")
	.addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.addContentItems(branchUniversalObject)
	.logEvent(context);
```

## Track Content Events

Content events are events that occur when a user engages with your in-app content. For example, if you have in-app articles, you would want to track events related to when users search, view content, rate the content, and share. This can apply to a wide variety of content, like e-commerce events.

### Search

Fire this event any time a user searches for content inside your app.

#### Android

```Java
 new BranchEvent(BRANCH_STANDARD_EVENT.SEARCH)
    .setDescription("Product Search")
    .setSearchQuery("product name")
    .addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .logEvent(context);
```

### View item

Fire this event any time a user view a single piece of content or item in your app.

#### Android

```Java
BranchUniversalObject contentItem; // BUO representing the content item

new BranchEvent(BRANCH_STANDARD_EVENT.VIEW_ITEM)
    .setDescription("User viewed a content")
    .setSearchQuery("Search query showed this content")
    .addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .addContentItems(contentItem)
    .logEvent(context);
```

### View items

Fire this event any time a user views multiple content or item in your app.

#### Android

```Java
BranchUniversalObject contentItem1; // BUO representing the content item 1
BranchUniversalObject contentItem2; // BUO representing the content item 2

new BranchEvent(BRANCH_STANDARD_EVENT.VIEW_ITEMS)
    .setDescription("User viewed a contents")
    .setSearchQuery("Search query showed this contents")
    .addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .addContentItems(contentItem1, contentItem2)
    .logEvent(context);
```

### Rate

Fire this event when a user rates your content.

#### Android

```Java
BranchUniversalObject contentItem; // BUO representing the content item

new BranchEvent(BRANCH_STANDARD_EVENT.RATE)
    .setDescription("User rated a content")
    .setSearchQuery("Search query showed this content")
    .addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .addContentItems(contentItem1)
    .logEvent(context);
```

### Share

Fire this event when a user shares your content.

#### Android

```Java
BranchUniversalObject contentItem; // BUO representing the content item

new BranchEvent(BRANCH_STANDARD_EVENT.SHARE)
    .setDescription("User shared a content")
    .addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .addContentItems(contentItem)
    .logEvent(context);
```

## Lifecycle Events

Lifecycle events can be described as events a user takes in your app to continue progressing. These events can apply to game apps, as well as non game apps, for when a user completes a user profile, registration or tutorial.

### Complete registration

Fire this event when a user successfully registers for an account.

#### Android

```Java
new BranchEvent(BRANCH_STANDARD_EVENT.COMPLETE_REGISTRATION)
    .setTransactionID("user_id")
    .setDescription("User created an account")
    .addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .logEvent(context);
```

### Complete tutorial

Fire this event when a user completes any tutorial you provide.

#### Android

```Java
 BranchUniversalObject tutorialItem; // BUO representing a tutorial

new BranchEvent(BRANCH_STANDARD_EVENT.COMPLETE_TUTORIAL)
    .setDescription("User completed a tutorial")
    .addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .addContentItems(tutorialItem)
    .logEvent(context);
```

### Achieve level

Fire this event when a user reaches a certain stage in your app.

#### Android

```Java
new BranchEvent(BRANCH_STANDARD_EVENT.ACHIEVE_LEVEL)
    .setDescription("User achieved a level")
    .addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .logEvent(context);
```

### Unlock achievement

Fire this event when a user hits an achievement point in your app.

#### Android

```Java
new BranchEvent(BRANCH_STANDARD_EVENT.UNLOCK_ACHIEVEMENT)
    .setDescription("Unlocked an achiement for the user")
    .addCustomProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .logEvent(context);
```

