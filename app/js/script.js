console.log('JS OK');

//VUE INSTANCE
const { createApp } = Vue

createApp({
    data: () => ({
        apiUri: 'http://localhost/php-dischi-json/api/index.php',
        albums: [],
    }), computed: {},
    methods: {

        getData() {
            axios
                .get(this.apiUri)
                .then((response) => {
                    this.albums = response.data;
                    console.log(this.albums)
                })
                .catch((error) => {

                    console.log(error);

                })
        },
    }, created() {
        this.getData()
    },
}).mount('#app')