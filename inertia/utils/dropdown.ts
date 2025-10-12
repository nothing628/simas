import { ref } from 'vue';
import { useFloating, autoUpdate, offset } from '@floating-ui/vue';
import type {} from 'vue'
import type {UseFloatingOptions} from '@floating-ui/vue'

export const useDropdown = (options?: UseFloatingOptions) => {
    const reference = ref(null);
    const floating = ref(null);
    const isShow = ref(false);

    const defaultOptions: UseFloatingOptions = {
        placement: 'bottom',
        whileElementsMounted: autoUpdate,
        middleware: [offset(2)]
    }

    const { floatingStyles } = useFloating(reference, floating, options ? options : defaultOptions);
    const toggleShow = () => {
        isShow.value = !isShow.value
    }

    return {
        isShow,
        toggleShow,
        floatingStyles,
        reference,
        floating,
    }
}