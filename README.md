# Zone Assessment

## Cypress Automation

Automation was done using 

- Cucumber BDD & POM

- TypeScript

The  deffault test can be found in `e2e/tests` however, it would not run because tests have been configure to point to the bdd folder where the feature file is located.

# 

---

## Postman Automation

- Tests were included for all end-points

- Request chaining was implemented where required

- Update booking end-point contains functions to clear variables after request is executed, it's important to comment out the function when executing the tests manually & independently to prevent errors since the function would clear all preset authorizations but when executing it by just running the collection, it can be uncommented to clear empty all variables after successful run.

  Cheers! :)
