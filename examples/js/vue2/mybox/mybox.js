
Vue.component('my-box', {
    // specify properties received
    props: {
        // color property is a string
        color: String,
        title: {
            // if not specified, use default
            default: "TBA",
        },
        nr: {
            type: Number,
            // raise error if not given
            required: true,
        },
    },
    // use properties in template
    template: `
    <div class="box" 
        v-bind:style="{ backgroundColor: color}"
        v-on:click="clicked"
        >
        #{{ nr }}. {{ title }}
    </div>`,
    methods: {
        clicked: function(){
            this.$emit('click', this.nr.toString() + this.title);
        }
    }
});