$("button").click(function () {
    $.ajax({

        url: "https://restcountries.eu/rest/v2/name/france",
        success: function (data, status, response) {
            console.log(data[0].name, data[0].capital);

        }

    })

})

