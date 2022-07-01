
Feature: Color Background Functionality Validation

Background
Given User see the button as "Set SkyBlue Background"

@Scenario1
Scenario: 
Given User see the button as "Set SkyBlue Background"
When User is able to click on the button
Then User should see background color change to sky blue
