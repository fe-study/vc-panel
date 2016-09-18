import Vue from 'vue'
import vcPanel from '../src'

new Vue({
	el: '#app',
	data () {
		return {
            title: '主标题在此',
            subTitle: '副标题再此',
            info: '额外信息写在这',
            type: 'info'
        }
	},
    methods: {
        success () {
            this.type = 'success'
        },
        danger () {
            this.type = 'danger'
        },
        warning () {
            this.type = 'warning'
        }
    },
	components: {
        vcPanel
	}
})
