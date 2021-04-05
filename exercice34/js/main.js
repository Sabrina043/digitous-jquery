$(document).ready(function () {
    $('.btn').click(function () {
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/usa',
            success: function (data, statuts, response) {
                $("#country").html(data[0].alpha3Code)
                $("#capital").html(data[0].capital)
                $("input").change(function () {
                    console.log($(this).val())
                })
            }
        })
      
    })

})