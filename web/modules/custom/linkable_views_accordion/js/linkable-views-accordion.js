/**
 * @file
 */

(($, Drupal, drupalSettings) => {
  Drupal.behaviors.linkable_views_accordion = {
    attach() {
      if (drupalSettings.linkable_views_accordion) {

        function handleClick(headerId, copyLink) {
          $(copyLink).addClass('copied').text('Copied');
          navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}${window.location.pathname}#${headerId}`);
        };

        $.each(drupalSettings.linkable_views_accordion, function processViews() {
          const $display = $(`${this.display}:not(.ui-accordion)`);
          const linkText = this.linkText;

          /* The row count to be used if Row to display opened on start is set to random */
          let rowCount = 0;

          /* Prepare our markup for jquery ui accordion */
          $(this.header, $display).each(function processHeader() {
            // Wrap the accordion content within a div if necessary.
            if (!this.usegroupheader) {
              $(this).siblings().wrapAll('<div></div>');
              rowCount += 1;
            }
          });

          if (this.rowstartopen === 'random') {
            this.rowstartopen = Math.floor(Math.random() * rowCount);
          }

          // The settings for the accordion.
          const accordionSettings = {
            header: this.header,
            animate: {
              easing: this.animated,
              duration: parseInt(this.duration, 10),
            },
            active: this.rowstartopen,
            collapsible: this.collapsible,
            heightStyle: this.heightStyle,
            event: this.event,
            icons: false,
            classes: {
              'ui-accordion': 'linkable-views-accordion'
            }
          };
          if (this.useHeaderIcons) {
            accordionSettings.icons = {
              header: this.iconHeader,
              activeHeader: this.iconActiveHeader,
            };
          }

          /* jQuery UI accordion call */
          $display.accordion(accordionSettings);

          $('.ui-accordion .ui-accordion-content').each(function () {
            const headerId = $(this).attr('aria-labelledby');

            $(this).prepend(`<div class="copy-link-wrapper"><span class="copy-link">${linkText}</span></div>`);

            $(this).find('.copy-link').on('click', function () {
              handleClick(headerId, this);
            });
          });

          // Get the id hash from the url if there is one.
          const id = window.location.hash;

          if(id) {
            // Get the index of that id in the list of accordion h3 tags.
            const activeRow = $('.ui-accordion-header').index($(id));

            // Set the active row and expand it in the accordion.
            if(activeRow >= 0) {
              $(id).parents('.ui-accordion').first().accordion('option', 'active', activeRow);
            }
          }        
        });
      }
    },
  };
})(jQuery, Drupal, drupalSettings);
