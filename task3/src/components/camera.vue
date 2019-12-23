<template>
  <div class="camera">
    <h2 class="camera__name">{{ name }}</h2>
    <span class="camera__rating">{{ rating }}</span>
    <img class="camera__image" src="img" />
  </div>
</template>

<script>
export default {
  name: "Camera",
  props: {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      default: "../no-camerage-found.jpg"
    },
    rating: {
      type: Number,
      default: 0
    }
  }
};
</script>