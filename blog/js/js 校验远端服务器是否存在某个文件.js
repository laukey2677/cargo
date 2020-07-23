//  判断远端服务器的文件地址是否有效
function isExistFile (filepath) {
    if(filepath == null || filepath == undefined || filepath == ""){
      return false;
    }
    var xmlhttp;
    if (window.XMLHttpRequest){
      xmlhttp = new XMLHttpRequest();
    }else{
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET",filepath,false);
    xmlhttp.send();
    if(xmlhttp.readyState == 4){
      if(xmlhttp.status == 200){
        return true;
      }else{
        return false;
      }
    }
  }
  //    用法

