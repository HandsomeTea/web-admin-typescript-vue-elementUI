<template>
    <div class="demo_style">
        test vue
        {{username}}
        <test></test>
        <p>原data数据：{{test}}</p>
        language {{language}}
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import Test from "../components/test";
import { RootState, UserState } from "../store/stateModel";

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
    allStore!: RootState;

    @State(state => state.user)
    user!: UserState;

    @State("language")
    language!: string;

    /** 获取vuex里面的改变数据的actions的函数 */
    @Action("setUserName", { namespace: "user" })
    setUserName: any;

    // 相当于原vue中的computed
    get username(): string {
        return this.user.username; // 相当于 store.state.user.state.username
    }

    /**
     * 相当于原vue中data数据
     */
    test: string = "string-data";

    //相当于原vue中的watch
    @Watch("username", { immediate: true, deep: true })
    onChangeValue(newVal: string, oldVal: string) {
        console.log(this.username);
    }

    created() {
        setInterval(() => {
            const newName = "aaa" + new Date().getTime();

            this.setUserName(newName); // 相当于store.dispatch('setUserName', newName);
        }, 1000);
    }
    mounted() {}
}
</script>

<style lang="less" scoped>
.demo_style {
    color: @color;
}
</style>
