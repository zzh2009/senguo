<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="main"></router-view>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon} from 'vant';

export default {
    components: {
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Icon.name]: Icon
    },
    data() {
        return {
          
        }
    }
};
</script>

<style>
body {
  background-color: #f8f8f8;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
