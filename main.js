document.querySelector('.testimonial-container').addEventListener('click',slideTestimonial)

let user1 = document.getElementById('user-1');
let user2 = document.getElementById('user-2');
let user3 = document.getElementById('user-3');

function slideTestimonial(e){
    if(e.target.classList.contains('btn'))
        if(e.target.id == 'btn-1'){
            user1.style.left = '50%';
            user2.style.left = '100%';
            user3.style.left = '100%';
            user2.style.transform = 'translateY(-50%)';
            user3.style.transform = 'translateY(-50%)';
            
        }
        if(e.target.id == 'btn-2'){
            user1.style.left = '-100%';
            user2.style.left = '50%';
            user3.style.left = '100%';
            user2.style.transform = 'translate(-50%, -50%)';
            user3.style.transform = 'translateY(-50%)';
    
        }
        if(e.target.id == 'btn-3'){
            user1.style.left = '-100%';
            user2.style.left = '-100%';
            user3.style.left = '50%';
            user3.style.transform = 'translate(-50%, -50%)';
           
        }
}