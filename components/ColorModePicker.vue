<template>
    <div>
        <input type="checkbox" class="checkbox" id="checkbox" @click="modeToggle" :class="darkDark" />
    </div>
</template>

<script>
export default ({
    name: "ColorModePicker",

    data() {
        return {
            darkMode: false
        }
    },

    methods: {
        dark() {
            document.querySelector('body').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },

        light() {
            document.querySelector('body').classList.remove('dark-mode')
            this.darkMode = false
            this.$emit('light')
        },

        modeToggle() {
            if (this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
                this.light()
            } else {
                this.dark()
            }
        },
    },

    computed: {
        darkDark() {
            return this.darkMode && 'darkmode-toggled'
        }
    }
})
</script>

<style scoped>
input[type="checkbox"].checkbox {
    font-size: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 1.4em;
    height: 0.7em;
    background: #2a2a2a;
    border-radius: 3em;
    position: relative;
    cursor: pointer;
    outline: none;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
}

input[type="checkbox"].checkbox:checked {
    background: #f9f4ed;
}

input[type="checkbox"].checkbox:after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 0.7em;
    height: 0.7em;
    border-radius: 50%;
    background: #f9f4ed;
    -webkit-box-shadow: 0 0 .25em rgba(0, 0, 0, .3);
    box-shadow: 0 0 .25em rgba(0, 0, 0, .3);
    -webkit-transform: scale(.7);
    transform: scale(.7);
    right: 0;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
}

input[type="checkbox"].checkbox:checked:after {
    right: calc(100% - 0.7em);
    background: #2a2a2a;
}
</style>