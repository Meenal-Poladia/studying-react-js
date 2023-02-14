/*
    Deploying NextJs Project

   It is okay to add our credentials on the backend code which connect to the server as it wont be visible to the users.

   Vercel is a great hosting provider for NextJS applications because the Vercel actually is a hosting provider
   by the same team that's developed NextJS. To deploy the app on Vercel is it important to sign up with a Git
   repository provider. Doing this we will directly link our git repository with vercel so that vercel can have direct
   access to the source code. We can also use  GitHub, GitLab, or Bitbucket, which are Git repository providers.

   After signing in the github account we need to create a repository so that we can push our code.

   When we want to deploy our app on another server we need to first use the command npm run build so that the code is
   minified and optimised. It builds a .next folder which contains the optimised files and all those files that are
   pre-generated page files. After that we need to pass the command npm start to start a production server. This is now
   the production server, which we could start on a remote machine, which we can administer ourselves to run the server
   for your next application. That server should be up and running until we want the world to have access to the
   application. This will be done by Vercel.

   We need to give Vercel permission for certain repositories. We can add any environmental variables if we are using
   any.
   We need to also make changes in our database where we allow it to access the request from anywhere, So that our
   Vercel server can connect to Mongodb where we have our database. If the connection failed then we again hit deploy
   because in the earlier one we made a request but the server were not taking in requests.


   Note:
   How we connect Github to Vercel from 9:15

 */