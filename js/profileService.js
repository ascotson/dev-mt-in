var app = angular.module('devMtIn');

app.service('profileService', function($http){

var baseUrl = 'BASEURL FIXME';

  this.checkForProfile = function(profileId){
    return $http({
      method: 'GET',
      url: baseUrl + '/api/profiles' + profileId,
    });
  };

  this.saveProfile = function(profile){
    $http({
      method: 'POST',
      url:  baseUrl + '/api/profiles',
      data: profile
    }).then(function(profileResponse){
      console.log(profileResponse);
      localStorage.setItem('profileId', JSON.stringify({ profileId: profileResponse.data._id }));
    })
    .catch(function(err){
      console.error(err);
    });
  };

  this.deleteProfile = function(){
    var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;
    return $http({
      method: 'DELETE',
      url:  baseUrl + '/api/profiles' + profileId
    });
  };

});
