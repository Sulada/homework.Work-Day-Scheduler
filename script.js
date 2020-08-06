    var test = false;

  //date and time
    var dateNow = moment();
    dateNow.format("MMMM Do YYYY, h:mm:ss a");
    document.getElementById("timer").innerHTML = dateNow;

    var nowHour24 = moment().format("H");
    var nowHour12 = moment().format("h");

    // times 9am to 5pm 
    if(test){
        nowHour24 = 13;
        nowHour12 = 1;
    }

    // Get stored todos from localStorage use Parsing the JSON
    var storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
    if(test){
        console.log(storedPlans);
    }
    //update array to localStorage
    if(storedPlans !== null){
        planTextArr = storedPlans;
    } else{
        planTextArr = new Array(9);
    }
    if(test){
        console.log("full array of plned text",planTextArr);
    }
    // set variable
    var  $plannerDiv = $("#plannerContainer");
    // clear existing elements
    $plannerDiv.empty();

    if(test){
        console.log("current time",nowHour12);
    }
    // build calendar by row for fix set of hours
    for (var hour = 9; hour <= 17; hour++) {
    var index = hour - 9;

    // build row components
    var $rowDiv = $("<div>");
    $rowDiv.addClass("row");
    $rowDiv.addClass("plannerRow");
    $rowDiv.attr("hour-index",hour);

    // Start building Time box portion of row
    var $col2TimeDiv = $("<div>");
    $col2TimeDiv.addClass("col-md-2");
  
    // create timeBox element,get value
    var $timeBoxSpn = $("<span>");
    $timeBoxSpn.attr("class","timeBox");

        // format hours (AM,PM) to show on row
        var displayHour = 0;
        var amAndpm = "";
        if (hour > 12) { 
          displayHour = hour - 12;
          amAndpm = "PM";
        } else {
          displayHour = hour;
          amAndpm = "AM";
        }
        
        // populate timeBox with time
        $timeBoxSpn.text(`${displayHour} ${amAndpm}`);
    
        // insert into col inset into timebox
        $rowDiv.append($col2TimeDiv);
        $col2TimeDiv.append($timeBoxSpn);


        // build row components
        var $dailyPlanSpn = $("<input>");
    
        $dailyPlanSpn.attr("id",`input-${index}`);
        $dailyPlanSpn.attr("hour-index",index);
        $dailyPlanSpn.attr("type","text");
        $dailyPlanSpn.attr("class","dailyPlan");
    
        // access index from data array for hour 
        $dailyPlanSpn.val( planTextArr[index] );
        
        // create column to control width
        var $col9IptDiv = $("<div>");
        $col9IptDiv.addClass("col-md-9");
    
        // add column and row component to row
        $rowDiv.append($col9IptDiv);
        $col9IptDiv.append($dailyPlanSpn);
        var $col1SaveDiv = $("<div>");
        $col1SaveDiv.addClass("col-md-1");
    
        var $saveBtn = $("<i>");
        $saveBtn.attr("id",`saveid-${index}`);
        $saveBtn.attr("save-id",index);
        $saveBtn.attr("class","far saveIcon");
        $saveBtn.text("SAVE")
        
        $rowDiv.append($col1SaveDiv);
        $col1SaveDiv.append($saveBtn);
        updateRowColor($rowDiv, hour);
        
        $plannerDiv.append($rowDiv);
      };
      // function to update row color the past, present, and future
  function updateRowColor ($hourRow,hour) { 

    if (test) { 
        console.log("rowColor ",nowHour24, hour); 
    }
    if ( hour < nowHour24) {
      if (test) { console.log("lessThan"); }
      $hourRow.css("background-color","lightgray")
    } else if ( hour > nowHour24) {
      if (test) { console.log("greaterthan"); }
      $hourRow.css("background-color","#77dd77")
    } else {
      if (test) { console.log("eqaul"); }
      $hourRow.css("background-color","#ff6961")
    }
  };

  // save to local storage
  $(document).on("click","i", function(event) {
    event.preventDefault();  

    if (test) { 
        console.log("click pta before "+ planTextArr); 
    }
    var $index = $(this).attr("save-id");
    var inputId = "#input-"+$index;
    var $value = $(inputId).val();

    planTextArr[$index] = $value;

    if (test) { 
        console.log("value ", $value); 
    }
    if (test) { 
        console.log("index ", $index); 
    }
    if (test) { 
        console.log("click pta after "+ planTextArr); 
    }

    localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
  });  
  
  // function to color save button on change of input
  $(document).on("change","input", function(event) {
    event.preventDefault();  
    if (test) { 
        console.log("onChange"); 
    }
    if (test) { 
        console.log("id", $(this).attr("hour-index")); 
    }

    //check for save button
    var i = $(this).attr("hour-index");

  });