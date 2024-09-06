import { loadModule } from 'vue3-sfc-loader';
import * as Vue from 'vue'
import { defineAsyncComponent, markRaw } from 'vue'
import { useUserStore } from '@/pinia/modules/user'

const myConvert = (url, name = "myConvert") => {
    const options = {
        moduleCache: { vue: Vue },
        getFile() {
            const userStore = useUserStore()
            return fetch(url, {
                method: 'GET',
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': "Bearer " + userStore.token,
                    'x-user-id': userStore.userInfo.ID,
                }
            }).then(response => response.ok ? response.text() : Promise.reject(response));
        },
        addStyle(styleString) {
            const style = document.createElement('style');
            style.setAttribute('id', name);
            style.textContent = styleString;
            const ref = document.head.getElementsByTagName('style')[0] || null;
            document.head.insertBefore(style, ref);
        }
    }

    const component = defineAsyncComponent(() => loadModule(`${name}.vue`, options))
    return markRaw(component)
}

export { myConvert }