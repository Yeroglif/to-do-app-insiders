# A todo-lists app for you to start setting your life in order

You download the app from here and simply do the following steps:
`npm install` to install all the required packages
`npm run dev` to start up

If the tailwind doen't download correctly follow the steps here: https://tailwindcss.com/docs/installation/using-vite

Important: you need to have you own firebase set up since I'm not going to give you my keys.
Simply create a firebase project and firestore db and firebase authentication in there. Then you can add the keys to your .env file like so
`VITE_FIREBASE_APIKEY=your-apikey`

Also important: the database doen't fetch any data currently, although it does send it to the db
Firebase rules used:
```javascript
rules_version = '2';
// don't allowe anyone on default
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
    	allow read, write: if false;
    }
    // allow authenticated users that match user ID
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
