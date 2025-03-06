<template>
    <div class="voice-analysis">
      <div class="header">
        <h1>VOICE ANALYSIS</h1>
      </div>
      
      <div class="prompt-box">
        <p>
          <span 
            v-for="(word, index) in promptWords" 
            :key="index"
            :class="{ 'spoken-word': spokenWordIndices.includes(index) }"
          >
            {{ word }}{{ index < promptWords.length - 1 ? ' ' : '' }}
          </span>
        </p>
      </div>
      
      <div class="controls">
        <img src="../assets/backarrow.png" @click="$router.push('/home')" class="back-btn">
        
        <button 
          class="record-button" 
          @click="toggleRecording"
        >
          {{ isRecording ? 'Recording...' : 'Tap to start recording..' }}
        </button>
      </div>
      
      <div class="instructions">
        <p>
          <span style="font-weight: 600;">Repeat the words</span> shown on the screen in 
          your usual speed, taking pauses where necessary. Tap the button to start analysing.
        </p>
      </div>
      
      <Transition name="slide-up">
        <div class="next-btn" v-if="hasRecorded" @click="complete">
          CONTINUE
        </div>
      </Transition>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  
  // State
  const isRecording = ref(false);
  const hasRecorded = ref(false);
  const transcript = ref('');
  const recognition = ref(null);
  const promptText = "IT IS QUITE A PLEASANT AFTERNOON FOR A PROMENADE IN THE PARK";
  const promptWords = computed(() => promptText.split(' '));
  const spokenWordIndices = ref([]);
  
  onMounted(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.value = new SpeechRecognition();
      recognition.value.continuous = true;
      recognition.value.interimResults = true;
      
      recognition.value.onresult = (event) => {
        let interimTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            transcript.value += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        
        const fullTranscript = (transcript.value + interimTranscript).toUpperCase();
        
        promptWords.value.forEach((word, index) => {
          if (fullTranscript.includes(word) && !spokenWordIndices.value.includes(index)) {
            spokenWordIndices.value.push(index);
          }
        });
        
        if (spokenWordIndices.value.length === promptWords.value.length) {
          stopRecording();
        }
      };
      
      recognition.value.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };
    } else {
      alert('Your browser does not support speech recognition. Please try a different browser.');
    }
  });
  
  const toggleRecording = () => {
    isRecording.value = !isRecording.value;
    
    if (isRecording.value) {
      startRecording();
    } else {
      stopRecording();
    }
  };
  
  const startRecording = () => {
    if (recognition.value) {
      transcript.value = '';
      spokenWordIndices.value = [];
      recognition.value.start();
      console.log('Started recording');
    }
  };
  
  const stopRecording = () => {
    if (recognition.value) {
      recognition.value.stop();
      isRecording.value = false;
      hasRecorded.value = true;
      console.log('Stopped recording');
    }
  };

  const complete = () => {
    console.log('Analysis complete');
  };
  </script>
  
  <style scoped>
  .voice-analysis {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: Poppins;
  }
  
  .header {
    padding: 1rem 0;
    padding-top: 2.4rem;
    background-color: #ffecf2;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  h1 {
    color: #eb4899;
    font-weight: 800;
    font-size: 1.5rem;
    margin: 0;
  }
  
  .prompt-box {
    background-color: #5C4231;
    color: rgba(193, 154, 107, 0.5);
    font-size: 1.7rem;
    font-weight: bold;
    text-align: center;
    margin: 0.8rem 1rem;
    padding: 4rem 1rem;
    border-radius: 0.9rem;
    line-height: 2.5rem;
  }
  
  .spoken-word {
    color: #EFC087;
    transition: color 0.3s ease;
  }
  
  .controls {
    display: flex;
    align-items: center;
    padding: 1.8rem;
    padding-left: 0.8rem;
  }
  
  .record-button {
    flex: 1;
    border: 1px solid #5C4231;
    border-radius: 6px;
    background-color: white;
    padding: 1rem;
    font-size: 16px;
    color: #5C4231;
    cursor: pointer;
    text-align: center;
    width: 80vw;
  }
  
  .instructions {
    padding: 0 1.2rem;
    color: #5C4231;
    font-size: 14px;
    line-height: 1.8rem;
  }
  
  .back-btn {
    width: 2rem;
    margin-right: 1rem;
  }
  
  .next-btn {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 4rem;
    background-color: #eb4899;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: transform 0.5s ease;
  }
  
  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateY(200%);
  }
  
  .slide-up-enter-to,
  .slide-up-leave-from {
    transform: translateY(0);
  }
  </style>