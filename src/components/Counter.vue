<template>
  <h2>{{customTitle}}</h2>
  
  <p>{{counter}} <sup>2</sup> = {{squareCounter}}</p>
  <p data-test-id="counter">{{counter}}</p>

  <div class="buttons">
    <button @click="incrementCount"> +1 </button>
    <button @click="decrementCount"> -1 </button>
  </div>
</template>

<script>
export default {
  props: {
    title:String,
    start: {
      type: Number,
      default: 100,
      validator (value) {
        return value > 0
      }
    },


    },
  data() {
    return {
      counter: this.start,
    }
  },
  methods:{
    getSquareValue() {
      return this.counter * this.counter
    },
    incrementCount() {
      ++this.counter
    },
    decrementCount() {
      --this.counter
    }
  },
  computed: {
    squareCounter () {
      return this.counter * this.counter
    },
    customTitle () {
        return (this.title) 
          ? this.title
          : 'Counter'
    }
  }
}
</script>

<style>
button{
  background-color: #64BB87;
  border-radius:  5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa6;
  transition: 0.3s ease-in-out;
}


</style>