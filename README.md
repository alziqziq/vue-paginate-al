## Demo
[Click here](https://alziqziq.github.io/demo-vuepaginateal/dist/index.html).

## Install via NPM
```js
    npm install --save vue-paginate-al
```

#### Register as Plugin
```js
    import Vue from 'vue'
    import VuePaginateAl from 'vue-paginate-al'

    Vue.component('vue-paginate-al', VuePaginateAl)
```

#### Usage
```vue
    <template>
        <div>
            // example 1
            <vue-paginate-al :totalPage="10" @btnClick="goToFunction"></vue-paginate-al>

            // example 2 => with background color
            <vue-paginate-al :totalPage="15" activeBGColor="success" :withNextPrev="false"></vue-paginate-al>

            // example 3 => with single data
            <vue-paginate-al :totalPage="20" :myData="'myname'" @btnClick="goToFuncWithData"></vue-paginate-al>

            // example 4 => with multiple data
            <vue-paginate-al :totalPage="20" :myData="['myname', 'myemail']" @btnClick="goToFuncWithMultipleData"></vue-paginate-al>
        </div>
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
                },

                goToFuncWithData : function(n, data)
                {
                    console.log(n, data);
                },

                goToFuncWithMultipleData : function(n, data)
                {
                    console.log(n, data[0], data[1]);
                }
            }
        }
    </script>
```    
#### Props
|Props|Description|Type|Required|Example|
|-----|-----------|----|--------|-------|
|totalPage|Total paginate|Number|true|10|
|currentPage|Current page|Number|false|2|
|myData|For callback data without process|String|false|'myname'|
|withNextPrev|To show or hide button next/prev|Boolean|false|true|
|nextText|Text for button Next|String|false|'Next'|
|prevText|Text for button Prev|String|false|'Prev'|
|activeBGColor|Background color|String|false|'primary'|
|customActiveBGColor|Background color custom|String|false|'#bb06a9'|
