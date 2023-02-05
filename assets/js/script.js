var weekDay = moment().format("ddd MMM Do, YYYY");
var currenthour=moment().hour ()
console.log(currenthour)
$("#currentDay").text(weekDay);

function createrows(){
    for(var i=9;i<18;i++){
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
   $(".container").append(`<div class='row ${currently}' id=${i}><h5 class='col-1'>${time}</h5><textarea class='col-10'></textarea><button class='col-1'>💾</button></div>`)
    //"<div class='row "+currently+"'><h5 class='col-1'>"+time+"</h5><textarea class='col-10'></textarea><button class='col-1'>💾</button></div>"
}

}
createrows()
$(".col-1").on("click", function(){
    var value = $(this).siblings(".col-10").val()
    console.log(value)
    console.log("test")
    var time =$ (this).parent().attr("id")
console.log(time)
localStorage.setItem(time,value)
})
$("#9 .col-10").val(localStorage.getItem("9"))
$("#10 .col-10").val(localStorage.getItem("10"))
$("#11 .col-10").val(localStorage.getItem("11"))
$("#12 .col-10").val(localStorage.getItem("12"))
$("#13 .col-10").val(localStorage.getItem("13"))
$("#14 .col-10").val(localStorage.getItem("14"))
$("#15 .col-10").val(localStorage.getItem("15"))
$("#16 .col-10").val(localStorage.getItem("16"))
$("#17 .col-10").val(localStorage.getItem("17"))
$("#18 .col-10").val(localStorage.getItem("18"))








