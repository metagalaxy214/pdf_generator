

jQuery( document ).ready(function() {
  jQuery('.summernote').summernote({
      height: 200, // set editor height

      minHeight: null, // set minimum height of editor
      maxHeight: null, // set maximum height of editor

      focus: true // set focus to editable area after initializing summernote
  });

});

jQuery(document).ready(function() {
            // Tags Input
            jQuery('#tags').tagsInput({
                width: 'auto'
            });

            // Form Toggles
            jQuery('.toggle').toggles({
                on: true
            });

            // Time Picker
            jQuery('#timepicker').timepicker({
                defaultTIme: false
            });
            jQuery('#timepicker2').timepicker({
                showMeridian: false
            });
            jQuery('#timepicker3').timepicker({
                minuteStep: 15
            });

            // Date Picker
            jQuery('#datepicker').datepicker();
            jQuery('#datepicker-inline').datepicker();
            jQuery('#datepicker-multiple').datepicker({
                numberOfMonths: 3,
                showButtonPanel: true
            });
            //colorpicker start

            jQuery('.colorpicker-default').colorpicker({
                format: 'hex'
            });
            jQuery('.colorpicker-rgba').colorpicker();


            //multiselect start

            jQuery('#my_multi_select1').multiSelect();
            jQuery('#my_multi_select2').multiSelect({
                selectableOptgroup: true
            });

            jQuery('#my_multi_select3').multiSelect({
                selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
                selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
                afterInit: function(ms) {
                    var that = this,
                        $selectableSearch = that.$selectableUl.prev(),
                        $selectionSearch = that.$selectionUl.prev(),
                        selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                        selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

                    that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                        .on('keydown', function(e) {
                            if (e.which === 40) {
                                that.$selectableUl.focus();
                                return false;
                            }
                        });

                    that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                        .on('keydown', function(e) {
                            if (e.which == 40) {
                                that.$selectionUl.focus();
                                return false;
                            }
                        });
                },
                afterSelect: function() {
                    this.qs1.cache();
                    this.qs2.cache();
                },
                afterDeselect: function() {
                    this.qs1.cache();
                    this.qs2.cache();
                }
            });

            //spinner start
            jQuery('#spinner1').spinner();
            jQuery('#spinner2').spinner({
                disabled: true
            });
            jQuery('#spinner3').spinner({
                value: 0,
                min: 0,
                max: 10
            });
            jQuery('#spinner4').spinner({
                value: 0,
                step: 5,
                min: 0,
                max: 200
            });
            //spinner end

            // Select2
            jQuery(".select2").select2({
                width: '100%'
            });
        });