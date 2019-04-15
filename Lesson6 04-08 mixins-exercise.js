var userProfile= {
    name: 'Taylor F',
    address: 'Baker St',
    city: 'Charlotte',
    state: 'NC',
    zipcode: '28270',
    avatar: 'avatar2016'
} //end userProfile

console.log(userProfile, 'This is old information.')



function getProfileUpdate() {
    console.log('Please update your information.')
    return newProfile= {
      name:'Taylor S',address:'43rd St',city:'Lancaster',state:'SC',zipcode:'11111',avatar:'avatar2019'}, //end newProfile
    console.log('These are your suggested changes...'),
    console.log(newProfile)
 } ;
 //end getProfileUpdate

 function updateProfile() {
  var updatedProfile = Object.assign(userProfile, newProfile)
  return updatedProfile,
  console.log('Thank you for making the following changes. They will be reflected in your updated profile...'),
  console.log(updatedProfile)
}; //end updateProfile

getProfileUpdate();
updateProfile();
