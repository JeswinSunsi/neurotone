<template>
    <div class="voice-analysis">
      <div class="header">
        <h1>VOICE ANALYSIS</h1>
      </div>
      
      <div class="prompt-box">
        <p>IT IS QUITE A PLEASANT AFTERNOON FOR A PROMENADE IN THE PARK</p>
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
      <div class="next-btn" v-if="hasRecorded" @click="">
        CONTINUE
      </div>
    </Transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // State
  const isRecording = ref(false);
  const hasRecorded = ref(false);
  
  // Methods
  const toggleRecording = () => {
    isRecording.value = !isRecording.value;
    
    if (isRecording.value) {
      startRecording();
    } else {
      stopRecording();
      hasRecorded.value = true;
    }
  };
  
  const startRecording = () => {
    // Implementation for starting audio recording would go here
    console.log('Started recording');
  };
  
  const stopRecording = () => {
    // Implementation for stopping audio recording would go here
    console.log('Stopped recording');
  };
  
  const goBack = () => {
    // Handle navigation back
    console.log('Navigating back');
  };
  
  const complete = () => {
    // Handle completion of the voice analysis
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
    color: #C19A6B;
    font-size: 1.7rem;
    font-weight: bold;
    text-align: center;
    margin: 0.8rem 1rem;
    padding: 4rem 1rem;
    border-radius: 0.9rem;
    line-height: 2.5rem;
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