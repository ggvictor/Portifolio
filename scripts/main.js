// menu hamburguer
function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav-list").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change");

}
// dark mode
const chk = document.getElementById("chk")
chk.addEventListener('change',()=>{
    document.body.classList.toggle("dark");
})
// função back to top
function scrollToTop() {
    const currentPosition = window.scrollY || document.documentElement.scrollTop;

    if (currentPosition > 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    scrollToTop(); // Chamar a função scrollToTop() ao clicar no link
});
