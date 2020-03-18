const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM',
        subtitulo: 'with Vue',
        tareas: [],
        nuevaTarea: ''


    },
    methods:{
        insertarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))

        },
        cambiarEstado: function(index){
            this.tareas[index].estado = true 
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
            
        },
        eliminar: function(index){
            this.tareas.pop(index)    
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))        
        }
    },
    created: function(){ // se carga ejecuta cuando se carga nuestro componente app

        let datosStorage = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosStorage === null){
            this.tareas = [];
        } else {
            this.tareas = datosStorage;

        }

    }
    
});
