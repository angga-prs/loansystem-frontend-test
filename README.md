# loansystem-test

installation : 
1. npm run install
2. npm run serve

go to http://localhost:3000/signup

list of created / modified files
1. loansystem-frontend-test\package.json
   change the port to 3000
   
 2. loansystem-frontend-test\src\http-common.js
    Axios to hit API backend
    
 3. loansystem-frontend-test\src\services\RegisterServices.js
    Gateway to hit the API
    
 4. loansystem-frontend-test\src\views\Signup.vue
    Register Page
    
 5. loansystem-frontend-test\src\components\ArgonInput.vue
    modify the custom input component, so they can use Vue V-Model
    
 6. loansystem-frontend-test\src\components\CustomSelect.vue
    Create the custom select, so they can use Vue V-Model
    
 7. loansystem-frontend-test\src\router\index.js
    Modify default page when running application
