const { createApp } = Vue
createApp({
    data() {
        return {
            curIndex : 0,
            clock : null,
            images : [
              {
                image: "img/01.webp",
                title: "Marvel's Spiderman Miles Morale",
                text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
              },
              {
                image: "img/02.webp",
                title: "Ratchet & Clank: Rift Apart",
                text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
              },
              {
                image: "img/03.webp",
                title: "Fortnite",
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
              },
              {
                image: "img/04.webp",
                title: "Stray",
                text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
              },
              {
                image: "img/05.webp",
                title: "Marvel's Avengers",
                text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
              },
            ],
        };
      },
      //Bonus 2
      created(){
        console.log("ciao")
        this.clock = setInterval(()=> {
          this.showNext();
        },3000);
      },
      methods : {
        showNext : function () { 
          if(this.curIndex === this.images.length -1 ) { 
            this.curIndex = 0 
          } else { 
            this.curIndex++; 
          }
        },     
        showPrev : function() { 
          if(this.curIndex === 0 ) { 
            this.curIndex = this.images.length - 1
          } else { 
            this.curIndex--; 
          }
        },
        //Bonus 1
        onScreen : function(index){
          this.curIndex = index;
        },
        //Bonus 2
        stopAuto : function(){
        //Se clock non è null
        if(this.clock !== null){
          //rendo null clock
          console.log("pausa")
          clearInterval(this.clock);
          this.clock = null;
        }else {
          //riparte il clock
          console.log("riparte")
          this.clock = setInterval(()=> {
            this.showNext();
          },3000);
        }          
        },
        //Bonus 3
        reverseAuto : function(){
          if(this.clock !== null){
            console.log("pauso l'interval");
          //copio quello che controllo quando non è null
          clearInterval(this.clock);
          this.clock = null;
          }else {
            console.log("reverso l'interval")
            //setto un nuovo intervallo dopo averlo nullificato
            this.clock = setInterval (() => {
            this.showPrev();
            },3000);
          }       
        }
    }
}).mount('#app')
