<template>
    <div class="wrapper">
        <div class="pic-container">
            <div class="hidden" v-bind:style="{ left: '-' + (100 - attempts * 10) + '%' }">
                <div class="part" id="1"></div>
            </div>
            <div class="picture">
                <!DOCTYPE svg
                    PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="225.000000pt" height="225.000000pt"
                    viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000"
                        stroke="none">
                        <path d="M517 2128 c-16 -12 -17 -84 -20 -968 l-2 -955 -119 -3 c-67 -1 -126
                                -7 -133 -14 -19 -16 -16 -56 6 -68 26 -14 556 -14 582 0 22 12 25 52 6 68 -7
                                7 -66 13 -133 14 l-119 3 -3 707 -2 708 212 215 213 215 285 -2 285 -3 3 -180
                                2 -180 -52 -19 c-70 -24 -139 -95 -163 -166 -45 -137 36 -296 173 -336 37 -11
                                37 -11 37 -65 l0 -54 -80 -31 c-44 -17 -124 -48 -177 -68 -93 -36 -98 -39 -98
                                -66 0 -56 24 -55 187 5 81 30 154 55 161 55 9 0 12 -42 12 -178 l0 -178 -115
                                -139 c-63 -76 -115 -142 -115 -147 0 -24 23 -48 45 -48 18 0 46 27 121 117 53
                                65 100 118 104 118 4 0 52 -53 105 -117 74 -89 104 -118 121 -118 21 0 44 25
                                44 48 0 6 -52 72 -115 148 l-115 138 0 178 c0 143 3 178 14 178 7 0 79 -25
                                160 -55 117 -44 151 -53 166 -45 23 12 26 52 7 69 -8 6 -81 36 -162 67 -200
                                74 -187 65 -183 127 3 48 5 51 34 59 56 14 125 70 156 124 61 110 44 229 -45
                                319 -34 34 -68 57 -97 66 l-45 14 -3 215 c-2 188 -4 217 -19 228 -24 18 -1102
                                18 -1126 0z m223 -223 c-80 -80 -148 -145 -152 -145 -10 0 -11 274 -1 283 3 4
                                72 7 152 7 l146 0 -145 -145z m981 -339 c21 -15 46 -44 59 -71 86 -177 -140
                                -342 -284 -207 -98 92 -58 261 72 303 42 13 112 1 153 -25z" />
                    </g>
                </svg>

            </div>

        </div>
    </div>
</template>

<script setup>

import { useWordStore } from '../../stores/WordStore.js';
import { storeToRefs } from 'pinia';

let store = useWordStore()

let {attempts} = storeToRefs(store)

</script>

<style scoped>
.wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
}

.pic-container{
    position: relative;
}

.hidden {
    position: absolute;
    background-color:aqua;
    height: 310px;
    width: 100%;
    z-index: 1;
    left: -100%;
}


</style>