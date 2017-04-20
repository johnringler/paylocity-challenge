# BUG REPORT
* * *
The following defects were found while testing the "Employee Benefits Portal".
These defects occured with the following configuration at least:

  - Operating System: ```macOS Sierra Version 10.12 (16A323)```
  - Browser: ```Google Chrome Version 57.0.2987.133 (64-bit)```
  - Environment: the application was tested locally (<code>./app/login.html</code>)

* * *

##### Bug #1: First Name and Last Name labels are flipped in the employee table
###### Severity: High

###### Steps to reproduce:
1. Log in as a user
2. On the "Benefits Dashboard" page, click the "Add Employee" button
3. Enter "first" in the "First Name" field
4. Enter "last" in the "Last Name" field
5. Click the "Submit" button


###### Actual Result:
The "Last Name" column reads "First" and the "First Name" column reads "Last".
###### Expected Result:
The "Last Name" column should read "Last" and the "First Name" column should read "First".
###### Screenshot:
![Preview](https://cl.ly/110D0g0N1Q46)


##### Bug #2: "Dependants" is misspelled in the "Add Employee" form<
###### Severity: Low

###### Steps to reproduce:
1. Log in as a user
2. On the "Benefits Dashboard" page, click the "Add Employee" button

###### Actual Result:
The last field names on the form reads "Dependants".
###### Expected Result:
The label for the last field should be spelled: "Dependents".
###### Screenshot:
![Preview](https://cl.ly/2v0t0a2v0f40)


##### Bug #3: Content should be made gender neutral
###### Severity: Low

###### Steps to reproduce:
1. Log in as a user
2. On the "Benefits Dashboard" page, click the "Add Employee" button

###### Actual Result:
The header on the "Add Employee" form reads: "Add Employee & His dependents".
###### Expected Result:
The header on the "Add Employee" form should be renamed to either "Add Employee & Dependents" or ""Add Employee & His/Her dependents".
###### Screenshot:
![Preview](https://cl.ly/3Y1B3d38400A)


##### Bug #4: There is no validation for the values entered in the "Add Employee" form
###### Severity: Medium

###### Steps to reproduce:
1. Log in as a user
2. On the "Benefits Dashboard" page, click the "Add Employee" button
3. Enter special characters in the "First Name" field
4. Enter special characters in the "Last Name" field
5. Enter a negative decimal
6. Click the "Submit" button

###### Actual Result:
The empoyee is saved as it was entered.
###### Expected Result:
Validation should take place on each value entered. First name and last name should only contain letters and no special characters (with the exception of hyphen and apostrophe). The dependent value should be limited to positive integers and 0. In addtion, first name and last name should be limited to a fixed number of characters (35 for example).
###### Screenshot:
![Preview](https://cl.ly/302k322s2h0u)


##### Bug #5: All employee ID's are set to "1"
###### Severity: High

###### Steps to reproduce:
1. Log in as a user
2. On the "Benefits Dashboard" page, click the "Add Employee" button
3. Enter empployees values
4. Click the "Submit" button
5. Repeat 3 steps above at least once to add more employees


###### Actual Result:
In the Employee table, all employees have the same ID which is "1"
###### Expected Result:
After each submission, the employee ID should auto increment.
###### Screenshot:
![Preview](https://cl.ly/1x0j3N0f452B)


##### Bug #6: When shrinking the window size the "dependents" value doesn't remain visible
###### Severity: Low

###### Steps to reproduce:
1. Log in as a user
2. On the "Benefits Dashboard" page, click the "Add Employee" button
3. Enter a first name, last name and the number of dependents
4. Resize the browser width until it falls under approximately 1000 px


###### Actual Result:
The value entered for the "Dependents" field becomes invisible.
###### Expected Result:
The value entered for the "Dependents" field should remain visible visible for smaller window sizes.
###### Screenshot:
![Preview]https://cl.ly/3d1V1g0p0v2O)



####Screenshot:
![Mislabeled](images/last_name_column_has_first_name.png)


