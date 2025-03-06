<template>
    <div class="tremor-detection">
      <header class="app-header">
        <h1>TREMOR DETECTION</h1>
      </header>
      
      <main class="content">
        <div class="result-circle" :class="{pulseCircle: hasStarted=='started', noPulse: hasStarted !='started'}" @click="startCountdown">
          <div class="result-text" v-if="hasStarted == 'completed'">
            <h2>{{ severity }} SEVERITY</h2>
            <p><strong>{{ tremorCount }} {{ tremorType }}</strong> TREMORS RECORDED</p>
            <small>Result saved to profile</small>
          </div>
          <h1 v-if="hasStarted=='waiting'"  style="font-size: 3.5rem; font-weight: 600;">Go!</h1>
          <h1 v-if="hasStarted=='started'" style="font-size: 2.5rem; font-weight: 600;">{{analyse}}</h1>
        </div>
        
        <div class="instructions" :class="{pulseWithdrawal: hasStarted =='started'}">
          <div class="back-section">
            <span style="display: flex; align-items: center; margin-bottom: 0.6rem;">
                <button class="back-button" @click="$router.push('/home')">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="#795548" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="#795548" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <p class="breathing-reminder">Remember to breathe evenly</p>
            </span>
            <p class="time-remaining"><strong>{{ remainingSeconds }} seconds remaining</strong></p>
          </div>
          
          <div class="phone-placement-instructions">
            <p>Place the phone in the user's hand. Make sure it is held comfortably, but firmly and as horizontally as possible then press "Go".</p>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  // Reactive data
  const severity = ref('LOW');
  const tremorCount = ref(12);
  const tremorType = ref('MILD');
  const remainingSeconds = ref(15);
  const timer = ref(null);
  const hasStarted = ref("waiting")
  const analyse = ref("Analysing...")
  
  const startCountdown = () => {
    hasStarted.value = "started"
    timer.value = setInterval(() => {
      if (remainingSeconds.value > 0) {
        remainingSeconds.value--;
        if (analyse.value.length == 9){
            analyse.value = "Analysing."
        }
        else if (analyse.value.length == 10){
            analyse.value = "Analysing.."
        }
        else if (analyse.value.length == 11){
            analyse.value = "Analysing..."
        }
        else {
            analyse.value = "Analysing"
        }
      } else {
        clearInterval(timer.value);
        console.log('Countdown complete');
        hasStarted.value = 'completed'
        // Handle countdown completion, like navigating to results or next step
      }
    }, 1000);
  };
  
  onUnmounted(() => {
    if (timer.value) {
      clearInterval(timer.value);
    }
  });
  </script>
  
  <style scoped>
  .tremor-detection {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #FAF3F5;
    font-family: Poppins;
    color: #5C4231;
  }
  
  .app-header {
    padding: 2rem;
    text-align: center;
  }
  
  .app-header h1 {
    color: #E83E8C;
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 20px;
  }
  
  .result-circle {
    min-width: 21rem;
    min-height: 21rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    background-color: #E83E8C;
  }
  
  .result-text h2 {
    font-size: 1.75rem;
    font-weight: 800;
    margin: 0 0 10px 0;
  }
  
  .result-text p {
    font-weight: 500;
    font-size: 1.2rem;
    margin: 0.5rem 0;
    margin-bottom: 1.2rem;
  }
  
  .result-text small {
    font-size: 0.8rem;
    opacity: 0.8;
    font-weight: 400;
  }
  
  .instructions {
    width: 100%;
}
  
  .back-section {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 20px;
  }
  
  .back-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: 10px;
  }
  
  .breathing-reminder {
    color: #795548;
    margin: 0;
    font-size: 0.85rem;
  }
  
  .time-remaining {
    font-size: 1.5rem;
    font-weight: 700;
    color: #795548;
  }
  
  .phone-placement-instructions {
    color: #795548;
    font-size: 14px;
    line-height: 1.5;
    text-align: left;
  }

  .pulseCircle {
  background-color: #E83E8C;
  border-radius: 50%;
  position: absolute;
margin-top: -48%;
}

.pulseCircle::before,
.pulseCircle::after {
  content: '';
  position: absolute;
  border: 2px solid #E83E8C;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: pulse 2s linear infinite;
}

.pulseCircle::after {
  animation-delay: 1s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.noPulse {
margin-top: 3%;
margin-bottom: 5rem;
}

.pulseWithdrawal {
    margin-top: 110%;
}
  </style>