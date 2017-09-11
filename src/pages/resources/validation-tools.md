## AASA Validator

In case you need to validate your domain, use the [AASA Validator](https://branch.io/resources/aasa-validator/) to check universal linking is set up properly.

## App Indexing Validator

Check your app to see if it can properly index and surface content for Firebase through our [App Indexing Validator](https://branch.io/resources/app-indexing/).

## Universal Link Validator

### Overview

The Universal Link Validator compares an app’s local project settings to its dashboard settings and helps pinpoint errors that may prevent Universal Links from functioning properly. This service verifies that:

* the entries in the project’s .entitlements file are correct
* the entries in the project’s info.plist file are correct
* the .entitlements file has the correct build target selected
* the Apple App Prefix on the Dashboard matches the Apple Developer ID specified for the project

### Running the script

1. Download and extract the [script](https://branch.io/resources/universal-links/static/twigScript/ulv_script.sh)
1. Execute the script with the path to your .xcodeproj file

	```bash
	bash ulv_script.sh /Users/jbauer/Desktop/BranchStuff/Branch-TestBed-Swift/TestBed-Swift.xcodeproj`
	```

1. Upon execution, the script will return

	```bash
	#####################################################
	 Click the link generated to test your configuration
	#####################################################
	{"url":"https://ulv.app.link/RPyaHjpYJd"}
	```

1. Clicking the generated link, or copying & pasting it into a browser, will open the validator and display the test results.
