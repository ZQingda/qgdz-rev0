$(document).ready(function () {

    console.log("Fdsfadfasfd")
    for (let i = 1; i < 6; i++) {
        $('.nav-bg:nth-child(' + i + ') > .link-bg > .nav-link').on('mouseover', function () {
            var oneHeight = window.innerHeight;
            console.log($(this).parent(), oneHeight * (i - 1));
            $(this).closest(".sidebar-bg-wrap").animate({ scrollTop: oneHeight * (i - 1) }, 140);
        });
    }
});