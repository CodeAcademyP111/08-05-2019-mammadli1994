var arr=[12,21,54,5,54,12,21];
var a=[]

function findDublicate(a){
console.log(arr.sort(function(a,b){return a-b}));
for( var i=0; i<arr.length; i++ ) {
    if ( arr[i] == arr[i+1] ) {
        
        a.push(arr[i]);
    }
    
}   
return a;

}
console.log(findDublicate(a))

