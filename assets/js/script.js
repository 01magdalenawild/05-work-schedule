var weekDay = moment().format("ddd MMM Do, YYYY");
var currenthour=moment().hour ()
console.log(currenthour)
$("#currentDay").text(weekDay);

function createrows(){
    for(var i=7;i<15;i++){
        var currently;
        if(i<currenthour){
            currently="past"
    
        } else if(i===currenthour){
            currently="present"
        }
        else{
            currently="future"
        }
        var time=i+" am"
        if (i>12){
            time=i-12+" pm"
        }
   $(".container").append("<div class='row "+currently+"'><h5 class='col-1'>"+time+"</h5><textarea class='col-10'></textarea><button class='col-1'>💾</button></div>")
    }
}
createrows()
