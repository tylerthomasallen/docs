# V2 Event

## Overview

It's always been possible to track events with the Branch SDK, including installs, opens, purchases, and more. Now we're introducing a new way to track events that make reporting and analytics a whole lot better and easier.

The new v2 events have better tracking and analytics options in the Branch dashboard, and the new event structure makes integration with third party analytics providers quicker and tighter.

We're standardizing the way you track "classes" of events. For example: all events related to a customer purchasing are bucketed into a "purchase" class of data items, and all events related to users interacting with your in-app content are linked to a "content" class of data items.

Below are examples of the kinds of events you'll likely be interested in tracking, and we'll show you the way to track through our SDKs.

## Prerequisites

With event tracking, it's important to track the objects related to the event occurring. Branch provides a class to describe your in-app content items  called the [Branch Universal Object](/pages/apps/ios/#create-content-reference). For any of the events tracked below, make sure to include the universal object(s) involved. For example, if you want to track when someone purchases 3 items, you'd want to create a Branch Universal Object per item, and pass them along when tracking the event.

Refer to the above document to set up Branch Universal Objects.

## Available Events

Use the table below to quickly find the event you want to track.

| Event Name | Event Category | Objective C | Swift | Java | HTTP API
| :-: | :-: | :-: | :-: | :-: | :-: | :-:
| Add To Cart | Commerce Event | [Code](/pages/apps/v2event/#objective-c) | [Code](/pages/apps/v2event/#swift) | [Code](/pages/apps/v2event/#android) | [Code]()
| Add To Wishlist | Commerce Event | [Code](/pages/apps/v2event/#objective-c_1) | [Code](/pages/apps/v2event/#swift_1) | [Code](/pages/apps/v2event/#android_1) | [Code]()
| View Cart | Commerce Event | [Code](/pages/apps/v2event/#objective-c_2) | [Code](/pages/apps/v2event/#swift_2) | [Code](/pages/apps/v2event/#android_2) | [Code]()
| Initiate Purchase | Commerce Event | [Code](/pages/apps/v2event/#objective-c_3) | [Code](/pages/apps/v2event/#swift_3) | [Code](/pages/apps/v2event/#android_3) | [Code]()
| Add Payment Info | Commerce Event | [Code](/pages/apps/v2event/#objective-c_4) | [Code](/pages/apps/v2event/#swift_4) | [Code](/pages/apps/v2event/#android_4) | [Code]()
| Purchase | Commerce Event | [Code](/pages/apps/v2event/#objective-c_5) | [Code](/pages/apps/v2event/#swift_5) | [Code](/pages/apps/v2event/#android_5) | [Code]()
| Spend Credits | Commerce Event | [Code](/pages/apps/v2event/#objective-c_6) | [Code](/pages/apps/v2event/#swift_6) | [Code](/pages/apps/v2event/#android_6) | [Code]()
| Search | Content Event | [Code](/pages/apps/v2event/#objective-c_7) | [Code](/pages/apps/v2event/#swift_7) | [Code](/pages/apps/v2event/#android_7) | [Code]()
| View Item | Content Event | [Code](/pages/apps/v2event/#objective-c_8) | [Code](/pages/apps/v2event/#swift_8) | [Code](/pages/apps/v2event/#android_8) | [Code]()
| View Items | Content Event | [Code](/pages/apps/v2event/#objective-c_9) | [Code](/pages/apps/v2event/#swift_9) | [Code](/pages/apps/v2event/#android_9) | [Code]()
| Rate | Content Event | [Code](/pages/apps/v2event/#objective-c_10) | [Code](/pages/apps/v2event/#swift_10) | [Code](/pages/apps/v2event/#android_10) | [Code]()
| Share | Content Event | [Code](/pages/apps/v2event/#objective-c_11) | [Code](/pages/apps/v2event/#swift_11) | [Code](/pages/apps/v2event/#android_11) | [Code]()
| Complete Registration | Lifecycle Event | [Code](/pages/apps/v2event/#objective-c_12) | [Code](/pages/apps/v2event/#swift_12) | [Code](/pages/apps/v2event/#android_12) | [Code]()
| Complete Tutorial | Lifecycle Event | [Code](/pages/apps/v2event/#objective-c_13) | [Code](/pages/apps/v2event/#swift_13) | [Code](/pages/apps/v2event/#android_13) | [Code]()
| Achieve Level | Lifecycle Event | [Code](/pages/apps/v2event/#objective-c_14) | [Code](/pages/apps/v2event/#swift_14) | [Code](/pages/apps/v2event/#android_14) | [Code]()
| Unlock Achievement | Lifecycle Event | [Code](/pages/apps/v2event/#objective-c_15) | [Code](/pages/apps/v2event/#swift_15) | [Code](/pages/apps/v2event/#android_15) | [Code]()




## Track Commerce Events

Commerce events describe events that relate to a customer interacting with your products and converting by purchasing. These are events like adding payment information, purchasing, viewing products, etc. If you have enabled Branch Universal Ads, these events will automatically map to certain Ad Partners.

### Add to Cart

Fire this event when your users add a product to their cart.

#### Objective-C

```objc
// Create a BranchUniversalObject with your content data:
BranchUniversalObject *branchUniversalObject = [BranchUniversalObject new];

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = @"item/12345";
branchUniversalObject.canonicalUrl        = @"https://branch.io/item/12345";
branchUniversalObject.title               = @"My Item Title";

// Create an event and add the BranchUniversalObject to it:
BranchEvent *event     = [BranchEvent standardEvent:BranchStandardEventAddToCart];

// Add the BranchUniversalObjects with the content:
event.contentItems     = (id) @[ branchUniversalObject ];

// Add relevant event data:
event.transactionID    = @"12344555";
event.currency         = BNCCurrencyUSD;
event.revenue          = [NSDecimalNumber decimalNumberWithString:@"1.5"];
event.shipping         = [NSDecimalNumber decimalNumberWithString:@"10.2"];
event.tax              = [NSDecimalNumber decimalNumberWithString:@"12.3"];
event.coupon           = @"test_coupon";
event.affiliation      = @"test_affiliation";
event.eventDescription = @"Event_description";
event.searchQuery      = @"item 123";
event.customData       = (NSMutableDictionary*) @{
    @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
    @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
};
[event logEvent];
```

#### Swift

```swift
// Create a BranchUniversalObject with your content data:
let branchUniversalObject = BranchUniversalObject.init()

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = "item/12345"
branchUniversalObject.canonicalUrl        = "https://branch.io/item/12345"
branchUniversalObject.title               = "My Item Title"

// Create a BranchEvent:
let event = BranchEvent.standardEvent(.purchase)

// Add the BranchUniversalObjects with the content:
event.contentItems     = [ branchUniversalObject ]

// Add relevant event data:
event.transactionID    = "12344555"
event.currency         = .USD;
event.revenue          = 1.5
event.shipping         = 10.2
event.tax              = 12.3
event.coupon           = "test_coupon";
event.affiliation      = "test_affiliation";
event.eventDescription = "Event_description";
event.searchQuery      = "item 123"
event.customData       = [
    "Custom_Event_Property_Key1": "Custom_Event_Property_val1",
    "Custom_Event_Property_Key2": "Custom_Event_Property_val2"
]
event.logEvent() // Log the event.
```

#### Android

```java
BranchUniversalObject branchUniversalObject = new BranchUniversalObject();
// ...continue adding data to the BUO...

new BranchEvent(BRANCH_STANDARD_EVENT.ADD_TO_CART)
    .setAffiliation("test_affiliation")
    .setCoupon("Coupon Code")
    .setCurrency(CurrencyType.USD)
    .setDescription("Customer added item to cart")
    .setShipping(0.0)
    .setTax(9.75)
    .setRevenue(1.5)
    .setSearchQuery("Test Search query")
    .addCustomDataProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomDataProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .addContentItems(branchUniversalObject)
    .logEvent(context);
```

### Add to Wishlist

Log this event when your users add your product to a wishlist.

#### Objective-C

```objc
// Create a BranchUniversalObject with your content data:
BranchUniversalObject *branchUniversalObject = [BranchUniversalObject new];

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = @"item/12345";
branchUniversalObject.canonicalUrl        = @"https://branch.io/item/12345";
branchUniversalObject.title               = @"My Item Title";

// Create an event and add the BranchUniversalObject to it:
BranchEvent *event     = [BranchEvent standardEvent:BranchStandardEventAddToWishlist];

// Add the BranchUniversalObjects with the content:
event.contentItems     = (id) @[ branchUniversalObject ];

// Add relevant event data:
event.transactionID    = @"12344555";
event.currency         = BNCCurrencyUSD;
event.revenue          = [NSDecimalNumber decimalNumberWithString:@"1.5"];
event.shipping         = [NSDecimalNumber decimalNumberWithString:@"10.2"];
event.tax              = [NSDecimalNumber decimalNumberWithString:@"12.3"];
event.coupon           = @"test_coupon";
event.affiliation      = @"test_affiliation";
event.eventDescription = @"Event_description";
event.searchQuery      = @"item 123";
event.customData       = (NSMutableDictionary*) @{
    @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
    @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
};
[event logEvent];
```

#### Swift

```swift
// Create a BranchUniversalObject with your content data:
let branchUniversalObject = BranchUniversalObject.init()

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = "item/12345"
branchUniversalObject.canonicalUrl        = "https://branch.io/item/12345"
branchUniversalObject.title               = "My Item Title"

// Create a BranchEvent:
let event = BranchEvent.standardEvent(.addToWishlist)

// Add the BranchUniversalObjects with the content:
event.contentItems     = [ branchUniversalObject ]

// Add relevant event data:
event.transactionID    = "12344555"
event.currency         = .USD;
event.revenue          = 1.5
event.shipping         = 10.2
event.tax              = 12.3
event.coupon           = "test_coupon";
event.affiliation      = "test_affiliation";
event.eventDescription = "Event_description";
event.searchQuery      = "item 123"
event.customData       = [
    "Custom_Event_Property_Key1": "Custom_Event_Property_val1",
    "Custom_Event_Property_Key2": "Custom_Event_Property_val2"
]
event.logEvent() // Log the event.
```

#### Android

```Java
BranchUniversalObject branchUniversalObject = new BranchUniversalObject(); // Continue adding data to the BUO.

new BranchEvent(BRANCH_STANDARD_EVENT.ADD_TO_WISHLIST)
	.setCurrency(CurrencyType.USD)
	.setDescription("Customer added item to wishlist")
	.setRevenue(1.5)
	.addCustomDataProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomDataProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.addContentItems(branchUniversalObject)
	.logEvent(context);
```

### View Cart

Fire this event when a user views a cart.

#### Objective-C

```objc
// Create a BranchUniversalObject with your content data:
BranchUniversalObject *branchUniversalObject = [BranchUniversalObject new];

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = @"item/12345";
branchUniversalObject.canonicalUrl        = @"https://branch.io/item/12345";
branchUniversalObject.title               = @"My Item Title";

// Create an event and add the BranchUniversalObject to it:
BranchEvent *event     = [BranchEvent standardEvent:BranchStandardEventViewCart];

// Add the BranchUniversalObjects with the content:
event.contentItems     = (id) @[ branchUniversalObject ];

// Add relevant event data:
event.transactionID    = @"12344555";
event.currency         = BNCCurrencyUSD;
event.revenue          = [NSDecimalNumber decimalNumberWithString:@"1.5"];
event.shipping         = [NSDecimalNumber decimalNumberWithString:@"10.2"];
event.tax              = [NSDecimalNumber decimalNumberWithString:@"12.3"];
event.coupon           = @"test_coupon";
event.affiliation      = @"test_affiliation";
event.eventDescription = @"Event_description";
event.searchQuery      = @"item 123";
event.customData       = (NSMutableDictionary*) @{
    @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
    @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
};
[event logEvent];
```

#### Swift

```swift
// Create a BranchUniversalObject with your content data:
let branchUniversalObject = BranchUniversalObject.init()

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = "item/12345"
branchUniversalObject.canonicalUrl        = "https://branch.io/item/12345"
branchUniversalObject.title               = "My Item Title"

// Create a BranchEvent:
let event = BranchEvent.standardEvent(.viewCart)

// Add the BranchUniversalObjects with the content:
event.contentItems     = [ branchUniversalObject ]

// Add relevant event data:
event.transactionID    = "12344555"
event.currency         = .USD;
event.revenue          = 1.5
event.shipping         = 10.2
event.tax              = 12.3
event.coupon           = "test_coupon";
event.affiliation      = "test_affiliation";
event.eventDescription = "Event_description";
event.searchQuery      = "item 123"
event.customData       = [
    "Custom_Event_Property_Key1": "Custom_Event_Property_val1",
    "Custom_Event_Property_Key2": "Custom_Event_Property_val2"
]
event.logEvent() // Log the event.
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
	.addCustomDataProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomDataProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.addContentItems(branchUniversalObject)
	.logEvent(context);
```

### Initiate Purchase

Fire this event when a user begins a purchase, but doesn't complete. This is equivalent to when someone hits the 'checkout' button, but doesn't complete the act of purchasing. For that, see [#purchase](purchase).

#### Objective-C

```objc
// Create a BranchUniversalObject with your content data:
BranchUniversalObject *branchUniversalObject = [BranchUniversalObject new];

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = @"item/12345";
branchUniversalObject.canonicalUrl        = @"https://branch.io/item/12345";
branchUniversalObject.title               = @"My Item Title";

// Create an event and add the BranchUniversalObject to it:
BranchEvent *event     = [BranchEvent standardEvent:BranchStandardEventInitiatePurchase];

// Add the BranchUniversalObjects with the content:
event.contentItems     = (id) @[ branchUniversalObject ];

// Add relevant event data:
event.transactionID    = @"12344555";
event.currency         = BNCCurrencyUSD;
event.revenue          = [NSDecimalNumber decimalNumberWithString:@"1.5"];
event.shipping         = [NSDecimalNumber decimalNumberWithString:@"10.2"];
event.tax              = [NSDecimalNumber decimalNumberWithString:@"12.3"];
event.coupon           = @"test_coupon";
event.affiliation      = @"test_affiliation";
event.eventDescription = @"Event_description";
event.searchQuery      = @"item 123";
event.customData       = (NSMutableDictionary*) @{
    @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
    @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
};
[event logEvent];
```

#### Swift

```swift
// Create a BranchUniversalObject with your content data:
let branchUniversalObject = BranchUniversalObject.init()

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = "item/12345"
branchUniversalObject.canonicalUrl        = "https://branch.io/item/12345"
branchUniversalObject.title               = "My Item Title"

// Create a BranchEvent:
let event = BranchEvent.standardEvent(.initiatePurchase)

// Add the BranchUniversalObjects with the content:
event.contentItems     = [ branchUniversalObject ]

// Add relevant event data:
event.transactionID    = "12344555"
event.currency         = .USD;
event.revenue          = 1.5
event.shipping         = 10.2
event.tax              = 12.3
event.coupon           = "test_coupon";
event.affiliation      = "test_affiliation";
event.eventDescription = "Event_description";
event.searchQuery      = "item 123"
event.customData       = [
    "Custom_Event_Property_Key1": "Custom_Event_Property_val1",
    "Custom_Event_Property_Key2": "Custom_Event_Property_val2"
]
event.logEvent() // Log the event.
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
	.addCustomDataProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomDataProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.addContentItems(branchUniversalObject)
	.logEvent(context);
```

### Add Payment Info

Log this event anytime someone adds payment information.

#### Objective-C

```objc
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventAddPaymentInfo];
event.customData[@"Card Type"] = @"VISA";
[event logEvent];
```

#### Swift

```swift
let event = BranchEvent.standardEvent(.addPaymentInfo)
event.customData["Card Type"] = "VISA"
event.logEvent()
```

#### Android

```Java
BranchUniversalObject branchUniversalObject = new BranchUniversalObject(); // Continue adding data to the BUO.

new BranchEvent(BRANCH_STANDARD_EVENT.ADD_PAYMENT_INFO)
	.setAffiliation("Amazon Prime")
	.setCurrency(CurrencyType.USD)
	.setDescription("Customer added payment info")
	.addCustomDataProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomDataProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.logEvent(context);
```

### Purchase

Log this event when a purchase occurs.

#### Objective-C

```objc
// Create a BranchUniversalObject with your content data:
BranchUniversalObject *branchUniversalObject = [BranchUniversalObject new];

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = @"item/12345";
branchUniversalObject.canonicalUrl        = @"https://branch.io/item/12345";
branchUniversalObject.title               = @"My Item Title";

// Create an event and add the BranchUniversalObject to it:
BranchEvent *event     = [BranchEvent standardEvent:BranchStandardEventPurchase];

// Add the BranchUniversalObjects with the content:
event.contentItems     = (id) @[ branchUniversalObject ];

// Add relevant event data:
event.transactionID    = @"12344555";
event.currency         = BNCCurrencyUSD;
event.revenue          = [NSDecimalNumber decimalNumberWithString:@"1.5"];
event.shipping         = [NSDecimalNumber decimalNumberWithString:@"10.2"];
event.tax              = [NSDecimalNumber decimalNumberWithString:@"12.3"];
event.coupon           = @"test_coupon";
event.affiliation      = @"test_affiliation";
event.eventDescription = @"Event_description";
event.searchQuery      = @"item 123";
event.customData       = (NSMutableDictionary*) @{
    @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
    @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
};
[event logEvent];
```

#### Swift

```swift
// Create a BranchUniversalObject with your content data:
let branchUniversalObject = BranchUniversalObject.init()

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = "item/12345"
branchUniversalObject.canonicalUrl        = "https://branch.io/item/12345"
branchUniversalObject.title               = "My Item Title"

// Create a BranchEvent:
let event = BranchEvent.standardEvent(.purchase)

// Add the BranchUniversalObjects with the content:
event.contentItems     = [ branchUniversalObject ]

// Add relevant event data:
event.transactionID    = "12344555"
event.currency         = .USD;
event.revenue          = 1.5
event.shipping         = 10.2
event.tax              = 12.3
event.coupon           = "test_coupon";
event.affiliation      = "test_affiliation";
event.eventDescription = "Event_description";
event.searchQuery      = "item 123"
event.customData       = [
    "Custom_Event_Property_Key1": "Custom_Event_Property_val1",
    "Custom_Event_Property_Key2": "Custom_Event_Property_val2"
]
event.logEvent() // Log the event.
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
	.addCustomDataProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomDataProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.addContentItems(branchUniversalObject)
	.logEvent(context);
```

### Spend Credits

Log this event any time someone applies credits or a promo code to a purchase.

#### Objective-C

```objc
// Create a BranchUniversalObject with your content data:
BranchUniversalObject *branchUniversalObject = [BranchUniversalObject new];

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = @"item/12345";
branchUniversalObject.canonicalUrl        = @"https://branch.io/item/12345";
branchUniversalObject.title               = @"My Item Title";

// Create an event and add the BranchUniversalObject to it:
BranchEvent *event     = [BranchEvent standardEvent:BranchStandardSpendCredits];

// Add the BranchUniversalObjects with the content:
event.contentItems     = (id) @[ branchUniversalObject ];

// Add relevant event data:
event.transactionID    = @"12344555";
event.currency         = BNCCurrencyUSD;
event.revenue          = [NSDecimalNumber decimalNumberWithString:@"1.5"];
event.shipping         = [NSDecimalNumber decimalNumberWithString:@"10.2"];
event.tax              = [NSDecimalNumber decimalNumberWithString:@"12.3"];
event.coupon           = @"test_coupon";
event.affiliation      = @"test_affiliation";
event.eventDescription = @"Event_description";
event.searchQuery      = @"item 123";
event.customData       = (NSMutableDictionary*) @{
    @"Custom_Event_Property_Key1": @"Custom_Event_Property_val1",
    @"Custom_Event_Property_Key2": @"Custom_Event_Property_val2"
};
[event logEvent];
```

#### Swift

```swift
// Create a BranchUniversalObject with your content data:
let branchUniversalObject = BranchUniversalObject.init()

// ...add data to the branchUniversalObject as needed...
branchUniversalObject.canonicalIdentifier = "item/12345"
branchUniversalObject.canonicalUrl        = "https://branch.io/item/12345"
branchUniversalObject.title               = "My Item Title"

// Create a BranchEvent:
let event = BranchEvent.standardEvent(.spendCredits)

// Add the BranchUniversalObjects with the content:
event.contentItems     = [ branchUniversalObject ]

// Add relevant event data:
event.transactionID    = "12344555"
event.currency         = .USD;
event.revenue          = 1.5
event.shipping         = 10.2
event.tax              = 12.3
event.coupon           = "test_coupon";
event.affiliation      = "test_affiliation";
event.eventDescription = "Event_description";
event.searchQuery      = "item 123"
event.customData       = [
    "Custom_Event_Property_Key1": "Custom_Event_Property_val1",
    "Custom_Event_Property_Key2": "Custom_Event_Property_val2"
]
event.logEvent() // Log the event.
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
	.addCustomDataProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
	.addCustomDataProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
	.addContentItems(branchUniversalObject)
	.logEvent(context);
```

## Track Content Events

Content events are events that occur when a user engages with your in-app content. For example, if you have in-app articles, you would want to track events related to when users search, view content, rate the content, and share. This can apply to a wide variety of in-app content, such as blog posts, music, video, pictures, and e-commerce catalogue items.

### Search

Log this event when a user searches for content inside your app.

#### Objective-C

```obj-c
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventSearch];
event.eventDescription = @"Product Search";
event.searchQuery = @"user search query terms for product xyz";
event.customData[@"Custom_Event_Property_Key1"] = @"Custom_Event_Property_val1";
[event logEvent];
```

#### Swift

```swift
let event = BranchEvent.standardEvent(.search)
event.eventDescription = "Product Search"
event.searchQuery = "user search query terms for product xyz"
event.customData["Custom_Event_Property_Key1"] = "Custom_Event_Property_val1"
event.logEvent()
```

#### Android

```Java
 new BranchEvent(BRANCH_STANDARD_EVENT.SEARCH)
    .setDescription("Product Search")
    .setSearchQuery("product name")
    .addCustomDataProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .logEvent(context);
```

### View item

Log this event when time a user view a single piece of content in your app. Note that you should log this event each time a user views a particular piece of content to improve the content ranking.

#### Objective-C

```obj-c
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventViewItem];
event.eventDescription = @"User viewed app content item.";
event.searchQuery = @"user search query terms to locate content item.";
event.customData[@"Custom_Event_Property_Key1"] = @"Custom_Event_Property_val1";
event.contentItems = (id) @[ contentItem ]
[event logEvent];
```

#### Swift

```swift
let event = BranchEvent.standardEvent(.viewItem)
event.eventDescription = "User viewed app content item."
event.searchQuery = "user search query terms to locate content item."
event.customData["Custom_Event_Property_Key1"] = "Custom_Event_Property_val1"
event.contentItems = [ contentItem ]
event.logEvent()
```

#### Android

```Java
BranchUniversalObject contentItem; // BUO representing the content item

new BranchEvent(BRANCH_STANDARD_EVENT.VIEW_ITEM)
    .setDescription("User viewed app content item")
    .setSearchQuery("Search query that showed this content item.")
    .addCustomDataProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomDataProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .addContentItems(contentItem)
    .logEvent(context);
```

### View items

Log this event any time a user views multiple content items in your app.

#### Objective-C

```obj-c
BranchUniversalObject *contentItem1 = [BranchUniversalObject new];
BranchUniversalObject *contentItem2 = [BranchUniversalObject new];

BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventViewItems];
event.eventDescription = @"User viewed app content item.";
event.searchQuery = @"User search query that located content item.";
event.customData[@"Custom_Event_Property_Key1"] = @"Custom_Event_Property_val1";
event.contentItems = (id) @[ contentItem1, contentItem2 ]
[event logEvent];
```

#### Swift

```swift
let contentItem1 = BranchUniversalObject.init()
let contentItem2 = BranchUniversalObject.init()

let event = BranchEvent.standardEvent(.viewItems)
event.eventDescription = "User viewed app content item"
event.searchQuery = "User search query that located content item."
event.customData["Custom_Event_Property_Key1"] = "Custom_Event_Property_val1"
event.contentItems = [ contentItem1, contentItem2 ]
event.logEvent()
```

#### Android

```Java
BranchUniversalObject contentItem1; // BUO representing the content item 1
BranchUniversalObject contentItem2; // BUO representing the content item 2

new BranchEvent(BRANCH_STANDARD_EVENT.VIEW_ITEMS)
    .setDescription("User viewed a contents")
    .setSearchQuery("Search query showed this content.")
    .addCustomDataProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomDataProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .addContentItems(contentItem1, contentItem2)
    .logEvent(context);
```

### Rate

Log this event when a user rates your content.

#### Objective-C

```obj-c
// Your BranchUniversalObject that describes your content:
BranchUniversalObject *contentItem = [BranchUniversalObject new];
contentItem.canonicalIdentifier = @"item/123";
contentItem.canonicalUrl = @"https://branch.io/item/123";
contentItem.contentMetadata.ratingAverage = 5.0;

// The event that describes user action:
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventRate];
event.eventDescription = @"User rated item.";
event.customData[@"rating method"] = @"normal";
event.contentItems = (id) @[ contentItem ]
[event logEvent];
```

#### Swift

```swift
// Your BranchUniversalObject that describes your content:
let contentItem = BranchUniversalObject.init()
contentItem.canonicalIdentifier = "item/123"
contentItem.canonicalUrl = "https://branch.io/item/123"
contentItem.contentMetadata.ratingAverage = 5.0

// The event that describes user action:
let event = BranchEvent.standardEvent(.rate)
event.eventDescription = "User rated item."
event.searchQuery = "user search query terms for content item"
event.customData["rating method"] = "normal"
event.contentItems = [ contentItem ]
event.logEvent()
```

#### Android

```Java
// Your BranchUniversalObject that describes your content:
BranchUniversalObject contentItem = new BranchUniversalObject();
contentItem.canonicalIdentifier = "item/123"
contentItem.canonicalUrl = "https://branch.io/item/123"

// The event that describes user action:
new BranchEvent(BRANCH_STANDARD_EVENT.RATE)
    .setDescription("User rated item.")
    .addCustomDataProperty("rating method", "normal")
    .addContentItems(contentItem)
    .logEvent(context);
```

### Share

Log this event when a user shares your content.

#### Objective-C

```obj-c
// Your BranchUniversalObject that describes your content:
BranchUniversalObject *contentItem = [BranchUniversalObject new];
contentItem.canonicalIdentifier = @"item/123";
contentItem.canonicalUrl = @"https://branch.io/item/123";

// The event that describes user action:
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventShare];
event.eventDescription = @"User rated item.";
event.customData[@"Share Game Level"] = @"5";
event.contentItems = (id) @[ contentItem ]
[event logEvent];
```

#### Swift

```swift
// Your BranchUniversalObject that describes your content:
let contentItem = BranchUniversalObject.init()
contentItem.canonicalIdentifier = "item/123"
contentItem.canonicalUrl = "https://branch.io/item/123"

// The event that describes user action:
let event = BranchEvent.standardEvent(.share)
event.eventDescription = "User rated item."
event.searchQuery = "user search query terms for content item"
event.customData["Share Game Level"] = "5";
event.contentItems = [ contentItem ]
event.logEvent()
```

#### Android

```Java
BranchUniversalObject contentItem; // BUO representing the content item

new BranchEvent(BRANCH_STANDARD_EVENT.SHARE)
    .setDescription("User shared a content")
    .addCustomDataProperty("Share Game Level", "5")
    .addContentItems(contentItem)
    .logEvent(context);
```

## Track Lifecycle Events

Lifecycle events can be described as events a user takes in your app to continue progressing. These events can apply to game apps, as well as non game apps, for when a user completes a user profile, registration or tutorial.

### Complete Registration

Log this event when a user successfully registers for an account.

#### Objective-C

```obj-c
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventCompleteRegistration];
event.transactionID = @"tx1234"
event.eventDescription = @"User completed registration.";
event.customData[@"registrationID"] = @"12345";
[event logEvent];
```

#### Swift

```swift
let event = BranchEvent.standardEvent(.completeRegistration)
event.transactionID = "tx1234"
event.eventDescription = "User completed registration."
event.customData["registrationID"] = "12345"
event.logEvent()
```

#### Android

```Java
new BranchEvent(BRANCH_STANDARD_EVENT.COMPLETE_REGISTRATION)
    .setTransactionID("tx1234")
    .setDescription("User created an account")
    .addCustomDataProperty("registrationID", "12345")
    .logEvent(context);
```

### Complete Tutorial

Log this event when a user completes any tutorial you provide.

#### Objective-C

```obj-c
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventCompleteTutorial];
event.eventDescription = @"User completed tutorial.";
event.customData[@"Tutorial A/B"] = @"B";
[event logEvent];
```

#### Swift

```swift
let event = BranchEvent.standardEvent(.completeTutorial)
event.eventDescription = "User completed registration."
event.customData["Tutorial A/B"] = "B"
event.logEvent()
```

#### Android

```Java
new BranchEvent(BRANCH_STANDARD_EVENT.COMPLETE_TUTORIAL)
    .setDescription("User completed tutorial.")
    .addCustomDataProperty("Tutorial A/B", "B")
    .logEvent(context);
```

### Achieve Level

Log this event when a user reaches a certain stage in your app.

#### Objective-C

```obj-c
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventAchieveLevel];
event.eventDescription = @"User achieved a level.";
event.customData[@"Tutorial A/B"] = @"B";
[event logEvent];
```

#### Swift

```swift
let event = BranchEvent.standardEvent(.achieveLevel)
event.eventDescription = "User achieved a level."
event.customData["Tutorial A/B"] = "B"
event.logEvent()
```

#### Android

```Java
new BranchEvent(BRANCH_STANDARD_EVENT.ACHIEVE_LEVEL)
    .setDescription("User achieved a level.")
    .addCustomDataProperty("Custom_Event_Property_Key1", "Custom_Event_Property_val1")
    .addCustomDataProperty("Custom_Event_Property_Key2", "Custom_Event_Property_val2")
    .logEvent(context);
```

### Unlock Achievement

Log this event when a user hits an achievement point in your app.

#### Objective-C

```obj-c
BranchEvent *event = [BranchEvent standardEvent:BranchStandardEventAchieveLevel];
event.eventDescription = @"User unlocked achievement.";
event.customData[@"achievmentReward"] = @"sword-of-doom";
[event logEvent];
```

#### Swift

```swift
let event = BranchEvent.standardEvent(.achieveLevel)
event.eventDescription = "User unlocked achievement."
event.customData["achievmentReward"] = "sword-of-doom"
event.logEvent()
```

#### Android

```Java
new BranchEvent(BRANCH_STANDARD_EVENT.UNLOCK_ACHIEVEMENT)
    .setDescription("User unlocked achievement.")
    .addCustomDataProperty("achievmentReward", "sword-of-doom")
    .logEvent(context);
```


Fire this event when a user hits an achievement point in your app.

## Track Custom Events

If you want to track an event that isn't a pre-defined event, simply do the following:

### Objective-C

```objc
[BranchEvent.customEventWithName(@"User_Scanned_Item") logEvent];
```

### Swift

```swift
 BranchEvent.customEventWithName("User_Scanned_Item").logEvent()
```

### Android

```Java
new BranchEvent("Some Custom Event")
    .addCustomProperty("Custom_Event_Property_Key11", "Custom_Event_Property_val11")
    .addCustomProperty("Custom_Event_Property_Key22", "Custom_Event_Property_val22")
    .logEvent(MainActivity.this);
}
```

## Current Support

There are a few products and features unsupported by this new method of tracking events. We clarify what's currently supported and what isn't below.

### Acceptance

Tracking these events will propagate to Ad Networks, like Criteo. For example, if you track the purchae event through Branch, this will map to Criteo's Purchase event.

These events will also have analytics, so you can understand their performance, using the new Analytics Platform. Read more about the new Analytics Platform [here]((https://docs.branch.io/pages/deep-linked-ads/branch-universal-ads/#view-your-data-with-unified-analytics).

### Limitations

As of now, any calls made through these SDK methods will **not**:

- Appear in your .csv exports or Liveview.
- Be settable events for Webhooks or sent via Data Integrations.
- Be events you can target a Journey with.
- See Analytics on the old Analytics pipeline. Read more about our new [Analytics](https://docs.branch.io/pages/deep-linked-ads/branch-universal-ads/#view-your-data-with-unified-analytics).
