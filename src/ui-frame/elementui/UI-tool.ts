import { Message, MessageBox, Loading, Notification } from 'element-ui';
import i18n from '../../lang';

export default new class Tool {
    private messageShowClose: boolean;
    private allNoticing: Set<Function>;

    constructor() {
        this.init();
        this.messageShowClose = true;
        this.allNoticing = new Set();
    }

    private init() {

    }

    private t(message: string) {
        return i18n.t(message).toString();
    }

    public success(message: string) {
        Message({
            showClose: this.messageShowClose,
            message: this.t(message),
            type: 'success'
        });
    }

    public error(message: string) {
        Message({
            showClose: this.messageShowClose,
            message: this.t(message),
            type: 'error'
        });
    }
    public warn(message: string) {
        Message({
            showClose: this.messageShowClose,
            message: this.t(message),
            type: 'warning'
        });
    }

    public async alert(message: string, title: string, option?: alertOption): Promise<true> {
        return await MessageBox.alert(this.t(message), this.t(title), {
            confirmButtonText: this.t(option?.confirmButtonText || 'yes'),
            type: option?.type || 'info',
            showClose: false,
            showCancelButton: false,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            showInput: false
        }).then(() => true);
    }

    public async confirm(message: string, title: string, option?: confirmOption): Promise<boolean> {
        return await MessageBox.alert(this.t(message), this.t(title), {
            confirmButtonText: this.t(option?.confirmButtonText || 'yes'),
            cancelButtonText: this.t(option?.cancelButtonText || 'cancel'),
            type: option?.type || 'info',
            showClose: false,
            showCancelButton: true,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            showInput: false
        }).then(() => true).catch(() => false);
    }

    public async prompt(message: string, title: string, option?: promptOption): Promise<string | false> {
        return await MessageBox.alert(this.t(message), this.t(title), {
            confirmButtonText: this.t(option?.confirmButtonText || 'yes'),
            cancelButtonText: this.t(option?.cancelButtonText || 'cancel'),
            type: 'info',
            showClose: false,
            showCancelButton: true,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            showInput: true,
            inputPlaceholder: this.t(option?.inputPlaceholder || ''),
            inputType: option?.inputType || 'text',
            inputValue: this.t(option?.inputInitValue || ''),
            inputPattern: option?.inputPattern || /.*/,
            inputValidator: option?.inputValidator,
            inputErrorMessage: this.t(option?.inputErrorMessage || 'it_is_illegal')
        }).then(data => {
            if (data === 'cancel' || data === 'close' || data === 'confirm') {
                return false;
            } else {
                return data.value;
            }
        }).catch(() => false);
    }

    public loading(option?: loadingOption) {
        return Loading.service({
            text: this.t(option?.text || ''),
            target: option?.target || 'body',
            lock: true
        });
    }

    public noticing(title: string, message: string, option?: noticeOption) {
        const noticing = Notification({
            title: this.t(title),
            message: this.t(message),
            type: option?.type || 'info',
            position: option?.position || 'top-right',
            onClose: option?.onClose,
            onClick: option?.onClick,
            showClose: true,
            duration: 0,
            offset: 0
        });

        this.allNoticing.add(noticing.close);
        return noticing;
    }

    public noticed(title: string, message: string, option?: noticeOption) {
        const noticed = Notification({
            title: this.t(title),
            message: this.t(message),
            type: option?.type || 'info',
            position: option?.position || 'top-right',
            onClose: option?.onClose,
            onClick: option?.onClick,
            showClose: false,
            duration: 4500,
            offset: 0
        });

        this.allNoticing.add(noticed.close);
        return noticed;
    }

    public closeAllNotice() {
        this.allNoticing.forEach(a => a());
    }
}
