export function post(req, res, next){
  console.log("reading response from dropzone");
  console.log(req.files.file);
  res.write("woott");
  res.end();
}

export function get(req, res, next){
  res.write("get called");
  res.end();
}
