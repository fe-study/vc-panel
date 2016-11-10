<template>
    <div class="vc-panel-component">
        <div class="panel-header">
            <div class="title-area pull-left">
                <slot name="title"><h2 class="title" :class="[ bColor ]">{{ title }}</h2></slot>
                <slot name="sub-title"><h3 class="sub-title">{{ subTitle }}</h2></slot>
            </div>
            <slot name="info"><div class="info pull-right">{{ info }}</div></slot>
        </div>
        <div class="panel-body">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="less">
@dark-grey: #666;
@blue: #2facf7;
@yellow: #fa0;
@red: #f50;
@green: #87d068;

@border-color: #ddd;
@title-font-size: 16px;
@title-line-width: 3px;
@sub-font-size: 12px;

.vc-panel-component {
    background-color: #fff;

    .panel-header {
        border-bottom: 1px solid @border-color;
        overflow: hidden;
        padding: 12px;

        .title {
            font-size: @title-font-size;
            display: inline-block;
            margin: 0;
            position: relative;
            border-left: @title-line-width solid;
            padding-left: 5px;

            &.blue {
                border-color: @blue;
            }
            &.green {
                border-color: @green;
            }
            &.yellow {
                border-color: @yellow;
            }
            &.red {
                border-color: @red;
            }
        }
        .sub-title {
            display: inline-block;
            margin: 0;
            margin-left: 3px;
            font-size: @sub-font-size;
            color: @dark-grey;
        }

        .info {
            line-height: 22px;
            font-size: @sub-font-size;
            color: @dark-grey;
        }

    }

}
</style>

<script>
export default {
    name: 'vc-panel',
    props: {
        title: String,
        subTitle: String,
        info: String,
        type: {
            type: String,
            default: 'info'
        }
    },
    computed: {
        bColor () {
            let color = 'blue'
            switch (this.type) {
                case 'success':
                    color = 'green'
                    break
                case 'info':
                    color = 'blue'
                    break
                case 'warning':
                    color = 'yellow'
                    break
                case 'danger':
                    color = 'red'
                    break
            }
            return color
        }
    }
}
</script>
