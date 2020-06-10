<template>
    <el-main class="demo_style">
        {{ $t('SUCCESS') }}
        {{ username }}
        <test></test>
        <p @click="testApi">原data数据：{{ test }}</p>
        language {{ language }}
    </el-main>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { RootState, UserState } from '../../store/stateModel';
import Test from '../../components/test.vue';
import API from '../../api';
import eleUITools from '../../ui-frame/elementui/UI-tool';

// 相当于原来vue的components属性
@Component({
    components: {
        Test
    }
})
//原vue里面的函数类属性没有变化，methods属性就是里面定义的函数就是常规的class属性中的函数属性，其他属性均写为修饰符定义
export default class Hoom extends Vue {
    /**
     * 相当于原vuex里面的数据
     */
    @State(state => state)
    private allStore!: RootState;

    @State(state => state.user)
    private user!: UserState;

    @State('language')
    private language!: string;

    /** 获取vuex里面的改变数据的actions的函数 */
    @Action('setUserName', { namespace: 'user' })
    private setUserName: any;

    @Action('setLanguage') setLanguage: any;

    // 相当于原vue中的computed
    private get username(): string {
        return this.user.username; // 相当于 store.state.user.state.username
    }

    /**
     * 相当于原vue中data数据
     */
    private test: string = 'string-data';

    //相当于原vue中的watch
    @Watch('username', { immediate: true, deep: true })
    private onChangeUsername(newVal: string, oldVal: string) {
        console.log(this.username);
    }

    created() {
        // setInterval(() => {
        //     const newName = new Date().getTime();
        //     this.setUserName(newName); // 相当于store.dispatch('setUserName', newName);
        // }, 1000);
    }
    mounted() { }

    private async testApi(): Promise<void | boolean> {
        // console.log(this.$t('FAILED'));
        console.log(123);
        const { error, data } = await API.test({ 'test-body': '中文测试' })
        if (error) {
            // throw error.type || 'USER_SAVE_FAILED';
            return eleUITools.alert('test message', 'test');
            // return eleUITools.error(error?.type || 'USER_SAVE_FAILED');
        }
        eleUITools.success('SUCCESS');
        console.log(456);
        console.log(data);
    }
}
</script>

<style lang="less" scoped>
.demo_style {
    color: @color;
}
</style>
