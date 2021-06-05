console.log("Pubali BIswas");

 var port = chrome.runtime.connect ({
    name: "ContentScript"
}) 


chrome.runtime.onMessage.addListener (function(vx){
    console.log("datas", vx);
    switch(vx.action) {
        case "RunmyExtension" : Startlike(vx.mydata)
        break;
    }
    return true;
} ) 


var like = 0;


const Startlike = (vx ,count=0) => {
    var FBdots = document.getElementsByClassName("cjfnh4rs l9j0dhe7 du4w35lb j83agx80 cbu4d94t lzcic4wl ni8dbmo4 stjgntxs oqq733wu cwj9ozl2 io0zqebd m5lcvass fbipl8qg nwvqtn77 nwpbqux9 iy3k6uwz e9a99x49 g8p4j16d bv25afu3 gc7gaz0o k4urcfbm"); // sent request class name
    if (FBdots != "cjfnh4rs l9j0dhe7 du4w35lb j83agx80 cbu4d94t lzcic4wl ni8dbmo4 stjgntxs oqq733wu cwj9ozl2 io0zqebd m5lcvass fbipl8qg nwvqtn77 nwpbqux9 iy3k6uwz e9a99x49 g8p4j16d bv25afu3 gc7gaz0o k4urcfbm") {  // sent request class name
         console.log("hii i am running here .............");
         const Time = vx.timevalue;
         var timeoutInterval=setTimeout(() => {
         var likebutton = document.querySelector ('div[aria-label="Cancel Request"]'); //aria-label="Cancel Request"
         likebutton.click()
         like++;
         notifyUser(vx,like);
         Startlike(vx,count+1)
         }, Time*1000 ); 
    }
    
    else {
        return false;
    }
} 




const notifyUser = (wax,count = 0) => {
    const sentCount = count;
   
 
      wax = {
        action: "badges",
        badge: {
          tabID: wax.tabID,
          text: sentCount.toString(),
        }
      };
    
    port.postMessage(wax);
  };