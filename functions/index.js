const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Pablo!");
});

const createNotifications = (notification => {
  return admin.firestore()
  .collection('notifications')
  .add(notification)
  .then(doc => console.log('notification created', doc))
})

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: 'Created a new project!',
      user: `${project.authorNickname}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotifications(notification);
  })

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
          content: 'Joined the group',
          user: `${newUser.nickname}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }
      })
  })