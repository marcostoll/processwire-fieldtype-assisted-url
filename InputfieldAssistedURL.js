// based on /ProcessWire/wire/modules/Inputfield/InputfieldCKEditor/plugins/pwlink/plugin.js
$(document).ready(function() {

	$(document).on("click", ".InputfieldAssistedURLOpen", function(e) {
        loadIframeLinkPicker(e.currentTarget);
        $(this).removeClass('ui-state-active');
        return false;
	});

    function loadIframeLinkPicker(opener) {

        var pageID = $(opener).attr('data-page-id');

        // build the modal URL
        var modalUrl = config.urls.admin + 'page/link/?id=' + pageID + '&modal=1';

        // labels
        var insertLinkLabel = 'Choose URL';
        var cancelLabel = 'Cancel';
        var $iframe; // set after modalSettings down

        // action when insert link button is clicked
        function clickInsert() {

            var $i = $iframe.contents();
            var $a = $($("#link_markup", $i).text());

            $(opener).siblings('input').val($a.attr('href'));

            $iframe.dialog("close");
        }

        // settings for modal window
        var modalSettings = {
            title: "<i class='fa fa-link'></i> " + insertLinkLabel,
            open: function() {
                //if($(".cke_maximized").length > 0) {
                //    // the following is required when CKE is maximized to make sure dialog is on top of it
                //    $('.ui-dialog').css('z-index', 9999);
                //    $('.ui-widget-overlay').css('z-index', 9998);
                //}
            },
            buttons: [ {
                class: "pw_link_submit_insert",
                html: "<i class='fa fa-link'></i> " + insertLinkLabel,
                click: clickInsert
            }, {
                html: "<i class='fa fa-times-circle'></i> " + cancelLabel,
                click: function() { $iframe.dialog("close"); },
                class: 'ui-priority-secondary'
            }
            ]
        };

        // create modal window
        var $iframe = pwModalWindow(modalUrl, modalSettings, 'medium');

        // modal window load event
        $iframe.load(function() {

            var $i = $iframe.contents();
            $i.find("#ProcessPageEditLinkForm").data('iframe', $iframe);

            // remove tab navigation
            $i.find('#breadcrumbs').remove();

            // hide generated link code
            $i.find('#link_markup').hide();

            // capture enter key in main URL text input
            $("#link_page_url", $i).keydown(function(event) {
                var $this = $(this);
                var val = $.trim($this.val());
                if (event.keyCode == 13) {
                    event.preventDefault();
                    if(val.length > 0) clickInsert();
                    return false;
                }
            });

        }); // load

    } // loadIframeLinkPicker

}); 
