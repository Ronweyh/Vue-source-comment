

debugger
var app = new Vue({
    el: "#app",
    data: () => ({
        msg: 'its a message',
        obj: {
            param: 'obj'
        },
        array: ['array']
    }),
    methods: {
        change() {
            this.msg = "changed"
        }
    }
})