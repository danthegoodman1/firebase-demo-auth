const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.writeNewUser = functions.auth.user().onCreate((event) => {
    admin.initializeApp(functions.config().firebase);
    const user = event.data;
    const uid = user.uid;
    const udisplayName = user.displayName;
    const uemail = user.email;
    const urole = "user";
    return admin.database().ref("users").child(uid).set({
        displayName: udisplayName,
        email: uemail,
        role: urole
    });
});
