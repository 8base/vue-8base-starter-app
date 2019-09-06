<template>
  <span class="text-field">
    <span class="control">
      <input
        class="input"
        v-model.trim="input"
        :placeholder="placeholder"
        @keydown.enter="onEnter"
      />
    </span>
    <span class="control" v-if="icon">
      <button type="submit" @click="onClick" :disabled="input.length === 0">
        <span class="icon"> > </span>
      </button>
    </span>
  </span>
</template>

<script>
/**
 * @emits {id, text, more}   enter
 */
export default {
  name: "textEntry",
  props: {
    id: [String, Number],
    placeholder: String,
    icon: {
      type: String,
      default: "angle-right"
    }
  },

  data() {
    return {
      input: ""
    };
  },

  methods: {
    onEnter($event) {
      this.emit($event.metaKey || $event.ctrlKey);
    },

    onClick() {
      this.emit(true);
    },

    emit(more) {
      if (this.input) {
        this.$emit("enter", {
          id: this.id,
          text: this.input,
          more
        });
        this.input = "";
      }
    }
  }
};
</script>

<style>
.text-field {
  margin: 5px;
}
.control {
  display: inline;
}
</style>
