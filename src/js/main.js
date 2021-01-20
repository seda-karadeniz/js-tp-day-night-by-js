/* Au clic de l’élément .tumbler__wrapper vous devez ajouter les classes
body--night-mode à l'élément body
tumbler--night-mode à l’élément .tumbler
À tous les éléments .post la classe post--night-mode
Quand on clique une seconde fois il faut retirer les classes que vous venez d'ajouter */
/*adding exercise form */
document.documentElement.classList.add('js-enabled');
const e_tw = document.querySelector('.tumbler__wrapper');
const e_body = document.body;
const e_tumbler = document.querySelector('.tumbler');
const a_posts = document.querySelectorAll('.post');
const p = document.createElement('p');
const btn = document.createElement('input');
const form = document.createElement('input');

e_tw.addEventListener('click', dayNight );

function dayNight() {
    e_body.classList.toggle('body--night-mode');
     e_tumbler.classList.toggle('tumbler--night-mode');
    for (const e_post of a_posts) {
        e_post.classList.toggle('post--night-mode');
    }
}

p.textContent = 'hello';
e_body.insertAdjacentElement('beforeend', p);


e_body.insertAdjacentHTML('beforeend', '<label for="example">Name</label>');
/* e_body.insertAdjacentHTML('beforeend', '<input type="submit" value="Envoyer">');
 */

form.setAttribute('for', 'example');
form.setAttribute('value', 'envoyer');
form.setAttribute('name', 'text');
form.setAttribute('value', "");
e_body.insertAdjacentElement('beforeend', form);

btn.setAttribute('type', 'submit');
btn.setAttribute('value', 'envoyer');
e_body.insertAdjacentElement('beforeend', btn);


btn.addEventListener('click', function (event) {
    e_body.insertAdjacentHTML('beforeend', `<p>nice to meet you ${form.value} </p>` );
    event.target.style.color = 'red';

})





























/*


const app = {
    init(){
        document.documentElement.classList.add('js-enabled');

        this.e_tw = document.querySelector('.tumbler__wrapper');
        this.e_body = document.body;
        this.e_tumbler = document.querySelector('.tumbler');
        this.a_posts = document.querySelectorAll('.post');
        this.e_tw.addEventListener('click', () =>{
            this.dayNight();
        })
        
    },
    dayNight(){
       /*  this.e_tw.addEventListener('click', () => { */
          /*  this.e_body.classList.toggle('body--night-mode');
            this.e_tumbler.classList.toggle('tumbler--night-mode');
            for (const e_post of this.a_posts) {
                e_post.classList.toggle('post--night-mode');
            }
       
    }
}
app.init();*/
































/* 


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
 */