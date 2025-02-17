function tooltipDirective() {
    return {
        restrict: 'A', // Restrict the directive to element type only
        link: function (scope, element, attrs) {
            element.hover(function () {
                // on mouseenter
                element.tooltip('show');
            }, function () {
                // on mouseleave
                element.tooltip('hide');
            });
        }
    };
}
