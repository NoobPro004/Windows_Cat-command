#!/usr/bin/env node
let fs=require('fs');
//let str=fs.readFileSync('f.txt').toString();
//console.log(str);

//console.log(process.argv);
let str=``;
(function(){
    let arr=process.argv.slice(2);
    let options=[];
    let file=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].startsWith("-"))options.push(arr[i]);
        else file.push(arr[i]);
    }
    
    //console.log(options);
    //console.log(file);
    
    for(let i=0;i<file.length;i++){
        if(fs.existsSync(file[i])){
            str+=fs.readFileSync(file[i]).toString();
        }else{
            console.log("Invalid");
            return ;
        }
    }

    
str=str.split("\n");

if(options.includes("-s")){
   // console.log(str);
    str=removeLargeSpace(str);
}

if(options.includes("-n") && options.includes("-b")){
    if(options.indexOf("-n")>options.indexOf("-b")){
        str=addNonNum(str);
    }else{
        str=addAllNum(str);
    }
}else{
    if(options.includes("-b")){
        str=addNonNum(str);
    }else if(options.includes("-n")){
        str=addAllNum(str);
    }
}

str=str.join("\n");
console.log(str);
})();




function removeLargeSpace(str){
    let flag=false;
    let y=[];
    for(let i=0;i<str.length;i++){
        if(str[i]=="" || str[i]=="\r"){
            if(flag==false){
             y.push(str[i]);
                flag=true;
                continue;
            }else continue;
        }else{
            y.push(str[i]);
            flag=false;
        }
    }
return y;
  }

  function addAllNum(arr){
      for(let i=1;i<=arr.length;i++)arr[i-1]=i+""+arr[i-1];

      return arr;
  }

  function addNonNum(arr){
      let linenum=1;
      for(let i=0;i<arr.length;i++){
          if(arr[i]!=="" && arr[i]!== "\r"){
              arr[i]=linenum+""+arr[i];
              linenum++;
          }
      }

      return arr;
  }