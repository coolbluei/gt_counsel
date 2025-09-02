(function ($, Drupal) {
  Drupal.behaviors.ethicsAccordionConstruction = {
    attach: function (context, settings) {
      const onceClass = 'accordion-constructed';
      const accordionSettings = {
        active: false,
        heightStyle: 'content',
        collapsible: true
      };

      function handleLinkClick(headerId, copyLink) {
        $(copyLink).addClass('copied').text('Copied');
        navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}${window.location.pathname}#${headerId}`);
      }

      let processView = function () {
        const linkText = 'Copy link to Unit';
        let $this = $(this);
        const headerId = $(this).attr('aria-labelledby');

        $this.prepend(`<div class="copy-link-wrapper"><span class="copy-link">${linkText}</span></div>`);

        $this.find('.copy-link').on('click', function () {
          handleLinkClick(headerId, this);
        });
      };

      // Find accordions.
      let $accordionView = $('.staff-list-accordion');
      // Skip any that have already been processed.
      if ($accordionView.hasClass(onceClass)) {
        return;
      }
      $accordionView.each(function() {
        let $this = $(this);
        $this.find('.view-content').first().accordion(accordionSettings);

        // After accordion in place, add copy link behavior.
        $this.find('.ui-accordion-content').each(processView);
        $this.addClass('gt-accordion', onceClass);
      })

      // Watch for id to open specific element.
      // Get the id hash from the url if there is one.
      const id = window.location.hash;

      if (id) {
        // Get the index of that id in the list of accordion h3 tags.
        const activeRow = $('.ui-accordion-header').index($(id));

        // Set the active row and expand it in the accordion.
        if (activeRow >= 0) {
          $(id).parents('.ui-accordion').first().accordion('option', 'active', activeRow);
        }
      }
    }
  }
})(jQuery, Drupal);
