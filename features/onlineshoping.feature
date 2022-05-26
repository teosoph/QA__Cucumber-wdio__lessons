Feature: SigUp, SignIn and Purchase product

Scenario: TC-001 Create a new user/SignUp
"some help text"
Given I am on the home page
Then Navigate to SignUp page
And Create an account with random username

Scenario: TC-002 Sign In with newly created user credentials
"some help text"
Given I am on the Sign In page
When Login using newly created credentials
Then I shall verify the address information in my addresses section
