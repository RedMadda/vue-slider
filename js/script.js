// creare uno slider con 4 immagini

const app = new Vue({
    el: '#app',
    data: {
      message: 'Slider',
      contatore : 0,
      active : "active",
      imgs: [
      "https://cdn.pixabay.com/photo/2020/05/25/17/03/travel-5219496_960_720.jpg",

      "https://cdn.pixabay.com/photo/2020/09/18/12/16/jewel-beetle-5581683_960_720.jpg",

      "https://cdn.pixabay.com/photo/2021/07/25/12/04/monkey-6491669_960_720.jpg",

      "https://cdn.pixabay.com/photo/2019/03/07/13/00/clouds-4040132_960_720.jpg"
      ],
      interval : ""
    },
    methods: {
      prev(){
        this.contatore == 0 ? this.contatore = this.imgs.length - 1 : this.contatore--;
      },

      post(){
        this.contatore == this.imgs.length - 1 ? this.contatore = 0 : this.contatore++;
      },

      clickCircle(i){
        this.contatore = i;
        clearInterval(this.interval);
      },

      pause(){
        clearInterval(this.interval);
      },

      play(){
        this.interval = setInterval(this.post, 2000);
      }

    },
    
    mounted(){
      this.interval = setInterval(this.post, 2000);
      document.addEventListener("keyup", (element)=>{
        console.log(element);
        if(element.key == "ArrowRight"){
          this.post();
        } else if (element.key == "ArrowLeft"){
          console.log("arrowLeft");
          this.prev();
        }
      });
    }
});