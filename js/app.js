const App = {
    data() {
        return {
            showHome: false,
            showCreations: false,
            showFormulaire: false,
        }
    },

    mounted(){
        this.changeNavigationState("home");
    },

    methods: {
        goToHome() {
            this.changeNavigationState("home")
        },
        goToCreations() {
            this.changeNavigationState("creations")
        },

        goToFormulaire() {
            this.changeNavigationState("formulaire")
        },

        

        changeNavigationState(destination) {
            this.showCreations = false
            this.showHome = false
            this.showFormulaire = false

            switch (destination) {
                case "home":
                    this.showHome = true
                    break;
                case "creations":
                    this.showCreations = true
                    break;
                case "formulaire":
                    this.showFormulaire = true
                    break;

                default:
                    this.showHome = true
                    break;
            }
        }
    }
}


Vue.createApp(App).mount("#app")


