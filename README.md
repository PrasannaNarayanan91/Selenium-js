# Jupitor Toys automation test 
> Framework uses the combination of javaScript, Selenium with Cucumber

# Steps to setup framework in mac os
Pre-requisit : node js to be installed and NVM should be configured ( This project was developed using node v14.17.0)

> Navigate to the project root folder/open the project in any IDE (VS Code)
> run command in terminal "npm install"
> unzip the drives(chrome and Firefox) and copy the execution file and paste it in "/usr/local/bin" and execute it by "double click" or navigate from terminal and run command : For Chrome - chromedriver, For Firefox - geckodriver 

### Note: working on automating the driver launch.

# To execute test cases from command line 

> use command "TAG=@(tag name of the test) npm run (environment) (browser name)" (eg: TAG=@test npm run st chrome)

# Report's 
> json report will be stored under "output" folder 
> Screenshot will be taken for the failed scenario and stored under "output" folder
> To generate html report run command "npm run report" (after test execution)

## along with the project pushing the debuging settings 

## Test results are attached under "testResults" folder
