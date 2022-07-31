<template>
    <div>
        <h1 class="centralizado">{{ msg }}</h1>
        <p class="centralizado" v-show="mensagem">{{ mensagem }}</p>

        <!--atalho para v-on:input = @input-->
        <input type="search" class="filtro" placeholder="Filtre por parte do título"
            @input="filtro = $event.target.value">

        <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto of fotosComFiltro">

                <meu-painel v-meu-transform.reverse.animate="30" :titulo="foto.titulo">
                    <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo" />
                    <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto)" :confirmacao="true"
                        estilo="perigo" />
                </meu-painel>

            </li>
        </ul>


    </div>
</template>

<script>
import Painel from '../shared/panel/Painel.vue';
import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue';
import Botao from '../shared/botao/Botao.vue';
import FotoService from '../../domain/foto/FotoService';

export default {
    components: {
        "meu-painel": Painel,
        "imagem-responsiva": ResponsiveImage,
        "meu-botao": Botao
    },

    data() {
        return {
            msg: "Página de Fotos",
            fotos: [],
            filtro: '',
            mensagem: ''
        }
    },
    computed: {
        fotosComFiltro() {
            if (this.filtro) {
                let exp = new RegExp(this.filtro.trim(), 'i');
                return this.fotos.filter(foto => exp.test(foto.titulo));
            } else {
                return this.fotos;
            }
        }
    },
    created() {
        this.service = new FotoService(this.$resource);

        this.service
            .lista()
            .then(fotos => this.fotos = fotos, err => alert('Erro ao acessara api'));

        /*this.$http.get('v1/fotos')
            .then(res => res.json())
            .then(fotos => this.fotos = fotos, err => alert('Erro ao acessara api'));*/
    },
    methods: {
        remove(foto) {
            this.service
                .apaga(foto._id)
                .then(() => {
                    let indice = this.fotos.indexOf(foto);
                    this.fotos.splice(indice, 1);
                    this.mensagem = 'Foto removida com sucesso!';
                }, err => {
                    console.log(err);
                    this.mensagem = 'Não foi possível remover a mensagem!';
                });
        }
    }
}

</script>

<style>
.centralizado {
    text-align: center;
}

.lista-fotos {
    list-style: none;
}

.lista-fotos .lista-fotos-item {
    display: inline-block;
}

.filtro {
    display: block;
    width: 100%;
}
</style>