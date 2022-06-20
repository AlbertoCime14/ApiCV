const CONFIG = require('./app/config/config');
const App = require('./app/app');



App.listen(CONFIG.PORT,function(error){
    if(error) return console.log(error);
    console.log(`Servidor corriendo en el Puerto: ${CONFIG.PORT}`);
});

