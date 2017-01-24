var config = require('./config');
var helper = require('./server/helpers');

//var random_password = '123456qwerty';
//var emailTo = 'anirudha@konoha.in';
//var mailSubject = 'Welcome to '+config.server.appName;
//var mailBody = "<p>You have successfully registered New Account. You can login using the password is <strong>"+random_password+" </strong></p>";
//helper.sendMail(emailTo,mailSubject, mailBody);

device_info = {};
device_info['device_type'] = 'android';
device_info['device_token'] = 'cDFj1sbQjpY:APA91bF0j4-_Bb-DJI0Mr06_hWwQ-sVlGxvlMQI358iZOo3lF5JkF_ujREwd8yJCGP9fqv8gXJ4JTTpqVeevrenphefB6c9ABsHQS4zQa88c01w1F-gtx9yeZayhTuLhLbwY4GefDQBp';
push_data = {};
push_data['collapse_key'] = 'collapse_key';
push_data['push_title'] = 'Asshole1';
push_data['push_body'] = 'MOFO Munjuni 1Rocxxxxxxx.. XD';
push_data['push_data'] = {
    "sample_key": "sample data1"
};
helper.sendPush(device_info,push_data);


