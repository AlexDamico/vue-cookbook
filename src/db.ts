import firebase from 'firebase/app'
import 'firebase/firestore';

// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: 'vue-cookbook-apd' })
  .firestore()

  console.log("// v DB v")
  console.log(db);

  // retrieve a collection
  db.collection('recipes')
    .get()
    .then(querySnapshot => {
      const recipes = querySnapshot.docs.map(doc => doc.data())
      // do something with documents
      console.log('// v Recipe collection v')
      console.log(recipes)
    })