import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const newUser = signUpUser(firstName, lastName);
  const rejectedPhoto = uploadPhoto(filename);
  const finalPromise = Promise.all([newUser, rejectedPhoto]).catch(() => {});
  return (finalPromise);
}
