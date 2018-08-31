/* tslint-disable*/

import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

exports.sendgridEmail = functions.database
  .ref('AAR Item/{aarId}/SharedWith/{sharedWithUserId}')
  .onWrite((event, context) => {
    const originUser = (context.auth.token as any).email;
    const userId = context.params.sharedWithUserId;
    const aarId = context.params.aarId;
    const db = admin.database();
    return db
      .ref('AAR Item/' + aarId)
      .once('value')
      .then(snapshot => {
        const aarItem = snapshot.val();
        const newImpact = aarItem.SharedWith.length;
        console.log('new imp', newImpact);
        db.ref('AAR Item/' + aarId)
          .update({ Impact: newImpact })
          .then(() => console.log('adjusted impact'))
          .catch(err => console.log(err));
        return db
          .ref('Users/' + aarItem.SharedWith[userId])
          .once('value')
          .then(snap => {
            const user = snap.val();
            const msg = {
              to: user.UserEmail,
              from: 'noreply@aar-proj.firebaseapp.com',
              subject: 'New Aar shared with you', // custom templates
              templateId: 'd-67fc1de5cfea4df98c134f03e9f9e35e',
              substitutions: {
                originEmail: originUser,
                title: aarItem.Title,
                related: aarItem.RelatedTo,
                whatShouldHaveHappened: aarItem.WhatShouldHaveHappened,
                whatActuallyHappened: aarItem.WhatActuallyHappened,
                dateCreated: aarItem.DateCreated,
                dateOfAar: aarItem.DateOfAAR
              },
              dynamic_template_data: {
                originEmail: originUser,
                title: aarItem.Title,
                related: aarItem.RelatedTo,
                whatShouldHaveHappened: aarItem.WhatShouldHaveHappened,
                whatActuallyHappened: aarItem.WhatActuallyHappened,
                dateCreated: aarItem.DateCreated,
                dateOfAar: aarItem.DateOfAAR
              }
            };
            return sgMail.send(msg);
          })
          .then(() => {
            console.log('email sent!');
          });
      })
      .catch(err => console.log(err));
  });
