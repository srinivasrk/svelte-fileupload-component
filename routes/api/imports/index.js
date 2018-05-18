//Here is where the file is received. TODO CSV PARSE
var csvparse = require('csv-parse');


export function post(req, res, next){
  if(!req.files)
    return res.status(400).send('No files were uploaded');

  let sampleFile = req.files.file;
  var csv = csvparse();

  csv.on('readable', () => {
    let r = csv.read();
    console.log(r);
  });
  csv.on('error', (err) => {
    return res.status(500).send("Unable to parse the file");
  });
  csv.on('finish', () => {
    return res.status(200).send("Reading complete")
  });

  csv.write(sampleFile.data);
  csv.end();
}

//test get method
export function get(req, res, next){
  res.write("get called");
  res.end();
}
