function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}





function moreContent() {
    var blogContents = document.querySelectorAll('.blog-content');

    blogContents.forEach(function(section) {
        var learnMoreButton = section.querySelector('.learn-more-btn');
        var goBackButton = section.querySelector('.go-back');
        var blogIntro = section.querySelector('.blog-intro');
        var moreContent = section.querySelector('.more-content');

        learnMoreButton.addEventListener('click', function () {
            blogIntro.style.opacity = '0';
            
            setTimeout(function () {
                blogIntro.style.display = 'none';
                moreContent.style.height = '100%';
                setTimeout(function () {
                    moreContent.style.overflow = 'auto';
                }, 500);
                section.style.paddingTop = '7%';
            }, 500);
        });

        goBackButton.addEventListener('click', function () {
            blogIntro.style.opacity = '1';
            moreContent.style.overflow = 'hidden';
            moreContent.style.height = '0';
            setTimeout(function () {
                blogIntro.style.display = 'block';
                section.style.paddingTop = '25%';
            }, 500);
        });
    });
}

moreContent();



