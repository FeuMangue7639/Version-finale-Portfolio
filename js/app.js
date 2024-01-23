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
            this.changeNavigationState("create")
        },

        goToFormulaire() {
            this.changeNavigationState("list")
        },

        

        changeNavigationState(destination) {
            this.showCreations = false
            this.showHome = false
            this.showFormulaire = false

            switch (destination) {
                case "home":
                    this.showHome = true
                    break;
                case "create":
                    this.showCreations = true
                    break;
                case "list":
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


