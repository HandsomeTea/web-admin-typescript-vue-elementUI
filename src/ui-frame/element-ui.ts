import Vue from 'vue';
import {
    RadioGroup,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    Tooltip,
    Button,
    Row,
    Input,
    Form,
    FormItem,
    Table,
    TableColumn,
    Pagination,
    Breadcrumb,
    BreadcrumbItem,
    MessageBox,
    Message,
    Card,
    Checkbox,
    Link,
    Loading
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
// import locale from 'element-ui/lib/locale';
// import store from '../store';

// 设置语言
// locale.use(zhLocale);
// store.dispatch('setLanguage', 'zh');

// 引入动画
// Vue.component(CollapseTransition.name, CollapseTransition);

// 引入组件
Vue.use(RadioGroup);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Tooltip);
Vue.use(Row);
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Link);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$loading = Loading.service;
