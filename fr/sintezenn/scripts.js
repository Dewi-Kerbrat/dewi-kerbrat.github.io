function OnAlert(){

const fileInput = document.getElementById('input');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  console.log(selectedFile);
}

var myHeaders = new Headers();
myHeaders.append("Authorization", "Token token=leQXX6fy3aOWMjb7IaKOEeJRqPwXcxpp");

var formdata = new FormData();
formdata.append("job[webapp_id]", "1054");
formdata.append("job[param]", "");
formdata.append("job[queue]", "standard");
formdata.append("file[0]", fileInput.files[0], "[PROXY]");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://allgo18.inria.fr/api/v1/jobs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
