window.addEventListener("scroll" , function(){
const navBar = document.getElementById("navbar");

if(window.scrollY >100){
    navBar.classList.add("scrolled");
}
else{
    navBar.classList.remove("scrolled");

}

}

)

// /////////////////////////////////
const masonryItems = document.querySelectorAll('.masonry-item');

masonryItems.forEach(item => {
  const img = item.querySelector('img');
  const title = img.getAttribute('alt');      

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.innerHTML = `
    <div>
      <h4>${title}</h4>
      <p>Lorem ipsum, dolor sit</p>
    </div>
    <a href="#">
      <i class="bi bi-zoom-in"></i>
      <i class="bi bi-link-45deg"></i>
    </a>
  `;
  item.appendChild(overlay);
});




 (function () {
    const acc = document.querySelectorAll('#faqAccordion .accordion-collapse');
    acc.forEach(c => {
      // لو مفتوح افتراضياً أضف الكلاس على الأب
      if (c.classList.contains('show')) {
        c.closest('.accordion-item').classList.add('open');
      }
      c.addEventListener('show.bs.collapse', function () {
        this.closest('.accordion-item').classList.add('open');
      });
      c.addEventListener('hide.bs.collapse', function () {
        this.closest('.accordion-item').classList.remove('open');
      });
    });
  })();


//   scroll to top 
window.addEventListener("scroll",function(){
    const scrollTop = document.getElementById("top-scroll");

    if(window.scrollY < 50){
        scrollTop.classList.add("hidden");
    }else{
        scrollTop.classList.remove("hidden");
    }
});

// navbar active link 
  let currentPage = window.location.pathname.split("/").pop();

if (currentPage === "" || currentPage === "/") {
  currentPage = "index.html";
}

const navLinks = document.querySelectorAll(".navbar .nav-link");

navLinks.forEach(link => {
  link.classList.remove("active");

  if (
    link.getAttribute("href") === currentPage ||
    (currentPage === "index.html" &&
      (link.getAttribute("href") === "" || link.getAttribute("href") === "index.html"))
  ) {
    link.classList.add("active");
  }
});
