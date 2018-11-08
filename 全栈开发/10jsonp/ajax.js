window.onload=function(){
  var oBtn=document.getElementById('btn1');
  oBtn.onclick=function(){
    var formData=new FormData();
    formData.set('a',12);
    formData.set('b',5);

    var xhr=new XHRHttpRequest();

    xhr.open('post','1.php',true);
    xhr.send(formData);

    xhr.onreadystatechange=function(){
      if(xhr.readyState==4){
        if(xhr.status>=200&&xhr.status<300 || xhr.status==304){
          alert(xhr.responseText);
        }else{
          alert('错了');
        }
      }
    }
  }
}
