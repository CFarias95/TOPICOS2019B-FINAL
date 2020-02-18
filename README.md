
# TopicosFinal
# Carlos Farias
En el presente repositorio se encunetra el codigo de una palicacion desarrollada en ionic 4  bajo el framework de Angular en su version a la fecha 18/02/20, la aplicación cuenta con un  proceso de autenticacion y registro con la plataforma de Firebase, para lo cual se utilizan las credenciales que se proporsionan en la consola de Firebase.<br/>
La aplicacion utiliza un api de la nasa llamado APOD, para el uso de esta api se ha generado un key desde el link  https://api.nasa.gov/ el cual nos dara acceso a las diferentes api.<br/>
La plicacion en ionic iniciara con un login y tambien Contará con un proceso de registro y luego mostrara el contenido que se optiene de la api de la nasa. para poder obtener los datos desde la api se crea un servicio y se importa el componente HttpClient con el cual podremos realizar una petición utilizando los diferente metodos con los que cuenta HTTP.<br/>
# Inicial
-npm install<br/>
-cambiar el apy_key del archivo .service.ts por la que se genera en https://api.nasa.gov/ <br/>
-ionic serve <br/>
# Video
https://youtu.be/FQ1x5-PtK2Y
