var setting = Meteor.settings.public.amap;
if (!setting) {
  console.log('error', 'Please Add amap setting.');
}

AMapMobileAPI = {};

AMapMobileAPI.configure = function () {
  if (device.platform != "Android") {
    AMapPlugin.configure(setting.iOSApiKey, setting.distanceFilter, function (data) {
      console.log('backgroundGeoLocation ios configure success', '');
    }, function (error) {
      console.log('error: ' + error, '');
    });
  } else {
    AMapPlugin.configure(setting.AndroidApiKey, setting.interval, function (data) {
      console.log('backgroundGeoLocation android configure success', '');
    }, function (error) {
      console.log('error: ' + error, '');
    });
  }
  document.addEventListener("AMap.updateLocation", updateLocation, false);
}

AMapMobileAPI.start = function () {
  if (device.platform != "Android") {
    AMapPlugin.start(
      function () { console.log('backgroundGeoLocation:start success.', ''); },
      function () { console.log('backgroundGeoLocation:start failed.', ''); });
  } else {
    AMapPlugin.start(updateLocation, function () { console.log('backgroundGeoLocation:start failed.', ''); });
  }
};

AMapMobileAPI.stop = function (callback) {
  AMapPlugin.stop(callback, function () { console.log('backgroundGeoLocation:stop failed.', ''); });
};

AMapMobileAPI.getLocationWithReGeocode = function (callback, error_callback) {
  AMapPlugin.getLocationWithReGeocode(callback, error_callback);
}

function updateLocation(data) {
  try {
    var coordinates = {};
    coordinates.longitude = data.longitude;
    coordinates.latitude = data.latitude;
    coordinates.address = data.address;
    console.log("Update Location:" + JSON.stringify(coordinates), '');
  } catch (exception) {
    console.log("backgroundGeoLocation:error-->" + exception, '');
  }
}