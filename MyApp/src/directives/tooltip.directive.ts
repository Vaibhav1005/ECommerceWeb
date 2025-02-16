export function tooltipDirective(): ng.IDirective {
    return {
      restrict: 'A', // Restrict the directive to element type only
      link: function(scope, element: any, attrs){
        element.hover(function(){
            // on mouseenter
            element.tooltip('show');
        }, function(){
            // on mouseleave
            element.tooltip('hide');
        });
    }
    };
  }