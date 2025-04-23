(function ($, Drupal) {
  Drupal.behaviors.copylink = {
    attach: function (context, settings) {
      // $('.ui-accordion .views-row.gt-accordion .ui-accordion-header', context).each(function(i) {

      //   // Add a click handler to the span.
      //   $(this).find('span.copy-link').first().on('click', function(e) {
      //       const element = $(e.currentTarget);
      //       const headerId = element.parent().attr('id');

      //       // Construct a url based on the id of the h3.
      //       const urlString = `${window.location.protocol}//${window.location.host}${window.location.pathname}#${headerId}`;

      //       // Write the url to the clipboard.
      //       navigator.clipboard.writeText(urlString);
      //   });
      // });

      // // Get the id hash from the url if there is one.
      // const id = window.location.hash;

      // if(id) {
      //   // Get the index of that id in the list of accordion h3 tags.
      //   const index = $(id).index('.ui-accordion .views-row.gt-accordion .ui-accordion-header');

      //   // Set that index to active.
      //   if(index >= 0) {
      //     $('.ui-accordion').accordion("option", "active", index);
      //   }
      // }
    }
  }
})(jQuery, Drupal);
