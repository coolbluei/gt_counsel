(function ($, Drupal) {
  Drupal.behaviors.ethicsAccordionConstruction = {
    attach: function (context, settings) {
      const onceClass = 'accordion-constructed';
      const accordionSettings = {
        active: false,
        heightStyle: 'content',
        collapsible: true
      };
      // Find accordions.
      $('.staff-list-accordion').each(function() {
        let $this = $(this);
        // Skip any that have already been processed.
        if ($this.hasClass(onceClass)) {
          return;
        }
        $this.find('.view-content').first().accordion(accordionSettings);
        $this.addClass(onceClass);
      })
      // Build with jQuery
    }
  }
})(jQuery, Drupal);
