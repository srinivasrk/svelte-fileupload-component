//Here is where the file is received. TODO CSV PARSE
export function post(req, res, next){
  console.log("reading response from dropzone");
  console.log(req.files.file);
  res.write("woott");
  res.end();
}

//test get method
export function get(req, res, next){
  res.write("get called");
  res.end();
}
