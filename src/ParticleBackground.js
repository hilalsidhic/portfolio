import React from "react";
import ParticleConfig from "./config/particleConfig";
// import { Particle, Particles } from "tsparticles";
import Particles from "react-tsparticles";

export default function ParticleBackground(){
    return(
        <Particles params={ParticleConfig}></Particles>
    )
}
