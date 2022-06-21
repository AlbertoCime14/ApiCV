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
          const response = {
              "message":"Failed",
              "Output":err
            };
          res.status(501).json(response);
          
      }
    

   
};

exports.ImageProfile = (req, res) => {
   
  
  const fs = require("fs");
  const path = require("path");
  const imagepath= "../Data/image.jpeg"
 //readFileSync is synchronous

  try {
        var filePath = path.join(__dirname, imagepath).split("%20").join(" ");
        // Checking if the path exists
        fs.exists(filePath, function (exists) {
    
          if (!exists) {
              res.writeHead(404, {
                  "Content-Type": "text/plain" });
              res.end("404 Not Found");
              return;
          }

          // Extracting file extension
          var ext = path.extname(imagepath);

          // Setting default Content-Type
          var contentType = "text/plain";

          // Checking if the extension of
          // image is '.jpeg'
          if (ext === ".jpeg") {
              contentType = "image/png";
          }

          // Setting the headers
          res.writeHead(200, {
              "Content-Type": contentType });

          // Reading the file
          fs.readFile(filePath,
              function (err, content) {
                  // Serving the image
                  res.end(content);
              });
      });
          
        //res.status(200).json(response);

    } catch (err) {
        
        res.status(501).json(err);
        
    }
  

 
};
