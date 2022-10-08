// Display Day Month and Year
$("#currentDay").append(moment().format("dddd, MMMM Do, YYYY"));

// 1 function to update color of storage elements

// 1 function to save tasks

// 1 function to populate tasks

// (To append these elements we will use the .each method native to jQuery)

// .each loops through each section in the function - it goes from top to bottom in the html document

function updateStorage(event){
    event.preventDefault();
    var taskStorage = [];

    $(".storage-text").each(function(){
        taskStorage.push($(this).val())
        localStorage.setItem("taskSet", JSON.stringify(taskStorage))
    })
}

function storagePull(){
    taskStorage = JSON.parse(localStorage.getItem("taskSet"));
    var i = 0;
    $(".storage-text").each(function(){
        $(this).text(taskStorage[i]);
        i++;
    })
}

function updateColors(){
    var currentHour = moment().hour();

    $(".storage-text").each(function(){
        // $(this).addClass("future");
        if(parseInt($(this).attr("id")) < currentHour){
            $(this).addClass("past");
        }
        if(parseInt($(this).attr("id")) === currentHour){
            $(this).addClass("present");
        }
        if(parseInt($(this).attr("id")) > currentHour){
            $(this).addClass("future");
        }
    })
}

$(".saveBtn").on("click", updateStorage)

updateColors();
storagePull();