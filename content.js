$(function() {
    $(document).bind('DOMSubtreeModified', function() {
        let elements = document.querySelectorAll('[data-testid=sidebarColumn]');
        for (let element of elements) {
            element.style.display = "none";
        }
    });
});
