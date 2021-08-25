<template>
  <img v-if="image" :src="image" alt="bg">
  <div class="bg-dark"></div>

  <div class="indecision-container">
    <h1>Recuerda terminar con un signo de interrogación (?)</h1>
    <input type="text" placeholder="Haz una pregunta" v-model="question ">
    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h2>{{ answer }}</h2>
      <h2 v-if="!answer" class="center"> 
        <HollowDotsSpinner/>
      </h2>
    </div>
  </div>
</template>

<script>
import HollowDotsSpinner from './HollowDotsSpinner.vue'

export default {
  name: 'Indecision',
  data(){
    return {
      question : null,
      answer: null,
      image: null,
      isValidQuestion: false,
    }
  },
  methods: {
    async getAnswer() {
      try {
        const {answer, image} = await fetch('https://yesno.wtf/api').then(
          response => response.json()
        )
        this.isValidQuestion = true
        this.answer = (answer === 'yes') ? 'Si' : 'No'
        this.image = image
      } catch (error) {
        console.log(`IndecisionComponent: ${error}`)        
        this.answer = 'No se pudo cargar la API'
        this.image = null
      }
    }
  },
  watch: {
    question(value, oldValue){
      this.isValidQuestion = false
      console.log({value})
      if(!value.includes('?'))    
        return
      this.isValidQuestion = true
      this.getAnswer()
    }
  },
  components: {
    HollowDotsSpinner,
  }
}
</script>

<style scoped>
    
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.85);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font: 1.5vw/1  'Special Elite', cursive;
        font-size: 1.5vmin 3vh 4vmax;
        color: #333;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        max-width: 60vw;
        background-color: #ddd;
        border: none;
        padding: 10px 11px 11px 11px;
        border-radius: 3px;
        box-shadow: none;
        outline: none;
        margin: 0;
        box-sizing: border-box;
        border-style: dashed;
        text-align: center;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }

    h1{
      font-size: 3vw;
    }
    
    h2 {
      margin-top: 10vh;
      font-size: 3vw;
    }

    .center {
      display: flex;
      justify-content: center;
    }

  
</style>  