Feature: Planit Technical Assesment - Autoamtion
Automating the Test assesment applicaiton

    @test1 @test @debug
    Scenario: Test case 1 : validation of contact form
        Given Validated application launch
        Then Click menu "Contact"
            And Wait for page to navigate
            And Click button "Submit"
        Then Validate the "Forename" field validation error as "Forename is required"
        Then Validate the "Email" field validation error as "Email is required"
        Then Validate the "Message" field validation error as "Message is required"
        Then Enter "Test" in "Forename" field
        Then Enter "test1@test.com" in "Email" field
        Then Enter "Message" in "Message" field
            And Validate error message removed for field "Forename"
            And Validate error message removed for field "Email"
            And Validate error message removed for field "Message"

    @test2 @test
    Scenario: Test case 2 : Submit contact form
        Given Validated application launch
        Then Click menu "Contact"
            And Wait for page to navigate
        Then Enter "Test" in "Forename" field
        Then Enter "test1@test.com" in "Email" field
        Then Enter "Message" in "Message" field
            And Click button "Submit"
            And Wait for page to navigate
        Then Validate submission successful page

    @test3 @test
    Scenario: Test case 3 : validation of contact form by entering invalid data
        Given Validated application launch
        Then Click menu "Contact"
            And Wait for page to navigate
        # Forename, Surname and Message are free input window accepting all symbols and alpha numeric skipping the validation
        Then Enter "test" in "Email" field
        Then Enter "Telephone" in "Telephone" field
        Then Validate the "Email" field validation error as "Please enter a valid email"
        Then Validate the "Telephone" field validation error as "Please enter a valid telephone number"

    @test4 @test
    Scenario: Test case 4 : shopping cart
        Given Validated application launch
        Then Click menu "Shop"
            And Add 2 "Funny Cow" to cart
            And Add 1 "Fluffy Bunny" to cart
            And Click menu "Cart (3)"
            And Validate cart list has 2 "Funny Cow"
            And Validate cart list has 1 "Fluffy Bunny"
