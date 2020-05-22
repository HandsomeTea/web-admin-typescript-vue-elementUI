<template>
    <div>test component
        <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="1000">
        </el-pagination>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Hoom extends Vue {}
</script>

<style lang="less" scoped>
</style>
