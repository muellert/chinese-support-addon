



$(document).ready(function(){

    $('#hanzi').qtip({
        content: 'A number of names can be used:\
<ul>\
<li>Chinese\
<li>Mandarin\
<li>Hanzi\
<li>汉字\
<li>漢字\
<li>Expression\
</ul>',
        style: {classes: 'qtp'}
    });

    $('#ruby').qtip({
        content: 'Two names can be used:\
<ul>\
<li>Ruby\
<li>Reading\
</ul>',
      style: {
          classes: 'ui-tooltip-rounded ui-tooltip-shadow ',
          color: 'red'
      }
    });

});
