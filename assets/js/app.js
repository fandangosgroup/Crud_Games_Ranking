window.onload = function () {
    const app = new Vue({
        el: '#app',
        data: {
            editando: false,
            id: "",
            nome: "",
            idade: "",
            teste: "",
            pacientes: []
        },
        methods: {
            async get() {

                var url2 = window.location.href;
                var url = new URL(url2);
                var c = url.searchParams.get("data");

                if(c != null){
                    this.pacientes = JSON.parse(c)
                }

                console.log(this.pacientes);





    
                //let results = await axios.get('http://localhost:8000/crud/all');
    
                //this.pacientes = results.data;

                //console.log('DATA: D', data)
                //console.log(this.idade)

                //this.idade = 666;
    
            },
    
            async add() {
    
                 if(this.nome != '' && this.idade != '' && this.teste != ''){
                    console.log('Adiciona o conteudo dos campos:')
                    console.log(this.nome)
                    console.log(this.idade)
                    console.log(this.teste)

                    this.pacientes.push({nome: this.nome, idade: this.idade, teste: this.teste})
    
                    // let result = await axios.post(`http://localhost:8000/crud/add`, {
                    //     nome: this.nome,
                    //     idade: this.idade,
                    //     teste: this.teste
                    // });
                    console.log(this.pacientes)

                    this.changePageLista()

                    // if(result.status == 201){
                    //     alert("O Paciente foi incluido com sucesso!")
                    //     this.changePageLista()
                    // }else{
                    //     alert("Não foi possivel incluir o paciente!")
                    // }

                   
            
                    // this.users.push({
                    //     name: this.nome,
                    //     age: this.idade,
                    //     test: this.teste
                    // });
    
                }else{
                    alert("Todos os campos precisam estar prenchidos!")
                }
            },

            
            edit(item, index) {
                console.log(item)
                this.editando = index
                this.id = index
                this.nome = item.nome
                this.idade = item.idade
                this.teste = item.teste
            },

            async atualiza(id) {
                // let result = await axios.put(`http://localhost:8000/crud/atualiza/`, {
                //     id: id,
                //     nome: this.nome,
                //     idade: this.idade,
                //     teste: this.teste
                // });
                
                console.log("DEBUF AQUI: ",this.pacientes[id])

                this.pacientes[id].nome = this.nome;
                this.pacientes[id].idade = this.idade;
                this.pacientes[id].teste = this.teste;

                window.location.href = 'lista.html?data=' + JSON.stringify(this.pacientes);

                //this.get()

                // console.log(result)

                // if(result.status == 200){
                //     this.editando = ''
                //     this.get()
                // }else{
                //     alert('Ocorreu um erro ao atualizar as informações do paciente')
                //     this.editando = ''
                // } 
            },

            async remove(id) {
                console.log(id)
                console.log(this.pacientes[id])
                //let result = await axios.delete(`http://localhost:8000/crud/delete/`+ id);
                //console.log(result)

                this.pacientes.splice(id, 1);

                window.location.href = 'lista.html?data=' + JSON.stringify(this.pacientes);

                //this.get()
            },

            cancelEdit() {
                this.editando = ''
            },

            changePageInclui() {
                if(this.pacientes == null){
                    window.location.href = 'crud.html';
                }else{
                    window.location.href = 'crud.html?data=' + JSON.stringify(this.pacientes);
                }
            },
            changePageHome() {
                console.log('PISEI!')
                if(this.pacientes == null){
                    window.location.href = 'home.html';
                }else{
                    window.location.href = 'home.html?data=' + JSON.stringify(this.pacientes);
                }
            },
            changePageLista() {
                if(this.pacientes == null){
                    window.location.href = 'lista.html';
                }else {
                    window.location.href = 'lista.html?data=' + JSON.stringify(this.pacientes);
                }
               
            }

        },
        beforeMount(){
            this.get()
         },
    });
}


function onclickGambiara(param) {
    var redirect = param;

    var url2 = window.location.href;
    var url = new URL(url2);
    var c = url.searchParams.get("data");

    if(c != null){
        c2 = JSON.parse(c)
        window.location.href = redirect+'.html?data=' + JSON.stringify(c2);
    }else {
        window.location.href = redirect+'.html';
    }
}
