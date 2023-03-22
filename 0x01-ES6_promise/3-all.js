import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  // use then on it to check if photoPromise is correctly resolved
  return photoPromise.then((result) => {
    const photoBody = result.body;
    return photoBody;
  }).then((photoBody) => {
    /** then use the body (profile photo gotten from the)
   previous function */
    const userPromise = createUser();
    userPromise.then((userResult) => {
      /** initialising first and last names from the createUser returned/resolved object.
         * apparently, i shouldnt use dot notation bc of eslint
         * if not it'll have been: const firstName = userResult.firstName;
         */
      const { firstName } = userResult;
      const { lastName } = userResult;
      console.log(`${photoBody} ${firstName} ${lastName}`);
    });
  }).catch(() => {
    console.log('Signup system offline');
  });
}
