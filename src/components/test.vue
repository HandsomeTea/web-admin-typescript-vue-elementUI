<template>
    <div @click="clossss">
        test component
        <!-- <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="1000"></el-pagination> -->
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import eleUITools from '../ui-frame/elementui/UI-tool';

@Component
export default class Hoom extends Vue {
    private clossss() {
        eleUITools.closeAllNotice()
    }
}
</script>

<style lang="less" scoped>
</style>
