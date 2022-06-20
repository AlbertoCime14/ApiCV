global.__basedir = __dirname;
exports.UserCvInfo = (req, res) => {
   
    const fs = require('fs');
    const path = require('path');

   //readFileSync is synchronous

    try {
            let dataCV = JSON.parse(fs.readFileSync(path.join(__dirname, '../Data', 'albertocv.json'), 'utf8'));
            const response = {
                "message":"Success",
                dataCV
               
            };
            res.status(200).json(response);

      } catch (err) {
        throw err;
      }
    

   
};
