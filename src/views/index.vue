<template>
    <div>
        <bottom-menu />
        <router-view></router-view>
    </div>
</template>

<script>
import BottomMenu from '@/components/common/BottomMenu';
export default {
    components: {
        BottomMenu
    }
};
</script>
