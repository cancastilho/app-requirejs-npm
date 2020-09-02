define([
    'jquery',
    'text!telas/tela1.html',
    'text!telas/tela2.html',
    'text!telas/tela3.html'
], function (
    $$,
    htmlTela1,
    htmlTela2,
    htmlTela3
) {
        var self = {
            executar: function () {
                self.configurarBotoes();
                self.mostrar(htmlTela1);
            },
            configurarBotoes: function () {
                $$("#btnTela1").click(function () {
                    self.mostrar(htmlTela1);
                });
                $$("#btnTela2").click(function () {
                    self.mostrar(htmlTela2);
                });
                $$("#btnTela3").click(function () {
                    self.mostrar(htmlTela3);
                });
            },
            mostrar: function (html) {
                $$("#tela-atual").html(html);
            }
        }
        return self;
    });