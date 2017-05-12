//This is the time stamp
const stamp = new Date();

const fs = require('fs');

const seperator = '======' + stamp + '=======';

const colors = require('colors');

//Thia is the utility method of debug
exports.debug = (data, status) => {
  //This is the debug env
  if (process.env.DEBUG) {
    // if the status is equal to fail
    if (status === 'fail') {
      const out1 = seperator + '\n \n' + colors.red(data) + '\n \n';
      fs.appendFile('./error.log', out1, (err) => {
        if (err) throw err;
        console.log('log updated sucessfully');
        //This is closing fs appendfile
      });
      console.log(out1);
      // If the status is equal sucess
    } else if (status === 'sucess') {
      const out2 = seperator + '\n \n' + colors.green(data) + '\n \n';
      fs.appendFile('./error.log', out2, (err) => {
        if (err) throw err;
        console.log('log updated sucessfully');
        //This is closing fs appendfile
      });
      console.log(out2);
      // If the status is undefined
    } else {
      const out3 = seperator + '\n \n' + colors.blue(data) + '\n \n';
      fs.appendFile('./error.log', out3, (err) => {
        if (err) throw err;
        console.log('log updated sucessfully');
        //This is closing fs appendfile
      });
      console.log(out3);
      //This closes else
    }
    //This closes if debug env
  }
  //This closes util module
};
