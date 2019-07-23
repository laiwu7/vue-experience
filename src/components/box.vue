<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        type: String
    },
    created () {
        console.log(this.type)
    }
}
</script>