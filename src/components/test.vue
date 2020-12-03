<template>
    <div @click="clossss">
        {{ value }}
        <!-- <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="1000"></el-pagination> -->
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import eleUITools from '../ui-frame/ui-tips';

@Component
export default class Hoom extends Vue {
    @Prop({
        type: String, // 父组件传递给子组件的数据类型
        required: false, // 是否必填
        default: '' // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
    })
    value!: string;

    private clossss() {
        eleUITools.closeAllNotice();
    }
}
</script>

<style lang="less" scoped></style>
