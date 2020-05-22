<template>
    <div class="layout_menu_header">这是logo的位置</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Logo extends Vue { }
</script>

<style lang="less" scoped>
.layout_menu_header {
    height: calc(@layout_head_height - 1px);
    border-bottom: solid 1px #e6e6e6;
}
</style>
