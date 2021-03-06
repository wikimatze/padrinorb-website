---
layout:
---

{% include js/jquery.js %}

<!-- Bootstrap Core -->
{% include js/bootstrap.js %}

{% include js/modernizr.js %}


<!-- Toc for guide pages -->
{% include js/jquery.tableofcontents.min.js %}


<!-- Plugins JavaScript -->
{% include js/jquery.easing.min.js %}

<!-- Navbar shrinking idea is from https://github.com/codrops/AnimatedHeader/tree/master/js -->
<!-- used for expanding and shrinking the top navigation -->
{% include js/classie.js %}
{% include js/cbpAnimatedHeader.js %}


<!-- Custom Top Scrollbar -->
/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
    var modal = this;
    var hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function() {
        if (!location.hash){
            $(modal).modal('hide');
        }
    }
});


<!-- Custom customisation (Tooltip for blog posts; enable toc on guide pages) -->
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
    $("#toc").tableOfContents(
        null,                          // Default scoping
        {
            startLevel:           1,   // H1
            depth:                4,   // H1 through H4
            proportionateSpacing: true // Spacing On
        }
    );
});

