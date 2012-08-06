



$(document).ready(function(){

    $('#hanzi').qtip({
        content: {
            text:'<ul>\
<li>Chinese\
<li>Mandarin\
<li>Hanzi\
<li>汉字\
<li>漢字\
<li>Expression\
</ul>',
            title: {
	        text: 'A number of names can be used:',
                button: true
            }
        },
        show: {
	    solo: true
	},
        hide: {
            fixed: true,
            delay: 1000
        },
        style: {
            classes: 'ui-tooltip-rounded ui-tooltip-shadow',
        },


    });

    $('#ruby').qtip({
        content: {
            text:'<ul>\
<li>Ruby\
<li>Reading\
</ul>',
            title: {
	        text: 'Two names can be used:',
                button: true
            }

        },
        style: {
            classes: 'ui-tooltip-rounded ui-tooltip-shadow',
        },
        show: {
	    solo: true
	},
        hide: {
            fixed: true,
            delay: 1000
        }
    });

    $('#tones').qtip({
        content: {
            text:'For this field, no alternative names are defined.',

        },
        style: {
            classes: 'ui-tooltip-rounded ui-tooltip-shadow',
        },
        show: {
	    solo: true
	},
        hide: {
            fixed: true,
            delay: 1000
        }
    });


    $('.sorryjap').qtip({
        content: {
            text:'Anki reveals its Japanese roots through these terms.',
        },
        style: {
            classes: 'ui-tooltip-rounded ui-tooltip-shadow',
        },
        show: {
	    solo: true
	}
    });

});
