<template>
    <section>
        <h1 class="mb-5">Search</h1>

        <div>
            <input v-model="enteredText" type="search" placeholder="Search about Real Madrid..." autofocus>
            <div v-if="enteredText">
                <span> <span class="fw-bold">{{ searchResults.length + " " }}</span>Posts were founds.</span>
            </div>
        </div>


        <div class="my-5">
            <div v-for="text in searchResults" :key="text.id" :typingWord="enteredText">
                <div class="my-4">
                    <h5>
                        <span v-html="highlight(text.title) || text.title"></span>
                    </h5>
                    <p>
                        <span v-html="highlight(text.body) || text.body"></span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

    data() {
        return {
            enteredText: '',
            myData: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Early years (1902–1943)",
                    "body": "Real Madrid's origins go back to when football was introduced to Madrid by the academics and students of the Institución Libre de Enseñanza, which included several Cambridge and Oxford University graduates. They founded (Sociedad) Sky Football in 1897, commonly known as La Sociedad (The Society) as it was the only one based in Madrid, playing on Sunday mornings at Moncloa. In 1900, conflict between members caused some of them to leave and create a new club, Nueva Sociedad de Football (New Society of Football), to distinguish themselves from Sky Football. Among the dissenters were Julián Palacios, recognized as the first Real Madrid president, Juan Padrós and Carlos Padrós, the latter two being brothers and future presidents of Real Madrid. In 1901, this new club was renamed as Madrid Football Club.",
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "Santiago Bernabéu and unprecedented success (1943–1978)",
                    "body": "Santiago Bernabéu became president of Real Madrid in 1943.[50] Under his presidency, the club was rebuilt after the Civil War, and he oversaw the construction of the club's current stadium, Estadio Real Madrid Club de Fútbol (now known as the Estadio Santiago Bernabéu), and its training facilities Ciudad Deportiva. Additionally, during the 1950s former Real Madrid Amateurs player Miguel Malbo founded Real Madrid's youth academy , known today as La Fábrica. Beginning in 1953, he embarked upon a strategy of signing world-class players from abroad, the most prominent being Alfredo Di Stéfano"
                },

            ]
        }
    },
    computed: {
        searchResults() {
            const pattern = new RegExp(this.enteredText, 'i');
            const filteredSearch = this.myData.filter(text => {
                return (
                    text.title.match(pattern) || text.body.match(pattern)
                );
            });
            return filteredSearch;
        },
    },
    methods: {
        highlight(data) {
            if (this.enteredText) {
                const pattern = new RegExp(this.enteredText, 'i');
                const highlightedResult = data.replace(
                    pattern,
                    `<mark>${this.enteredText}</mark>`
                );
                return highlightedResult;
            }
        }
    }

}

</script>

<style scoped>
section {
    background-color: rgb(165, 161, 161);
    padding: 100px 50px
}

input {
    display: block;
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    margin-bottom: 30px;
}


</style>