<template>
    <button
        :type="type"
        :disabled="disabled"
        class="btn btn-outline-secondary btn-lg mt-3 font"
    >
        <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
            v-show="loading"
        ></span>
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        type: {
            required: true,
            type: String,
        },
        disabled: {
            default: false,
            type: Boolean,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
});
</script>

<style scoped>
.font {
    font-weight: 500;
    font-size: 14px;
}
</style>