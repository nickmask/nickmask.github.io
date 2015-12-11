function countWords(){
	words = document.getElementById("inputString").value;
	document.getElementById("wordcount").value = words.split(' ').length;
}