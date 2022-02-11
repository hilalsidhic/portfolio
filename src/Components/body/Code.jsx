import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import "./Code.css"

function Code() {
  return (
    <div class="flex justify-center height h- items-center">
    <div class="mockup-code w-2/6 mb-32">
      <pre data-prefix="1">
        <code><Typewriter
            words={['Hi']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
          /></code>
      </pre> 
      <pre data-prefix="2">
        <code><Typewriter
            words={["I'm Muhammed Hilal"]}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={1000}
          /></code>
      </pre> 
      <pre data-prefix="3" class="">
        <code><Typewriter
            words={["Full Stack Developer"]}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={300}
            deleteSpeed={50}
            delaySpeed={2000}
          /></code>
      </pre>
      
    </div>

    </div>
  )
}

export default Code