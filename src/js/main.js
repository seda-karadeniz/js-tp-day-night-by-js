/* Au clic de l’élément .tumbler__wrapper vous devez ajouter les classes
body--night-mode à l'élément body
tumbler--night-mode à l’élément .tumbler
À tous les éléments .post la classe post--night-mode
Quand on clique une seconde fois il faut retirer les classes que vous venez d'ajouter */



const o_dayNight = {
    init(){
        document.documentElement.classList.add('js-enabled');

        this.button = document.querySelector('.tumbler__wrapper');
        this.e_body = document.body;
        this.a_posts = document.querySelectorAll('.post');
        this.e_tumbler =  document.querySelector('.tumbler');
        this.button.addEventListener('click',()=>{this.nuit()} );

    },
    nuit() {

        this.e_body.classList.toggle('body--night-mode');
        this.e_tumbler.classList.toggle('tumbler--night-mode');
        for (const post of this.a_posts) {
            post.classList.toggle('post--night-mode');
    
        }
    }

}
o_dayNight.init();
