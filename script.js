function pesquisar(){
    var cep = $("#cep").val();
    var url = "https://viacep.com.br/ws/"+cep+"/json";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            $("#titulo").html(response.cep);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#UF").html(response.uf);
        }
    });
}