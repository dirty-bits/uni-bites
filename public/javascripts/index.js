jQuery(document).ready(($) => {
    $('.live-search-list li').each(function () {
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });

    $('.live-search-box').on('keyup', function () {
        const searchTerm = $(this).val().toLowerCase();

        $('.live-search-list li').each(function () {
            if($(this).filter(`[data-search-term *= ${searchTerm}]`).length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else{
                $(this).hide();
            }
        });
    });
});

$('.dropdown-menu li a').on('click', function () {
    const selectedValue = $(this).val();
    $('.live-search-box').val($(this).text());
});