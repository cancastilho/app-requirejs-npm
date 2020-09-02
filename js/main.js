require.config({
    paths: {
        'jquery': '../node_modules/jquery/dist/jquery.min',
        "text": "../node_modules/text/text",
        'app':'app',
        'telas':'../telas'
    },
});

requirejs(['app'],function(app) {
    app.executar();
});