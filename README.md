## Install via NPM

    npm install --save vue-paginate-al

#### Register as Plugin

    import Vue from 'vue'
    import VuePaginateAl from 'vue-paginate-al'

    Vue.component('vue-paginate-al', VuePaginateAl)

#### Usage

    <template>
        <vue-paginate-al :totalPage="10" @btnClick="goToFunction"></vue-paginate-al>
    </template>

    <script>
    import VuePaginateAl from 'vue-paginate-al'

    export default {
        name: 'App',
        components: {
            VuePaginateAl
        },
        methods : {
            goToFunction : function(n)
            {
                console.log(n);
            }
        }
    }
    </script>

#### Props

    |Props|Description|Type|Required|
    |-----|-----------|----|--------|
    |totalPage|Total paginate|Number|true|
    |currentPage|Current page|Number|false|
    |myData|For callback data without process|String|false|
    |withNextPrev|To show or hide button next/prev|Boolean|false|
    |nextText|Text for button Next|String|false|
    |prevText|Text for button Prev|String|false|
    |activeBGColor|Background color|String|false|
