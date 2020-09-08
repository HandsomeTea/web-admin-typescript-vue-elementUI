<template>
    <el-collapse-transition>
        <!-- :show-timeout="0"
            :hide-timeout="0" -->
        <el-menu
            default-active="2"
            :collapse="isHideMenu"
            class="layout_menu"
            background-color="#16181D"
            text-color="rgba(255,255,255,.7)"
            active-text-color="#409EFF"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </el-collapse-transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class Menu extends Vue {
    @State('menuHidden')
    private menuHiddenStatus!: boolean;

    private get isHideMenu() {
        return this.menuHiddenStatus;
    }
}
</script>

<style lang="less" scoped>
.layout_menu {
    overflow: hidden;
    height: calc(100% - @layout_head_height) !important;
}

.layout_menu:hover {
    overflow-y: auto;
}

.layout_menu::-webkit-scrollbar {
    width: 4px;
}

.layout_menu::-webkit-scrollbar-thumb {
    background: @system_theme_color;
}

.layout_menu::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
    box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
}
</style>
