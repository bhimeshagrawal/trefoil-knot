uniform float time;
uniform sampler2D texture1;
varying vec2 vUv;
varying vec3 vPosition;
attribute vec3 aRandom;
attribute float aSize;
float PI = 3.141592653589793238;

vec3 getPos(float timeQuantum){
    float angle = timeQuantum * PI * 2.0;
    // parameteric equation of trefoil knot ( src: wikipedia )
    float x = sin(angle) + 2.0 * sin(2.0 * angle);
    float y = cos(angle) - 2.0 * cos(2.0 * angle);
    float z = -sin(3.0 * angle);
    return vec3(x,y,z);
}

vec3 getTangent(float timeQuantum){
    float angle = timeQuantum * PI * 2.0;
    // taking derivative of parameteric equation of trefoil knot
    float x = cos(angle) + 4.0 * cos(2.0 * angle);
    float y = -sin(angle) + 4.0 * sin(2.0 * angle);
    float z = -3.0 * cos(3.0 * angle);
    return normalize(vec3(x,y,z));
}

vec3 getNormal(float timeQuantum){ 
    float angle = timeQuantum * PI * 2.0;
    // taking derivative of tangent equation of trefoil knot
    float x = -sin(angle) - 8.0 * sin(2.0 * angle);
    float y = -cos(angle) + 8.0 * cos(2.0 * angle);
    float z = 9.0 * sin(3.0 * angle);
    return normalize(vec3(x,y,z));
}

void main(){
    vUv = uv;
    float timeQuantum = fract(0.01*time + aRandom.x);

    float radius = 0.3 + (aRandom.z * 0.1);
    float cx = cos(aRandom.y * PI * 2.0 * time * 0.1 + aRandom.z) * radius;
    float cy = sin(aRandom.y * PI * 2.0 * time * 0.1 + aRandom.z) * radius;

    vec3 pos = getPos(timeQuantum);
    vec3 tangent = getTangent(timeQuantum);
    vec3 normal = getNormal(timeQuantum);
    vec3 binormal = normalize(cross(tangent, normal));
    pos += (normal * cx) + (binormal * cy);

    vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );
    gl_PointSize = 5.0 * (1.0/-mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}