//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {
            mainUser: {},
            friends: []
        }
    }
    
    _getMeatQuote() {
        $.ajax({
            method: 'GET',
            url: 'https://baconipsum.com/api/?type=meat-and-filler',
            success: (response) => {
            
                this.data.mainUser.meatQuote = response[Math.floor(Math.random()*5)]
                console.log('meat quote is loaded')
            },
            error: () => console.log('error loading meat quote'),
        })
    }

    _getQuote() {
        $.ajax({
            method: 'GET',
            url: 'https://api.kanye.rest',
            success: (response) => {
                this.data.mainUser.quote = response.quote + " - Kanye West"
                console.log('Quote is loaded')
            },
            error: () => console.log('error loading quote'),
        })
    }

    _getPokemon() {
        $.ajax({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*100)}`,
            success: (response) => {
                console.log('Pokemon is loaded');
                const name = response.name.split('')[0].toUpperCase()+response.name.split('').slice(1,response.name.lengt).join('') // Capitalize first letter
                this.data.mainUser.pokemon={name, url: response.sprites.front_shiny}
            },
            error: () => console.log('error loading Pokemon'),
        })
    }

    loadUser() {
        $.ajax({
            method: 'GET',
            url: 'https://randomuser.me/api/?results=7',
            success: (response) => {
                console.log('User is Loaded');
                this.data.mainUser = response.results[0]
                this.data.friends = response.results.slice(1, 7)
                this._getQuote()  // I had to call the rest of methods from here, because user
                this._getPokemon()
                this._getMeatQuote()
            },
            error: () => { console.log('error loading Users'); }
        })
    }

    getUser(){
        return this.data
    }
}






