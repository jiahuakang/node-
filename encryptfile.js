// node 通过一个路径,批量加密文件  
//参数为 node  *.js  路径 （注意路径不要用\ 请用/）
//再次执行解密
'use strict'
var filename=null;
// 接收数据，由命令行接收
let arr = process.argv;
//获取路径
let filePath = arr[2];
//  引入文件对象
var  fs = require('fs');
// 判断是否是目录
fs.stat(filePath,(err,stats)=>{
  if(stats.isFile()){
    console.log('不是文件夹');
    process.exit();
  }
  // 读取文件目录
  fs.readdir(filePath,(err,files)=>{
    if(err) throw err;
    console.log(files);
    for (var i = 0; i < files.length; i++){
      //配置文件路径
    	    filename = filePath+'/'+files[i];
      //读取文件    
      var reader = fs.readFileSync(filename);
          for (var j = 0; j < reader.length; j++) {     
              reader[j] = reader[j] ^ 1;
          }         
      //同步写入更改过的编码        
      fs.writeFileSync(filename,reader);

    }

  });
});

