var PPport = chrome.extension.connect(
    {
        name: "popup-Background"
    }
)

const Q = document.querySelector("#time");
Q.addEventListener("submit" , function() {
    var times=document.querySelector("#qr").value;
    console.log("times", times)
   
chrome.tabs.query(
    {
        active: true,
        currentWindow: true
    },
    function(tabs) {
        var wax= {
            action: "startmyExtension",
            rythm : {
                timevalue: times,
                tabID: tabs[0].id
            }
        };
        sendRequest(wax);
      }
      )        
    }
)





const sendRequest = (data) => {
    try {
        PPport.postMessage(data);
    }
    catch(e) {
        alert("please reload ");
    }
}