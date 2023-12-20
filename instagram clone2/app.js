// var carousel = document.querySelector('.story');
// var carouselContent = document.querySelector('.story-box');
// var slides = document.querySelectorAll('.story_l');
// var arrayOfSlides = Array.prototype.slice.call(slides);
// var carouselDisplaying;
// var screenSize;
// setScreenSize();
// var lengthOfSlide;

// var $app = document.querySelector("#app");
// var $firebaseAuthContainer = document.querySelector("#firebaseui-auth-container");
// var $authUserText = document.querySelector(".auth-user");
// var $logoutButton = document.querySelector(".logout");

// var ui = new firebaseui.auth.AuthUI(auth);
// var userId;



// function handleAuth() {
//   firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//           console.log(user.uid);
//           userId = user.uid;
//           $authUserText.innerHTML = user.displayName;
//           redirectToApp();
//       } else {
//           redirectToAuth();
//       }
//   });
// }

// function handleLogout() {
//   firebase.auth().signOut().then(() => {
//       redirectToAuth();
//   }).catch((error) => {
//       console.log("ERROR OCCURED", error);
//   });
// }

// function redirectToApp() {
//   $firebaseAuthContainer.style.display = "none";
//   $app.style.display = "block";
//   fetchNotesFromDB();
// }

// function redirectToAuth() {
//   $firebaseAuthContainer.style.display = "block";
//   $app.style.display = "none";

//   ui.start('#firebaseui-auth-container', {
//       callbacks: {
//           signInSuccessWithAuthResult: (authResult, redirectUrl) => {
//               console.log("authResult", authResult.user.uid)
//               userId = authResult.user.uid;
//               $authUserText.innerHTML = user.displayName;
//               redirectToApp();
//           }
//       },
//       signInOptions: [
//           firebase.auth.EmailAuthProvider.PROVIDER_ID,
//           firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       ],
//   });
// }


// function addClone() {
//    var lastSlide = carouselContent.lastElementChild.cloneNode(true);
//    lastSlide.style.left = (-lengthOfSlide) + "px";
//    carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
// }

// // addClone();

// function removeClone() {
//   var firstSlide = carouselContent.firstElementChild;
//   firstSlide.parentNode.removeChild(firstSlide);
// }

// function moveSlidesRight() {
//   var slides = document.querySelectorAll('.story_l');
//   var slidesArray = Array.prototype.slice.call(slides);
//   var width = 0;

//   slidesArray.forEach(function(el, i){
//     el.style.left = width + "px";
//     width += lengthOfSlide;
//   });
//   addClone();
// }
// moveSlidesRight();

// function moveSlidesLeft() {
//   var slides = document.querySelectorAll('.story_l');
//   var slidesArray = Array.prototype.slice.call(slides);
//   slidesArray = slidesArray.reverse();
//   var maxWidth = (slidesArray.length - 1) * lengthOfSlide;

//   slidesArray.forEach(function(el, i){
//     maxWidth -= lengthOfSlide;
//     el.style.left = maxWidth + "px";
//   });
// }

// window.addEventListener('resize', setScreenSize);

// function setScreenSize() {
//   if ( window.innerWidth >= 500 ) {
//     carouselDisplaying = 7;
//   } else if ( window.innerWidth >= 300 ) {
//     carouselDisplaying = 2;
//   } else {
//     carouselDisplaying = 1;
//   }
//   getScreenSize();
// }

// function getScreenSize() {
//   var slides = document.querySelectorAll('.story_l');
//   var slidesArray = Array.prototype.slice.call(slides);
//   lengthOfSlide = ( carousel.offsetWidth  / carouselDisplaying );
//   var initialWidth = -lengthOfSlide;
//   slidesArray.forEach(function(el) {
//     el.style.width = lengthOfSlide + "px";
//     el.style.left = initialWidth + "px";
//     initialWidth += lengthOfSlide;
//   });
// }


// var rightNav = document.querySelector('.nav-right');
// rightNav.addEventListener('click', moveLeft);

// var moving = true;
// function moveRight() {
//   if ( moving ) {
//     moving = false;
//     var lastSlide = carouselContent.lastElementChild;
//     lastSlide.parentNode.removeChild(lastSlide);
//     carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
//     removeClone();
//     var firstSlide = carouselContent.firstElementChild;
//     firstSlide.addEventListener('transitionend', activateAgain);
//     moveSlidesRight();
//   }
// }

// function activateAgain() {
//   var firstSlide = carouselContent.firstElementChild;
//   moving = true;
//   firstSlide.removeEventListener('transitionend', activateAgain);
// }

// var leftNav = document.querySelector('.nav-left');
// leftNav.addEventListener('click', moveRight);

// // var moveLeftAgain = true;

// function moveLeft() {
//   if ( moving ) {
//     moving = false;
//     removeClone();
//     var firstSlide = carouselContent.firstElementChild;
//     firstSlide.addEventListener('transitionend', replaceToEnd);
//     moveSlidesLeft();
//   }
// }

// function replaceToEnd() {
//   var firstSlide = carouselContent.firstElementChild;
//   firstSlide.parentNode.removeChild(firstSlide);
//   carouselContent.appendChild(firstSlide);
//   firstSlide.style.left = ( (arrayOfSlides.length -1) * lengthOfSlide) + "px";
//   addClone();
//   moving = true;
//   firstSlide.removeEventListener('transitionend', replaceToEnd);
// }




// carouselContent.addEventListener('mousedown', seeMovement);

// var initialX;
// var initialPos;
// function seeMovement(e) {
//   initialX = e.clientX;
//   getInitialPos();
//   carouselContent.addEventListener('mousemove', slightMove);
//   document.addEventListener('mouseup', moveBasedOnMouse);
// }

// function slightMove(e) {
//   if ( moving ) {
//     var movingX = e.clientX;
//     var difference = initialX - movingX;
//     if ( Math.abs(difference) < (lengthOfSlide/4) ) {
//       slightMoveSlides(difference);
//     }  
//   }
// }

// function getInitialPos() {
//   var slides = document.querySelectorAll('.story_l');
//   var slidesArray = Array.prototype.slice.call(slides);
//   initialPos = [];
//   slidesArray.forEach(function(el){
//     var left = Math.floor( parseInt( el.style.left.slice(0, -2 ) ) ); 
//     initialPos.push( left );
//   });
// }

// function slightMoveSlides(newX) {
//   var slides = document.querySelectorAll('.story_l');
//   var slidesArray = Array.prototype.slice.call(slides);
//   slidesArray.forEach(function(el, i){
//     var oldLeft = initialPos[i];
//     el.style.left = (oldLeft + newX) + "px";
//   });
// }

// function moveBasedOnMouse(e) { 
//   var finalX = e.clientX;
//   if ( initialX - finalX > 0) {
//     moveRight();
//   } else if ( initialX - finalX < 0 ) {
//     moveLeft();
//   }
//   document.removeEventListener('mouseup', moveBasedOnMouse);
//   carouselContent.removeEventListener('mousemove', slightMove);
// }

class App {
    constructor() {
  
      // this.notes = JSON.parse(localStorage.getItem("notes")) || [];
      // this.selectedNoteId = "";
      // this.miniSidebar = true;
  
      // this.$activeForm = document.querySelector(".active-form");
      // this.$inactiveForm = document.querySelector(".inactive-form");
      // this.$noteTitle = document.querySelector("#note-title");
      // this.$noteText = document.querySelector("#note-text");
      // this.$notes = document.querySelector(".notes");
      // this.$form = document.querySelector("#form");
      // this.$modal = document.querySelector(".modal");
      // this.$modalForm = document.querySelector("#modal-form");
      // this.$modalTitle = document.querySelector("#modal-title");
      // this.$modalText = document.querySelector("#modal-text");
      // this.$closeModalForm = document.querySelector("#modal-btn");
      // this.$sidebar = document.querySelector(".sidebar");
      // this.$sidebarActiveItem = document.querySelector(".active-item");
  
      this.$app = document.querySelector("#app");
      this.$firebaseAuthContainer = document.querySelector("#firebaseui-auth-container");
      this.$authUserText = document.querySelector(".auth-user");
      this.$logoutButton = document.querySelector(".logout");
  
  
  
      this.ui = new firebaseui.auth.AuthUI(auth);
      this.handleAuth();
    }
  
    handleAuth() {
      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              console.log(user.uid);
              this.userId = user.uid;
              this.$authUserText.innerHTML = user.displayName;
              this.redirectToApp();
          } else {
              this.redirectToAuth();
          }
      });
  }
  
  handleLogout() {
    firebase.auth().signOut().then(() => {
        this.redirectToAuth();
    }).catch((error) => {
        console.log("ERROR OCCURED", error);
    });
  }
  
  redirectToApp() {
    this.$firebaseAuthContainer.style.display = "none";
    this.$app.style.display = "block";
    this.fetchNotesFromDB();
  }
  
  redirectToAuth() {
    this.$firebaseAuthContainer.style.display = "block";
    this.$app.style.display = "none";
  
    this.ui.start('#firebaseui-auth-container', {
        callbacks: {
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      
                console.log("authResult", authResult.user.uid)
                this.userId = authResult.user.uid;
                this.$authUserText.innerHTML = user.displayName;
                this.redirectToApp();
            }
        },
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
    });
  }
  }
  
  