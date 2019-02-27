$(document).ready(function () {

    function envato_pcv_hideall() {
        jQuery('div.envatosupportnotice > div').hide();
        jQuery('#reload > button').removeAttr('disabled').parent().find('svg').removeClass('vsenfa-spin');
    }

    function envato_pcv_unkown_show($extra) {
        envato_pcv_hideall();
        jQuery('.detailInfo').hide();
        jQuery('div#envatounknow').show().append('<p>' + JSON.stringify($extra) + '</p>');
    }

    function envato_pcv_bad_show() {
        envato_pcv_hideall();
        jQuery('.detailInfo').hide();
        jQuery('div#envatoverybad').show();
    }

    function envato_pcv_good_show() {
        envato_pcv_hideall();
        jQuery('div#envatogood').show();
    }

    function envato_pcv_save_appinfo(data, purchasecode) {
        jQuery('.detailInfo #itemname').html(data.item.name);
        jQuery('.detailInfo #license').html(data.license);
        jQuery('.detailInfo #buyer').html('<a href="https://themeforest.net/user/' + data.buyer + '" target="_blank" title="View ' + data.buyer + ' Profile In Envato">' + data.buyer + '</a>');

        var today = new Date(data.sold_at);
        jQuery('.detailInfo #purchasedate').html(today);

        var today = new Date(data.supported_until);
        jQuery('.detailInfo #supportedtill').html(today);
        jQuery('.detailInfo #purchasecode').html(purchasecode);

        jQuery('.detailInfo').show();
    }

    function envato_pcv_ap_init(_client) {
        var client = _client;
        jQuery('#reload > button').attr('disabled', 'disable').parent().find('svg').addClass('vsenfa-spin');
        client.iparams.get().then(function (option) {
            client.data.get('ticket').then(function (data) {
                if ( typeof data.ticket.saved_custom_fields != 'undefined' && typeof data.ticket.saved_custom_fields[option.purchase_code_field] != 'undefined' ) {
                    var purchasecode = data.ticket.saved_custom_fields[option.purchase_code_field];
                    var headers = {"Authorization": "Bearer " + option.apikey};
                    var options = {headers: headers};
                    var url = "https://api.envato.com/v3/market/author/sale?code=" + purchasecode;
                    return client.request.get(url, options).then(function (data) {
                        if ( data.status === 200 ) {
                            var response = JSON.parse(data.response);
                            envato_pcv_good_show();
                            envato_pcv_save_appinfo(response, purchasecode);
                        }
                    }, function (error) {
                        if ( typeof error.status !== 'undefined' ) {
                            if ( error.status === 404 ) {
                                var response = JSON.parse(error.response);
                                if ( response.error === 404 ) {
                                    envato_pcv_bad_show();
                                }
                            } else {
                                envato_pcv_unkown_show(error);
                            }
                        } else {
                            envato_pcv_unkown_show(error);
                        }
                    });
                }
            }).catch(function (e) {
                envato_pcv_unkown_show(e);
            });

        }).catch(function (e) {
            envato_pcv_unkown_show(e);
        });
    }

    app.initialized().then(function (_client) {
        envato_pcv_ap_init(_client);
        jQuery('#envatorefresh').on('click', function () {
            envato_pcv_ap_init(_client);
        })
    },function(){
        return null;
    });
});
