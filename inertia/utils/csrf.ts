import { onMounted, ref } from "vue";

const getCsrfToken = () => {
    const elem = document.querySelector("meta[name=csrf_token]")
    if (elem) {
        const meta = elem as HTMLMetaElement;
        return meta.content
    }

    return ''
}

export const useCsrf = () => {
    const csrf = ref('')

    onMounted(() => {
        csrf.value = getCsrfToken()
    })

    return { csrf }
}