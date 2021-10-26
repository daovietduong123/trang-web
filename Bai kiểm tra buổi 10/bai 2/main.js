let str = prompt()
function inHoa(str){
	let strArr=str.split(" ");
	for(let i=0;i<strArr.length;i++){
      let charArr=strArr[i].split("");
	    charArr[0]=charArr[0].toUpperCase();
      strArr[i]=charArr.join("");
	    
	}
	return strArr.join("");
}
inHoa(str)