import React, { useMemo } from "react"
import * as THREE from "three"

const GlowMaterial = ({ color, intensity }) => {
  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          glowColor: { value: new THREE.Color(color) },
        },
        vertexShader: `
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
        `,
        fragmentShader: `
          uniform vec3 glowColor;
          void main() {
            gl_FragColor = vec4( glowColor, 1.0 );
          }
        `,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
      }),
    [color]
  )

  return <primitive object={shaderMaterial} attach="material" />
}

export default GlowMaterial
