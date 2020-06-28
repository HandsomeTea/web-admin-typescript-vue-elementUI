<template>
    <div>
        <Title></Title>
        <Options></Options>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Title from './headerBreadcrumb.vue';
import Options from './headerOption.vue';

@Component({
    components: {
        Title,
        Options
    }
})
export default class Head extends Vue {}
</script>

<style lang="less" scoped></style>
