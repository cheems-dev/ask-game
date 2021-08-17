<template>
  <div class="hollow-dots-spinner" :style="spinnerStyle">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
</template>

<script>
export default {
  name: 'HollowDotsSpinner'
}
</script>

<style>
  .hollow-dots-spinner, .hollow-dots-spinner * {
      box-sizing: border-box;
    }

    .hollow-dots-spinner {
      height: 40px;
      width: calc(80px * 3);
    }

    .hollow-dots-spinner .dot {
      width: 40px;
      height: 40px;
      margin: 0 calc(40px / 2);
      border: calc(40px / 5) solid #ffffff;
      border-radius: 50%;
      float: left;
      transform: scale(0);
      animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
    }

    .hollow-dots-spinner .dot:nth-child(1) {
      animation-delay: calc(300ms * 1);
    }

    .hollow-dots-spinner .dot:nth-child(2) {
      animation-delay: calc(300ms * 2);
    }

    .hollow-dots-spinner .dot:nth-child(3) {
      animation-delay: calc(300ms * 3);

    }

    @keyframes hollow-dots-spinner-animation {
      50% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
</style>