<template>
    <div class="demo_style">
        test vue
        {{username}}
        <test></test>
        <p @click="testApi">原data数据：{{test}}</p>
        language {{language}}
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { RootState, UserState } from "../store/stateModel";
import Test from "../components/test";
import API from "../api";

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
        // setInterval(() => {
        //     const newName = "aaa" + new Date().getTime();
        //     this.setUserName(newName); // 相当于store.dispatch('setUserName', newName);
        // }, 1000);
    }
    mounted() {}

    /**
     * 这种封装的写法只关注出错的情况，await是代码按序执行的关键
     * 如果成功，result拿到的是成功的返回数据，逻辑继续往下走
     * 如果失败，在catch中做失败的逻辑处理，并throw一个字符串消息(如果throw一个object会触发一些列Vue.config.warnHandler函数)，同时函数终止执行
     * 失败throw出去的字符串在Vue.config.errorHandler中集中分析处理为一个给用户的提示消息
     */
    async testApi() {
        console.log(123);
        const result = await API.test().catch((e: httpException) => {
            throw e.type || e.info || "用户保存失败";
        });
        console.log(456);
        console.log(result);
    }
}
</script>

<style lang="less" scoped>
.demo_style {
    color: @color;
    transition: all 1s;
}
</style>
