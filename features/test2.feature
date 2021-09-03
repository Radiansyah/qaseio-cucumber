Feature: Authorization
   @satu @dua 
   Scenario: Authorization
     Given sign up page <https://qase.io/login>
     When Fill the form with login “test” and password “test”
     Given sign up page <https://qase.io/login>
     When Fill the form with login “test” and password “test”
     And  “remember me” checkbox
     Then Click on the “Login” button
   @tiga 
   Scenario: Sign up
     Given Open “Sign Up” page: <https://qase.io/signup>
     Given Open “Sign Up” page: <https://qase.io/signup>
     When Fill form with the following credentials
     And Click Submit button
     And Open email application
     Then Confirm account registration by clicking on the confirm button from the email
   @tiga 
   Scenario: Password restore
     Given Open password restore page: <https://qase.io/password/reset>
     Given Open password restore page: <https://qase.io/password/reset>
     When Fill the form with email “qase@example.com” and press “restore” button
     And Click on “restore password” button in email
     And Enter a new password for account and click submit button
     And Open login page: <https://qase.io/login>
     And Fill the form with email “qase@example.com” and new password
     Then Press login button
   
   Scenario: Sign up with invite link
     When Open email with invitation letter and click on button “Join workspace”
     Then Fill the form with password and click submit button
