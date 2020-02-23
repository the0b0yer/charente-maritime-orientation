

// Carousel
jQuery(document).ready(function() {

	$('.btn-customized').on('click', function(){

		if( ! $(this).hasClass('paused') ) {
			$('.carousel').carousel('pause');
			$('.btn-customized').toggleClass('paused');
			$('.btn-customized i').removeClass('fa-pause').addClass('fa-play');
			$(this).blur();
		}
		else {
			$('.carousel').carousel('cycle');
			$('.btn-customized').toggleClass('paused');
			$('.btn-customized i').removeClass('fa-play').addClass('fa-pause');
			$(this).blur();
		}

	});

});

// Accordéon
$(()=>{
    // make divs with an onclick attribute tabbable/clickable
    $('div[onclick]')
        .attr('tabindex', '0')                     // Add tab indexes
        .keypress((evt)=>{
            var key = evt.key;
            evt.preventDefault();                  // Ensure all default keypress
                                                   // actions are not used
            if (key === ' ' || key === 'Enter') {  // Only send click events for Space
                                                   // or Enter keys
                evt.currentTarget.click();         // Run the click event for element
            }
        });
});

// Formulaire

$('#customFile').on('change',function(){
	// Obtenir le nom du fichier
	var fileName = $(this).val();

	// Ajoute le fichier
	$('#FichierGenerer').append(
		'<div class="form-inline input-group mt-2">'
		+	'<input class="form-control" type="text" placeholder="'+ fileName +'" readonly>'
		+	'<button title="Supprimer le fichier" type="button" class="input-group-prepend close" aria-label="Close">'
		+	'<span class="input-group-text" aria-hidden="true">&times;</span>'
		+'</button>'
	+'</div>'
	);
});

// Supprime le fichier ajouté
$('#FichierGenerer').on('click' , '.close', function() {
	$(this).parent().remove();
})

// Filtre
function filterDate(select) {
	$month = select.val();
	if ($month == 'all') {
		$('.list-group > div').show();
	} else {
		$('.list-group > div').hide();
		$('#'+$month).show();
	}
}

$('#FormControlSelectDate').on('change', function() {
	filterDate($(this));
});

$(document).ready(function() {
	filterDate($('#FormControlSelectDate'));
});

$('#cat_filter > .badge > input').on('change', function() {
    filter_cat();
});
function filter_cat() {
    console.log('test');
    $nb_activated = 0;
    $('#cat_filter > .badge > input').each(function() {
        if($(this).is(':checked')) {
            $('.list-group .list-group-item.filtre-'+$(this).val()).show();
            $nb_activated++;
        } else {
            $('.list-group .list-group-item.filtre-'+$(this).val()).hide();
        }
    });
    if ($nb_activated == 0) {
        $('.list-group .list-group-item').show();
    }
}
