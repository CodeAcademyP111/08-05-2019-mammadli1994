

instaDate= new Date(2019, 4, 1, 18, 52);

function ago(instaDate){
    presentDate=new Date();

   var diff=presentDate.getTime()-instaDate.getTime();
   var result;

   var data={
       minute:diff/1000/60,
       hour:diff/1000/60/60,
       day:diff/1000/60/60/24
   }
    if(data.minute < 60){
        result=data.minute.toFixed() + " deqiqe once";
    }
    else if(data.hour<24){
        result=data.hour.toFixed() + " saat once";
    }
    else if(data.hour>=24 && data.hour < 72){
        result=data.day.toFixed() + " gun once"
    }
    else if(data.day>3 && data.day<7){
        result= "bu hefte"
    }
     
    else{
        var date=getZeroDate(instaDate.getDate());
        var month=getZeroDate((instaDate.getMonth()+1 ));
        result= date+ "." + month + "."+instaDate.getFullYear();
    }

    return result;
}

console.log(ago(instaDate));



function getZeroDate(count){
if(count<10){

return "0"+count;
}
}


// var meyveler=["alma", "heyva","tut","kivi","armud"];

// function retrunA(meyveler, letter){
//     var result=[];

//     for(var i=0; i<meyveler.length; i++){

//         if(meyveler [i].indexOf(letter) >=0){


//             result.push(meyveler [i] )

//         }


        
//     }



// return result

// }

// console.log(retrunA(meyveler,"m"))
