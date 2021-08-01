let fs=require("fs");
let path=require("path");

let inputArr=process.argv.slice(2);
let content="";

let fileArr=[];
let optionArr=[];
for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    if(firstChar=="-"){
        optionArr.push(inputArr[i]);
    }else{
        fileArr.push(inputArr[i]);
    }
}
for(let i=0;i<fileArr.length;i++){
  let ans= fs.existsSync(fileArr[i]);
    if(ans==false){
        console.log("File dosent exists");
        return;
    }    
}    
    
    for(let i=0;i<fileArr.length;i++){
        content+="\r\n"+fs.readFileSync(fileArr[i]);
    }

    let contentArr=content.split("\r\n");
 let BandNtogether= optionArr.includes("-n") && optionArr.includes("-b")

 if(BandNtogether==true){
    let indexN=optionArr.indexOf("-n");
    let indexB=optionArr.indexOf("-b");
    if(indexN>indexB){
        optionArr.splice(indexN,1);
    }else{
        optionArr.splice(indexB,1);
    }
     
 }

//s-check

    let isSPresent=optionArr.includes("-s");
    if(isSPresent){
       
        for(let i=0;i<contentArr.length;i++){
            if(contentArr[i]=="" && contentArr[i-1]==""){
                contentArr[i]=null;
            }else if(contentArr[i]=="" && contentArr[i-1]==null){
                    contentArr[i]=null;
            }
        }
        let temp=[];
        for(let i=0;i<contentArr.length;i++){
            if(contentArr[i]!=null){
                temp.push(contentArr[i]);
            }
        }
        contentArr=temp;
    }

  
    


//n-check

    let isNPresent=optionArr.includes("-n")
    if(isNPresent){
        for(j=0;j<contentArr.length-1;j++){
             
              contentArr[j]=(j+1+" "+contentArr[j]);
            }
        }




//b-check

    let isBPresent=optionArr.includes("-b")
    if(isBPresent){
        let count = 1;
    for(let i=0; i<contentArr.length;i++){
        if(contentArr[i] != ""){
            contentArr[i]=(count +  " " + contentArr[i] );
            count++;
        }
        else{
            contentArr[i]= (contentArr[i]);
        }


        }
        
    }

    console.log(contentArr.join("\n"));









